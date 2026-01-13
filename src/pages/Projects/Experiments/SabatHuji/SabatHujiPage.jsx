import React, { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SabatHuji.css'

import scheme1 from './images/setup_scheme/setup_scheme.001.png'
import scheme2 from './images/setup_scheme/setup_scheme.002.png'
import scheme3 from './images/setup_scheme/setup_scheme.003.png'
import scheme4 from './images/setup_scheme/setup_scheme.004.png'
import scheme5 from './images/setup_scheme/setup_scheme.005.png'
import scheme6 from './images/setup_scheme/setup_scheme.006.png'

const schemeImages = [scheme6, scheme1, scheme2, scheme3, scheme4, scheme5, scheme6];
const schemeCaptions = [
  "Overall schematic of the SABAT microscopy setup at HUJI. Let's take a closer look at its components step by step.",
  "The main laser (518 nm) is attenuated using neutral density filters, spatially filtered by with a monomode fiber and its output controlled by an electric shutter.",
  "Another laser (405 nm) can be used by flipping a mirror for UV excitation of certain fluorophores.",
  "Beam expansion and shaping optics: Widefield microscopy requires expanding the beam to illuminate a larger area of the sample.",
  "The excitation light is focused on the sample using a dichroic mirror and a microscope objective.",
  "The optical power on the sample is monitored using a beam splitter and a photodiode. A white-light source is also included for focusing.",
  "The fluorescence collection path includes several high-pass and band-pass filters to direct the emitted light to the detector (CMOS)."
];
import setupImg1 from './images/huji_lab1.jpg'
import setupImg2 from './images/huji_lab2.jpg'
import setupImg3 from './images/huji_lab3.jpg'
import setupImg4 from './images/huji_lab4.jpg'
import setupImg5 from './images/huji_lab5.jpg'
import setupImg6 from './images/huji_lab_sample.jpg'

const setupImages = [setupImg1, setupImg2, setupImg3, setupImg4, setupImg5, setupImg6]
const setupCaptions = [
  "Initial assembly of the SABAT microscope, with a 405 nm diode laser, a simple XYZ positioner and no light isolation.",
  "First attempts to add a power monitoring photodiode and a black box for light isolation.",
  "Advanced assembly with new 518 nm laser (background), improved motorized sample stage and optical power monitoring.",
  "View of the closed black box for light isolation, with the sample stage and objective inside.",
  "Zoom on the excitation path for the 518 nm laser. The laser is focused on a monomode fiber for spatial filtering.",
  "Detail of the sample inside the black box. In later versions, the sample holder was replaced with a dedicated 3D-printed design."
];

import focusImg from './images/focusing.png'
import spectrometryImg from './images/spectroscopy.png'
import filterWheelImg from './images/huji_lab_filterWheel.jpg'
import filterWheelImg2 from './images/huji_lab_filterWheel2.jpg'
const spectromImages = [filterWheelImg2, filterWheelImg, spectrometryImg];
const spectromCaptions = [
  "Close-up of the unmounted filter wheel with 10 band-pass filters installed for selecting different emission wavelengths. The first slot is empty to allow for unfiltered measurements and the second one is blinded for background measurements.",
  "The response of each of these filters is measured with a dedicated spectrometer.",
  "(Left:) Example of reconstructed fluorescence emission spectrum using the filter wheel. A reference curve for the particular fluorophore is also shown. (Right:) Band-pass filter transmission measured with the spectrometer."
];

import samplePrepImg1 from './images/sample_preparation.png'
import sabatSwImg from '../../Software/images/sabat_software.png'

import arduinoImg1 from './images/arduino_3d-print.jpg'
import arduinoImg2 from './images/arduino_3d-print4.jpg'
import videoArduino from './images/arduino_3d-print3.mp4'

export default function SabatHujiPage() {
  const [schemeIndex, setSchemeIndex] = useState(0);
  const [setupIndex, setSetupIndex] = useState(0);
  const [specIndex, setSpecIndex] = useState(0);
  useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <div className="projects-container">
      <h1>SABAT (Microscopy at HUJI)</h1>

      <p align='justify'>
        Back in 2019, the original acronym for <Link to="/projects/experiments/Bold">the BOLD project</Link> used to be SABAT for Single-Atom Barium Tagging.
        When I started my postdoc at the Hebrew University of Jerusalem (HUJI) I decided to recover this name for the microscopy setup we built there, and the general branch of the overall project in Israel.
        This branch would not only encompass the microscopy setup at HUJI, but also the smaller-scale studies on surface-depositions, fluorescence characterization, and other related R&D activities.
      </p>
      <p align='justify'>
        The other main branch in Israel is the ion-physics setup at the Ben-Gurion University (BGU), with the goal of developing a Barium ion source (<Link to="/projects/experiments/BoldIonSource">BOLD Ion Source</Link>) and Radium source for BOLD (<Link to="/projects/experiments/RitaSetup">RITA</Link>).
        Both branches work in close collaboration to achieve the overall goals of BOLD.
      </p>
      <p align='justify'>
        The SABAT microscopy setup at HUJI is located in <a href="https://shomronigroup.huji.ac.il/">lab of Itay Shomroni</a>  at the Racah Institute of Physics, within the Hebrew University campus in Jerusalem.
      </p>
      <h2>Microscopy Setup Schematic</h2>
      <p align='justify'>
        The main goal of the SABAT microscopy setup at HUJI is to extend the advances in single-molecule fluorescence microscopy that I started during my PhD for the BOLD project (see <Link to="/projects/experiments/microscopyCfm">Microscopy at CFM</Link>).
        The setup is based on a custom-built fluorescence microscope with high numerical aperture objectives, capable of exciting and detecting single fluorescent molecules deposited on different substrates.
        The setup also includes a variety of laser sources, filters, and detectors to optimize the excitation and detection of the fluorescent tags used in BOLD.
      </p>
      <p align='justify'>
        The following images show a schematic representation of the SABAT microscopy setup at HUJI.
        Click on the image to cycle through the different views and components of the setup.
      </p>
      <div>
        <div className="image-wrapper">
          <img
            src={schemeImages[schemeIndex]}
            alt={`SABAT Scheme ${schemeIndex + 1}`}
            className="project-image clickable-image"
            onClick={() => setSchemeIndex((schemeIndex + 1) % schemeImages.length)}
          />
          <div className="image-hint">
            Click to view next ({schemeIndex + 1}/{schemeImages.length})
          </div>
          <div className="image-caption">
            {schemeCaptions[schemeIndex]}
          </div>
          
          <div className="image-navigation">
            <button onClick={() => setSchemeIndex((schemeIndex - 1 + schemeImages.length) % schemeImages.length)}>Previous</button>
            <button onClick={() => setSchemeIndex((schemeIndex + 1) % schemeImages.length)}>Next</button>
          </div>
        </div>
      </div>


      <h2>Laboratory Photos</h2>

      <p align='justify'>
        Here are some photos of the SABAT microscopy setup at different stages of its construction and operation.
      </p>
      <div>
        <div className="image-wrapper">
          <img
            src={setupImages[setupIndex]}
            alt={`SABAT Scheme ${setupIndex + 1}`}
            className="project-image clickable-image"
            onClick={() => setSetupIndex((setupIndex + 1) % setupImages.length)}
          />
          <div className="image-hint">
            Click to view next ({setupIndex + 1}/{setupImages.length})
          </div>
          <div className="image-caption">
            {setupCaptions[setupIndex]}
          </div>
          
          <div className="image-navigation">
            <button onClick={() => setSetupIndex((setupIndex - 1 + setupImages.length) % setupImages.length)}>Previous</button>
            <button onClick={() => setSetupIndex((setupIndex + 1) % setupImages.length)}>Next</button>
          </div>
        </div>
      </div>

      <h2> Auto-Focusing </h2>
      <p align='justify'>
        To achieve optimal imaging quality, the SABAT microscopy setup incorporates an auto-focusing mechanism.
        This is achieved by analyzing the sharpness of the acquired images at several focal positions.
        A precise motorized stage allows for fine adjustments of the focus (Z-axis).
        By employing image analysis algorithms such as the image kurtosis, the system can detect when the sample is out of focus and make corrections to maintain sharp imaging.
      </p>
      <p align='justify'>
        For efficient auto-focusing, a coarse step of 50 µm is initially used to find the approximate focus position, followed by finer adjustments of 5 µm steps to refine the focus.
      </p>
      <div>
        <div className="tiny-image-wrapper">
          <img
            src={focusImg}
            alt="Auto-Focusing Mechanism"
            className="project-image"
          />
          <div className="image-caption">
            Schematic representation of the auto-focusing mechanism in the SABAT microscopy setup.
          </div>
        </div>
      </div>

      <h2> Fluorescence Spectroscopy </h2>
      <p align='justify'>
        The band-pass filter wheel in the fluorescence collection path allows for selecting different emission wavelengths to characterize the fluorescence spectra of various fluorophores.
        By sequentially acquiring images with different filters, we can reconstruct the emission spectrum of the fluorescent tags used in our experiments.
        This capability is crucial for identifying and optimizing the detection of specific fluorophores and for distinguishing between different types of fluorescent signals.
      </p>
      <div>
        <div className="smaller-image-wrapper">
          <img
            src={spectromImages[specIndex]}
            alt="Fluorescence Spectroscopy"
            className="project-image clickable-image"
              onClick={() => setSpecIndex((specIndex + 1) % spectromImages.length)}
          />
          <div className="image-caption">
            {spectromCaptions[specIndex]}
          </div>
          <div className="image-navigation">
              <button onClick={() => setSpecIndex((specIndex - 1 + spectromImages.length) % spectromImages.length)}>Previous</button>
              <button onClick={() => setSpecIndex((specIndex + 1) % spectromImages.length)}>Next</button>
            </div>
        </div>
      </div>

      <h2> Sample Preparation and Preliminary studies </h2>
      <p align='justify'>
        Sample preparation is a critical step in fluorescence microscopy to ensure optimal imaging conditions and reliable results.
        In an ideal scenario, a dedicated team would take over the task of optimizing the preparation of samples, adapting protocols for different substrates and fluorophores, 
        and allowing a different team to focus on optical characterization. In my postdoc at HUJI, I had to handle both aspects due to limited personnel.
      </p>
      <p align='justify'>
        I handled the entire workflow of sample preparation, from substrate cleaning by baking and ozone plasma treatment; preparation of the solutions and fluorophore deposition by spin-coating.
        Some preliminary results can be seen in the following image. In this study, I used Rhodamine-B, a cheap commercial fluorophore, to evaluate the response at different concentrations of the mother solutions and characterize the sample preparation protocol and the setup performance.
      </p>
      <div>
        <div className="smaller-image-wrapper">
          <img
            src={samplePrepImg1}
            alt="Sample Preparation"
            className="project-image"
          />
          <div className="image-caption">
            Sample preparation workflow for fluorescence microscopy studies in SABAT.
          </div>
        </div>
      </div>

      <p align='justify'>
        Once the setup is optimized, the target molecule will be replaced with an actual Ba²⁺ chemosensor. 
        The molecule of choice for this project will be the so-called <a href="https://ionbiosciences.com/store/?checkbox-product_cat=121/"> commercial IPG molecules</a>. 
        These chemosensors were originally synthesized as potassium sensors, but the NEXT collaboration has recently published a paper proving its efficacy at capturing Ba²⁺: 
      </p>
      <ul style={{ textAlign: 'left' }}>

       <li> R. L. Miller et al. (NEXT Collaboration) <i>Analyst</i> volume <b>150</b>, Article number: <b>5558-5567</b> (2025).
          <a
            href="DOI	https://doi.org/10.1039/D5AN00577A"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginRight: '18px' }}
          >
            "Barium ion sensing with IPG K+ molecular probes."
          </a>
        </li>
      </ul>

      <p align='justify'>
        Three variants of IPG molecules exist (IPG-1,2 and 4), and they all capture Ba²⁺ with similar efficiency. 
        I carried out preliminary characterization of the photochemistry of these molecules in solution to verify their health and the solution preparation protocols.
      </p>

      <h2> Software for Data Acquisition and Analysis </h2>

      <p align='justify'>
        The SABAT microscope is composed of multiple stand-alone commercial components that need to be coordinated for precise acquisition of images.
        These include, among others, the Hamamatsu sCMOS, one or more motorized stages, the filter wheel, the shutter and the optical powermeter.
      </p>
      <p align='justify'>
        Component synchronization, in addition to consistent acquisition of microscopy images and videos, required writing a dedicated software suite for the SABAT microscope.
        You can read more about it <Link to="/projects/software/sabatsw">in the SABAT software page</Link>. Here is a list of its main features:
      </p>
      <ul style={{ textAlign: 'left' }} >
          <li> Versatile Graphical User Interface written in Python with Kivy for seamless integration with backend. </li>
          <li> Autofocus implementation and monitoring. </li>
          <li> Spectroscopy mode: quick sweep over all filters with automatic background subtraction (filter 2) and comparison to reference curve. </li>
          <li> Fluorescence evolution measurement: time-lapse acquisition to monitor changes over time and automatic fluorescence trajectory plotting. </li>
          <li> Manual adjustment of focus plane and desired filter for imaging. </li>
          <li> Active adjustment of optical power with feedback loop. The neutral density filter is mounted on a motorized stage for precise control. Next section offers more details on this. </li>
          <li> Adjustment of other acquisition parameters: exposure time, image binning, ROI setting etc. </li>
      </ul>

      <div>
        <div className="smaller-image-wrapper">
          <Link to="/projects/software/sabatsw" className="clickable-image">
            <img
              src={sabatSwImg}
              alt="SABAT software"
              className="project-image smaller-image-wrapper"
            />
            <div className="image-caption">
              <p>Sabat software preview.</p>
            </div>
          </Link>
        </div>
      </div>

      <h2> Optical power control </h2>
      <p align='justify'>
        One of the most satisfying side-projects within the development of the Sabat Microscope was fully computerized system to control the optical power.
        The usual way to achieve this is with a commercial motorized filter: either a polarizer + half-wave plate or a continuous neutral density filter (NDF).
        The lab disposed of a passive (not motorized) continuous NDF and some stepper motors, so I decided to manufacture a motorized version in a DIY way.
      </p>

      <p align='justify'>
        The images below show the arrangement. The passive NDF was mounted on a 3D-printed gear. Another smaller gear was design to transfer the rotation of the motor axis.
        The stepper motor rotation is controlled by a driver and an Arduino. This driver allows to run current through the motor only when the Arduino sends a signal, which prevents it from overheating.
        The Arduino is also used to send a signal to the controller of the shutter, which can be seen in left side of the second image (Thorlabs red component).
      </p>
      <div>
        <div className="smaller-image-wrapper">
          <img
            src={arduinoImg1}
            alt="DIY motorized power filter"
            className="project-image"
          />
          <div className="image-caption">
            Optical components in the DIY-manufactured optical power filter: Passive NDF mounted on a set of 3D-printed gears.
          </div>
        </div>
      </div>
      <div>
        <div className="smaller-image-wrapper">
          <img
            src={arduinoImg2}
            alt="DIY motorized power filter"
            className="project-image"
          />
          <div className="image-caption">
            Electronic components to control the manufactured NDF: Shutter controller (red), Arduino (left, green case), motor driver (center) and stepper motor (right).
          </div>
        </div>
      </div>

      <p align='justify'>
        The next video demonstrates a full NDF rotation being controlled by the Arduino:
      </p>
      <div className="video-wrapper">
          <video
            className="project-video"
            src={videoArduino}
            muted
            playsInline
            autoPlay={false}
            controls={true}
          />
      </div>

      <h2> Next steps </h2>
      <p align='justify'>
        <ul style={{ textAlign: 'left' }}>
          <li> <b>Measurement of single-molecules</b>: Preparation of low-concentration samples to reach single-molecule resolution.
           My colleagues at DIPC recently achieved this milestone by dedicating significant R&D efforts to immobilization of molecules on the substrate through chemisorption.
           To this end, they used an updated version of the <Link to="/projects/software/Autostepfinder">python AutoStepFinder code I helped develop</Link>. 
          </li>
          
          <li> <b> <i>In-situ</i> Microscopy</b>: To get closer to the experimental conditions in NEXT, the black box will be replaced with a small pressure vessel for in-situ detection in controlled low-pressure atmoshpere.
            This will build up on the expertise gathered by our <a href="https://next-experiment.org/capture-and-imaging-in-xenon-gas-detectors/"> collaborators at UTA</a>, who constructed a microscope graded to <a href='https://www.nature.com/articles/s41467-024-54872-0'> operate in High-Pressure xenon</a>. 
            I handled the design, purchase and delivery of the optical and UHV components required for this upgrade. 
          </li>
          
          <li> Integration with Ba-ion gun for in-situ detection </li>
        </ul>
      </p>
    </div>
  )
}