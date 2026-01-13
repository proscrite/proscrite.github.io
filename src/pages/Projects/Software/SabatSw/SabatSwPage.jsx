import React, { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SabatSw.css'
import SabatSwInteractive from './SabatSwInteractive';

// import focusManualVid from './images/recording_manual_focusing.mp4'

export default function SabatSwPage() {
  useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <div className="projects-container">
      <h1>SABAT Software (Microscopy GUI)</h1>
    
        <p align='justify'>
            This page describes the software suite developed for the <Link to="/projects/experiments/SabatHuji"> SABAT microscope</Link>. 
            Please visit the page describing the microscope experiment to have an overview of the setup and its purpose. 
            You can also find the code for this project in its <Link to="https://github.com/proscrite/sabbath"> GitHub repository </Link>.
        </p>
        <h2> Overview </h2>
          <p align='justify'>
            The SABAT software is a versatile graphical user interface (GUI) designed to control and operate the SABAT microscopy setup.
            Developed in Python using the Kivy framework, the software provides a user-friendly interface for researchers to interact with the microscope's hardware components and perform various imaging tasks.
            The GUI communicates with the backend through a well-defined API, ensuring seamless integration and efficient operation.
          </p>
          <p align='justify'>
            Below is a mock version of the software GUI which emulates some of its features. Click on the buttons of the screen to see some of the functionalities in action.
            Some of the mock functionalities use actual data, some mock data. The screenshots used in this simulation are taken from the actual implementation.
          </p>
          <p align='justify'>
            To see a description of the main screen and read about the usual measurement protocols, continue scrolling.
          </p>
          <div>
          <SabatSwInteractive />
          </div>

          {/* <div>
            <div className="image-wrapper">
              <img
                src={mainImg}
                alt="Auto-Focusing Mechanism"
                className="project-image"
              />
              <div className="image-caption">
                Schematic representation of the auto-focusing mechanism in the SABAT microscopy setup.
              </div>
            </div>
          </div> */}
          <p align='justify'>
            Here is a description of the main displayed parameters:
          </p>
          <ul style={{ textAlign: 'left' }} >
              <li> <b>🚫 Shutter state</b>: Indicates whether the laser shutter is open or closed. </li>
              <li> <b>🕹️ Z position</b>: Displays the current position of the Z-axis stage with micrometer resolution (µm). </li>
              <li> <b>⏳ Exposure</b>: Shows the exposure time set for image acquisition in seconds (s) or milliseconds. </li>
              <li> <b>🚦 Filter id</b>: Indicates the current index of the filter wheel (1-12). Index 1 is No filter (NA) and index 2 is blinded (dark). </li>
              <li> <b>🧬 Sample name</b>: Shows the current user-defined name of the sample being measured. </li>
              <li> <b>🔋 P:</b> optical power on the sample in microwatts (µW). </li>
          </ul>

          <h2>Measurement protocol: </h2>
          <p align='justify'>
            The measurement protocol for a new sample typically involves the following steps:
          </p>
          <ol style={{ textAlign: 'left' }} >
            <li> <b> Focusing: </b> The first step is locating the sample surface at the working distance of the microscope objective by moving the Z-axis stage.
              The autofocus algorithm can automate this step. However, some the focus plane of some very dim samples can be tricky to find for the algorithm. 
              In this case, manual focusing can be done by moving the stage in prescribed steps and monitoring the sharpness of the live image. 
              Focusing is typically done with white light, although in some cases it can be done with the laser too. 
            </li>
            <li> <b> Define ROI: </b> Once an image of the sample surface is taken, a Region Of Interest (ROI) is defined to exclude background regions. 
              The online analysis of the images are performed only on this region.
            </li>
            <li> <b> Acquire fluorescence emission spectrum:</b> The best way to certify that a sample is well focused is by recording an emission spectrum. 
              A set of images for each of the filters is acquired and the average intensity is plotted as a function of the mean value of the band-pass filter range.
              For very diluted and dim samples, reconstructing an emission spectrum with sufficient signal over background might not be possible.
            </li>
            <li> <b> Measure fluorescence trajectories over time: </b> 
              Once the presence of a fluorophore on the sample surface has been verified, the time evolution of the fluorescence emission is recorded. 
              This is simply a continuous video over a specified period of time. Then the intensity of a pixel or set of pixels is plotted as a function of time.
              Several aspects must be taken into account for this: at high excitation (laser) power,
               photobleaching may occur too quickly and no relevant information will be inferred from the trajectories.
              To mitigate this, we must maximize the light collection efficiency of the setup and the yield of the sample.
              Ideally, if the sample is sufficiently dilluted and its emission is stable enough, a step-like trajectory is recorded, confirming the presence of a single molecule in the field of view.
            </li>
            <li> <b> Mapping homogeneity: </b>
              A series of measurements over the X, Y plane can be compared to study the homogeneity of the sample. 
              At each (x, y) value, the focus (Z-axis) must be refined, because the sample may not be perfectly parallel to the microscope objective.
            </li>
            <li> <b> Optical power dependence: </b>
              If desired, the response of the fluorophore to different optical powers can me measured. This yields a linearity response plot.
              If a high-intensity, pulsed laser is used, the response of the fluorophore to the excitation power will be quadratic, which would confirm that 2-Photon Absorption is taking place.  
            </li>
          </ol>
          
    </div>
  )
}