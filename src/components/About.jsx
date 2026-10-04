import profilePhoto from '../assets/mithilesh-photo.jpg';
import EngineeringTelemetry from './EngineeringTelemetry';
import Timeline from './Timeline';
import MaskedTitle from './MaskedTitle';

export default function About() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Core Background & Engineering Philosophy */}
      <section id="about" className="container about-intro-section">
        <div className="about-grid">
          <div className="gsap-reveal">
            <MaskedTitle number="1." text="About Me" />
            <div className="divider" />
            <div className="about-text-group" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <p className="text-gray about-text" style={{ marginBottom: 0 }}>
                I’m Mithilesh Kumar, an AI-Native Full Stack Developer and BCA student passionate about building modern, practical, and user-focused digital solutions.
              </p>
              <p className="text-gray about-text" style={{ marginBottom: 0 }}>
                I enjoy working across web development, backend technologies, databases, IoT, and AI/ML to turn ideas into functional products.
              </p>
              <p className="text-gray about-text" style={{ marginBottom: 0 }}>
                I’m particularly interested in solving real-world problems through technology and continuously improving my skills by building projects, exploring new technologies, and participating in innovative technical work.
              </p>
              <p className="text-gray about-text" style={{ marginBottom: 0 }}>
                From full-stack web applications to IoT-based systems, I focus on creating solutions that are scalable, useful, and easy to experience.
              </p>
              <p className="text-gray about-text" style={{ marginBottom: 0 }}>
                Currently, I’m expanding my expertise in modern JavaScript technologies, React, Next.js, databases, cloud platforms, and AI/ML while continuing to build and experiment with new ideas.
              </p>
            </div>
            <div className="font-mono text-gray skill-list text-sm">
              <p><span style={{ color: '#fff' }}>▹ </span> System Architecture & Data Flows</p>
              <p><span style={{ color: '#fff' }}>▹ </span> AI-Augmented Code Synthesis & Prompting</p>
              <p><span style={{ color: '#fff' }}>▹ </span> UI Layout Craft (HTML, CSS, Tailwind)</p>
              <p><span style={{ color: '#fff' }}>▹ </span> Cloud & Edge Deployments (Cloudflare & Vercel)</p>
            </div>
          </div>

          <div className="abstract-box hoverable gsap-reveal">
            <div className="about-photo-wrapper">
              <img
                src={profilePhoto}
                alt="Mithilesh Kumar - AI-Native Full Stack Developer"
                className="about-photo-img"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Real-Time Engineering Telemetry & Verified Command Channels */}
        <EngineeringTelemetry />
      </section>

      {/* 2. Interactive Evolution Roadmap (Auto-looping + Move Buttons) */}
      <Timeline />
    </div>
  );
}


