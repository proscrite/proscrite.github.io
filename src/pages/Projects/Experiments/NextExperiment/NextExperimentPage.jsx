import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NextExperiment.css'

import v1 from './videos/next_s1.mp4'
import v2 from './videos/next_drift.mp4'
import v3 from './videos/next_EL.mp4'
import v4 from './videos/next_s2.mp4'

export default function NextExperiment() {
  const videos = [v1, v2, v3, v4]
  const captions = [
    `When an interaction occurs in the xenon gas of the detector, it produces both scintillation light (S1) and ionization electrons. The S1 signal is detected promptly by the photomultiplier tubes (PMTs) located behind the cathode, providing the event's start time (t0).`,
    `The ionization electrons drift towards the anode under the influence of an electric field, taking a time proportional to the distance they traveled.`,
    `As the electrons reach the electroluminescence (EL) region near the anode, they are accelerated, producing a secondary scintillation signal (S2).`,
    `This S2 signal is detected by both the PMTs and the silicon photomultipliers (SiPMs) located behind the anode. The PMTs provide the energy measurement, while the SiPMs offer precise spatial information, allowing for 3D event reconstruction.`,
  ]

  const [current, setCurrent] = useState(0)
  const [canAdvance, setCanAdvance] = useState(false)

  const handleClick = () => {
    if (!canAdvance) return
    setCanAdvance(false)
    setCurrent(i => (i + 1) % videos.length)
  }

  return (
    <div className="projects-container">

      <h1>NEXT experiment</h1>

      <div className="project-details">
        <div className="video-wrapper">
          <video
            className="project-video"
            key={videos[current]}
            src={videos[current]}
            muted
            playsInline
            autoPlay
            controls={false}
            onClick={handleClick}
            onEnded={() => setCanAdvance(true)}
          />

          {/* 1) overlayed caption */}
          <div className="video-caption">
            {captions[current]}
          </div>

          {/* 2) overlayed playback hints */}
          {!canAdvance && (
            <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
              ▶ Playing...
            </div>
          )}
          {canAdvance && (
            <div className="absolute bottom-4 left-4 text-white text-sm animate-pulse">
              ⬇️ Click to continue
            </div>
          )}
        </div>

        <div className="project-text">
          {/* any additional static copy can live here, below the video */}
        </div>
      </div>
    </div>
  )
}