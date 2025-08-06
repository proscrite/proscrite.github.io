import React from 'react'
import { Link } from 'react-router-dom'
import sabbathSetupImg from '../assets/cfm_optics6.jpg'
import ritaImg from '../assets/bgu_raTag_wis.jpg'
import baIonSourceImg from '../assets/bgu_ba_ion.jpg'
import microscopyCfmImg from '../assets/cfm_optics_2pa_laser.jpg'
import xpsSetupImg from '../assets/cfm_xps2.jpg'
import boldImg from '../assets/fbi_cover_v2.png'
import nextImg from '../assets/next100_vessel.jpg'
import ramonImg from '../assets/mpik_lab2.jpg'
import xenon1tImg from '../assets/xenon1t.png'
import './ProjectsSoftware.css'

const cards = [
  { title: 'Sabbath (Microscopy at HUJI)',      img: sabbathSetupImg,    path: '/projects/setups/sabbathHuji' },
  { title: 'RITA (Radium Ion TAgging)',         img: ritaImg,            path: '/projects/setups/ritaSetup' },
  { title: 'Barium Ion Gun for BOLD',           img: baIonSourceImg,     path: '/projects/setups/baSource' },
  { title: 'Microscopy for BOLD at CFM',        img: microscopyCfmImg,   path: '/projects/setups/microscopyCfm' },
  { title: 'Surface Science for BOLD at CFM',   img: xpsSetupImg,        path: '/projects/setups/xpsSetup' },
  { title: 'BOLD (Barium Ion Light Detection)', img: boldImg,            path: '/projects/setups/bold' },
  { title: 'NEXT',                              img: nextImg,            path: '/projects/setups/nextExperiment' },
  { title: 'RaMon',                             img: ramonImg,           path: '/projects/setups/ramon'},
  { title: 'XENON-1T',                          img: xenon1tImg,            path: '/projects/setups/xenon-1t'}
]

export default function ExperimentsPage() {
  return (
    <div className="projects-container">
     <Link to="/projects" className="back-link">← Back to Projects & Software</Link>
      <h1>Experiments & Setups</h1>

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