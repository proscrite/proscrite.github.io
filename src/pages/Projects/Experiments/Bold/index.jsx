import React from 'react'
import { Link } from 'react-router-dom'

import nextImg from '../images/fbi_cover_v2.png'

export default function BoldPage() {
  return (
    <div className="projects-container">
      <h1>NEXT experiment</h1>
      <img src={nextImg} alt="BOLD Project" />
      <p>Details about Bold</p>
      {/* Additional content can be added here */}
    </div>
  )
}