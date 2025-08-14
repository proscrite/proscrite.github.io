import React from 'react'
import { Link } from 'react-router-dom'
import sabbathSetupImg from './images/cfm_optics6.jpg'
import ritaImg from './images/bgu_raTag_wis.jpg'
import baIonSourceImg from './images/bgu_ba_ion.jpg'
import microscopyCfmImg from './images/cfm_optics_2pa_laser.jpg'
import xpsSetupImg from './images/cfm_xps2.jpg'
import boldImg from './images/fbi_cover_v2.png'
import nextImg from './images/next100_vessel.jpg'
import ramonImg from './images/mpik_lab2.jpg'
import xenon1tImg from './images/xenon1t.png'
import '../Projects.css'

const cards = [
  { title: 'NEXT', slug: 'nextExperiment', img: nextImg },
  { title: 'BOLD (Barium Ion Light Detection)', slug: 'bold', img: boldImg },
  { title: 'Sabbath (Microscopy at HUJI)', slug: 'SabbathHuji', img: sabbathSetupImg },
  { title: 'RITA (Radium Ion Tagging)', slug: 'ritaSetup', img: ritaImg },
  { title: 'Barium Ion Gun for BOLD', slug: 'baSource', img: baIonSourceImg },
  { title: 'Microscopy for BOLD at CFM', slug: 'microscopyCfm', img: microscopyCfmImg },
  { title: 'Surface Science for BOLD at CFM', slug: 'xpsSetup', img: xpsSetupImg },
  { title: 'RaMon', slug: 'ramon', img: ramonImg },
  { title: 'XENON-1T', slug: 'xenon-1t', img: xenon1tImg }
]

export default function ExperimentsIndex() {
  return (
    <>
      <h1>Experiments & Setups</h1>
      <div className="project-panels">
        {cards.map(({ title, img, slug }) => (
          <Link
            key={title}
            to={slug}  // <-- relative to "/projects/experiments"
            className="project-card"
          >
            <img src={img} alt={title}/>
            <div className="project-card-title">
              <h3>{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}