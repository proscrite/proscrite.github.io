import React from 'react'
import { Link } from 'react-router-dom'
import ManhattanInteractiveMap from './ManhattanInteractive';
import './Manhattan.css'
// import sabbathSetupImg from '../images/cfm_optics6.jpg'

export default function ManhattanPage() {
  return (
    <div className="projects-container">
      <h1>ManHatTan</h1>
      
      <p align="justify">
        Details about the ManHatTan app. The ManHatTan app is a language learning tool designed to help users
        improve their vocabulary and language skills through interactive exercises and games.
        </p>
      <div>
        <ManhattanInteractiveMap/>
      </div>
    </div>
  )
}