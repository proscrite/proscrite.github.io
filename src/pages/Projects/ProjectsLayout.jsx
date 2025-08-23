//// filepath: src/pages/ProjectsSoftware/Layout.jsx
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Projects.css'

export default function ProjectsLayout() {
  const location = useLocation()
  const path = location.pathname

  const isProjectsParent = path === '/projects'
  const isExperimentsIndex = path === '/projects/experiments'
  const isSoftwareIndex = path === '/projects/software'

  const isExperimentsChild = path.startsWith('/projects/experiments/') && !isExperimentsIndex
  const isSoftwareChild = path.startsWith('/projects/software/') && !isSoftwareIndex

  return (
    <div className="projects-container">
      <div className="back-links">
        <Link to="/" className="back-link">← Back to Home</Link>
        {!isProjectsParent && (
          <Link to="/projects" className="back-link">← to Projects & Software</Link>
        )}
        {isExperimentsChild && (
          <Link to="/projects/experiments" className="back-link">← to Experiments & Setups</Link>
        )}
        {isSoftwareChild && (
          <Link to="/projects/software" className="back-link">← to Software & Tools</Link>
        )}
      </div>
      <Outlet/>
    </div>
  )
}