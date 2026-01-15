import React, { useState, useEffect } from 'react'
import './Rita.css'
import { Link } from 'react-router-dom';

import rita1 from './images/scheme_decay/scheme_decay.001.png';
import rita2 from './images/scheme_decay/scheme_decay.002.png';
import rita3 from './images/scheme_decay/scheme_decay.003.png';
import rita4 from './images/scheme_decay/scheme_decay.004.png';
import rita6 from './images/scheme_decay/scheme_decay.006.png';
import rita7 from './images/scheme_decay/scheme_decay.007.png';
import rita8 from './images/scheme_decay/scheme_decay.008.png';
import rita9 from './images/scheme_decay/scheme_decay.009.png';
import rita10 from './images/scheme_decay/scheme_decay.010.png';
import rita11 from './images/scheme_decay/scheme_decay.011.png';
import rita12 from './images/scheme_decay/scheme_decay.012.png';

import rita_setup0 from './images/rita_setup/rita_gasline.jpg';
import rita_setup1 from './images/rita_setup/rita_setup.001.png';
import rita_setup6 from './images/rita_setup/rita_tpc.jpg';
import rita_setup7 from './images/rita_setup/rita_source1.jpg';
import rita_setup8 from './images/rita_setup/rita_grids.jpg';
import rita_setup9 from './images/rita_setup/rita_electronics.jpg';
import rita_setup10 from './images/rita_setup/rita_alpha_spectra.jpg';
import rita_setup11 from './images/rita_setup/rita_wfm.jpg';

import rita_results1 from './images/recombination_results.png';
import rita_results2 from './images/calibration_summary.png';
import rita_repo from './images/RaTag_repo_structure.png';
import exampleWfm from './images/example_frame.png'

const ritaImages = [
  rita1, rita2, rita3, rita4, rita6,
  rita7, rita8, rita9, rita10, rita11, rita12
];

const ritaSetupImages = [
  rita_setup0, rita_setup1, 
  rita_setup6, rita_setup7, rita_setup8,
  rita_setup9, rita_setup10, rita_setup11
];

const captions = [
  `Click to advance through the RITA experiment.`,
  `A silicon detector is placed inside a pressure chamber filled with high pressure xenon gas (2 bar).`,
  `The silicon surface is coated with a thin layer of ²²⁸Th.`,
  `When ²²⁸Th undergoes alpha decay, ²²⁴Ra ions recoil from the surface while alpha particles are emitted into the bulk of the detector.`,
  `Let's zoom out again to see the full setup.`,
  `Parallel to the detector surface, an grid of electrodes creates an electric field that drifts the ²²⁴Ra ions.`,
  `On the opposite side of the chamber, the sensor containing the fluorescent molecules is placed to collect the ions.`,
  `The detected alphas are used to tag the time and energy of the decay events. When the emission of a ²²⁴Ra ion is flagged, the gate is opened to let the ion pass through.`,
  `Then, the capture of the ion by the fluorescent molecule can be observed at the single-ion level!`,
  `When other decays in the ²²⁸Th chain occur, the emitted alphas are used to switch off the gate and veto any incoming ions.`,
  `For example, a ²¹⁶Po ion is rejected. This way, we prevent background ions from reaching the sensor.`
]

