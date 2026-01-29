import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function PreparationPage() {
  return (
    <div className="projects-container">
      <h1>Surface Preparation</h1>
      <p><Link to="/projects/experiments/SurfaceScience">Back to Surface Science index</Link></p>
      
      <p>This is a placeholder for the Surface Science Results page. Replace with full content as needed.</p>
    </div>
  )
}
