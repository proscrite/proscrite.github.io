//// filepath: src/pages/ProjectsSoftware/Layout.jsx
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './ProjectsSoftware.css'

export default function ProjectsLayout() {
  return (
    <div className="projects-container">
      <Link to="/" className="back-link">← Back to Home</Link>
      <Outlet/>
    </div>
  )
}