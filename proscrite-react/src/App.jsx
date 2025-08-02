import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ScienceCareer from './pages/ScienceCareer'
import ProjectsSoftware from './pages/ProjectsSoftware'
import './App.css'

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Pablo Herrero Gomez</h1>
        <h2>Personal Website</h2>
      </header>
      <main className="cards">
        <Link to="/science" className="card">
          <h3>Science career</h3>
        </Link>
        <Link to="/projects" className="card">
          <h3>Projects & Software</h3>
        </Link>
      </main>
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