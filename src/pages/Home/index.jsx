import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import profileImg   from '../../assets/profile.jpg'
import fbiCover     from '../../assets/fbi_cover_v2.png'
import softwareProj from '../../assets/softwareProjects.png'
import backgroundVid from '../../assets/tracks-bg.webm'

export default function Home() {
  useEffect(() => {
    // We want the video to be seen, so the body background must be transparent.
    // The video itself provides the "background".
    document.body.style.backgroundColor = "transparent";
    
    // Cleanup function: Revert to dark gray when leaving the page
    return () => {
      document.body.style.backgroundColor = "#242424";
    };
  }, []);


  return (
    <>
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

    <div className="home-content-wrapper">
      <div className="home-container">
        <header className="header">
          <img src={profileImg} alt="Profile" className="profile-pic" />
          <h1>Pablo Herrero Gomez</h1>
          <h2>Personal Website</h2>
          <p>Welcome to my personal website! Here you can find information about my science career and software projects.</p>
          <p>Feel free to explore the links below.</p>
        </header>
        <div className="panels">
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