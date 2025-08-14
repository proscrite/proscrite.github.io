import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Projects.css'

export default function ExperimentsLayout() {
  return (
    <div className="projects-container">
      <Link to="/projects" className="back-link">
        ← Back to Projects & Software
      </Link>
      <Outlet/>
    </div>
  )
}