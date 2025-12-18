import React from 'react'
import { Link } from 'react-router-dom'

import XpsSetupImg from '../images/cfm_xps2.jpg'

export default function SurfaceSciencePage() {
  return (
    <div className="projects-container">
      <h1>Surface Science for BOLD at CFM</h1>
      <img src={XpsSetupImg} alt="XPS Setup" />
      <p>Details about the my work at CFM on surface science.</p>
      {/* Additional content can be added here */}
    </div>
  )
}