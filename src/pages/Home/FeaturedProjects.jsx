import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './FeaturedProjects.css';

import ratagImg from './images/RaTag_diagram.png';
import manhattanImg from './images/manhattan.png';
import sabatImg from './images/sabat_software.png';
import xpsImg from './images/xps_sw_card.png';

export default function FeaturedProjects() {
  const { t } = useTranslation();

  // Static metadata (routes, images, layout) stays here; translatable text comes from t()
  const projects = [
    {
      id: "ratag",
      superTitle: t('featuredProjects.projects.ratag.superTitle'),
      title: t('featuredProjects.projects.ratag.title'),
      pitch: t('featuredProjects.projects.ratag.pitch'),
      techStack: ["Functional Architecture", "Multi-Modal Pipelines", "Hardware APIs (SCPI)", "Data Orchestration", "GX"],
      linkSw: "/projects/software/RaTag",
      linkHw: "/projects/experiments/RitaSetup",
      image: ratagImg,
      reverse: false
    },
    {
      id: "manhattan",
      superTitle: t('featuredProjects.projects.manhattan.superTitle'),
      title: t('featuredProjects.projects.manhattan.title'),
      pitch: t('featuredProjects.projects.manhattan.pitch'),
      techStack: ["Python", "Kivy (UI/UX)", "NLP (SpaCy, NLTK)", "LLM APIs (OpenAI, Hugging Face)", "Gamification"],
      linkSw: "/projects/software/Manhattan",
      image: manhattanImg,
      reverse: true
    },
    {
      id: "sabatsw",
      superTitle: t('featuredProjects.projects.sabatsw.superTitle'),
      title: t('featuredProjects.projects.sabatsw.title'),
      pitch: t('featuredProjects.projects.sabatsw.pitch'),
      techStack: ["Python / Kivy", "Computer Vision (OpenCV, scikit-image)", "Hardware APIs (SCPI)", "Closed-Loop Control", "Scientific Instrumentation"],
      linkSw: "/projects/software/SabatSw",
      linkHw: "/projects/experiments/SabatHuji",
      image: sabatImg,
      reverse: false
    },
    {
      id: "xpssw",
      superTitle: t('featuredProjects.projects.xpssw.superTitle'),
      title: t('featuredProjects.projects.xpssw.title'),
      pitch: t('featuredProjects.projects.xpssw.pitch'),
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
        <h2 className="section-title">{t('featuredProjects.sectionTitle')}</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', margin: 0 }}>
          {t('featuredProjects.sectionSubtitle')}
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
                  {t('featuredProjects.ctaSw')} <span>→</span>
                </Link>
                {project.linkHw && (
                  <Link to={project.linkHw} className="project-cta">
                    {t('featuredProjects.ctaHw')} <span>→</span>
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