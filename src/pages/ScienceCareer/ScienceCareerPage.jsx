import React, {useEffect} from 'react'
import { Chrono } from 'react-chrono'
import { Link } from 'react-router-dom'
import './ScienceCareer.css'

const items = [
  {
    title: "2025",
    cardTitle: "RaTag",
    cardDetailedText: "I started a new project to develop a Radium ion source for BOLD at the Ben Gurion University of the Negev in Beer Sheba, Israel."
  },
  {
    title: "2024",
    cardTitle: "Sabbath: Microscopy at HUJI for BOLD",
    cardDetailedText: "Started working on microscopy techniques at the Hebrew University of Jerusalem to extend the advances in microscopy for BOLD that I started during my PhD ."
  },
  {
    title: "2023",
    cardTitle: "PhD Graduation and start of Postdoc",
    cardDetailedText: "I defended my PhD at the University of the Basque Country, After a bit over 4 years working on the foundations of NEXT-BOLD. In August I started a postdoc at the Hebrew University of Jerusalem."
  },
  {
    title: "2022",
    cardTitle: "NEXT-BOLD",
    cardDetailedText: "I focused on microscopy techniques for the NEXT-BOLD project."
  },
  {
    title: "2021",
    cardTitle: "Study of FBI molecules on surfaces for BOLD",
    cardDetailedText: "I published my first paper on the study of FBI molecules on surfaces for BOLD with XPS and STM."
  },
  {
    title: "2020",
    cardTitle: "Surface Science for BOLD",
    cardDetailedText: "I started working on the surface science for BOLD, studying the FBI molecules on surfaces. I also developed a new technique to deposit large molecules on surfaces from liquid solution by Atomic Layer Injection (ALI)."
  },
  {
    title: "2019",
    cardTitle: "NEXT Experiment",
    cardDetailedText: "I started working on the NEXT experiment, a neutrinoless double beta decay experiment. I saw the birth of the NEXT-BOLD project, a European project to develop a new technique to detect the Barium ion produced in the neutrinoless double beta decay of Xenon-136."
  },
  {
    title: "2018",
    cardTitle: "MsC thesis with XENON Dark Matter experiment at MPIK",
    cardDetailedText: "I worked at the Max Planck Institute for Nuclear Physics in Heidelberg, Germany, where I did my MsC in Physics under the XENON Dark Matter Experiment."
  },
  {
    title: "2017",
    cardTitle: "MsC in Physics at University of Heidelberg",
    cardDetailedText: "I started my MsC in Physics at the University of Heidelberg, Germany, where I worked on the XENON Dark Matter Experiment."
  },
  {
    title: "2016",
    cardTitle: "Erasmus year at University of Groningen",
    cardDetailedText: "I spent a year at the University of Groningen, Netherlands, as part of my undergraduate studies in Physics. I defended my Bachelor thesis on QCD under Prof. Elisabetta Bossio."
  },
  {
    title: "2012-2016",
    cardTitle: "Bachelor in Physics at University of Valencia", 
    cardDetailedText: "I studied my Bachelor in Physics at the University of Valencia, Spain."
  }
]

export default function ScienceCareer() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="main-container science-container">
      <Link to="/" className="back-link">← Back to Home</Link>
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
        <Chrono
          items={items}
          mode="VERTICAL"
          disableToolbar             // ← completely removes the top buttons
        />
      </div>
    </div>
  )
}