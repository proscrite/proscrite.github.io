import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

import ratagImg from './images/RaTag_diagram.png';
import manhattanImg from './images/manhattan.png';
import sabatImg from './images/sabat_software.png';
import xpsImg from './images/xps_sw_card.png';

export default function FeaturedProjects() {
  const projects = [
    {
      id: "ratag",
      superTitle: "MULTI-MODAL DAQ & FUNCTIONAL ARCHITECTURE",
      title: "RITA: Physics Orchestration & Analytical Engine",
      pitch: "A highly modular, functional programming-based orchestration engine built for strict auditability and scale. It automates physical DAQ hardware and processes heterogeneous data streams (PMT, PIN, electrometer) through a layered, three-tier architecture—translating raw subatomic signals into readable physics models",
      techStack: ["Functional Architecture", "Multi-Modal Pipelines", "Hardware APIs (SCPI)", "Data Orchestration", "GX"],
      linkSw: "/projects/software/RaTag",
      linkHw: "/projects/experiments/RitaSetup",
      image: ratagImg,
      reverse: false
    },
    {
      id: "manhattan",
      superTitle: "FULL-STACK SOFTWARE & NLP",
      title: "ManHatTan: Gamified NLP Learning Language Platform",
      pitch: "Architected an end-to-end language application integrating custom Kivy GUIs, automated data extraction from e-readers, SpaCy NLP embeddings, and LLM-generated dynamic exercises to drive spaced-repetition learning.",
      techStack: ["Python", "Kivy (UI/UX)", "NLP (SpaCy, NLTK)", "LLM APIs (OpenAI, Hugging Face)", "Gamification"],
      linkSw: "/projects/software/Manhattan",
      image: manhattanImg,
      reverse: true
    },
    {
      id: "sabatsw",
      superTitle: "HARDWARE-SOFTWARE INTEGRATION",
      title: "SabatSW: Fluorescence Microscopy Control",
      pitch: "Engineered a centralized GUI to orchestrate high-resolution optical hardware. It unifies Python APIs for scientific CMOS cameras, precision Z-stages, and lasers, enabling automated autofocus and single-molecule fluorescence tracking.",
      techStack: ["Python / Kivy", "Computer Vision (OpenCV, scikit-image)", "Hardware APIs (SCPI)", "Closed-Loop Control", "Scientific Instrumentation"],
      linkSw: "/projects/software/SabatSw",
      linkHw: "/projects/experiments/SabatHuji",
      image: sabatImg,
      reverse: false
    },
    {
      id: "xpssw",
      superTitle: "BATCH PROCESSING & ALGORITHMS",
      title: "XpsSW: Spectroscopy Analytical Pipeline",
      pitch: "Engineered an automated data parsing and peak-fitting pipeline to replace manual XPS workflows, optimizing complex material science metrology.",
      techStack: ["Python (SciPy/Pandas)", "Algorithm Design", "Data Parsing and Visualization", "Batch Processing", "Scientific Computing"],
      linkSw: "/projects/software/XpsSw",
      linkHw: "/projects/experiments/SurfaceScience",
      image: xpsImg,
      reverse: true
    }
  ];

  return (
    <section className="featured-projects-section">
      
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h2 className="section-title">Featured Engineering Projects</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', margin: 0 }}>
          End-to-end systems built for high-stakes research and personal passion.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className={`project-row ${project.reverse ? 'reverse' : ''}`}>
            
            {/* Left/Right Text Content */}
            <div className="project-content">
              <span className="project-supertitle">{project.superTitle}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-pitch">{project.pitch}</p>
              
              <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>

              
              <div className="project-cta-container">
                <Link to={project.linkSw || project.link} className="project-cta">
                  View Software Architecture <span>→</span>
                </Link>
                {project.linkHw && (
                  <Link to={project.linkHw} className="project-cta">
                    Explore the Physics <span>→</span>
                  </Link>
                )}
              </div>

            </div>

            {/* Visual Content */}
            <div className="project-visual">
            {/* Visual Content (clickable) */}
            <Link to={project.linkSw || project.link} className="project-visual-link">
              <div className="project-visual">
                <div className="image-browser-frame">
                {/* Simulated browser/app header for extra polish */}
                <div className="browser-dots">
                  <span className="dot close"></span>
                  <span className="dot min"></span>
                  <span className="dot max"></span>
                </div>
                {/* Fallback styling in case the image hasn't loaded yet */}
                <div className="image-placeholder" style={{ backgroundImage: `url(${project.image})` }}>
                  {!project.image && <p>Visual Asset Pending</p>}
                </div>
              </div>
            </div>
            </Link>

          </div>
          </div>
        ))}
      </div>
    </section>
  );
}