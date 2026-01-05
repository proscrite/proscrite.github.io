import React, { useState, useEffect } from 'react'
import RaTagInteractiveMap from './RaTagInteractiveMap';
import './RaTagPage.css'
import { Link } from 'react-router-dom'

// import sabbathSetupImg from '../images/cfm_optics6.jpg'
import exampleWfm from './images/example_frame.png'
import data1 from './images/RaTag_data_structure/RaTag_data_structure.001.png'
import data2 from './images/RaTag_data_structure/RaTag_data_structure.002.png'
import data3 from './images/RaTag_data_structure/RaTag_data_structure.003.png'
import data4 from './images/RaTag_data_structure/RaTag_data_structure.004.png'
import data5 from './images/RaTag_data_structure/RaTag_data_structure.005.png'

const dataHierarchyImages = [data1, data2, data3, data4, data5];

const dataCaptions = [
  "The voltage and time information of a single event is stored by the oscilloscope in a binary \"frame\".",
  "Frames are batched into waveform files (.wfm) by the oscilloscope software.",
  "Multiple waveform files are collected for each measurement \"set\" at a fixed drift field. The sets are represented by metadata files describing relevant physical magnitudes.", 
  "The run object contains all sets for a given isotope measurement campaign and information about the experimental conditions.",
  "In Multi-Isotope runs, each PMT frame has an associated alpha-event frame measured by the silicon detector."
];

import runPrep from './images/run_preparation.png'
import s2AreaSimpleImg from './images/s2_area_simple.png'
import s2AreaBgImg from './images/s2_area_background.png'
import recombImg from './images/RUN18_s2_vs_drift.png'
import s2Multi from './images/s2_areas_multi.png'

import xRayImg from './images/example_xray.png'
import xRayHistImg from './images/x-ray_hist-run21.png'

import alphas1 from './images/alphas/alphas.001.png'
import alphas2 from './images/alphas/alphas.002.png'
import alphas3 from './images/alphas/alphas.003.png'
import alphas4 from './images/alphas/alphas.004.png'
import alphas5 from './images/alphas/alphas.005.png'
const alphaImages = [alphas1, alphas2, alphas3, alphas4, alphas5];

const alphaCaptions = [
  "Example alpha peak frame in silicon detector waveform and peak value.",
  "Reconstructed alpha energy spectrum in instrumental and calibrated units with 5 identified peaks: ²²⁸Th, ²²⁴Ra, ²²⁰Rn, ²¹⁶Po,  and ²¹²Po.",
  "(Left:) Energy calibration graph showing fitted (E_SCA) vs expected energies (E_true) for identified alpha peaks. (Right:) Residuals of the calibration fit. Linear and quadratic fits are shown in both plots.",
  "Derived isotope energy ranges (mean ± 2σ) used to tag recoil events in multi-isotope runs. The overlap between ²²⁴Ra and ²²⁸Th is addressed through Likelihood Crossover Method.",
  "Full fit to the alpha energy spectrum featuring 4 new \"satellite\" peaks (²²⁸Th and ²²⁴Ra are deconvolved into two peaks each and two ²¹²Bi peaks are added in the tail of ²²⁰Rn)."
];

function ScrollToId({id, children }) {
  function handleClick(e) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      style={{ color: '#6fa3ff', textDecoration: 'underline', cursor: 'pointer' }}
    >
      {children}
    </a>
  );
}

