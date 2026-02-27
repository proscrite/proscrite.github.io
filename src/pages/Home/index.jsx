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
            <svg className="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Laser / Optics Icon */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <h4>Optics & Automated Instrumentation</h4>
            <ul>
              <li>Built fully automated closed-loop test benches (Lasers, PMTs, Cameras).</li>
              <li>Engineered Python orchestration engines for 24/7 unattended data acquisition.</li>
              <li>Developed computer vision autofocus algorithms for single-molecule detection.</li>
            </ul>
          </div>

          {/* Card 2: High-Frequency / ML */}
          <div className="skill-card">
            <svg className="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Signal / Waveform Icon */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <h4>Nuclear & High-Frequency Systems</h4>
            <ul>
              <li>Architected hybrid analysis pipelines for 5 GS/s waveform datasets.</li>
              <li>Deployed CNNs for low-SNR subatomic signal detection and edge extraction.</li>
              <li>Ported critical bottlenecks to Julia, achieving 50x processing speedups.</li>
            </ul>
          </div>

          {/* Card 3: Vacuum / Hardware */}
          <div className="skill-card">
            <svg className="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Microchip / Hardware Icon */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <h4>Ultra-High Vacuum & Hardware Control</h4>
            <ul>
              <li>Programmed SCPI / VISA protocols for automated high-voltage and oscilloscope control.</li>
              <li>Developed custom GUI control suites (Sabat SW) for centralized hardware management.</li>
              <li>Built parsing pipelines for automated extraction of raw spectroscopy data.</li>
            </ul>
          </div>
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
 