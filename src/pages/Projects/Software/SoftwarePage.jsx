import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import sabatImg from './images/sabat_software.png'
import manhattanImg from './images/manhattan.png'
import xpsSwImg from './images/xps_sw.png'
import ritaImg from './images/ratag_sw.png'
import autostepfinderImg from './images/autostepfinder.png'
// import aboutMeImg from './images/heidelberg.jpg'
import '../Projects.css'

const cards = [
  { title: 'RaTag (software for RITA)',                  img: ritaImg,           path: '/projects/software/RaTag' },
  { title: 'Sabat (microscopy GUI)',                     img: sabatImg,           path: '/projects/software/sabatsw' },
  { title: 'ManHatTan (NLP as a hobby)',                 img: manhattanImg,      path: '/projects/software/manhattan' },
  { title: 'XPS Analyser',                               img: xpsSwImg,            path: '/projects/software/xps' },
  { title: 'Autostep Finder (Julia)',                    img: autostepfinderImg,     path: '/projects/software/autostepfinder' }
]

export default function SoftwareIndex() {
  return (
    <div className="projects-container">
      <h1>My Software</h1>
      <p align='justify'>
        Here you can find an uncomprehensive list of the software projects I have worked on, mainly related to my research but also as personal projects.
        Click on each card to learn more about the specific software, its features, and its applications.
      </p>
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