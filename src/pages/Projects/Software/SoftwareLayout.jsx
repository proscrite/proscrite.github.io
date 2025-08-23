import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import '../Projects.css'

export default function SoftwareLayout() {

  return (
    <div className="projects-container">

      <Outlet/>
    </div>
  )
}