import { useMemo, useState } from 'react';
import ProjectModal from './ProjectModal';
import MaskedTitle from './MaskedTitle';

import teamDiscoveryImg from '../assets/projects/team-discovery.png';
import shivalikHubImg from '../assets/projects/shivalik-innovation-hub.png';
import eventFlowImg from '../assets/projects/eventflow.png';

export default function Work() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = useMemo(
    () => [
      {
        bgClass: 'bg-1',
        shortTitle: 'Team Discovery',
        category: 'SKILL MATCHING • WEB PLATFORM',
        tagline: 'Skill-Based Teammate Matching Platform',
        description:
          'A skill-based teammate matching platform built to help students find the right teammates for hackathons and technical projects. It matches candidates based on required skills, project portfolios, availability, and team requirements.',
        problem:
          'Students and hackathon participants often struggle to find teammates with complementary skill sets, aligned availability, and shared project goals, leading to unbalanced teams and coordination friction during technical competitions.',
        solution:
          'Engineered a centralized teammate discovery platform that algorithmically pairs candidates based on required skills, project portfolios, availability schedules, and specific team requirements.',
        techStack: [
          'Web Technologies',
          'React',
          'Skill Matching Engine',
          'Vercel'
        ],
        features: [
          'Skill-based candidate matching',
          'Project portfolio showcase',
          'Availability and schedule alignment',
          'Hackathon team formation requirements'
        ],
        architectureFlow: [
          { step: '01', title: 'User Profiles', tech: 'Candidate Inputs', desc: 'Student skills, project portfolio links, and technical interests' },
          { step: '02', title: 'Skill Matching', tech: 'Matching Engine', desc: 'Filtering and scoring candidates against project needs' },
          { step: '03', title: 'Availability & Team', tech: 'Constraint Engine', desc: 'Aligning availability schedules and hackathon team roles' },
          { step: '04', title: 'Matching Result', tech: 'Discovery Deck', desc: 'Presenting optimal teammate recommendations and invitations' }
        ],
        architectureDetails: [
          { title: 'Skill & Portfolio Alignment', desc: 'Evaluates candidate portfolios and stated skill sets to ensure balanced team capabilities across frontend, backend, and project roles.' },
          { title: 'Availability Synchronization', desc: 'Matches team availability timelines to minimize coordination friction during fast-paced hackathons and sprint deadlines.' },
          { title: 'Team Requirements Filter', desc: 'Enables team leads to specify missing domain roles and query filtered student candidates.' }
        ],
        metrics: [
          { label: 'Platform Focus', value: 'Teammate Discovery' },
          { label: 'Target Audience', value: 'Students & Hackers' },
          { label: 'Matching Criteria', value: 'Skills & Availability' },
          { label: 'Deployment', value: 'Vercel Edge' }
        ],
        title: 'Team Discovery',
        images: [teamDiscoveryImg],
        altText: 'Team Discovery project interface',
        githubUrl: 'https://github.com/mrprince6299/team-discovery',
        liveDemoUrl: 'https://team-discovery-opal.vercel.app/',
        exploreUrl: 'https://team-discovery-opal.vercel.app/'
      },
      {
        bgClass: 'bg-2',
        shortTitle: 'Shivalik Innovation Hub',
        category: 'INNOVATION PLATFORM • CAMPUS ECOSYSTEM',
        tagline: 'Digital Innovation & Project Collaboration Platform',
        description:
          'A digital innovation platform designed to connect students with projects, ideas, events, rankings, and innovation opportunities. The platform provides dedicated spaces for project exploration, team building, pitching, and student innovation.',
        problem:
          'Campus innovators and student developers frequently lack a centralized ecosystem to discover ongoing campus projects, pitch novel ideas, form interdisciplinary teams, and gain visibility through merit-based rankings.',
        solution:
          'Built a comprehensive digital innovation platform providing structured hubs for exploring student projects, sharing startup and technical ideas, tracking campus innovation events, and participating in pitch opportunities.',
        techStack: [
          'Web Platform',
          'Firebase Cloud',
          'Innovation Hub',
          'Event System'
        ],
        features: [
          'Dedicated project exploration space',
          'Student ideas & pitching portal',
          'Campus events & hackathons hub',
          'Student innovation rankings & recognition'
        ],
        architectureFlow: [
          { step: '01', title: 'Students', tech: 'Campus Portal', desc: 'Student registration, profile creation, and skill presentation' },
          { step: '02', title: 'Projects & Ideas', tech: 'Innovation Repository', desc: 'Central repository for browsing, pitching, and publishing ideas' },
          { step: '03', title: 'Events & Pitching', tech: 'Event Pipeline', desc: 'Interactive scheduling for campus hackathons and pitch sessions' },
          { step: '04', title: 'Rankings & Opportunities', tech: 'Recognition Engine', desc: 'Leaderboards, verified rankings, and incubation opportunities' }
        ],
        architectureDetails: [
          { title: 'Centralized Project Discovery', desc: 'Consolidates student-led technical initiatives into an open discovery feed for cross-departmental collaboration.' },
          { title: 'Pitching & Idea Incubation', desc: 'Provides dedicated workflows for drafting, submitting, and refining project concepts for mentor review.' },
          { title: 'Rankings & Merit Visibility', desc: 'Highlights innovative student contributions through transparent project rankings and milestone tracking.' }
        ],
        metrics: [
          { label: 'Ecosystem', value: 'Campus Innovation' },
          { label: 'Core Spaces', value: 'Projects & Pitching' },
          { label: 'Recognition', value: 'Student Rankings' },
          { label: 'Hosting', value: 'Web App Cloud' }
        ],
        title: 'Shivalik Innovation Hub',
        images: [shivalikHubImg],
        altText: 'Shivalik Innovation Hub project interface',
        githubUrl: null,
        liveDemoUrl: 'https://project-d7a7e159-7fef-4a09-89b.web.app/',
        exploreUrl: 'https://project-d7a7e159-7fef-4a09-89b.web.app/'
      },
      {
        bgClass: 'bg-3',
        shortTitle: 'EventFlow',
        category: 'EVENT MANAGEMENT • DIGITAL PLANNING',
        tagline: 'Modern Centralized Event Planning Platform',
        description:
          'A modern event management platform designed to simplify event planning and participation through a centralized digital experience, with features for event organization, service providers, recommendations, and real-time planning.',
        problem:
          'Coordinating events traditionally involves fragmented communication across organizers, external vendors, and attendees, causing logistical delays and disconnected scheduling experiences.',
        solution:
          'Designed a unified digital event platform bringing planning, service provider discovery, event recommendations, and participant coordination into a single real-time interface.',
        techStack: [
          'Web Application',
          'Firebase Cloud',
          'Real-Time Planning',
          'Vendor Directory'
        ],
        features: [
          'Centralized event planning & organization',
          'Service provider & vendor directory',
          'Smart event recommendations',
          'Real-time planning & participation flow'
        ],
        architectureFlow: [
          { step: '01', title: 'Event Planning', tech: 'Planner Interface', desc: 'Event setup, timeline scheduling, and category configuration' },
          { step: '02', title: 'Service Providers', tech: 'Vendor Directory', desc: 'Connecting organizers with verified caterers, venues, and sound providers' },
          { step: '03', title: 'Recommendations', tech: 'Discovery Engine', desc: 'Contextual suggestions for attendees and event planners' },
          { step: '04', title: 'Participation Flow', tech: 'Centralized Platform', desc: 'Real-time attendee engagement, RSVPs, and coordinated schedules' }
        ],
        architectureDetails: [
          { title: 'Centralized Planning Flow', desc: 'Integrates every phase of event coordination from initial concept to day-of execution in one portal.' },
          { title: 'Service Provider Marketplace', desc: 'Facilitates direct discovery and selection of qualified event service providers and vendors.' },
          { title: 'Participant Coordination', desc: 'Maintains real-time attendee visibility, schedule synchronization, and streamlined engagement.' }
        ],
        metrics: [
          { label: 'System Focus', value: 'Event Management' },
          { label: 'Key Modules', value: 'Planning & Providers' },
          { label: 'Experience', value: 'Real-Time Centralized' },
          { label: 'Infrastructure', value: 'Firebase App Cloud' }
        ],
        title: 'EventFlow',
        images: [eventFlowImg],
        altText: 'EventFlow project interface',
        githubUrl: null,
        liveDemoUrl: 'https://ai-project-engine.firebaseapp.com/',
        exploreUrl: 'https://ai-project-engine.firebaseapp.com/'
      }
    ],
    []
  );

  const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex];

  return (
    <section id="work" className="container work-page-section">
      <div className="gsap-reveal work-header">
        <MaskedTitle number="2." text="Selected Projects" />
        <div className="divider" />
        <p className="font-mono text-gray text-sm" style={{ maxWidth: '650px', marginTop: '1rem', lineHeight: '1.6' }}>
          A collection of practical digital products and technical projects focused on solving real-world problems through modern web technologies, innovation platforms, and user-focused experiences.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="project-card hoverable gsap-work-card"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProjectIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveProjectIndex(index);
            }}
            aria-label={`Open project: ${proj.title}`}
          >
            <div className={`project-bg ${proj.bgClass}`}>
              {proj.images?.[0] && (
                <img
                  src={proj.images[0]}
                  alt={proj.altText}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
            <div className="project-overlay" />
            <div className="project-info">
              <p className="font-mono project-category text-gray uppercase">{proj.category}</p>
              <h3 className="project-title text-glow uppercase">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        open={activeProjectIndex !== null}
        onClose={() => setActiveProjectIndex(null)}
        project={activeProject}
      />
    </section>
  );
}
