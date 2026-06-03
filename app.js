/**
 * ============================================
 * Fields & Waves AI Tutor — Main Application
 * ============================================
 * 
 * Powers the voice-chat tutor experience with:
 *   1. Voice Recognition (Web Speech API)
 *   2. Text-to-Speech (SpeechSynthesis)
 *   3. Chat System with typing indicator
 *   4. Smart Question-Answering Engine
 *   5. Topics Grid rendering
 *   6. Formulas Grid rendering
 *   7. EM Wave Canvas Animation
 *   8. Particle Background
 *   9. Navigation & scroll tracking
 *  10. Responsive behavior
 * 
 * Depends on knowledge-base.js globals:
 *   - KNOWLEDGE_BASE, TOPICS_LIST, FORMULAS_LIST
 */

document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // DOM Element References
    // =============================================

    const chatMessages   = document.getElementById('chatMessages');
    const micButton      = document.getElementById('micButton');
    const voiceStatus    = document.getElementById('voiceStatus');
    const textInput      = document.getElementById('textInput');
    const sendButton     = document.getElementById('sendButton');
    const speakerBtn     = document.getElementById('speakerBtn');
    const topicsGrid     = document.getElementById('topicsGrid');
    const formulasGrid   = document.getElementById('formulasGrid');
    const waveCanvas     = document.getElementById('waveCanvas');
    const particleField  = document.getElementById('particleField');
    const navbar         = document.getElementById('navbar');
    const startChatBtn   = document.getElementById('startChatBtn');
    
    // Upload Elements
    const uploadDropzone = document.getElementById('uploadDropzone');
    const fileInput      = document.getElementById('fileInput');
    const uploadStatus   = document.getElementById('uploadStatus');
    const uploadStatusText = document.getElementById('uploadStatusText');

    const micIcon  = micButton.querySelector('.mic-icon');
    const stopIcon = micButton.querySelector('.stop-icon');

    // =============================================
    // Backend API Configuration
    // =============================================
    // If deployed, change this URL to your deployed FastAPI backend URL (e.g., on Render).
    // It falls back to localhost if running locally.
    const BACKEND_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://127.0.0.1:8000'
        : 'https://faw-backend.onrender.com';

    // =============================================
    // State
    // =============================================

    let isListening  = false;
    let ttsEnabled   = speakerBtn.classList.contains('active');
    let recognition  = null;

    // Bot avatar SVG reused for every bot message
    const BOT_AVATAR_SVG = `
        <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="url(#msgGrad)" stroke-width="1.5"/>
            <path d="M8 16 Q12 8 16 16 Q20 24 24 16" stroke="url(#msgGrad)" stroke-width="1.5" fill="none"/>
            <defs>
                <linearGradient id="msgGrad" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stop-color="#6366f1"/>
                    <stop offset="100%" stop-color="#06b6d4"/>
                </linearGradient>
            </defs>
        </svg>`;


    // =============================================
    // 1. VOICE RECOGNITION (Web Speech API)
    // =============================================

    /** Initialize the SpeechRecognition instance (if supported). */
    const initSpeechRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            // Gracefully degrade — hide mic button feedback
            voiceStatus.textContent = 'Voice recognition not supported in this browser';
            voiceStatus.classList.add('error');
            micButton.style.opacity = '0.5';
            micButton.style.cursor = 'not-allowed';
            return;
        }

        recognition = new SpeechRecognition();
        recognition.continuous   = true; // Keep listening to avoid instant timeouts
        recognition.interimResults = true;
        recognition.lang         = 'en-US';

        // --- Events ---

        recognition.onstart = () => {
            isListening = true;
            micButton.classList.add('listening');
            micIcon.classList.add('hidden');
            stopIcon.classList.remove('hidden');
            voiceStatus.textContent = 'Listening… speak now';
            voiceStatus.classList.add('active');
            voiceStatus.classList.remove('error');
        };

        recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript   = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }

            // Show real-time transcription
            voiceStatus.textContent = finalTranscript || interimTranscript || 'Listening…';

            // Auto-submit on final result
            if (finalTranscript.trim()) {
                recognition.stop(); // Manually stop since we are in continuous mode
                handleUserInput(finalTranscript.trim());
            }
        };

        recognition.onerror = (event) => {
            stopListening();
            const messages = {
                'no-speech':       'No speech detected — try again',
                'audio-capture':   'Microphone not found — check your device',
                'not-allowed':     'Microphone access denied — please allow it in browser settings',
                'network':         'Network error — check your connection',
                'aborted':         'Listening cancelled',
            };
            voiceStatus.textContent = messages[event.error] || `Error: ${event.error}`;
            voiceStatus.classList.add('error');
        };

        recognition.onend = () => {
            stopListening();
        };
    };

    /** Start listening for speech. */
    const startListening = async () => {
        if (!recognition) return;

        // Force browser to ask for microphone permission and verify hardware works
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            // Stop the tracks immediately since we only needed to verify permission
            stream.getTracks().forEach(track => track.stop());
        } catch (err) {
            console.error("Microphone access error:", err);
            voiceStatus.textContent = 'Microphone access denied. Check browser URL bar 🔒 or Windows Sound settings.';
            voiceStatus.classList.add('error');
            return;
        }

        try {
            recognition.start();
        } catch (e) {
            // Already started — ignore
        }
    };

    /** Stop listening and reset visual state. */
    const stopListening = () => {
        isListening = false;
        micButton.classList.remove('listening');
        micIcon.classList.remove('hidden');
        stopIcon.classList.add('hidden');
        voiceStatus.classList.remove('active');
        if (voiceStatus.textContent === 'Listening… speak now') {
            voiceStatus.textContent = 'Click microphone to start';
        }
    };

    /** Toggle mic on / off. */
    const toggleListening = () => {
        if (!recognition) {
            voiceStatus.textContent = 'Voice recognition not supported';
            voiceStatus.classList.add('error');
            return;
        }
        if (isListening) {
            recognition.stop();
        } else {
            startListening();
        }
    };

    micButton.addEventListener('click', toggleListening);


    // =============================================
    // 2. TEXT-TO-SPEECH (SpeechSynthesis)
    // =============================================

    const synth = window.speechSynthesis;

    /** Speak text aloud using SpeechSynthesis. */
    const speak = (text) => {
        if (!ttsEnabled || !synth) return;

        // Cancel any ongoing speech first
        synth.cancel();

        // Strip HTML tags for clean reading, replacing with space so words don't glue together
        const cleanText = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        if (!cleanText) return;

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate  = 1.0;
        utterance.pitch = 1.0;

        // Prefer a clear, natural voice
        const voices = synth.getVoices();
        const preferred = voices.find(v =>
            v.name.includes('Google') && v.lang.startsWith('en')
        ) || voices.find(v =>
            v.lang.startsWith('en') && v.localService === false
        ) || voices.find(v =>
            v.lang.startsWith('en')
        );

        if (preferred) utterance.voice = preferred;

        synth.speak(utterance);
    };

    // Toggle TTS on speaker button click
    speakerBtn.addEventListener('click', () => {
        ttsEnabled = !ttsEnabled;
        speakerBtn.classList.toggle('active', ttsEnabled);
        if (!ttsEnabled && synth) synth.cancel();
    });

    // Ensure voices are loaded (Chrome fires this asynchronously)
    if (synth) synth.onvoiceschanged = () => {};


    // =============================================
    // 3. CHAT SYSTEM
    // =============================================

    /** Scroll chat container to the bottom. */
    const scrollToBottom = () => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    /** Add a user message bubble. */
    const addUserMessage = (text) => {
        const messageEl = document.createElement('div');
        messageEl.className = 'message user-message';
        messageEl.innerHTML = `
            <div class="message-avatar">👤</div>
            <div class="message-content">
                <div class="message-name">You</div>
                <div class="message-text">${escapeHtml(text)}</div>
            </div>`;
        chatMessages.appendChild(messageEl);
        scrollToBottom();
    };

    /** Add a bot message bubble. */
    const addBotMessage = (html) => {
        const messageEl = document.createElement('div');
        messageEl.className = 'message bot-message';
        messageEl.innerHTML = `
            <div class="message-avatar">${BOT_AVATAR_SVG}</div>
            <div class="message-content">
                <div class="message-name">Fields & Waves Tutor</div>
                <div class="message-text">${html}</div>
            </div>`;
        chatMessages.appendChild(messageEl);
        scrollToBottom();
    };

    /** Show a typing indicator (3 animated dots). */
    const showTypingIndicator = () => {
        const typingEl = document.createElement('div');
        typingEl.className = 'message bot-message';
        typingEl.id = 'typingIndicator';
        typingEl.innerHTML = `
            <div class="message-avatar">${BOT_AVATAR_SVG}</div>
            <div class="message-content">
                <div class="message-name">Fields & Waves Tutor</div>
                <div class="typing-indicator">
                    <span></span><span></span><span></span>
                </div>
            </div>`;
        chatMessages.appendChild(typingEl);
        scrollToBottom();
    };

    /** Remove the typing indicator. */
    const removeTypingIndicator = () => {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
    };

    /** Escape HTML to prevent XSS in user messages. */
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };

    /**
     * Handle user input from voice or text.
     * Shows user message, typing indicator, generates answer, then shows bot reply.
     */
    const handleUserInput = async (text) => {
        if (!text.trim()) return;

        // Cancel ongoing speech before new exchange
        if (synth) synth.cancel();

        addUserMessage(text);
        textInput.value = '';

        showTypingIndicator();

        try {
            const response = await generateAnswer(text);
            removeTypingIndicator();
            addBotMessage(response);
            speak(response);
        } catch (error) {
            console.error(error);
            removeTypingIndicator();
            const fallbackResponse = "I'm having trouble connecting to my brain right now. Please check your connection.";
            addBotMessage(fallbackResponse);
            speak(fallbackResponse);
        }
    };

    // Text input: send on Enter or click
    textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleUserInput(textInput.value);
        }
    });

    sendButton.addEventListener('click', () => {
        handleUserInput(textInput.value);
    });


    // =============================================
    // 4. QUESTION-ANSWERING ENGINE
    // =============================================

    /**
     * Tokenize a string into lowercase words, removing common stop-words.
     */
    const tokenize = (text) => {
        const stopWords = new Set([
            'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
            'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
            'should', 'may', 'might', 'shall', 'can', 'need', 'dare', 'ought',
            'used', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from',
            'as', 'into', 'through', 'during', 'before', 'after', 'above',
            'below', 'between', 'out', 'off', 'over', 'under', 'again',
            'further', 'then', 'once', 'here', 'there', 'when', 'where',
            'why', 'how', 'all', 'both', 'each', 'few', 'more', 'most',
            'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own',
            'same', 'so', 'than', 'too', 'very', 'just', 'about', 'it',
            'its', 'i', 'me', 'my', 'we', 'our', 'you', 'your', 'he',
            'him', 'his', 'she', 'her', 'they', 'them', 'their', 'this',
            'that', 'these', 'those', 'what', 'which', 'who', 'whom',
            'and', 'but', 'or', 'if', 'while', 'because', 'until', 'although',
            'please', 'tell', 'explain', 'describe', 'define', 'give',
            'know', 'understand', 'learn', 'teach', 'help', 'want',
        ]);
        return text
            .toLowerCase()
            .replace(/[^a-z0-9'\s-]/g, ' ')
            .split(/\s+/)
            .filter(w => w.length > 1 && !stopWords.has(w));
    };

    /**
     * Compute a relevance score for a KNOWLEDGE_BASE entry against query tokens.
     * Uses exact keyword match, partial/substring match, and title match bonuses.
     */
    const scoreEntry = (entry, queryTokens) => {
        let score = 0;
        const entryKeywords = (entry.keywords || []).map(k => k.toLowerCase());
        const titleWords    = tokenize(entry.title);
        const contentLower  = (entry.content || '').toLowerCase();
        const shortDescLower = (entry.shortDesc || '').toLowerCase();

        for (const token of queryTokens) {
            // Exact keyword match (highest weight)
            if (entryKeywords.some(k => k === token)) {
                score += 10;
            }
            // Partial keyword match (keyword contains token or vice-versa)
            else if (entryKeywords.some(k => k.includes(token) || token.includes(k))) {
                score += 5;
            }

            // Title match
            if (titleWords.includes(token)) {
                score += 8;
            } else if (entry.title.toLowerCase().includes(token)) {
                score += 4;
            }

            // Content / shortDesc mention
            if (contentLower.includes(token)) {
                score += 2;
            }
            if (shortDescLower.includes(token)) {
                score += 3;
            }
        }

        // Bonus: if the entire query appears in the title
        const queryJoined = queryTokens.join(' ');
        if (entry.title.toLowerCase().includes(queryJoined)) {
            score += 15;
        }

        return score;
    };

    /**
     * Find the best-matching KNOWLEDGE_BASE entry.
     * Returns { entry, score } or null.
     */
    const findBestMatch = (query) => {
        if (typeof KNOWLEDGE_BASE === 'undefined' || KNOWLEDGE_BASE.length === 0) return null;

        const tokens = tokenize(query);
        if (tokens.length === 0) return null;

        let bestEntry = null;
        let bestScore = 0;

        for (const entry of KNOWLEDGE_BASE) {
            const s = scoreEntry(entry, tokens);
            if (s > bestScore) {
                bestScore = s;
                bestEntry = entry;
            }
        }

        return bestScore >= 5 ? { entry: bestEntry, score: bestScore } : null;
    };

    /**
     * Format a rich response from a KNOWLEDGE_BASE entry.
     * Uses **bold** → <strong> for key terms, line breaks, formulas, key points, examples.
     */
    const formatTopicResponse = (entry) => {
        let parts = [];

        // Title
        parts.push(`<strong>📘 ${entry.title}</strong>`);
        parts.push('');

        // Image (for tougher concepts)
        if (entry.image) {
            parts.push(`<div class="topic-image" style="margin: 15px 0; text-align: center;"><img src="${entry.image}" alt="${entry.title}" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 1px solid rgba(99, 102, 241, 0.2);"></div>`);
            parts.push('');
        }

        // Main content
        if (entry.content) {
            parts.push(formatBoldTerms(entry.content));
            parts.push('');
        }

        // Relevant formulas
        if (entry.formulas && entry.formulas.length > 0) {
            parts.push('<strong>📐 Key Formulas:</strong>');
            entry.formulas.forEach(f => {
                if (typeof f === 'string') {
                    parts.push(`  • ${f}`);
                } else if (f.name && f.expression) {
                    parts.push(`  • <strong>${f.name}</strong>: <code>${f.expression}</code>`);
                }
            });
            parts.push('');
        }

        // Key points
        if (entry.keyPoints && entry.keyPoints.length > 0) {
            parts.push('<strong>🔑 Key Points:</strong>');
            entry.keyPoints.forEach(p => {
                parts.push(`  • ${formatBoldTerms(p)}`);
            });
            parts.push('');
        }

        // Example
        if (entry.examples && entry.examples.length > 0) {
            const example = entry.examples[0]; // pick first example
            parts.push('<strong>💡 Example:</strong>');
            if (typeof example === 'string') {
                parts.push(formatBoldTerms(example));
            } else if (example.problem) {
                parts.push(formatBoldTerms(example.problem));
                if (example.solution) {
                    parts.push(`<strong>Solution:</strong> ${formatBoldTerms(example.solution)}`);
                }
            }
            parts.push('');
        }

        parts.push('Feel free to ask a follow-up question or explore another topic! 🎓');

        return parts.join('\n');
    };

    /**
     * Wrap **text** patterns with <strong> tags.
     */
    const formatBoldTerms = (text) => {
        if (!text) return '';
        return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    };

    /**
     * Suggest related topics when no strong match is found.
     */
    const suggestTopics = (query) => {
        if (typeof KNOWLEDGE_BASE === 'undefined') return '';

        const tokens = tokenize(query);
        const scored = KNOWLEDGE_BASE
            .map(entry => ({ entry, score: scoreEntry(entry, tokens) }))
            .filter(r => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 4);

        if (scored.length === 0) return '';

        let suggestions = '\n\nHere are some topics you might be interested in:\n';
        scored.forEach(r => {
            suggestions += `  • <strong>${r.entry.title}</strong> — ${r.entry.shortDesc || ''}\n`;
        });
        suggestions += '\nTry asking about one of these!';
        return suggestions;
    };

    /**
     * List all available topics for the user.
     */
    const listAllTopics = () => {
        const list = (typeof TOPICS_LIST !== 'undefined' ? TOPICS_LIST : []);
        if (list.length === 0) return 'I have a wide range of Fields & Waves topics. Try asking about Maxwell\'s equations, electromagnetic waves, or transmission lines!';

        let response = '<strong>📚 Here are all the topics I can help you with:</strong>\n\n';

        // Group by unit if available
        const grouped = {};
        list.forEach(t => {
            const unit = t.unit || 'General';
            if (!grouped[unit]) grouped[unit] = [];
            grouped[unit].push(t);
        });

        for (const [unit, topics] of Object.entries(grouped)) {
            response += `<strong>${unit}</strong>\n`;
            topics.forEach(t => {
                response += `  ${t.icon || '•'} ${t.title}\n`;
            });
            response += '\n';
        }

        response += 'Click any topic card below, or just ask me a question! 🎓';
        return response;
    };

    /**
     * Master answer generation — handles greetings, meta-questions, and topic Q&A.
     */
    const generateAnswer = async (query) => {
        const lower = query.toLowerCase().trim();

        // --- Greetings ---
        const greetings = ['hello', 'hi', 'hey', 'howdy', 'good morning', 'good afternoon', 'good evening', 'greetings', 'sup', 'yo'];
        if (greetings.some(g => lower === g || lower.startsWith(g + ' ') || lower.startsWith(g + ','))) {
            return `Hello! 👋 I'm your <strong>Fields & Waves</strong> tutor. Ask me anything about electromagnetic theory — from <strong>Coulomb's law</strong> to <strong>Maxwell's equations</strong>, <strong>transmission lines</strong>, <strong>waveguides</strong>, and beyond!\n\nWhat would you like to learn about today?`;
        }

        // --- Try Backend RAG First ---
        try {
            const res = await fetch(`${BACKEND_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: query })
            });
            if (res.ok) {
                const data = await res.json();
                if (data.response && !data.response.includes("I couldn't find anything")) {
                    let finalResponse = data.response;
                    
                    // See if we have a relevant image from our local topics
                    const localMatch = findBestMatch(query);
                    if (localMatch && localMatch.score > 8 && localMatch.entry.image) {
                        const imgHtml = `<div class="topic-image" style="margin: 15px 0; text-align: center;"><img src="${localMatch.entry.image}" alt="${localMatch.entry.title}" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 1px solid rgba(99, 102, 241, 0.2);"></div>\n\n`;
                        finalResponse = imgHtml + finalResponse;
                    }
                    
                    return finalResponse;
                }
                // If backend couldn't find it, we fallback to local knowledge base below
            }
        } catch (e) {
            console.warn("Backend unavailable or failed. Falling back to static knowledge base.", e);
        }

        // --- Topic matching (Fallback to local static data) ---
        const match = findBestMatch(query);
        if (match) {
            return formatTopicResponse(match.entry);
        }

        // --- No strong match — suggest related ---
        const suggestions = suggestTopics(query);
        if (suggestions) {
            return `I'm not entirely sure about that specific question, but I'll do my best to help! 🤔${suggestions}`;
        }

        // --- Fallback ---
        return `That's an interesting question! 🤔 I'm specialized in <strong>Fields & Waves / Electromagnetic Theory</strong>. Try asking me about topics like:\n\n  • <strong>Maxwell's Equations</strong>\n  • <strong>Electromagnetic Waves</strong>\n  • <strong>Coulomb's Law</strong>\n  • <strong>Gauss's Law</strong>\n  • <strong>Transmission Lines</strong>\n  • <strong>Waveguides</strong>\n  • <strong>Poynting Vector</strong>\n\nOr click one of the topic cards below to dive in! 👇`;
    };


    // =============================================
    // 5. TOPICS GRID
    // =============================================

    /** Render TOPICS_LIST into the topics grid. */
    const renderTopics = () => {
        if (typeof TOPICS_LIST === 'undefined' || !topicsGrid) return;

        topicsGrid.innerHTML = '';

        TOPICS_LIST.forEach((topic, index) => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            // Build the links row
            let linksHTML = '<div class="topic-links">';
            if (topic.youtube) {
                linksHTML += `<a href="${topic.youtube}" target="_blank" rel="noopener noreferrer" class="topic-link topic-link-yt" title="Watch on YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    YouTube
                </a>`;
            }
            if (topic.article) {
                linksHTML += `<a href="${topic.article}" target="_blank" rel="noopener noreferrer" class="topic-link topic-link-article" title="Read Article">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    Article
                </a>`;
            }
            linksHTML += '</div>';

            card.innerHTML = `
                <div class="topic-icon">${topic.icon || '📘'}</div>
                <div class="topic-name">${topic.title}</div>
                <div class="topic-desc">${topic.description || ''}</div>
                <div class="topic-card-footer">
                    <div class="topic-tag">${topic.tag || topic.unit || ''}</div>
                    ${linksHTML}
                </div>`;

            // Click on the card body → scroll to chat & ask about this topic
            card.addEventListener('click', (e) => {
                // Don't trigger if a link was clicked
                if (e.target.closest('.topic-link')) return;

                const chatSection = document.getElementById('chat');
                if (chatSection) {
                    chatSection.scrollIntoView({ behavior: 'smooth' });
                }
                setTimeout(() => {
                    handleUserInput(`Tell me about ${topic.title}`);
                }, 500);
            });

            topicsGrid.appendChild(card);
        });

        // Staggered fade-in animation on scroll
        observeCards(topicsGrid, '.topic-card');
    };


    // =============================================
    // 6. FORMULAS GRID
    // =============================================

    /** Render FORMULAS_LIST into the formulas grid. */
    const renderFormulas = () => {
        if (typeof FORMULAS_LIST === 'undefined' || !formulasGrid) return;

        formulasGrid.innerHTML = '';

        FORMULAS_LIST.forEach((formula, index) => {
            const card = document.createElement('div');
            card.className = 'formula-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.innerHTML = `
                <div class="formula-name">${formula.name}</div>
                <div class="formula-expression">${formula.expression}</div>
                <div class="formula-desc">${formula.description}</div>`;

            formulasGrid.appendChild(card);
        });

        // Staggered fade-in animation on scroll
        observeCards(formulasGrid, '.formula-card');
    };

    /**
     * Generic IntersectionObserver helper for staggered card fade-in.
     * Watches a container's children matching `selector`.
     */
    const observeCards = (container, selector) => {
        if (!container || !('IntersectionObserver' in window)) {
            // Fallback: just show all cards immediately
            container.querySelectorAll(selector).forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = container.querySelectorAll(selector);
                    cards.forEach((card, i) => {
                        if (card.style.opacity === '0') {
                            setTimeout(() => {
                                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, i * 80); // stagger each card by 80ms
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(container);
    };


    // =============================================
    // 7. EM WAVE CANVAS ANIMATION
    // =============================================

    /** Draw animated E and B field sine waves on #waveCanvas. */
    const initWaveAnimation = () => {
        if (!waveCanvas) return;

        const ctx = waveCanvas.getContext('2d');
        let animationId = null;
        let time = 0;

        /** Resize canvas to match its CSS display size for sharp rendering. */
        const resizeCanvas = () => {
            const rect = waveCanvas.parentElement.getBoundingClientRect();
            const dpr  = window.devicePixelRatio || 1;
            waveCanvas.width  = rect.width * dpr;
            waveCanvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        /** Main animation loop. */
        const animate = () => {
            const w = waveCanvas.width / (window.devicePixelRatio || 1);
            const h = waveCanvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, w, h);

            const centerY    = h / 2;
            const amplitude  = h * 0.28;
            const wavelength = w * 0.35;
            const speed      = 0.03;
            const marginX    = 40;
            const drawWidth  = w - marginX * 2;

            // --- Draw subtle grid lines ---
            ctx.strokeStyle = 'rgba(99, 102, 241, 0.06)';
            ctx.lineWidth   = 1;
            for (let y = centerY - amplitude; y <= centerY + amplitude; y += amplitude / 2) {
                ctx.beginPath();
                ctx.moveTo(marginX, y);
                ctx.lineTo(w - marginX, y);
                ctx.stroke();
            }

            // --- Draw center axis ---
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.lineWidth   = 1;
            ctx.setLineDash([4, 6]);
            ctx.beginPath();
            ctx.moveTo(marginX, centerY);
            ctx.lineTo(w - marginX, centerY);
            ctx.stroke();
            ctx.setLineDash([]);

            // --- E-field wave (indigo/blue) ---
            ctx.strokeStyle = '#6366f1';
            ctx.lineWidth   = 2.5;
            ctx.shadowColor = 'rgba(99, 102, 241, 0.4)';
            ctx.shadowBlur  = 8;
            ctx.beginPath();
            for (let x = 0; x <= drawWidth; x++) {
                const xPos = marginX + x;
                const y = centerY + amplitude * Math.sin((2 * Math.PI * x) / wavelength - time * speed);
                if (x === 0) ctx.moveTo(xPos, y);
                else ctx.lineTo(xPos, y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            // --- B-field wave (cyan/teal, 90° phase shifted) ---
            ctx.strokeStyle = '#06b6d4';
            ctx.lineWidth   = 2;
            ctx.shadowColor = 'rgba(6, 182, 212, 0.35)';
            ctx.shadowBlur  = 6;
            ctx.beginPath();
            for (let x = 0; x <= drawWidth; x++) {
                const xPos = marginX + x;
                const y = centerY + amplitude * Math.cos((2 * Math.PI * x) / wavelength - time * speed);
                if (x === 0) ctx.moveTo(xPos, y);
                else ctx.lineTo(xPos, y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            // --- Propagation arrow ---
            const arrowY = h - 25;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.lineWidth   = 1.5;
            ctx.beginPath();
            ctx.moveTo(marginX + 10, arrowY);
            ctx.lineTo(w - marginX - 10, arrowY);
            ctx.lineTo(w - marginX - 20, arrowY - 5);
            ctx.moveTo(w - marginX - 10, arrowY);
            ctx.lineTo(w - marginX - 20, arrowY + 5);
            ctx.stroke();

            // --- Labels ---
            ctx.font = '600 12px Inter, sans-serif';

            // E field label
            ctx.fillStyle = '#6366f1';
            ctx.textAlign  = 'left';
            ctx.fillText('E', marginX + 6, centerY - amplitude - 8);

            // B field label
            ctx.fillStyle = '#06b6d4';
            ctx.fillText('B', marginX + 6, centerY + amplitude + 18);

            // Axis labels
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.font = '500 10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Direction of Propagation →', w / 2, arrowY + 15);

            // Y-axis label
            ctx.save();
            ctx.translate(14, centerY);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText('Amplitude', 0, 0);
            ctx.restore();

            time++;
            animationId = requestAnimationFrame(animate);
        };

        animate();
    };


    // =============================================
    // 8. PARTICLE BACKGROUND
    // =============================================

    /** Create floating particle dots in #particleField. */
    const initParticles = () => {
        if (!particleField) return;

        const count = 35; // 30–40 particles

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');

            const size    = 2 + Math.random() * 3;  // 2–5px
            const x       = Math.random() * 100;     // % position
            const y       = Math.random() * 100;
            const opacity = 0.15 + Math.random() * 0.35;
            const duration = 15 + Math.random() * 25; // 15–40s
            const delay   = Math.random() * -30;     // stagger start

            Object.assign(particle.style, {
                position:        'absolute',
                width:           `${size}px`,
                height:          `${size}px`,
                borderRadius:    '50%',
                background:      Math.random() > 0.5
                    ? 'rgba(99, 102, 241, 0.6)'
                    : 'rgba(6, 182, 212, 0.5)',
                left:            `${x}%`,
                top:             `${y}%`,
                opacity:         opacity,
                pointerEvents:   'none',
                animation:       `particleFloat ${duration}s ease-in-out ${delay}s infinite`,
            });

            particleField.appendChild(particle);
        }

        // Inject keyframes for particle drift (if not already present)
        if (!document.getElementById('particleKeyframes')) {
            const style = document.createElement('style');
            style.id = 'particleKeyframes';
            style.textContent = `
                @keyframes particleFloat {
                    0%   { transform: translate(0, 0); }
                    25%  { transform: translate(${rand(-30, 30)}px, ${rand(-20, 20)}px); }
                    50%  { transform: translate(${rand(-20, 20)}px, ${rand(-30, 30)}px); }
                    75%  { transform: translate(${rand(-30, 30)}px, ${rand(-10, 10)}px); }
                    100% { transform: translate(0, 0); }
                }`;
            document.head.appendChild(style);
        }
    };

    /** Random integer between min and max (inclusive). */
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    // =============================================
    // 9. UPLOAD & NAVIGATION BEHAVIORS
    // =============================================

    if (uploadDropzone && fileInput) {
        // Drag events
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadDropzone.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            uploadDropzone.addEventListener(eventName, () => uploadDropzone.classList.add('dragover'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            uploadDropzone.addEventListener(eventName, () => uploadDropzone.classList.remove('dragover'), false);
        });

        uploadDropzone.addEventListener('drop', handleDrop, false);
        
        // Click to upload
        uploadDropzone.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length) {
                uploadFile(e.target.files[0]);
            }
        });

        function handleDrop(e) {
            let dt = e.dataTransfer;
            let files = dt.files;
            if (files.length) uploadFile(files[0]);
        }

        async function uploadFile(file) {
            if (file.type !== "application/pdf") {
                alert("Please upload a PDF file.");
                return;
            }

            uploadStatus.classList.remove('hidden', 'success', 'error');
            uploadStatusText.textContent = `Uploading ${file.name}... this may take a minute.`;

            const formData = new FormData();
            formData.append('file', file);

            try {
                const res = await fetch(`${BACKEND_URL}/upload`, {
                    method: 'POST',
                    body: formData
                });
                
                if (!res.ok) throw new Error("Upload failed");
                const data = await res.json();
                
                uploadStatus.classList.add('success');
                uploadStatusText.textContent = `Successfully trained on ${file.name} (${data.chunks_processed} chunks)!`;
                
                setTimeout(() => uploadStatus.classList.add('hidden'), 5000);
            } catch (err) {
                console.error(err);
                uploadStatus.classList.add('error');
                uploadStatusText.textContent = "Error uploading textbook. Make sure backend is running.";
            }
        }
    }


    // =============================================
    // 9. NAVIGATION
    // =============================================

    /** Smooth-scroll nav links and highlight active section. */
    const initNavigation = () => {
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        const sections = document.querySelectorAll('section[id], .hero[id]');

        // --- Click → smooth scroll ---
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-section');
                const target   = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // --- "Start Voice Chat" button ---
        if (startChatBtn) {
            startChatBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const chatSection = document.getElementById('chat');
                if (chatSection) chatSection.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // --- "Browse Topics" button ---
        const browseBtn = document.querySelector('.btn-secondary[href="#topics"]');
        if (browseBtn) {
            browseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const topicsSection = document.getElementById('topics');
                if (topicsSection) topicsSection.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // --- Scroll-based active link highlighting with IntersectionObserver ---
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        navLinks.forEach(link => {
                            link.classList.toggle('active', link.getAttribute('data-section') === id);
                        });
                    }
                });
            }, {
                rootMargin: '-20% 0px -60% 0px', // triggers when section is near center
                threshold: 0,
            });

            sections.forEach(section => observer.observe(section));
        }

        // --- Navbar 'scrolled' class on scroll past 50px ---
        window.addEventListener('scroll', () => {
            if (navbar) {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            }
        }, { passive: true });
    };


    // =============================================
    // 10. INITIALIZATION
    // =============================================

    // Fire up all modules
    initSpeechRecognition();
    renderTopics();
    renderFormulas();
    initWaveAnimation();
    initParticles();
    initNavigation();

    // Trigger initial navbar state
    if (navbar && window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

});
