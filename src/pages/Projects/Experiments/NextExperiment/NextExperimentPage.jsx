import React from 'react'
import { Link } from 'react-router-dom'
import './NextExperiment.css'

import nextImg from '../images/next100_vessel.jpg'

export default function NextExperiment() {
  return (
    <div className="projects-container">
      <Link to="/projects/experiments" className="back-link">← Back to Experiments & Setups</Link>
      <h1>NEXT experiment</h1>
      <img className="project-image" src={nextImg} alt="NEXT Setup" />
      <p>Details about NEXT</p>
      {/* Additional content can be added here */}
    </div>
  )
}