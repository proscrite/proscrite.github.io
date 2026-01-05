import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import sabbathSetupImg from './images/huji_lab5.jpg'
import ritaImg from './images/rita_gasline_landscape.jpg'
import baIonSourceImg from './images/bgu_ba_ion.jpg'
import microscopyCfmImg from './images/cfm_optics_2pa_laser.jpg'
import xpsSetupImg from './images/cfm_xps2.jpg'
import boldImg from './images/fbi_cover_v2.png'
import nextImg from './images/next100_vessel.jpg'
import ramonImg from './images/mpik_lab2.jpg'
import xenon1tImg from './images/xenon1t.png'
import '../Projects.css'

const cards = [
  { title: 'The context: NEXT (particle physics)', slug: 'nextExperiment', img: nextImg },
  { title: 'Main project: BOLD (Barium Ion Light Detection)', slug: 'bold', img: boldImg },
  { title: 'Nuclear physics project: RITA (Radium Ion Tagging)', slug: 'ritaSetup', img: ritaImg },
  { title: 'Ion physics project: Barium Ion Gun for BOLD', slug: 'baSource', img: baIonSourceImg },
  { title: 'Optics project: Sabbath (Microscopy at HUJI)', slug: 'SabbathHuji', img: sabbathSetupImg },
  { title: 'Optics project: Microscopy for BOLD at CFM', slug: 'microscopyCfm', img: microscopyCfmImg },
  { title: 'Surface Science for BOLD at CFM', slug: 'SurfaceScience', img: xpsSetupImg },
  { title: 'Nuclear physics project: RaMon', slug: 'ramon', img: ramonImg },
  { title: 'Past experiments: XENON-1T', slug: 'xenon-1t', img: xenon1tImg }
]

export default function ExperimentsIndex() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container">
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
    </div>
  )
}