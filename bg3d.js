/**
 * bg3d.js — Three.js 3D electromagnetic wave & particle background
 * Creates an immersive animated background with:
 *   - A flowing electromagnetic wave surface
 *   - Floating glowing particles
 *   - Subtle mouse parallax
 */

(function () {
    const canvas = document.getElementById('bg3d');
    if (!canvas || typeof THREE === 'undefined') return;

    // ── Setup ───────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    // ── Colors ──────────────────────────────────────────
    const INDIGO = new THREE.Color(0x6366f1);
    const CYAN   = new THREE.Color(0x06b6d4);
    const PURPLE = new THREE.Color(0xa855f7);

    // ── Wave Surface ────────────────────────────────────
    const waveGeo = new THREE.PlaneGeometry(30, 20, 120, 80);
    const waveMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
            uTime: { value: 0 },
            uColor1: { value: INDIGO },
            uColor2: { value: CYAN },
        },
        vertexShader: `
            uniform float uTime;
            varying vec2 vUv;
            varying float vElevation;
            void main() {
                vUv = uv;
                vec3 pos = position;
                float wave1 = sin(pos.x * 0.8 + uTime * 0.6) * 0.4;
                float wave2 = sin(pos.y * 0.5 + uTime * 0.4) * 0.3;
                float wave3 = sin((pos.x + pos.y) * 0.4 + uTime * 0.8) * 0.25;
                pos.z = wave1 + wave2 + wave3;
                vElevation = pos.z;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            varying vec2 vUv;
            varying float vElevation;
            void main() {
                float mixFactor = (vElevation + 1.0) / 2.0;
                vec3 color = mix(uColor1, uColor2, mixFactor);
                float alpha = 0.06 + 0.04 * mixFactor;
                gl_FragColor = vec4(color, alpha);
            }
        `,
        wireframe: true,
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.rotation.x = -Math.PI / 3;
    waveMesh.position.y = -2;
    scene.add(waveMesh);

    // ── Floating Particles ──────────────────────────────
    const PARTICLE_COUNT = 400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors    = new Float32Array(PARTICLE_COUNT * 3);
    const sizes     = new Float32Array(PARTICLE_COUNT);
    const speeds    = new Float32Array(PARTICLE_COUNT);

    const palette = [INDIGO, CYAN, PURPLE];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 25;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

        const c = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3]     = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;

        sizes[i]  = Math.random() * 3 + 1;
        speeds[i] = Math.random() * 0.5 + 0.2;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
    particleGeo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

    const particleMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        vertexColors: true,
        uniforms: {
            uTime: { value: 0 },
        },
        vertexShader: `
            attribute float size;
            varying vec3 vColor;
            uniform float uTime;
            void main() {
                vColor = color;
                vec3 pos = position;
                pos.y += sin(uTime * 0.3 + position.x * 0.5) * 0.3;
                pos.x += cos(uTime * 0.2 + position.z * 0.3) * 0.2;
                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                gl_PointSize = size * (200.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                float dist = length(gl_PointCoord - vec2(0.5));
                if (dist > 0.5) discard;
                float alpha = 0.4 * (1.0 - dist * 2.0);
                gl_FragColor = vec4(vColor, alpha);
            }
        `,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Orbiting Ring ───────────────────────────────────
    const ringGeo = new THREE.TorusGeometry(4, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: INDIGO, transparent: true, opacity: 0.15 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 4;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(5.5, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.1 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    // ── Mouse Parallax ──────────────────────────────────
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // ── Resize ──────────────────────────────────────────
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // ── Animation Loop ──────────────────────────────────
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        // Update wave
        waveMat.uniforms.uTime.value = t;

        // Update particles
        particleMat.uniforms.uTime.value = t;

        // Rotate rings slowly
        ring1.rotation.z = t * 0.08;
        ring1.rotation.y = t * 0.05;
        ring2.rotation.z = -t * 0.06;
        ring2.rotation.x = Math.PI / 3 + Math.sin(t * 0.1) * 0.2;

        // Mouse parallax on camera
        camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 0.5 + 2 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
    }

    animate();
})();