export default function RaTagPage() {
  const [dataImageIndex, setDataImageIndex] = useState(0);
  const [alphaImageIndex, setAlphaImageIndex] = useState(0);
  useEffect(() => {window.scrollTo(0, 0);}, []);
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
      <img id="example-pmt-waveform" src={exampleWfm} alt="Example of PMT waveform" />
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
      
      <h2>Data structure</h2>
      <p align='justify'>
        The data hierarchy is sketched in the image below. Click on the image to cycle through the different levels. 
      </p>
      <div>
      <div className="image-wrapper">
        <img
          src={dataHierarchyImages[dataImageIndex]}
          alt={`RaTag data structure step ${dataImageIndex + 1}`}
          className='project-image clickable-image'
          onClick={() => setDataImageIndex((dataImageIndex + 1) % dataHierarchyImages.length)}
        />
        <div className="image-caption">
          <p>{dataCaptions[dataImageIndex]} ({dataImageIndex + 1} / {dataHierarchyImages.length})</p>
        </div>
        <button onClick={() => setDataImageIndex((dataImageIndex - 1 + dataHierarchyImages.length) % dataHierarchyImages.length)}>Previous</button>
        <button onClick={() => setDataImageIndex((dataImageIndex + 1) % dataHierarchyImages.length)}>Next</button>
      </div>
      </div>

      <h2>Repository structure</h2>
      <p align='justify'>
        The repository is composed by different modules, each responsible for a different task in the data analysis.
        Each of these modules is shown in the image below. To allow for flexible and reproducible analysis, each module is represented by its own high-level pipeline.
        The idea behind the design of the repository is that the user can pick and choose which pipelines to run depending on their needs at each stage of the analysis. 
        Pipelines are designed to be minimal and immediately understandable. 
        The steps in the pipelines are represented by workflows. These are lower-level functions that orchestrate calls to different classes and functions in the module to perform a concrete chain of operations.
      </p>
    
    <p id="RepoMap" align='justify'>
      Click on one of the modules in the image to go to its corresponding section in this page.
    </p>
    <RaTagInteractiveMap />

    
    <h3 id="preparation">Preparation</h3>
    
    <p align='justify'>
      This module contains the code to prepare the data for analysis. It includes the following steps:
    <ul>
      <li><strong>Run initialization</strong>: The directory of the raw data is scanned to identify the different measurement sets and their corresponding waveform files.
       The waveforms are only loaded lazily (yield statements) to prevent memory overload. A run object is created to represent the entire measurement campaign.</li>
      <li><strong>Compute basic transport properties</strong>: Computes basic properties such as drift field, drift velocity and drift time for each set in the run.</li>
      <li><strong>Estimate S1 and S2 statistically</strong>: The S1 and S2 signals of nuclei recoil events are detected for a subset of frames in each set to obtain a statistical estimate of their properties.
       Histograms of S1 and S2 times are created and fitted to obtain mean and confidence intervals for the S1 and S2 windows, which are then used in downstream analysis.</li>
      <li><strong>Data persistence</strong>: The resulting S1 and S2 windows and transport properties are saved as set metadata to allow for efficient reuse.</li>
      <li><strong>S1/S2 window validation</strong>: The estimated S1 and S2 windows are validated by plotting a subset of frames with the detected windows overlaid. 
      The user can check these plots to ensure that the windows are correctly identified. An example of validation plot <ScrollToId id="example-pmt-waveform">is shown above</ScrollToId> .</li>
    </ul>
    </p>
    <p align='justify'>
      The run preparation module is typically run once per measurement campaign to set up the data for further analysis.
      Below is an example of the run preparation module in action, showing the timing histograms for S1 and S2 (start, end and duration) and a summary plot over all sets.
    </p>
    <div>
      <img src={runPrep} alt="Run preparation module" />
      <div className="image-caption">
        <p>(Top left:) Example of S1 time histogram. (Right panel:) Example of S2 time histograms, from top to bottom: S2 start, S2 end, and S2 duration. (Bottom left:) Summary plot over all sets.</p>
      </div>
    </div>
    <ScrollToId id="RepoMap">Return to Repo Map</ScrollToId>
    
    <h3 id="recoils">Recoils</h3>
    <p align='justify'>
      This module contains the code to integrate the S2 areas of recoil events in the PMT waveforms. It includes the following steps:
    <ul>
      <li><strong>S2 window extraction:</strong> Using the S2 windows estimated in the preparation module, the S2 region is extracted from each waveform frame.</li>
      <li><strong>S2 area integration:</strong> The peaks in the S2 window are identified and their areas are integrated to obtain the S2 area for each recoil event.</li>
      <li><strong>Data persistence:</strong> The area of each recoil event is stored in a structured format together with its Unique Identifier (UID) for further analysis.</li>
      <li><strong>Area histogramming and fitting:</strong> The S2 areas are histogrammed for each set and fitted to a gaussian curve to extract the mean, median and confidence intervals. 
      Most histograms show a background caused by low-counts single-photon events. These are subtracted to reveal the true recoil event distribution.</li>
      <li><strong>Multi-Isotope Area assignment:</strong> For multi-isotope runs, the S2 areas are correlated by the UID with the alpha-event frames to produce distributions of S2 areas for each isotope.</li>
      <li><strong>Visualization:</strong> All histograms and fits are plotted for user inspection. </li>
      <li><strong>Initial production of recombination plot:</strong> The mean S2 areas for each set are plotted against the drift field to produce an initial recombination plot.</li>
    </ul>
    </p>
    <p align='justify'>
      The recoil module is typically run after the preparation module to extract the S2 areas of recoil events for further analysis.
      Below are examples of S2 area histograms for single-isotope and multi-isotope runs, as well as the initial recombination plots.
    </p>

    <div>
      <div className="image-wrapper smaller-image-wrapper">
              <img
                src={s2AreaSimpleImg}
                alt="S2 area histogram with simple crystalball fit"
                className="project-image"
              />
              <div className="image-caption">
                <p>S2 area histogram for a single-isotope run with simple crystalball fit (no background subtraction).</p>
              </div>
      </div>
    </div>
    <div>
      <div className="image-wrapper">
        <img
          src={s2AreaBgImg}
          alt="S2 area histogram with background subtraction"
          className="project-image"
        />
        <div className="image-caption">
          <p>S2 area histogram for a single-isotope run with background subtraction to reveal the recoil peak.</p>
        </div>
      </div>
    </div>
    <div>
      <div className="image-wrapper smaller-image-wrapper">
        <img
          src={recombImg}
          alt="Recombination plot for single-isotope run"
          className="project-image"
        />
        <div className="image-caption">
          <p>Initial recombination plot for a multi-isotope run.</p>
        </div>
      </div>
    </div>
    <p id="multiIsoRecoils" align='justify'>
      In multi-isotope runs, the S2 areas are correlated with the alpha-event frames to produce distributions of S2 areas for each isotope.
      Below are examples of S2 area histograms for multi-isotope runs and the corresponding recombination plots.
    </p>
    
    <p align='justify'>
      More information about the alpha-event analysis can be found in the <ScrollToId id="alphas">Alphas section</ScrollToId> below.
    </p>
    <div>
      <div className="image-wrapper smaller-image-wrapper">
        <img
          src={s2Multi}
          alt="S2 area histogram for multi-isotope run"
          className="project-image"
        />
        <div className="image-caption">
          <p>S2 area histogram for a multi-isotope run showing the different isotopes peaks.</p>
        </div>
      </div>
    </div>
    <p align='justify'>
      This analysis reveals a different behaviour for the different isotopes. Already at moderately high drift fields (70 V/cm), recombination is very strong for all isotopes except for ²²⁸Th and ²²⁴Ra decays.
      This is consistent with the dependence on recoil energy for columnar recombination models.
    </p>
    <ScrollToId id="RepoMap">Return to Repo Map</ScrollToId>

    <h3 id="xrays">X-Rays</h3>
    <p align='justify'>
      The exact response of the xenon in the TPC to recoil events can be calibrated using the 12.5 keV X-Ray emitted in 8/% of the ²²⁸Th decays.
      More details on this calculation are provided in the <ScrollToId id="finalAnalysis">Final analysis section</ScrollToId>.
    </p>
    <p align='justify'>
      Since X-rays travel much faster in the medium than recoil ions, the signature of these events is a short and small S2, which falls inside the drift window of recoil events.
      Below is an example of an X-Ray event in a PMT waveform. The recoil S2 falls inside its expected window, while the X-Ray S2 appears as a wider peak earlier in time.
    </p>
    <div>
      <div className="image-wrapper smaller-image-wrapper">
        <img
          src={xRayImg}
          alt="X-Ray example event"
          className="project-image"
        />
        <div className="image-caption">
          <p>Example of X-Ray event in a PMT waveform.</p>
        </div>
      </div>
    </div>
    
    <p align='justify'>
      The X-Ray module is in charge of identifying and analysing these types of events. 
      The main pipeline consists of the following steps:
    <ul>
      <li><strong>Electron drift window extraction:</strong> Using the S1 and S2 times estimated in the preparation module, the electron drift window for recoil events is fixed for each set.</li>
      <li><strong>X-Ray identification:</strong> A series of criteria are applied to identify X-Ray event candidates.</li>
      <li><strong>Data persistence:</strong> The area of each X-Ray event is stored in a structured format together with its Unique Identifier (UID) for further analysis. </li>
      Total acceptance and rejection rates for each criterion are also stored in the set metadata.
      <li><strong>Area histogramming and fitting:</strong> The detection efficiency for these X-Ray events is very modest, so a large number of statistics must be accummulated to produce a reliable histogram.
      On the flip side, since these events don't depend on the drift field, the candidates across all sets can be combined into a single dataset to improve statistics.</li>
      <li><strong>Visualization:</strong> All histograms and fits are plotted for user inspection. </li>
    </ul>
    </p>
    <p align='justify'>
      The X-Ray module can be run after the recoil integration module to apply the detector response calibration to the latter analysis. 
      However, running both modules involve iterating over all the frames in each set. This is a relatively computationally demanding task, 
      so the user can run a "unified" pipeline, which combines the operations for both recoil and X-ray events in a single iteration.
    </p>
    <p align='justify'>
      Below is an example of the X-Ray area histogram accumulated over all sets in a run.
      The main contribution to the background comes from tiny S2 peaks from single photons that fall inside the drift window.
      However, zooming just past this sharp peak reveals a clear X-Ray peak around 2 mV · µs.
    </p>
    <div>
      <div className="image-wrapper smaller-image-wrapper">
        <img
          src={xRayHistImg}
          alt="X-Ray area histogram summary over all sets"
          className="project-image"
        />
        <div className="image-caption">
          <p>X-Ray area histograms over all sets in a run.</p>
        </div>
      </div>
    </div>
    <ScrollToId id="RepoMap">Return to Repo Map</ScrollToId>

    <h3 id="finalAnalysis">Final Analysis</h3>
    <p align='justify'>
      The mean area in the PMT window for X-ray analysis is used to calibrate the exact response of the TPC to the energy deposition events under specific experimental conditions.
      Knowing that the X-Ray energy is 12.5 keV, we can compute the number of detected electrons per keV as:
    </p>
    <p align='center'>
      Detected electrons per keV = (Mean X-Ray S2 area) / (12.5 keV · Single electron area)
    </p>
    <p align='justify'>
      The single electron area is known from other studies in the literature.
      This calibration is then applied to the recoil S2 areas to obtain the number of detected electrons for each recoil event.
      This so-called "<i>g</i><sub>S2</sub>" factor is used to produce recombination plots in terms of detected electrons per keV for each isotope.
    </p>
    <ScrollToId id="RepoMap">Return to Repo Map</ScrollToId>

    <h3 id="alphas">Alphas</h3>

    <p align='justify'>
      In multi-isotope runs, the alpha-event frames measured by the silicon detector are analysed to identify the isotope of each recoil event.
      Each alpha decay is then identified by a unique identifier (UID) that is shared with its corresponding recoil event in the PMT frames, and a corresponding alpha energy is assigned.
      This allows to produce S2 area histograms for each isotope separately, as shown in the <ScrollToId id="multiIsoRecoils">Recoils section</ScrollToId> above.
    </p>
    <p align='justify'>
      The alpha energies are histogrammed to reconstruct the alpha energy spectrum and calibrate the detector response.
    </p>
    <p align='justify'>
      The main pipeline consists of the following steps:
    <ul>
      <li><strong>Alpha peak decompression:</strong> The digitized alpha peaks in the silicon detector waveforms are reconstructed using a dedicated decompression algorithm and processing (Savitzky-Golay convolution).</li>
      <li><strong>Alpha peak identification:</strong> The height of the alpha peaks is computed to obtain the alpha energy for each event. 
        </li>
      <li><strong>Data persistence:</strong> These energies are stored in UID-energy binary maps to be used in downstream analysis. </li>
      <li><strong>Area histogramming:</strong> The alpha spectrum is reconstructed by histogramming the energies for each set to monitor for variations, and for the entire run to gather higher statistics.</li>
      <li><strong>Energy calibration:</strong> The alpha peaks are identified and fitted to gaussian curves to extract their mean energies. This allows to calibrate the detector response and identify any potential drifts over time.</li>
      <li><strong>Fixing Isotope ranges:</strong> The energy ranges for each isotope are fixed based on the fitted peak positions and used in downstream analysis to identify the isotope of each recoil event.</li>
      <li><strong>Visualization:</strong> All histograms, fits and calibration graphs are plotted for user inspection. </li>
    </ul>
    </p>
    <p align='justify'>
      Below are some plotss summarizing the operations in the alpha module.
    </p>
    <div>
      <div className="image-wrapper">
        <img
          src={alphaImages[alphaImageIndex]}
          alt="Alpha area histogram summary over all sets"
          className="project-image clickable-image"
          onClick={() => setAlphaImageIndex((alphaImageIndex + 1) % alphaImages.length)}
        />
        <div className="image-caption">
          <p>{alphaCaptions[alphaImageIndex]} ({alphaImageIndex + 1} / {alphaImages.length})</p>
        </div>
        <div className="image-navigation">
          <button onClick={() => setAlphaImageIndex((alphaImageIndex - 1 + alphaImages.length) % alphaImages.length)}>Previous</button>
          <button onClick={() => setAlphaImageIndex((alphaImageIndex + 1) % alphaImages.length)}>Next</button>
        </div>
      </div>
    </div>
    <p align='justify'>
      The alpha module can be run at any stage, as long as the multi-isotope run data is available. 
      However, it is typically run before the recoil integration module to allow for isotope-specific analysis of the recoil S2 areas.
    </p>
    <ScrollToId id="RepoMap">Return to Repo Map</ScrollToId>

    </div>
  )
}