const captions_setup = [
  `This is an overview image of the RITA setup.`,
  `The gas line recirculates and purifies the xenon gas used in the experiment. A separate PMT chamber is used to detect scintillation light produced by the xenon gas.`,
  `Inside the pressure chamber: the elements of the TPC are mounted in this structure and connected to feedthroughs on the bottom plate.`,
  `Here we can see the three components of the TPC: the silicon detector on the bottom, the gate grid in the middle, and the sensor on the top.`,
  `This is a closer view of the grid electrodes used to create the electric field that drifts the ions towards the sensor.`,
  `The electronics rack contains all the readout and control electronics for the gasline, the silicon detector and the PMT.`,
  `This plot shows two example alpha energy spectra measured with the silicon detector, where the different alpha peaks from the ²²⁸Th decay chain can be identified.`,
  `Here we can see some example waveforms recorded by the PMT when a recoiling energy leaves a track of electrons.`
]
export default function RitaPage() {
  
  const [ritaIndex, setRitaIndex] = useState(0)
  const [ritaSetupIndex, setRitaSetupIndex] = useState(0)
  useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <div className="main-container projects-container">
      <h1>RITA: Radium Ion TAgging</h1>
      <p align="justify">
        Developing a barium ion source for Ba-tagging in high-pressure xenon gas is a very challenging task. Barium can be produced by sublimation from solid barium compounds,
         but this process requires very low pressures (high vacuum) and high temperatures, conditions that are incompatible with the high-pressure xenon gas environment of the NEXT detector. 
         Moreover, these sources typically produce a large amount of barium ions, which is not ideal for single-ion detection required for Ba-tagging.
         The NEXT collaboration at BGU is trying to overcome these challenges and develop a source to operate under very low pressure and produce thermal ions. You can read more about it in the <Link to="/projects/experiments/BaSource">Ba ion Source page</Link>.
      </p>
      <p align="justify">
         However, a much more simple and versatile source can be developed by making use of a little chemistry trick. Barium is chemically identical to Radium (both are alkaline earth metals), and therefore,
         Radium ions (Ra²⁺) can be used as a proxy for Ba²⁺. The advantage of Ra²⁺ is that it is radioactive, and therefore it can be used to produce ions in-situ within the high-pressure xenon gas.
      </p>
      <p align="justify">
        The Radium Ion Tagging (RITA) experiment aims to demonstrate the feasibility of this approach by developing a Ra²⁺ ion source based on the alpha decay of a ²²⁸Th coating.
        Click on the image below to see how the experiment works!
      </p>
      <div>
      <div className="image-wrapper">
          <div className="image-caption">
            <p>{captions[ritaIndex]} ({ritaIndex + 1} / {ritaImages.length})</p>
          </div>
          <img 
          src={ritaImages[ritaIndex]} alt={`RITA scheme ${ritaIndex + 1}`} 
          className='project-image clickable-image'
          onClick={() => setRitaIndex((ritaIndex + 1) % ritaImages.length)}
          />
          <div className="image-navigation">
            <button onClick={() => setRitaIndex((ritaIndex - 1 + ritaImages.length) % ritaImages.length)}>Previous</button>
            <button onClick={() => setRitaIndex((ritaIndex + 1) % ritaImages.length)}>Next</button>
        </div>
      </div>

      <p align="justify">
        The RITA experiment is located at the Ben Gurion University of the Negev in Be'er Sheba, Israel.
        The setup consists of a Time Projection Chamber (TPC) filled with high-pressure xenon gas, which is circulated and purified continuously.
        On top of the TPC, a photomultiplier tube (PMT) detects the scintillation light produced by ionizing radiation in the xenon gas.
      </p>
      <p align="justify">
        A silicon detector coated with a thin layer of ²²⁸Th is placed at the bottom of the TPC. When ²²⁸Th undergoes alpha decay, it emits an alpha particle into the silicon detector and recoils a ²²⁴Ra ion into the xenon gas.
        The silicon detector measures the energy and time of the emitted alpha particles, allowing us to tag the emission of ²²⁴Ra ions.
        An electric field created by a grid of electrodes drifts the ²²⁴Ra ions towards the anode. On its way, these particles ionize the xenon gas, producing scintillation light, similarly to what happens
          <Link to="/projects/experiments/nextexperiment"> in the NEXT experiment. </Link> We can use this scintillation light to study the properties of ion transport in high-pressure xenon gas.
      </p>
      <p align="justify">
        Below you can see some pictures of the setup in progress.
      </p>
        
      <div className="image-wrapper rita-setup-image-wrapper">
        <img 
        src={ritaSetupImages[ritaSetupIndex]} alt={"RITA setup in BGU " + (ritaSetupIndex + 1)} 
        className='project-image clickable-image'
        onClick={() => setRitaSetupIndex((ritaSetupIndex + 1) % ritaSetupImages.length)}
        />
        <div className="image-caption">
          <p>{captions_setup[ritaSetupIndex]} ({ritaSetupIndex + 1} / {ritaSetupImages.length})</p>
        </div>
        <div className="image-navigation">
            <button onClick={() => setRitaSetupIndex((ritaSetupIndex - 1 + ritaSetupImages.length) % ritaSetupImages.length)}>Previous</button>
            <button onClick={() => setRitaSetupIndex((ritaSetupIndex + 1) % ritaSetupImages.length)}>Next</button>
        </div>
      </div>

      <h2>Recombination studies:</h2>
      <p align="justify">
        The first measurements performed with the RITA setup focus on studying the recombination of ions and electrons in high-pressure xenon gas.
        When an ionizing particle traverses the xenon gas, it produces both ions and free electrons. Some of these electrons can recombine with the ions, reducing the number of scintillation photons produced along the track.
        Understanding the recombination process is crucial for developing the RITA ion source, as it affects the number of ions that can be drifted towards the sensor.
      </p>
      <p align="justify">
        when the alpha decay occurs, the alpha is detected by the silicon detector and the daughter ion is ejected backward into the gas. 
      This event is associated with a small peak in the PMT signal called "S1". The recoiling ions ionize the xenon in the chamber until they deplete their energy. 
      The ionization electrons drift in the electric field created by the potential applied to the gate. Beyond the gate, a higher potential is applied, 
      which further accelerates the electrons and cause the xenon to emit electroluminescence. This is is recorded as a longer and more intense PMT signal or "S2".
      </p>
      <div className="image-wrapper smaller-image-wrapper">
        <img src={exampleWfm} alt="Example of PMT waveform" />
      </div>
      <div className="image-caption">
        <p>Example of PMT waveform showing S1 and S2 signals.</p>
      </div>

      <p align="justify">
        The time difference between S2 and S1 is the drift time, which depends on the electron drift velocity at a fixed drift length and electric field. 
        Therefore, the time window in the oscilloscope should always feature a small S1 and a larger S2 with a fixed delay between them.
        Below you can see an example of a waveform recorded by the PMT and the regions corresponding to S1, the beginning and the end of S2.
      </p>
      <p align="justify">
        The intensity of S2 gives us information on the amount of ionized electrons by the recoiling ion daughter. 
        The more intense the signal, the more electrons were produced by ionization and survived the drift until the electroluminiscence region.
        The maximum number of ionization electrons depends on the medium and the energy of the ion. 
        However, if the ion recombines with a free electron it will cease creating ionization electrons.
      </p>
      <p align="justify">
        Several models of electron-ion recombination in noble gases exist in the literature. We can observe and quantify this phenomenon in RITA by varying the drift field.
        In principle, the higher the field, the more likely the ion will <i>escape</i> recombination. This is the so-called "columnar recombination" effect. 
        However, at higher energies, the ion is more likely to recombine too. We can test this by studying the different daughters in the decay chain, since each is ejected with a different energy.
        This requires combining the data measured by the PMT and the Silicon alpha detector to associate each event to a specific decay. 
        The response of the alpha detector must be calibrated to adjust the exact measured energies and divide the spectrum into regions of interest for each isotope.
      </p>
      </div>
      <div className="image-wrapper">
        <img
          src={rita_results2}
          alt="Summary of calibration results"
          className="project-image"
        />
        <div className="image-caption">
          <p>Summary of calibration results.</p>
        </div>
      </div>

      <div className="image-wrapper rita-setup-image-wrapper">
        <img
          src={rita_results1}
          alt="Alpha energy spectra measured with the silicon detector"
          className="project-image"
        />
        <div className="image-caption">
          <p>Example alpha energy spectra measured with the silicon detector.</p>
        </div>
      </div>

      <p align="justify">
        To study recombination, we use the PMT to measure the scintillation light produced in the xenon gas when recoiling ions from the ²²⁸Th source interact with the gas.
        By analyzing the PMT waveforms, we can extract information about the amount of scintillation light produced and infer the recombination fraction under different electric field conditions.
        Moreover, by correlating the PMT signals with the tagged alpha decays from the silicon detector, we can study how recombination varies with the energy of the recoiling ions. 
        In other words, we can select a specific alpha energy from the ²²⁸Th decay chain and analyze the corresponding daughter ion's interaction in the xenon gas (²²⁴Ra, ²²⁰Rn, ²¹⁶Po, ²¹²Bi and ²¹²Po). 
      </p>

      <h2>Software:</h2>  
      <p align="justify">
        The data acquisition software for the RITA experiment is done entirely with the oscilloscope. Then a custom Python analysis software processes the recorded waveforms.
        The software coordinates the data recorded silicon detector and the PMT, allowing for coincident measurements of alpha decays and scintillation signals.
        The analysis software includes modules for waveform processing, peak finding, and energy calibration, enabling detailed studies of recombination and ion transport in high-pressure xenon gas.
        The software design is modular and flexible, allowing for easy adaptation to different measurement conditions and analysis techniques. 
        It was developed with auditability and reproducibility in mind, ensuring that all analysis steps are well-documented and can be reproduced by other researchers.
        More information about the software can be found in the <Link to="/projects/software/RaTag">RaTag software page</Link>.
      </p>
      <div className="image-wrapper smaller-image-wrapper">
      <Link to="/projects/software/RaTag" className="clickable-image">
        <img
          src={rita_repo}
          alt="RaTag software repository structure"
          className="project-image smaller-image-wrapper"
        />
        <div className="image-caption">
          <p>RaTag software repository structure.</p>
        </div>
      </Link>
      </div>
    </div>
  )
}