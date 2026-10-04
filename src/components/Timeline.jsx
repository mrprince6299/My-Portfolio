import { useState, useEffect, useRef, useCallback } from 'react';
import { useAudio } from '../hooks/useAudio';
import {
  WebArchitectureCanvas,
  SocketStreamCanvas,
  AITokenStreamCanvas,
  EdgeParserCanvas
} from './TimelineVisualizers';
import MaskedTitle from './MaskedTitle';

export default function Timeline() {
  const { playHoverSound, playClickSound } = useAudio();
  const [activeEpochIndex, setActiveEpochIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const epochs = [
    {
      epoch: '01',
      date: '2023 – 2024 • 12 MONTHS',
      stageLabel: 'STAGE 01',
      category: 'ACADEMIC DIPLOMA',
      dockLabel: 'ADCA DIPLOMA',
      title: 'ADCA — Advanced Diploma in Computer Application',
      headline: 'Institute for Advanced Computer Technology (IACT)',
      summary:
        'Completed an intensive 12-month Advanced Diploma in Computer Application (ADCA) at IACT, graduating with Grade A (71.63%). Mastered computer fundamentals, database management systems, programming foundations, and applied office automation.',
      metrics: [
        { label: 'Institution', value: 'IACT' },
        { label: 'Duration / Year', value: '12 Months • 2024' },
        { label: 'Performance', value: 'Grade A (71.63%)' }
      ],
      techStack: ['Computer Fundamentals', 'Database Systems', 'Programming Concepts', 'Office Automation', 'Practical Software'],
      Visualizer: WebArchitectureCanvas
    },
    {
      epoch: '02',
      date: '2024 – 2028 • UNDERGRADUATE',
      stageLabel: 'STAGE 02',
      category: 'HIGHER EDUCATION',
      dockLabel: 'BCA DEGREE',
      title: 'BCA — Bachelor of Computer Applications',
      headline: 'Shivalik College of Engineering, Dehradun',
      summary:
        'Pursuing Bachelor of Computer Applications (BCA) at Shivalik College of Engineering, Dehradun. Currently in 2nd Year / 3rd Semester, deepening expertise in core computer science, data structures, full-stack web technologies, and emerging AI/ML systems. Expected Graduation: 2028.',
      metrics: [
        { label: 'Institution', value: 'Shivalik College' },
        { label: 'Current Status', value: '2nd Year / 3rd Sem' },
        { label: 'Expected Grad', value: 'Class of 2028' }
      ],
      techStack: ['Data Structures', 'Algorithms', 'Full Stack Web', 'C / C++', 'Java', 'Database Management'],
      Visualizer: SocketStreamCanvas
    },
    {
      epoch: '03',
      date: '2025 – 2026 • DEVELOPMENT',
      stageLabel: 'STAGE 03',
      category: 'APPLIED AI & FULL STACK',
      dockLabel: 'AI & WEB DEV',
      title: 'Full Stack & AI Systems Engineering',
      headline: 'Modern Web, Backend & Generative AI',
      summary:
        'Building dynamic, responsive full-stack applications with React, modern JavaScript, and Node.js. Integrating intelligent AI/ML APIs, structured prompting pipelines, and real-time streaming architectures to create practical digital tools.',
      metrics: [
        { label: 'Focus Area', value: 'AI & Full Stack' },
        { label: 'Architecture', value: 'React • Node • APIs' },
        { label: 'Status', value: 'Active Sprints' }
      ],
      techStack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML Integration'],
      Visualizer: AITokenStreamCanvas
    },
    {
      epoch: '04',
      date: '2026 & BEYOND • PRODUCTION',
      stageLabel: 'STAGE 04',
      category: 'CLOUD & EDGE SYSTEMS',
      dockLabel: 'CLOUD & IOT',
      title: 'Scalable Systems, Cloud & IoT',
      headline: 'Distributed Platforms & Connected Devices',
      summary:
        'Engineering scalable, decoupled cloud applications, edge services, and IoT-driven solutions. Focusing on performance, high availability, robust database architectures, and seamless digital-to-hardware experiences.',
      metrics: [
        { label: 'Cloud Target', value: 'Cloud & Edge Scale' },
        { label: 'Systems', value: 'Databases & IoT' },
        { label: 'Approach', value: 'Modern & Scalable' }
      ],
      techStack: ['Cloud Platforms', 'PostgreSQL', 'IoT Systems', 'RESTful APIs', 'Modern JavaScript', 'Git'],
      Visualizer: EdgeParserCanvas
    }
  ];

  // Auto-running loop across 4 stages (pauses on hover so user can read)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, epochs.length]);

  // Move button controls (loops infinitely in both directions)
  const handleNext = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
  }, [epochs.length, playClickSound]);

  const handlePrev = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev - 1 + epochs.length) % epochs.length);
  }, [epochs.length, playClickSound]);

  const goToEpoch = useCallback((targetIndex) => {
    if (targetIndex < 0 || targetIndex >= epochs.length) return;
    playClickSound();
    setActiveEpochIndex(targetIndex);
  }, [epochs.length, playClickSound]);

  // Keyboard Arrow navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="container timeline-section" id="experience">
      {/* Aligned Section Header matching #about, #work, #skills */}
      <div className="timeline-header">
        <div className="gsap-reveal">
          <MaskedTitle text="Education & Journey" />
          <div className="divider" />
        </div>
        <div className="timeline-header-meta font-mono">
          <div className="timeline-meta-pill">
            <span className={`meta-pulse-dot ${isPaused ? 'is-paused' : ''}`} />
            <span className="meta-pill-text">
              STAGE 0{activeEpochIndex + 1}/04 • {isPaused ? 'INTERACTIVE' : 'AUTO-RUNNING'}
            </span>
          </div>
          <div className="timeline-jump-strip">
            {epochs.map((ep, i) => (
              <button
                key={ep.epoch}
                type="button"
                onClick={() => goToEpoch(i)}
                onMouseEnter={playHoverSound}
                className={`timeline-jump-pill hoverable ${activeEpochIndex === i ? 'is-active' : ''}`}
                aria-label={`Jump to stage 0${i + 1}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Stage Slider with Side Navigation Arrows & Auto-running Loop */}
      <div
        className="timeline-stage-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-prev hoverable font-mono"
          onClick={handlePrev}
          onMouseEnter={playHoverSound}
          aria-label="Previous phase"
          title="Previous stage"
        >
          ‹
        </button>

        <div className="timeline-carousel-shell">
          <div
            className="timeline-cards-track"
            style={{ transform: `translateX(-${activeEpochIndex * 100}%)` }}
          >
            {epochs.map((item, idx) => {
              const Visualizer = item.Visualizer;
              const isActive = activeEpochIndex === idx;

              return (
                <div
                  key={item.epoch}
                  className={`timeline-card-slide ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => {
                    if (!isActive) playHoverSound();
                  }}
                >
                  {/* Stage Container Card */}
                  <div className="timeline-stage-card hoverable">
                    {/* Left Pane: Narrative & Technical Telemetry */}
                    <div className="timeline-narrative-pane">
                      <div className="stage-topbar font-mono">
                        <div className="stage-topbar-left">
                          <span className="stage-badge uppercase">{item.category}</span>
                          <span className="stage-date uppercase">{item.date}</span>
                        </div>
                        <span className="stage-step-tag text-gray">{item.stageLabel}</span>
                      </div>

                      <div className="stage-title-wrap">
                        <h3 className="stage-title uppercase text-glow">{item.title}</h3>
                        <div className="stage-headline font-mono text-gray uppercase">{item.headline}</div>
                      </div>

                      <p className="stage-summary text-gray">{item.summary}</p>

                      {/* Telemetry Metrics Grid */}
                      <div className="stage-metrics-grid font-mono">
                        {item.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="stage-metric-box">
                            <span className="metric-lbl text-gray">{m.label}</span>
                            <span className="metric-val">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills matching .skill-pill */}
                      <div className="stage-tech-pills font-mono">
                        {item.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="stage-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Pane: 2D Live Visualizer Canvas */}
                    <div className="timeline-simulation-pane">
                      <div className="terminal-canvas-wrapper">
                        <Visualizer isActive={isActive} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-next hoverable font-mono"
          onClick={handleNext}
          onMouseEnter={playHoverSound}
          aria-label="Next phase"
          title="Next stage"
        >
          ›
        </button>
      </div>
    </section>
  );
}
