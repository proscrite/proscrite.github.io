import React from 'react'
import { Link } from 'react-router-dom'
import sabbathImg from '../assets/sabbath_software.png'
import manhattanImg from '../assets/manhattan.png'
import xpsSwImg from '../assets/xps_sw.png'
import ritaImg from '../assets/rita.png'
// import aboutMeImg from '../assets/heidelberg.jpg'
import './ProjectsSoftware.css'

const cards = [
  { title: 'Sabbath',                   img: sabbathImg,        path: '/projects/software/sabbath' },
  { title: 'ManHatTan',                 img: manhattanImg,      path: '/projects/software/manhattan' },
  { title: 'XPS Analyser',              img: xpsSwImg,            path: '/projects/software/xps' },
    { title: 'RITA',                    img: ritaImg,           path: '/projects/software/rita' },
//   { title: 'Autostep Finder (Julia)',   img: autostepfinderImg, path: '/projects/software/autostepfinder' }
]

export default function SoftwarePage() {
  return (
    <div className="projects-container">
     <Link to="/projects" className="back-link">← Back to Projects & Software</Link>
      <h1>My Software</h1>

      <div className="project-panels">
        {cards.map(({ title, img, path }) => (
          <Link to={path} className="project-card" key={title}>
            <img src={img} alt={title} />
            <div className="project-card-title">
              <h3>{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}