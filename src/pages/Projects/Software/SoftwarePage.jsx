import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import sabbathImg from './images/sabbath_software.png'
import manhattanImg from './images/manhattan.png'
import xpsSwImg from './images/xps_sw.png'
import ritaImg from './images/rita.png'
// import aboutMeImg from './images/heidelberg.jpg'
import '../Projects.css'

const cards = [
  { title: 'Sabbath',                   img: sabbathImg,        path: '/projects/software/sabbath' },
  { title: 'ManHatTan',                 img: manhattanImg,      path: '/projects/software/manhattan' },
  { title: 'XPS Analyser',              img: xpsSwImg,            path: '/projects/software/xps' },
    { title: 'RITA',                    img: ritaImg,           path: '/projects/software/rita' },
//   { title: 'Autostep Finder (Julia)',   img: autostepfinderImg, path: '/projects/software/autostepfinder' }
]

export default function SoftwareLayout() {
  return (
    <div className="projects-container">
      <Link to="/projects" className="back-link">
        ← Back to Projects & Software
      </Link>
      <h1>My Software</h1>
      <div className="project-panels">
        {cards.map(({ title, img, path }) => (
          <Link to={path.replace('/projects/software/', '')} className="project-card" key={title}>
            <img src={img} alt={title} />
            <div className="project-card-title">
              <h3>{title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Outlet/>
    </div>
  )
}