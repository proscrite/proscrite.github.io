import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import TextSweep from '../../components/TextSweep'; // Import the new component
import profileImg   from '../../assets/profile.jpg'
import fbiCover     from '../../assets/fbi_cover_v2.png'
import softwareProj from '../../assets/softwareProjects.png'
import backgroundVid from '../../assets/tracks-bg.webm'

export default function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  // Mottos Carousel State
  const [activeMottoIndex, setActiveMottoIndex] = useState(0);
  const mottos = [
    "From subatomic signals to scalable algorithms.",
    "Engineering complex hardware-software pipelines at the edge of detection.",
    "Translating extreme-noise data into high-value intelligence.",
    "Automating the impossible: 7 years of full-stack problem solving."
  ];

  // Rotate mottos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMottoIndex((prev) => (prev + 1) % mottos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [mottos.length]);

  // Rotating Text State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  const toRotate = [ "Computational Physicist", "Applied ML Engineer", "Multidisciplinary Researcher" ];
  const period = 2000;

  useEffect(() => {
    // We want the video to be seen, so the body background must be transparent.
    // The video itself provides the "background".
    document.body.style.backgroundColor = "transparent";
    
    // Cleanup function: Revert to dark gray when leaving the page
    return () => {
      document.body.style.backgroundColor = "#242424";
    };
  }, []);

  // Scroll Tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate opacity: 0 at top, can go up to ~0.95
      let opacity = Math.min((scrollTop / windowHeight) * 1.5, 0.2);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing Effect
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 }); // Triggers when 10% of the card is visible

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (<>
      {/* 1. The Fullscreen Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        <source src={backgroundVid} type="video/webm" />
      </video>
    
      {/* 2a. Static Video Overlay for contrast */}
      <div className="video-overlay"></div>

      {/* 2b. The Scroll Overlay */}
      <div 
        className="scroll-overlay"
        style={{ opacity: scrollOpacity }}
      ></div>

    <div className="home-content-wrapper">
      <div className="home-container">
        {/* Hero Section */}
        <header className="header">
          <img src={profileImg} alt="Profile" className="profile-pic" />
          <h1><TextSweep text="Pablo Herrero Gomez, Ph.D." /></h1>
          <h2 style={{ minHeight: '1.5em' }}>
            {text}
            <span className="cursor">|</span>
          </h2>
          
          <div style={{ minHeight: '4em', margin: '2rem 0' }}>
            <TextSweep key={activeMottoIndex} text={mottos[activeMottoIndex]} className="motto-text" />
          </div>

          <div style={{ marginTop: '2rem', opacity: Math.max(0, 1 - scrollOpacity * 3) }}>
            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Scroll to explore</p>
          </div>
        </header>

        {/* Constellation and Roadmap Panels */}
        <div className="skills-container">
          <div className="skills-grid">
        
        {/* Card 1: Optics */}
        <div className="skill-card">
          <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/>
            <path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
            <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
          </svg>
          <h4>Optics & Microscopy</h4>
          <p>Designing and automating high-resolution fluorescence microscopes to image and isolate single molecules.</p>
        </div>

        {/* Card 2: Surface Science */}
        <div className="skill-card">
          <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Crystal Lattice / Material Science Icon */}
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <h4>Surface Science & UHV</h4>
          <p>Mastering techniques like X-ray Photoemission Spectroscopy (XPS) and Scanning Tunneling Microscopy (STM) in Ultra-High Vacuum.</p>
        </div>

        {/* Card 3: Particle Physics */}
        <div className="skill-card">
          <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/>
          </svg>
          <h4>Particle Physics & Detectors</h4>
          <p>Operating Gas Xenon TPCs and validating complex sensor arrays (CMOS, PIN, PMT) in extreme environments.</p>
        </div>

        {/* Card 4: Photochemistry */}
        <div className="skill-card">
          <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
            <path d="M8.5 2h7"/><path d="M14 9.5 13.5 12h-3l-.5-2.5"/>
          </svg>
          <h4>Photochemistry & Sensors</h4>
          <p>Leveraging organic chemistry and photochemistry to characterize novel chemo-sensors for subatomic particle tagging.</p>
        </div>

        {/* Card 5: Systems Integration */}
        <div className="skill-card">
          <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/>
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
          </svg>
          <h4>Systems Orchestration</h4>
          <p>Architecting Python-based control suites to synchronize heterogeneous hardware and fully automate data acquisition.</p>
        </div>

        {/* Card 6: AI & Software */}
        <div className="skill-card">
          <svg className="skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/>
            <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/>
            <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/>
            <path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>
          </svg>
          <h4>AI & Full-Stack Engineering</h4>
          <p>Deploying custom CNNs for high-noise signal detection and building end-to-end applications integrated with modern LLMs.</p>
        </div>

      {/* </div> */}
        </div>
      </div>

        <div className="panels" style={{ paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
          <Link to="/science" className="panel">
            <img src={fbiCover} alt="Science career" />
            <div className="panel-title"><h3>Science career</h3></div>
          </Link>
          <Link to="/projects" className="panel">
            <img src={softwareProj} alt="Projects & Software" />
            <div className="panel-title"><h3>Projects &amp; Software</h3></div>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
 