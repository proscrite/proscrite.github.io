import React from 'react'
import { Link } from 'react-router-dom'
import profileImg   from '../../assets/profile.jpg'
import fbiCover     from '../../assets/fbi_cover_v2.png'
import softwareProj from '../../assets/softwareProjects.png'

export default function Home() {
  return (
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
  )
}