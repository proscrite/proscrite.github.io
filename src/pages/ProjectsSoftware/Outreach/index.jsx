import React from 'react'
import { Link } from 'react-router-dom'
import VideoWrapper from '../../../components/VideoWrapper'
import CommTable  from '../../../components/CommTable'
import PubTable from '../../../components/PubTable'
// import { , mainPublications, nextPublications } from './data.js'
import {communications} from './data.js'
import { mainPublications, nextPublications } from './data_publications.js'

import './OutreachPage.css'

export default function OutreachPage() {
  return (
    <div className="projects-container">
      <Link to="/projects" className="back-link">← Back to Projects & Software</Link>
      <h1>Outreach & Communication</h1>
      <p>
            I have been involved in various outreach and communication activities,
            including public talks, workshops, and educational content creation.
            Below are some videos and talks I delivered during my career.
        </p>
      <h2>Azrieli Fellows Forum 2024</h2>
      <VideoWrapper
        src="https://www.youtube.com/embed/4kHX6_VbOJY"
        title="Science Talk"
      />

      <h2>BOLD video in collaboration with PixVideos (2020)</h2>
      <VideoWrapper
        src="https://www.youtube.com/embed/W4_Qjd3h2PU"
        title="Outreach Video"
      />

      <h2>Poster Neutrino 2022 (virtual-Seoul, South Korea)</h2>
      <VideoWrapper
        src="https://www.youtube.com/embed/jwfm_mmw-LY"
        title="Poster Neutrino 2022"
      />

      <h2>Poster Neutrino 2020 (virtual-Fermilab, Chicago, US)</h2>
      <VideoWrapper
        src="https://www.youtube.com/embed/0l5_KLsLNuY"
        title="Poster Neutrino 2020"
      />

      <h2>Other Communications</h2>
      <CommTable data={communications} />

    <h1>Publications</h1>
        <h2>My main publications</h2>
            <p>Here are some of the publications I have authored or co-authored during my career:</p>
            <PubTable data={mainPublications} /> 
        <h2>NEXT Collaboration Publications</h2>
            <p>The following are publications I co-authored as member of the NEXT collaboration:</p>
            <PubTable data={nextPublications} />
    </div>
  )
}