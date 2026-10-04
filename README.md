# Mithilesh Kumar — AI-Native Full Stack Developer Portfolio

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite 8](https://img.shields.io/badge/Vite-8.0_(Rolldown)-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL_Raymarching-black?logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15_ScrollTrigger-88CE02?logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-Edge_Runtime-F38020?logo=cloudflare)](https://workers.cloudflare.com/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-black)](https://github.com/darkroomengineering/lenis)

A modern, high-performance developer portfolio built with **React 19**, custom **WebGL GLSL raymarching shaders**, **GSAP ScrollTrigger**, and smooth momentum physics. Deployed globally to **Cloudflare Workers** with edge-native serverless functions.

🔗 **Live Portfolio:** [https://portfolio.mithileshkumarpatel568900.workers.dev](https://portfolio.mithileshkumarpatel568900.workers.dev)

---

## 👨‍💻 About Me

I’m **Mithilesh Kumar**, an AI-Native Full Stack Developer and BCA student passionate about building modern, practical, and user-focused digital solutions. I enjoy working across web development, backend technologies, databases, IoT, and AI/ML to turn ideas into functional products.

I’m particularly interested in solving real-world problems through technology and continuously improving my skills by building projects, exploring new technologies, and participating in innovative technical work.

Currently, I’m expanding my expertise in modern JavaScript technologies, React, Next.js, databases, cloud platforms, and AI/ML while continuing to build and experiment with new ideas.

---

## 🌟 Visual Tour & Interface Highlights

- **Raymarched Event Horizon & 3D Wireframe Globe:** A custom GPU raymarched black hole accretion disk with relativistic Doppler beaming, dynamic inclination mouse parallax, and an interactive 3D Orbit exploration mode.
- **Engineering Philosophy & Real-Time Telemetry Deck:** Overview of architectural design principles paired with a verified telemetry command deck showcasing GitHub repositories, LinkedIn profiles, and live development activity.
- **Engineering Journey & Interactive 2D Canvas Simulations:** A four-stage evolution roadmap featuring real-time interactive HTML5 Canvas visualizers demonstrating DOM hierarchy, WebSocket packet transmission, token streaming, and distributed edge architectures.
- **Deep-Dive Case Studies & Feature Showcase:** Editorial project presentations highlighting problem statements, algorithmic solutions, key capabilities, and direct links to live deployments.
- **Decoupled Distributed Architecture Flows:** Interactive multi-tier architecture diagrams illustrating client presentation layers, edge gateways, authentication boundaries, and backend services.
- **360° Cylindrical Capabilities Deck:** A trigonometric 3D orbital cylinder displaying core technical competencies, featuring continuous auto-rotation, Gaussian depth-blur falloff, and touch/wheel drag navigation.
- **Cosmic Monolith Message Beacon & Flight Sequencer:** A glassmorphic transmission transponder equipped with dynamic input signal integrity scoring and an edge-delivered rocket launch sequence connecting to the Resend API.

---

## ⚡ Core Engineering Capabilities & Innovations

### 🪐 1. Raymarched WebGL Accretion Disk (`ThreeBackground.jsx`)
- **Custom GLSL Shader Pipeline:** Implements volumetric raymarching for black hole gravitational lensing, dynamic Doppler color shifting, differential accretion disk rotation, and procedural starlight dust.
- **Hardware-Adaptive Performance:** Automatically queries `navigator.hardwareConcurrency` and `navigator.deviceMemory` to adjust raymarching steps (`120` on low-power devices vs. `200` on desktop).
- **Zero-Overhead Viewport Throttling:** When scrolling past the hero or navigating to inner routes, the render loop pauses entirely, freeing 100% of GPU resources.
- **Interactive OrbitControls Mode:** Double-clicking triggers an orbit camera mode with high-dynamic-range bloom post-processing and smooth damping.

### 📐 2. Editorial Case Study Architecture (`ProjectModal.jsx`)
- **Three-Tier Deep Dive:**
  1. **Overview & Gallery:** High-resolution screenshots, engineering challenges, core solutions, and technology pills.
  2. **System Architecture:** Visual pipeline diagrams mapping data flows from edge networks to databases, accompanied by documented architectural trade-offs.
  3. **Live Prototype:** Sandboxed responsive browser mockup supporting instant viewport toggling between Desktop and Mobile (390px).
- **Accessibility & Focus Trapping:** Implements keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), ARIA modal dialog specifications, and Lenis scroll-lock prevention.

### 🌐 3. Cloudflare Edge Serverless Worker (`src/worker.js`)
- **Unified Edge Runtime:** Deployed as a single Cloudflare Worker that concurrently routes static SPA assets and serverless REST endpoints.
- **Resend Email Microservice (`/api/send-email`):** Validates payloads, sanitizes HTML to guard against XSS injection, formats branded responsive HTML emails, and dispatches transmissions via Resend API.
- **Real-Time GitHub Telemetry (`/api/github-stats`):** Edge-cached telemetry pipeline delivering real-time repository stats and push timestamps with automatic rate-limit fallbacks.

### 🌀 4. 360° Cylindrical Skills Deck (`Skills.jsx`)
- **Trigonometric Orbit Math:** Calculates 3D Cartesian coordinates (`X = sin(θ)`, `Z = cos(θ)`) along a virtual cylinder.
- **Dynamic Depth Hierarchy:** Front cards maintain crystal clarity (`scale: 1.05`), while background cards seamlessly scale down (`scale: 0.64`) with smooth CSS Gaussian blur (`0px` to `4px`) and strict z-index depth sorting.
- **Multi-Input Controls:** Supports touch drag, mouse dragging, trackpad horizontal wheel manipulation, and auto-running idle loops.

### 🔊 5. Procedural Audio Synthesis (`useAudio.js`)
- **Zero External Audio Assets:** Employs the native Web Audio API (`AudioContext`) to synthesize subtle micro-interaction sounds procedurally (sine wave sweeps on hover, triangle tone pings on click).
- **Autoplay Compliance:** Defers context creation until first user gesture, avoiding browser audio warnings.

### 📜 6. Virtual Momentum Scroll & Section Snapping
- **Lenis + GSAP Sync:** Bridges Lenis virtual scrolling directly to GSAP's internal ticker with `lagSmoothing(0)`.
- **GSAP Observer Snapping (`usePageTransitions.js`):** Enables seamless section-to-section transit across primary application routes with cooldown locks and zero layout thrashing.

---

## 🛠️ Technology Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 19.2** | Concurrent rendering, declarative component tree |
| **Build Tooling** | **Vite 8.0 (Rolldown)** | Sub-second HMR, optimized manual chunk splitting |
| **Edge Infrastructure** | **Cloudflare Workers** | Edge CDN, single-page routing & serverless endpoints |
| **3D & Shaders** | **Three.js (r184)** | Custom GLSL raymarching, volumetric post-processing |
| **Motion & Dynamics** | **GSAP 3.15 + Observer** | Staggered reveals, laser wipes, and route transitions |
| **Smooth Scrolling** | **Lenis 1.3** | Hardware-accelerated virtual momentum scrolling |
| **Typography & Icons** | **Inter & Space Mono** | High-contrast editorial typography, custom inline SVGs |
| **Email Gateway** | **Resend API** | Reliable edge email delivery with HTML templating |

---

## 📂 Repository Structure

```text
My-Portfolio/
├── dist/                          # Production build output
├── public/                        # Static edge assets (favicon, manifest)
├── src/
│   ├── assets/                    # Optimized WebP project mockups & portrait
│   ├── components/
│   │   ├── About.jsx              # Bio & telemetry section container
│   │   ├── Contact.jsx            # Cosmic monolith form & flight arena
│   │   ├── CustomCursor.jsx       # Hardware-accelerated lunar phase cursor
│   │   ├── EngineeringTelemetry.jsx# 3-Column live profile & project activity
│   │   ├── Footer.jsx             # Text-scramble social command deck
│   │   ├── Hero.jsx               # Typography & wireframe globe trigger
│   │   ├── HeroGlobeButton.jsx    # Holographic canvas globe with orbital nodes
│   │   ├── Layout.jsx             # Shell wrapper, Canvas orchestrator & reveals
│   │   ├── MaskedTitle.jsx        # Laser-wipe masked headline component
│   │   ├── Navbar.jsx             # Glass dock navigation & mobile drawer
│   │   ├── Preloader.jsx          # Session-aware system initialization HUD
│   │   ├── ProjectModal.jsx       # Multi-tab case study modal & device frame
│   │   ├── Skills.jsx             # 360° cylindrical capabilities orbital deck
│   │   ├── ThreeBackground.jsx    # GLSL raymarched black hole accretion disk
│   │   ├── ThreeStarfield.jsx     # GPU-accelerated twinkling 3D starfield
│   │   ├── Timeline.jsx           # 4-Stage engineering evolution carousel
│   │   ├── TimelineVisualizers.jsx# 2D canvas simulation engines
│   │   ├── Work.jsx               # Featured project showcase grid
│   │   └── shaders.js             # Vertex & Fragment GLSL raymarching code
│   ├── hooks/
│   │   ├── useAudio.js            # Procedural Web Audio oscillator synthesizer
│   │   ├── useLenis.js            # Virtual smooth scroll coordinator
│   │   ├── usePageTransitions.js  # GSAP Observer section navigation
│   │   └── useTextScramble.js     # Cyberpunk text scramble effect
│   ├── styles/                    # Modular CSS architecture
│   │   ├── components/            # Component-specific stylesheets
│   │   ├── pages/                 # Section-specific stylesheets
│   │   ├── animations.css         # Keyframe definitions
│   │   ├── layout.css             # Grid foundations & canvas layers
│   │   └── tokens.css             # Design tokens & typography resets
│   ├── worker.js                  # Cloudflare Worker edge entry point
│   ├── App.jsx                    # React Router configuration
│   ├── index.css                  # Master stylesheet orchestrator
│   └── main.jsx                   # React 19 root bootstrap
├── wrangler.jsonc                 # Cloudflare Worker configuration
└── vite.config.js                 # Rollup chunk optimization & Cloudflare plugin
```

---

## 🚀 Featured Projects

### 1. Team Discovery
- **GitHub:** [https://github.com/mrprince6299/team-discovery](https://github.com/mrprince6299/team-discovery)
- **Live Demo:** [https://team-discovery-opal.vercel.app/](https://team-discovery-opal.vercel.app/)
- **Description:** A skill-based teammate matching platform built to help students find the right teammates for hackathons and technical projects. It matches candidates based on required skills, project portfolios, availability, and team requirements.

### 2. Shivalik Innovation Hub
- **Live Demo:** [https://project-d7a7e159-7fef-4a09-89b.web.app/](https://project-d7a7e159-7fef-4a09-89b.web.app/)
- **Description:** A digital innovation platform designed to connect students with projects, ideas, events, rankings, and innovation opportunities. The platform provides dedicated spaces for project exploration, team building, pitching, and student innovation.

### 3. EventFlow
- **Live Demo:** [https://ai-project-engine.firebaseapp.com/](https://ai-project-engine.firebaseapp.com/)
- **Description:** A modern event management platform designed to simplify event planning and participation through a centralized digital experience, with features for event organization, service providers, recommendations, and real-time planning.

---

## 🎓 Education & Certifications

- **BCA — Bachelor of Computer Applications**  
  *Shivalik College of Engineering, Dehradun* (2024–2028)  
  *Current Status:* 2nd Year / 3rd Semester  
  *Expected Graduation:* 2028

- **ADCA — Advanced Diploma in Computer Application**  
  *Institute for Advanced Computer Technology (IACT)* (Completed: 2024)  
  *Duration:* 12 months  
  *Grade:* A (71.63%)

---

## 💻 Technical Skills

- **Programming Languages:** Java, Python, C, C++, JavaScript, HTML/CSS, SQL
- **Frontend & UI:** React, Next.js, HTML5, CSS3, GSAP, Responsive Design
- **Backend & Cloud Services:** Firebase, Vercel, Supabase, MongoDB, Cloudflare Workers, REST APIs
- **Hardware & Emerging Tech:** IoT, Arduino, ESP32, AI/ML
- **Tools & Workflow:** Git, GitHub, Vite, npm, VS Code

---

## ⚙️ Development & Deployment

### Prerequisites
- **Node.js**: `v20.0.0` or higher (Node 22 LTS recommended)
- **npm**: `v10.0.0` or higher
- **Cloudflare Wrangler** (for local edge preview and deployment)

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/mrprince6299/My-Portfolio.git
cd My-Portfolio
npm install
```

### Environment Configuration
Create a `.dev.vars` file in the project root for local serverless secret testing:

```env
RESEND_API_KEY=re_your_resend_api_key_here
```

### Running Locally
Start the Vite development server:

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Edge Deployment
Compile both the Cloudflare Worker bundle and static assets:

```bash
npm run build
```

Preview locally with Wrangler:

```bash
npm run preview
```

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

Configure your Resend secret on Cloudflare:
```bash
npm run secret:resend
```

---

## 📬 Contact & Connect

**Mithilesh Kumar**  
*AI-Native Full Stack Developer & BCA Student*

- **Email:** [mithileshkumarpatel568900@gmail.com](mailto:mithileshkumarpatel568900@gmail.com)
- **Phone / WhatsApp:** [+91 62997 59128](https://wa.me/916299759128)
- **GitHub:** [https://github.com/mrprince6299](https://github.com/mrprince6299)
- **LinkedIn:** [https://www.linkedin.com/in/mithilesh-kumar-860b08390/](https://www.linkedin.com/in/mithilesh-kumar-860b08390/)
- **Live Portfolio:** [https://portfolio.mithileshkumarpatel568900.workers.dev](https://portfolio.mithileshkumarpatel568900.workers.dev)

---

## 📄 License & Attribution

This project is licensed under the [Apache-2.0 License](LICENSE).  
Adapted from an open-source template originally authored by Dinesh S under the Apache-2.0 License. All customizations, identity content, personal projects, education, and configurations represent the authentic work of Mithilesh Kumar.

<div align="center">
  <sub>© 2026 Mithilesh Kumar. All rights reserved.</sub>
</div>
