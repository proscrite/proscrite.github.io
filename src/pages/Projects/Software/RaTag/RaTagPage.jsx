import React from 'react'
import { Link } from 'react-router-dom'

// import sabbathSetupImg from '../images/cfm_optics6.jpg'
import rita_repo from './images/RaTag_repo_structure/RaTag_repo_structure.001.png'
import exampleWfm from './images/example_frame.png'

export default function RaTagPage() {
  return (
    <div className="projects-container">
      <h1>RaTag analysis repository</h1>
      <p align='justify'>
        This page describes the RaTag repository, which I developed to analyse the data produced by the RITA setup. 
        To understand the physics motivation and methodology of the experiment, check out the page of the <Link to="/projects/experiments/ritaSetup">RITA experiment</Link>.
      </p>
      <p align='justify'>
        Essentially, the prompt signal (S1) of the decay event and the electroluminescence signal (S2) are recorded by the oscilloscope.
        This is recorded in the form of a waveform: a time window recorded by the oscilloscope with voltage values for one or more channels.
        Below you can see an example of a PMT waveform or "frame".
      </p>
      <img src={exampleWfm} alt="Example of PMT waveform" />
      <p align='justify'>
        Different properties of the ion transport can be studied from these frames.
        In order to obtain statistically significant results, hundreds of thousands of frames like are acquired, stored and analysed. 
        For multi-isotope analysis, these must be correlated with their corresponding alpha-event frame measured by the silicon detector.
        Moreover, we study recombination by studying these waveforms at different drift fields. This means that different measurements or "sets" must be taken with different experimental conditions.
      </p>
      <p align='justify'>
        A systematic tracking of these conditions, processing of all the waveforms to extract statistically significant metrics requires a dedicated, auditable and reproducible software suite.
        In this page you can find a description of this software, which I called "RaTag".
      </p>
      <p align='justify'>
        The data hierarchy is sketched in the image below. The voltage and time information of a single event is stored by the oscilloscope in a binary "frame".
        The oscilloscope batches several of these frames in waveform files, which need to be accummulated until enough statistics are collected.
        Each "measurement" or "set" is then done at a fixed 
      </p>
      <img src={rita_repo} alt="Rita repository structure" />
      <p>Structure of the Radium Tagging analysis repository.</p>
    
    <p align='justify'>
      
    </p>
    
    
    </div>
  )
}