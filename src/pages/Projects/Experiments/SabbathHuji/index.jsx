import React from 'react'
import { Link } from 'react-router-dom'

import sabbathSetupImg from '../images/huji_lab5.jpg'

export default function SabbathHujiPage() {
  return (
    <div className="projects-container">
      <h1>Sabbath (Microscopy at HUJI)</h1>
      <img src={sabbathSetupImg} alt="Sabbath Setup" />
      <p>Details about the Sabbath microscopy setup at the Hebrew University of Jerusalem.</p>
      {/* Additional content can be added here */}
    </div>
  )
}