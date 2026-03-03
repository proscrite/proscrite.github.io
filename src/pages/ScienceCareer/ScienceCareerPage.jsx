import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ScienceCareer.css';
import fbiBaVid from './videos/fbi_ba_surface.mp4';
import boldVid from './videos/next-bold.mp4';

const items = [
  {
    title: "2025 - 2026",
    cardTitle: "Postdoc (BGU): RITA Project",
    cardDetailedText: (
      <>
        <p className="timeline-summary">Developing a custom ion source and automated DAQ architecture for the BOLD experiment.</p>
        <p className="timeline-key-title"><strong>Key Achievements:</strong></p>
        <ul className="timeline-bullets">
          <li>Engineered 24/7 unattended DAQ system.</li>
          <li>Increased daily measurement capacity by 140%.</li>
          <li>Architected 5 GS/s waveform multiplexing.</li>
        </ul>
      </>
    ),
    url: "/projects/experiments/RitaSetup"
  },
  {
    title: "2023 - 2025",
    cardTitle: "Postdoc (HUJI): ML & Microscopy Automation",
    cardDetailedText: (
      <>
        <p className="timeline-summary">Advancing automated fluorescence microscopy and deploying machine learning for low-SNR signal detection.</p>
        <p className="timeline-key-title"><strong>Key Achievements:</strong></p>
        <ul className="timeline-bullets">
          <li>Architected <code>sabat_sw</code> hardware control GUI.</li>
          <li>Deployed CNNs for signal edge detection.</li>
          <li>Achieved major algorithm speedups via Julia.</li>
        </ul>
      </>
    ),
    url: "/projects/experiments/SabatHuji"
  },
  {
    title: "2020 - 2023",
    cardTitle: "PhD: Optics & Closed-Loop Automation",
    cardDetailedText: (
      <>
        <p className="timeline-summary">Designed and automated a custom fluorescence microscope for single-molecule detection.</p>
        <p className="timeline-key-title"><strong>Key Achievements:</strong></p>
        <ul className="timeline-bullets">
          <li>Built closed-loop optical test bench.</li>
          <li>Developed computer vision autofocus.</li>
          <li>Integrated lasers, PMTs, and APDs.</li>
        </ul>
      </>
    )
  },
  {
    title: "2019 - 2023",
    cardTitle: "PhD: Surface Science & UHV Prototyping",
    cardDetailedText: (
      <>
        <p className="timeline-summary">Characterized single-ion barium sensors in Ultra-High Vacuum using XPS and STM.</p>
        <p className="timeline-key-title"><strong>Key Achievements:</strong></p>
        <ul className="timeline-bullets">
          <li>First experimental proof of dry-environment chelation.</li>
          <li>Engineered <code>xps_sw</code> data parsing pipeline.</li>
          <li>Validated novel Atomic Layer Injection system.</li>
        </ul>
      </>
    ),
    url: "/projects/experiments/SurfaceScience"
  },
  {
    title: "2019 - 2023",
    cardTitle: "PhD: NEXT-BOLD Operations & Mentorship",
    cardDetailedText: (
      <>
        <p className="timeline-summary">Drove the technological foundations of NEXT-BOLD and managed Gas Xenon TPC operations.</p>
        <p className="timeline-key-title"><strong>Key Achievements:</strong></p>
        <ul className="timeline-bullets">
          <li>Maintained NEXT-100 DAQ reliability.</li>
          <li>Coordinated international technical working groups.</li>
          <li>Mentored 10+ junior researchers.</li>
        </ul>
      </>
    ),
    url: "/projects/experiments/NextExperiment"
  },
  {
    title: "2016 - 2018",
    cardTitle: "MSc: XENON DAQ Engineering (MPIK)",
    cardDetailedText: (
      <>
        <p className="timeline-summary">Conducted thesis research optimizing data acquisition systems for the XENON Dark Matter experiment.</p>
        <p className="timeline-key-title"><strong>Key Achievements:</strong></p>
        <ul className="timeline-bullets">
          <li>Redesigned LabVIEW control systems.</li>
          <li>Achieved 40% improvement in critical material cleanliness through A/B testing.</li>
          <li>Built Python/ROOT analytical pipelines.</li>
        </ul>
      </>
    )
  },
  {
    title: "2012 - 2016",
    cardTitle: "BSc: Foundations in Physics",
    cardDetailedText: (
      <>
        <p className="timeline-summary">Built a theoretical and experimental physics foundation across two European universities.</p>
        <p className="timeline-key-title"><strong>Key Achievements:</strong></p>
        <ul className="timeline-bullets">
          <li>B.Sc. in Physics (University of Valencia).</li>
          <li>Erasmus exchange (University of Groningen).</li>
          <li>Thesis on Quantum Chromodynamics.</li>
        </ul>
      </>
    )
  }
];

// Video list for the left media column. Add or reorder entries here.
const videos = [
  { src: 'https://www.youtube.com/embed/4kHX6_VbOJY', title: 'Live Keynote: Demystifying NEXT-BOLD' },
  { src: 'https://www.youtube.com/embed/W4_Qjd3h2PU', title: 'Scientific Explainer: The BOLD Mission' },
  { src: fbiBaVid, title: 'Blender 3D Simulation: Molecular Folding & Chelation' },
  { src: boldVid, title: 'Blender 3D Simulation: Detector Topology & Ion Drift' }
];

export default function ScienceCareer() {
  const navigate = useNavigate();
  const timelineRef = useRef(null);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const mediaColWrapperRef = useRef(null);
  const mediaColInnerRef = useRef(null);
  
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
    <h2 className="section-title">The R&D Track Record</h2>
    <p className="page-subtitle">From theoretical physics to full-stack systems engineering.</p>
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
              <span className="timeline-date">{item.title}</span>
              <h3 className="timeline-title">{item.cardTitle}</h3>
              <p className="timeline-text">{item.cardDetailedText}</p>
              {item.url && (
                <button className="timeline-link" onClick={() => navigate(item.url)}>
                  View Project →
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
    