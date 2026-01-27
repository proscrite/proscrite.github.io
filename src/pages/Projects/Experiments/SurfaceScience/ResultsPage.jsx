import React from 'react'
import { Link } from 'react-router-dom'

export default function ResultsPage() {
  return (
    <div className="projects-container">
      <h1>Surface Science Results</h1>
      <p>This is a placeholder for the Surface Science Results page. Replace with full content as needed.</p>
      <p><Link to="/projects/experiments/SurfaceScience">Back to Surface Science index</Link></p>
    </div>
  )
}
