import React from 'react'
import { Link } from 'react-router-dom'
import './NextExperiment.css'

import nextImg from '../images/next100_vessel.jpg'
import v1 from './videos/next_s1.mp4'
import v2 from './videos/next_drift.mp4'
import v3 from './videos/next_EL.mp4'
import v4 from './videos/next_s2.mp4'

import { useState } from "react";

export default function NextExperiment() {
  const videos = [v1, v2, v3, v4]
  
  const [current, setCurrent] = useState(0);
  
  const [canAdvance, setCanAdvance] = useState(false);

  const handleClick = () => {
    if (!canAdvance) return; // block skipping
    setCanAdvance(false); // reset until next video finishes
    setCurrent((prev) => (prev + 1) % videos.length);
  };
  
  return (
    <div className="projects-container">
      <Link to="/projects/experiments" className="back-link">
        ← Back to Experiments & Setups
      </Link>
      <h1>NEXT experiment</h1>

      {!canAdvance && (
        <div className="absolute bottom-4 text-gray-400 text-sm">
          ▶ Playing...
        </div>
      )}
      {canAdvance && (
        <div className="absolute bottom-4 text-white text-sm animate-pulse">
          ⬇️ Click to continue
        </div>
      )}
    
      <div className="project-details">
        {/* 3) single video, no autoplay/loop,
             4) advancing on click */}
        <video
          className="project-video"
          key={videos[current]}
          src={videos[current]}
          autoPlay
          muted
          playsInline
          controls={false}
          onClick={handleClick}
          onEnded={() => setCanAdvance(true)} // enable advance after video ends
        />
      


      {/* new flex/grid wrapper */}
      <div className="project-text">
        <img
          className="project-image"
          src={nextImg}
          alt="NEXT Setup"
        />

        <div className="project-text">
          <p>
            An intense R&D program was carried out by the Collaboration.
            The feasibility of the technology was demonstrated with the NEXT
            prototypes which showed the excellent performance (energy
            resolution, electron reconstruction) of the apparatus, as well
            as the robustness of the EL technology.
          </p>
      <p>
        The NEXT-White detector (the name honours …) constituted the
        first-phase within the NEXT program. It operated at the
        Underground Canfranc Laboratory (LSC) between 2016 and 2021,
        with the double target of assessing the NEXT background model …</p>
          </div>
      </div>
      <p>        The NEXT-100 detector is the second phase of the NEXT program.
        It is a 100 kg-scale detector that will be installed at the LSC in
        2023.
        The detector is designed to achieve a background level of 0.1
        counts/(keV·kg·year) in the energy region of interest, which is
        necessary to reach a sensitivity of 10<sup>26</sup> years for the
        neutrinoless double beta decay of <sup>136</sup>Xe.
        The NEXT-100 detector will use the same technology as the NEXT-White
        detector, but with a larger active volume and improved background
        rejection capabilities.
      </p>
    
      <p>
        The NEXT-100 detector is expected to start taking data in 2023 and
        will run for at least five years.
        The goal is to achieve a sensitivity of 10<sup>26</sup> years
        for the neutrinoless double beta decay of <sup>136</sup>Xe,
        which would be a major breakthrough in the search for new physics.
      </p>
      {/* Additional content can be added here */}
  </div>
    </div>
  )
}