import React from 'react'
import { Chrono } from "react-chrono"
import './ScienceCareer.css'

const items = [
  {
    title: "2022",
    cardTitle: "Started ProScrite",
    cardDetailedText: "Initial design and concept launched."
  },
  {
    title: "2023",
    cardTitle: "Added NLP backend",
    cardDetailedText: "Included language models and sentence generation."
  },
  {
    title: "2024",
    cardTitle: "Interactive Features",
    cardDetailedText: "Videos, timeline, and more added."
  }
]

export default function ScienceCareer() {
  return (
    <div className="science-container">
      <h1>Science Career</h1>
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

      <h2>📜 Timeline</h2>
      <div className="chrono-wrapper">
        <Chrono items={items} mode="VERTICAL" />
      </div>
    </div>
  )
}