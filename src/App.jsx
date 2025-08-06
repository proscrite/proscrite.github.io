import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ScienceCareer from './pages/ScienceCareer'
import ProjectsSoftware from './pages/ProjectsSoftware'
import SoftwarePage from './pages/SoftwarePage'
import ExperimentsPage from './pages/ExperimentsPage'
import OutreachPage from './pages/OutreachPage'
// import OtherProjectsPage from './pages/OtherProjectsPage'
// import AboutMePage from './pages/AboutMePage'

// now import everything from src/assets
import profileImg from './assets/profile.jpg'
import fbiCover from './assets/fbi_cover_v2.png'
import softwareProj from './assets/softwareProjects.png'

import './App.css'

function Home() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/science" element={<ScienceCareer />} />
      <Route path="/projects" element={<ProjectsSoftware />} />
      <Route path="/projects/software"     element={<SoftwarePage />} /> 
      <Route path="/projects/experiments" element={<ExperimentsPage />} />
      <Route path="/projects/outreach"    element={<OutreachPage />} />
      {/* <Route path="/projects/other"       element={<OtherProjectsPage />} />
      <Route path="/projects/about"       element={<AboutMePage />} />  */}
    </Routes>
  )
}