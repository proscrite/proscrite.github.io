import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextSweep from '../../components/TextSweep';
import profileImg from '../../assets/profile.jpg';
import backgroundVid from '../../assets/tracks-bg.webm';

export default function Hero() {
  const { t } = useTranslation();

  // All text sourced from i18n — arrays use { returnObjects: true }
  const mottos = t('hero.mottos', { returnObjects: true });

  // rotating motto index (for TextSweep)
  const [activeMottoIndex, setActiveMottoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMottoIndex((prev) => (prev + 1) % mottos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [mottos.length]);

  // typing effect for job titles
  const toRotate = t('hero.roles', { returnObjects: true });
  const period = 2000;
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let ticker = setTimeout(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (isDeleting) setDelta(prev => Math.max(50, prev / 2));

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta]);

  // scroll opacity for overlay
  const [scrollOpacity, setScrollOpacity] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      let opacity = Math.min((scrollTop / windowHeight) * 1.5, 0.2);
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        <source src={backgroundVid} type="video/webm" />
      </video>

      <div className="video-overlay"></div>

      <div 
        className="scroll-overlay"
        style={{ opacity: scrollOpacity }}
      ></div>

      <div id="hero" className="home-content-wrapper">
        <div className="home-container">
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
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{t('hero.scrollPrompt')}</p>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
