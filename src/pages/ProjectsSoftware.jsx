import React from 'react'
import { Link } from 'react-router-dom'
import softwareImg from '../assets/software.png'
import setupsImg from '../assets/setups.png'
import outreachImg from '../assets/outreach.png'
import otherProjectsImg from '../assets/other_projects.png'
import aboutMeImg from '../assets/heidelberg.jpg'
import './ProjectsSoftware.css'

const cards = [
  { title: 'Software', img: softwareImg },
  { title: 'Experiments / Setups', img: setupsImg },
  { title: 'Outreach',           img: outreachImg },
  { title: 'Other projects',     img: otherProjectsImg},
  { title: 'About me',           img: aboutMeImg }
]

export default function ProjectsSoftware() {
  return (
    <div className="projects-container">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h1>Projects & Software</h1>

      <div className="project-panels">
        {cards.map(({ title, img }) => (
          <div className="project-card" key={title}>
            <img src={img} alt={title} />
            <div className="project-card-title">
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}