import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ScienceCareer from './pages/ScienceCareer'
import ProjectsSoftware from './pages/ProjectsSoftware'

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
    </Routes>
  )
}