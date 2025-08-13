import React from 'react'
import { Link } from 'react-router-dom'
import softwareImg from './images/software.png'
import setupsImg from './images/setups.png'
import outreachImg from './images/outreach.png'
import otherProjectsImg from './images/other_projects.png'
import aboutMeImg from './images/heidelberg.jpg'
import './ProjectsSoftware.css'

const cards = [
  { title: 'Software',            img: softwareImg,     path: '/projects/software' },
  { title: 'Experiments / Setups', img: setupsImg,      path: '/projects/experiments' },
  { title: 'Outreach',            img: outreachImg,     path: '/projects/outreach' },
  { title: 'Other projects',      img: otherProjectsImg,path: '/projects/other' },
  { title: 'About me',            img: aboutMeImg,      path: '/projects/about' }
]

export default function ProjectsSoftware() {
  return (
    <div className="projects-container">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h1>Projects & Software</h1>

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