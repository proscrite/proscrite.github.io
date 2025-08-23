import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import '../Projects.css'

export default function ExperimentsLayout() {
  const location = useLocation()
  const isIndex = location.pathname === '/projects/experiments'

  return (
    <div className="projects-container">

      <Outlet/>
    </div>
  )
}