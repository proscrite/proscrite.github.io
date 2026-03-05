import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Constellation.css';

export default function Constellation() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const cards = root.querySelectorAll('.skill-card');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.12 });

    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  console.log('Rendering Constellation component');
  return (
    <section ref={containerRef} className="constellation-section" style={{ marginTop: '2rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t('constellation.title')}</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', margin: 0 }}>{t('constellation.subtitle')}</p>
      </div>
      <div className="skills-container">
        <div className="skills-grid">
          {/* Card 1: Optics */}
          <div className="skill-card">
            <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/>
              <path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
              <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
            </svg>
            <h4>{t('constellation.cards.optics.title')}</h4>
            <p>{t('constellation.cards.optics.desc')}</p>
          </div>

          {/* Card 2: Surface Science */}
          <div className="skill-card">
            <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>
            </svg>
            <h4>{t('constellation.cards.surface.title')}</h4>
            <p>{t('constellation.cards.surface.desc')}</p>
          </div>

          {/* Card 3: Particle Physics */}
          <div className="skill-card">
            <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/>
            </svg>
            <h4>{t('constellation.cards.particle.title')}</h4>
            <p>{t('constellation.cards.particle.desc')}</p>
          </div>

          {/* Card 4: Photochemistry */}
          <div className="skill-card">
            <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
              <path d="M8.5 2h7"/><path d="M14 9.5 13.5 12h-3l-.5-2.5"/>
            </svg>
            <h4>{t('constellation.cards.photochem.title')}</h4>
            <p>{t('constellation.cards.photochem.desc')}</p>
          </div>

          {/* Card 5: Systems Integration */}
          <div className="skill-card">
            <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/>
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
            </svg>
            <h4>{t('constellation.cards.systems.title')}</h4>
            <p>{t('constellation.cards.systems.desc')}</p>
          </div>

          {/* Card 6: AI & Software */}
          <div className="skill-card">
            <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/>
              <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/>
              <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/>
              <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/>
              <path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>
            </svg>
            <h4>{t('constellation.cards.ai.title')}</h4>
            <p>{t('constellation.cards.ai.desc')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
