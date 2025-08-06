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
  { title: 'XPS Analyser',              img: xpsSwImg,          path: '/projects/software/xps' },
  { title: 'RITA',                      img: ritaImg,           path: '/projects/software/rita' },
//   { title: 'Autostep Finder (Julia)',   img: autostepfinderImg, path: '/projects/software/autostepfinder' }
]

export default function OutreachPage() {
return (
    <div className="projects-container">
        <Link to="/projects" className="back-link">
            ← Back to Projects & Software
        </Link>
        <h1>Outreach & Communication</h1>
        <p>
            I have been involved in various outreach and communication activities,
            including public talks, workshops, and educational content creation.
            Below are some videos and talks I delivered during my career.
        </p>
        <h2>Azrieli Fellows Forum 2024 </h2>
        <div className="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4kHX6_VbOJY"
                title="Science Talk"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
        <h2>BOLD video in collaboration with PixVideos (2020) </h2>
        <p>
            I wrote the script and designed the animation concept for this outreach video about the BOLD project (back then called SABAT for Single Atom BArium Tagging). The spanish animation company{" "}
            <a href="https://pix-videos.com/" target="_blank" rel="noopener noreferrer">
                PixVideos
            </a>{" "}
            carried out the bulk of the work and iterated with me until a satisfactory product was achieved.
        </p>
        <div className="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/W4_Qjd3h2PU"
                title="Outreach Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>

        <h2>Poster Neutrino 2020 (virtual-Fermilab, Chicago, US)</h2>

        <div className="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0l5_KLsLNuY"
                title="Outreach Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>

       <h2>Poster Neutrino 2022 (virtual-Seoul, South Korea) </h2>

       <div className="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://youtube.com/embed/jwfm_mmw-LY"
                title="Outreach Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>


        {/* <div className="project-panels">
            {cards.map(({ title, img, path }) => (
                <Link to={path} className="project-card" key={title}>
                    <img src={img} alt={title} />
                    <div className="project-card-title">
                        <h3>{title}</h3>
                    </div>
                </Link>
            ))}
        </div> */}
    </div>
)
}