import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ScienceCareer.css';
import fbiBaVid from './videos/fbi_ba_surface.mp4';
import boldVid from './videos/next-bold.mp4';

// Static routing/asset data only — all display text lives in i18n
const itemsMeta = [
  { url: "/projects/experiments/RitaSetup" },
  { url: "/projects/experiments/SabatHuji" },
  { url: null },
  { url: "/projects/experiments/SurfaceScience" },
  { url: "/projects/experiments/NextExperiment" },
  { url: null },
  { url: null },
];

const videoSrcs = [
  { src: 'https://www.youtube.com/embed/4kHX6_VbOJY' },
  { src: 'https://www.youtube.com/embed/W4_Qjd3h2PU' },
  { src: fbiBaVid },
  { src: boldVid },
];

export default function ScienceCareer() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const timelineRef = useRef(null);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const mediaColWrapperRef = useRef(null);
  const mediaColInnerRef = useRef(null);

  // Merge translated text with static metadata
  const itemsI18n = t('scienceCareer.items', { returnObjects: true });
  const items = itemsMeta.map((meta, i) => ({ ...meta, ...itemsI18n[i] }));

  const videoTitles = t('scienceCareer.videoTitles', { returnObjects: true });
  const videos = videoSrcs.map((v, i) => ({ ...v, title: videoTitles[i] }));
  
  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll animation observer for fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => observer.observe(el));

    // Video switching observer — changes active video when a timeline card enters view
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.videoIdx, 10);
          if (!isNaN(idx)) setActiveVideoIdx(idx);
        }
      });
    }, {
    threshold: 0.2, // Trigger earlier (20% visibility)
      rootMargin: "-20% 0px -20% 0px"
    });
    document.querySelectorAll('[data-video-idx]')
      .forEach(el => videoObserver.observe(el));

    return () => { observer.disconnect(); videoObserver.disconnect(); };
  }, []);
  
  return (
    <div className="science-container">
  <div className="science-header">
    <h2 className="section-title">{t('scienceCareer.title')}</h2>
    <p className="page-subtitle">{t('scienceCareer.subtitle')}</p>
  </div>

  {/* NEW: The Dual-Column Wrapper */}
  <div className="timeline-split-layout">
    
    {/* Left Column: Media & Communication (render from videos array) */}
    {/* wrapper stays in grid flow; inner div is what the JS sticky moves */}
    <div className="timeline-media-column" ref={mediaColWrapperRef}>
      <div className="timeline-media-inner" ref={mediaColInnerRef}>
      {videos.map((v, idx) => (
        <div
          key={idx}
          className={`video-wrapper${idx === activeVideoIdx ? ' active' : ''}`}
        >
          <div className="video-head">
            <h3 className="media-title">{v.title}</h3>
          </div>
          <div className="video-frame">
            {v.src && v.src.startsWith('http') ? (
              <iframe
                src={v.src}
                title={v.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video controls>
                <source src={v.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      ))}
      </div>{/* /timeline-media-inner */}
    </div>{/* /timeline-media-column */}

    {/* Right Column: The Hardcore Engineering Timeline */}
    <div className="timeline-content-column">
      <div className="custom-timeline" ref={timelineRef}>
        {items.map((item, index) => (
          <div key={index} className="timeline-item" data-video-idx={Math.min(Math.floor(index / items.length * videos.length), videos.length - 1)}>
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              {index !== items.length - 1 && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{item.period}</span>
              <h3 className="timeline-title">{item.cardTitle}</h3>
              <div className="timeline-text">
                <p className="timeline-summary">{item.summary}</p>
                <p className="timeline-key-title"><strong>{t('scienceCareer.keyAchievements')}</strong></p>
                <ul className="timeline-bullets">
                  {item.bullets && item.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
              {item.url && (
                <button className="timeline-link" onClick={() => navigate(item.url)}>
                  {t('scienceCareer.viewProject')}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  );
}
    