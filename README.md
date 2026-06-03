# Fields & Waves AI Tutor ⚡

An interactive, voice-powered AI tutoring web application designed to help students master **Electromagnetic Fields & Waves, Electromagnetic Theory, and Maxwell's Equations**. 

The application features a responsive and premium UI, a real-time interactive **3D WebGL Electromagnetic Wave Background** reacting to mouse controls, a local **RAG (Retrieval-Augmented Generation)** backend to train the AI on any PDF textbook, and seamless voice recognition & synthesis for hands-free study.

---

## 🌟 Key Features

1. **Voice-Powered Chatbot (Hands-Free Mode)**:
   - Ask complex physical science questions by voice.
   - Text-to-speech synthesis (TTS) reads explanations aloud with automatic HTML formatting stripping to prevent stuttering or run-on words.
   - Built-in hardware check requesting browser microphone permissions explicitly to prevent quiet failures.

2. **RAG (Retrieval-Augmented Generation) Engine**:
   - **Upload & Train**: Drag and drop any Fields & Waves PDF textbook to instantly replace the active AI knowledge base.
   - Powered by **FastAPI**, **LangChain**, **PyMuPDF** (for accurate spacing & layouts), and a local **ChromaDB** vector database.
   - **Sentence Transformers** (`all-MiniLM-L6-v2`) generate dense vector embeddings locally without sending data to external cloud providers.

3. **Interactive 3D WebGL Graphics**:
   - A fully interactive 3D electromagnetic wave surface built with **Three.js** (`bg3d.js`).
   - Floating particle grids, orbiting rings, and mouse-responsive movement for a premium modern aesthetic.

4. **Reference Library**:
   - Quick-access tabs for major topics (e.g., Snell's Law, Wave Polarization, Maxwell's Equations, Pulse Broadening) with custom generated illustrations.
   - Integrated interactive formula reference sheet.

---

## 🛠️ Technology Stack

### Frontend (User Interface)
* **Core**: Semantic HTML5, Vanilla JavaScript (ES6+)
* **Styling**: Vanilla CSS3 (custom CSS design variables, modern glassmorphism, glowing gradients, HSL palettes)
* **3D Visualizer**: [Three.js](https://threejs.org/)
* **Speech Capabilities**: Web Speech API (`SpeechRecognition` & `SpeechSynthesis`)

### Backend (AI Engine)
* **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python 3.8+)
* **PDF Processing & RAG**: [LangChain](https://www.langchain.com/), [PyMuPDF](https://pymupdf.readthedocs.io/)
* **Vector Store**: [ChromaDB](https://docs.trychroma.com/)
* **Embeddings**: [Hugging Face Sentence Transformers](https://huggingface.co/sentence-transformers)

---

## 🚀 Getting Started

### Prerequisites
* **Python**: Make sure Python 3.8+ is installed.
* **Web Browser**: Chrome, Edge, Safari, or any browser supporting the Web Speech API (with microphone access allowed).

### Running the Project Locally

#### 1. Start the Python Backend
1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the FastAPI server using Uvicorn:
   ```bash
   python main.py
   ```
   *The backend server will run on `http://127.0.0.1:8000` with hot-reloading enabled.*

#### 2. Start the Frontend Website
1. Open a separate terminal and navigate to the root directory of the project.
2. Spin up a local static server (Python's built-in server is simple and fast):
   ```bash
   python -m http.server 8080
   ```
3. Open your browser and navigate to:
   👉 **`http://localhost:8080`**

---

## 📖 How to Use
1. **Explore Topics & Formulas**: Click the navigation links at the top to explore predefined electromagnetism topics, interactive diagrams, and standard equations.
2. **Train your AI**:
   - Scroll to the Chat section.
   - Drag and drop your favorite textbook PDF into the **"Train Your AI"** area.
   - Wait for the ingestion notification to show the textbook has been successfully vectorized. *Note: Uploading a new PDF automatically wipes the previous database to keep responses relevant to your current textbook.*
3. **Chat by Voice or Text**:
   - Click the **Microphone** icon. Allow browser permissions to access your microphone if prompted.
   - Speak your question (e.g. *"Explain wave polarization"*). 
   - Alternatively, type your question in the text area and click **Send**.
   - The AI will query your textbook and display specific excerpts along with relevant generated visual diagrams!
