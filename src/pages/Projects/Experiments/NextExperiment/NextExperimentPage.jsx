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
      <p>The Neutrino Experiment with a Xenon TPC (NEXT) is a cutting-edge physics experiment
         designed to search for neutrinoless double beta decay (0νββ) in Xenon-136 (¹³⁶Xe). 
         More information about the experiment can be found in the <a href="https://next-experiment.org/" target="_blank" rel="noopener noreferrer">Official NEXT Website</a>.
         I have been involved in the experiment since 2019, contributing to various aspects of its development and operation. 
         However I have been following the project since its inception in 2009, when I was in high school! 
         It also happens to be one of the few world-leading particle physics experiments located not in my home country, Spain, but in my Autonomous Region, Aragón.
      </p>
      <p>
         My contribution has primarily focused on the development of a disruptive new event discrimination technique based on the detection of the Barium Daughter ion (Ba-tagging) produced in the decay of ¹³⁶Xe.
        This technique has the potential to eliminate all background sources in the experiment, since no other sources of barium ions are expected in the detector. 
        To learn more about my work on Ba-tagging, please visit the <Link to="/projects/experiments/bold">Ba-tagging project page</Link>.
        And for an introduction to the NEXT experiment, keep reading!
      </p>
         
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