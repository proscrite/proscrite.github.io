import React, { useState, useEffect } from 'react'
import './BaSource.css'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import BaSourceInteractiveMap from './SourceInteractiveMap'

// import sabbathSetupImg from '../images/cfm_optics6.jpg'
import setup1 from './images/bgu_ba_ion.jpg'
import setup2 from './images/bgu_ba_ion2.jpg'
import setup3 from './images/bgu_ba_ion3.jpg'
import setup4 from './images/bgu_ba_ion4.jpg'
import setup5 from './images/bgu_ba_ion_open.jpg'
import setup6 from './images/ba_ion_electronics.jpg'

const setupImages = [setup1, setup2, setup3, setup4, setup5, setup6];
const captions = [
  'Barium ion source at Ben Gurion University',
  'Other view of the setup',
  'Rear view of the barium ion source setup: the high voltage feedthroughs for the evaporator is protected with a metacrylate cover',
  'The computer controlling the barium ion source components can be seen on the bottom left corner.',
  'View of the setup with with the thermalization chamber opened',
  'Electronics rack controlling the filament and other components of the  source',
]

import controlInterfaceImage from './images/control_nb.png'

import IonEvaporator1 from './images/ion_evaporator1.png'
import IonEvaporator2 from './images/ion_evaporator2.jpg'
import IonEvaporator3 from './images/ion_evaporator3.jpg'
const ionEvaporatorImages = [IonEvaporator1, IonEvaporator2, IonEvaporator3];
const ionEvaporatorCaptions = [
    'Different versions of the barium evaporator assembly: transparent crucible holder',
    'Different versions of the barium evaporator assembly: pierced lid for better vapor flow',
    'Different versions of the barium evaporator assembly: former design with thick filament',
    ];

import massSpectrum1 from './images/mass_spectrum1.png'
import massSpectrum2 from './images/mass_spectrum2.png'
const massSpectrumImages = [massSpectrum1, massSpectrum2];
const massSpectrumCaptions = [
    'Mass spectra of Xenon ions introduced into the Barium ion thermal source and background with only carrier Argon gas.',
    'Mass spectra of Xenon ions at two different pressures of the carrier gas: 0.3 Torr and "vacuum" (minimum value in the gauge).',
    ];


import steererImg1 from './images/steerer_planes1.png'
import steererImg2 from './images/steerer_planes2.jpg'
const steererImages = [steererImg1, steererImg2];
const steererCaptions = [
    'Electric field simulation in SIMION software of the ion steerer assembly.',
    'Photograph of the ion steerer assembly, showing the two steering perpendicular planes.',
    ];

import thermalizationImg1 from './images/thermalization1.png'
import thermalizationImg2 from './images/thermalization2.png'
import thermalizationImg3 from './images/thermalization3.png'
import thermalizationImg4 from './images/thermalization4.png'
const thermalizationImages = [thermalizationImg1, thermalizationImg2, thermalizationImg3, thermalizationImg4];
const thermalizationCaptions = [
    'Schematic of the ion thermalization chamber, showing the connection with the capillary, the focusing ring and the analyzing unit.',
    'SIMION simulation of the ion trajectories inside the thermalization chamber filled with Helium gas.',
    'Internal close-up of the analyzing unit, showing the two perpendicular electric grids and the ion collector.',
    'Ion energy assessment: comparison between SIMION simulations and experimental data.',
    ];

import microscopyChamberImg from './images/microscopy_chamber1.png'
import microscopyChamberImg2 from './images/microscopy_chamber2.png'
import microscopyChamberImg3 from './images/microscopy_chamber3.png'
const microscopyChamberImages = [microscopyChamberImg, microscopyChamberImg2, microscopyChamberImg3];
const microscopyChamberCaptions = [
    'Design of the microscopy chamber upgrade for the Barium ion thermal source.',
    'Design of the chamber integrated with the rest of the optical setup.',
    'Previous design of the microscopy chamber with re-entrance window to keep the microscope objective outside the pressure chamber.',
    ];

function ScrollToId({id, children }) {
  function handleClick(e) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  return (<a href={`#${id}`} onClick={handleClick} 
        style={{ color: '#6fa3ff', textDecoration: 'underline', cursor: 'pointer' }}>
        {children}
        </a>);
}

export default function BaSourcePage() {
  const [setupIndex, setSetupIndex] = useState(0);
  const [ionEvaporatorIndex, setIonEvaporatorIndex] = useState(0);
  const [massSpectrumIndex, setMassSpectrumIndex] = useState(0); 
  const [steererIndex, setSteererIndex] = useState(0);
  const [thermalizationIndex, setThermalizationIndex] = useState(0);
  const [microscopyChamberIndex, setMicroscopyChamberIndex] = useState(0);

  const location = useLocation();
    useEffect(() => {
        if (location.hash) return;
        window.scrollTo(0, 0);
    }, [location.pathname, location.hash]);
    
  return (
    <div className="projects-container">
        <h1> Barium ion thermal source </h1>

        <p align='justify'>
            The Barium ion thermal source is a crucial component of the BOLD experiment. 
            It is designed to produce a controlled beam of Barium ions for testing the ion detection and tagging capabilities of the sensor under similar conditions to those in the NEXT experiment.
            Producing a reliable and well-characterized source of Barium ions is a challenging but essential task for validating the performance of the BOLD detection system and optimizing its design.
            Other ion sources have been used, such as a Barium salt evaporator. You can read more about them in the <HashLink to="/projects/experiments/bold#ion-sources">
                Ion sources section of the BOLD page </HashLink>.
        </p>
        <p align='justify'>
            As I have experience with Barium evaporation sources <Link to="/projects/experiments/SurfaceScience"> from my work during the PhD at CFM</Link>, I collaborated intensively with the development and characterization of the Barium ion thermal source at Ben Gurion University.
            My contribution consisted in assessing and supervising the work by the students building the source and designing and adapting an upgrade to host microscopy elements in the thermalization chamber.
        </p>
        <p align='justify'>
            All the credit for building and operating the source goes to the students and researchers at Ben Gurion University: Shlomi Stampfer, Dr. Adam Redwine and Dr. Sergei Shchemelinin.
        </p>
        <p align='justify'>
            The following images show different views of the Barium ion thermal source setup at Ben Gurion University.
            Click on the images to cycle through them.
        </p>

        <div>
            <div className="image-wrapper">
                <div className="image-caption">
                    <p>{captions[setupIndex]} ({setupIndex + 1} / {setupImages.length})</p>
                </div>
                <img 
                src={setupImages[setupIndex]} alt={`RITA scheme ${setupIndex + 1}`} 
                className='smaller-image-wrapper clickable-image'
                onClick={() => setSetupIndex((setupIndex + 1) % setupImages.length)}
                />
                <div className="image-navigation">
                    <button onClick={() => setSetupIndex((setupIndex - 1 + setupImages.length) % setupImages.length)}>Previous</button>
                    <button onClick={() => setSetupIndex((setupIndex + 1) % setupImages.length)}>Next</button>
                </div>
            </div>
        </div>

        <p align='justify'>
            The source consists of a filament that heats the metalic Barium in a small rod container to produce a vapor, which is then ionized using an electron bombardment technique.
            The resulting Barium ions are extracted and focused into a beam using a series of electrostatic lenses and apertures.
            The source is housed in a vacuum chamber to minimize contamination and ensure stable operation. Ultra-high vacuum is required for evaporation of metal Barium and extraction of the ions, in the range of 10⁻⁶ - 10⁻⁷ mbar.
            However, the main purpose of this setup is to produce thermalized ions, which is achieved by slowing them down in collisions with a noble gas (Helium) at relatively high pressures (0.1 - 1 mbar).
            This abrupt transition of pressure must be managed by a differential pumping system consisting of three pumping stages and small apertures to maintain the required vacuum levels in the different sections of the setup.
        </p>
        <p id='SetupMap' align='justify'>
            The following scheme shows the main components of the Barium ion thermal source. Click on them to learn more about each part.
        </p>
        
        <BaSourceInteractiveMap />
     
     <h2 id='setup-control'> Setup control and monitoring </h2>
      <p align='justify'>
        The entire source setup is controlled and monitored using a dedicated computer system that interfaces with the various components of the source.
        This includes controlling the filament current, monitoring the vacuum levels, and adjusting the electrostatic lenses to optimize the ion beam.
        The control system also includes safety interlocks to prevent damage to the source or other components in case of a malfunction.
      </p>
      <p align='justify'>
        The main interface is a Jupyter notebook that allows real-time control and monitoring of the source parameters, as well as data logging for later analysis.
        The credit for developing this whole interface goes to Dr. Adam Redwine.
        The following image shows a screenshot of the control interface used for operating the Barium ion thermal source.
      </p>
      <div className="smaller-image-wrapper clickable-image">
        <img 
          src={controlInterfaceImage} 
          alt="Control interface screenshot" 
          className="image-wrapper clickable-image"
        />
      </div>


     <h2 id='ion-production'> Ion production </h2>
  
      <p align='justify'>
        Barium is produced by resistively heating a Barium metal rod contained in a small stainless steel crucible inside a movable rod.
        Neutral Ba gas produced by sublimation is then ionized using electron bombardment from a hot tungsten filament.
      </p>
      
      <div>
        <div className="tiny-image-wrapper clickable-image">
            <div className="image-caption">
                <p>{ionEvaporatorCaptions[ionEvaporatorIndex]} ({ionEvaporatorIndex + 1} / {ionEvaporatorImages.length})</p>
            </div>
            <img 
            src={ionEvaporatorImages[ionEvaporatorIndex]} alt={`RITA scheme ${ionEvaporatorIndex + 1}`} 
            className='image-wrapper clickable-image'
            onClick={() => setIonEvaporatorIndex((ionEvaporatorIndex + 1) % ionEvaporatorImages.length)}
            />
            <div className="image-navigation">
                <button onClick={() => setIonEvaporatorIndex((ionEvaporatorIndex - 1 + ionEvaporatorImages.length) % ionEvaporatorImages.length)}>Previous</button>
                <button onClick={() => setIonEvaporatorIndex((ionEvaporatorIndex + 1) % ionEvaporatorImages.length)}>Next</button>
            </div>
        </div>
      </div>
      <p align='justify'>
        Since Barium is a highly reactive metal, the entire ion source assembly must be baked and maintained under ultra-high vacuum conditions to prevent oxidation and contamination of the Barium vapor.
        Therefore, for ease of use, the initial characterization of the source is performed using Xenon, which has approximately similar mass and ionization properties but is chemically inert and can be simply introduced in gas form.
      </p>
      <ScrollToId id='SetupMap'>Return to Setup Map</ScrollToId>

      <h2 id='mass-filtering'> Mass spectroscopy and ion beam characterization </h2>

        <p align='justify'>
            To characterize the ion beam produced by the Barium ion thermal source, a mass spectrometer is used to analyze the composition and energy distribution of the ions.
            The mass filter is based on a magnet that separates ions according to their mass-to-charge ratio, allowing for the selection of Barium ions while filtering out other species or contaminants.
        </p>
        <p align='justify'>
            The following images show the mass spectrum of Xenon introduced into the source (as a proxy for Barium), demonstrating its ability to selectively filter the desired ion species.
            The other peaks correspond to the carrier Argon gas and to background gases present in the vacuum chamber, such as water vapor and nitrogen.
        </p>
        
        <div className="smaller-image-wrapper clickable-image">
            <div className="image-caption">
                <p>{massSpectrumCaptions[massSpectrumIndex]} ({massSpectrumIndex + 1} / {massSpectrumImages.length})</p>
            </div>
            <img 
            src={massSpectrumImages[massSpectrumIndex]} alt={`Mass spectrum ${massSpectrumIndex + 1}`} 
            className='image-wrapper clickable-image'
            onClick={() => setMassSpectrumIndex((massSpectrumIndex + 1) % massSpectrumImages.length)}
            />
            <div className="image-navigation">
                <button onClick={() => setMassSpectrumIndex((massSpectrumIndex - 1 + massSpectrumImages.length) % massSpectrumImages.length)}>Previous</button>
                <button onClick={() => setMassSpectrumIndex((massSpectrumIndex + 1) % massSpectrumImages.length)}>Next</button>
            </div>
        </div>
        <ScrollToId id='SetupMap'>Return to Setup Map</ScrollToId>


    <h2 id='ion-steering'> Ion steering and focusing </h2>


        <p align='justify'>
            Once the ions are produced and filtered, they need to be introduced into the thermalization chamber through a tiny capillary (0.1 mm diameter) with high precision.
            The capillary connects the higher-pressure thermalization chamber (0.1 - 1 mbar) with the high-vacuum section (10⁻⁶ - 10⁻⁷ mbar).
            This means that the ion beam must be carefully steered and focused to ensure that the ions enter the capillary without colliding with its walls, which would lead to losses and contamination.
        </p>
        <p align='justify'>
            To achieve this, an ion steerer assembly is used, consisting of two perpendicular planes that can apply electric fields to deflect the ion beam in both X and Y directions.
            The following images show the design and implementation of the ion steerer assembly.
        </p>
        <div>
        <div className="tiny-image-wrapper clickable-image">
            <div className="image-caption">
                <p>{steererCaptions[steererIndex]} ({steererIndex + 1} / {steererImages.length})</p>
            </div>
            <img 
            src={steererImages[steererIndex]} alt={`Steerer assembly ${steererIndex + 1}`} 
            className='image-wrapper clickable-image'
            onClick={() => setSteererIndex((steererIndex + 1) % steererImages.length)}
            />
            <div className="image-navigation">
                <button onClick={() => setSteererIndex((steererIndex - 1 + steererImages.length) % steererImages.length)}>Previous</button>
                <button onClick={() => setSteererIndex((steererIndex + 1) % steererImages.length)}>Next</button>
            </div>
        </div>
      </div>
      <ScrollToId id='SetupMap'>Return to Setup Map</ScrollToId>

    <h2 id='ion-thermalization'> Ion thermalization </h2>

        <p align='justify'>
            The thermalization chamber is designed to slow down and thermalize the Barium ions using collisions with a noble gas (Helium) at relatively high pressures (0.1 - 1 mbar).
            This process reduces the kinetic energy of the ions, bringing them to thermal equilibrium with the surrounding gas and allowing for more accurate measurements of their properties.
            Four electrostatic lenses (rings) are used to focus the ion beam as it enters the thermalization chamber, ensuring that the ions collide efficiently with the Helium gas and reach thermal equilibrium.
        </p>
        <p align='justify'>
            To quantify the efficiency of the thermalization and steering processes, an analyzing unit is included at the end of the chamber.
            This unit consists of two perpendicular electric grids that can apply controlled electric fields to manipulate the ion trajectories, as well as an ion collector to measure the resulting ion current.
            In addition, the energy of the ions after thermalization is assessed by comparing SIMION simulations with experimental data at different electric field configurations.
        </p>
        <p align='justify'>
            The following images show the design and implementation of the ion thermalization chamber. Click on them to cycle through.
        </p>
        <div>
        <div className="smaller-image-wrapper clickable-image">
            <div className="image-caption">
                <p>{thermalizationCaptions[thermalizationIndex]} ({thermalizationIndex + 1} / {thermalizationImages.length})</p>
            </div>
            <img 
            src={thermalizationImages[thermalizationIndex]} alt={`Thermalization chamber ${thermalizationIndex + 1}`} 
            className='image-wrapper clickable-image'
            onClick={() => setThermalizationIndex((thermalizationIndex + 1) % thermalizationImages.length)}
            />
            <div className="image-navigation">
                <button onClick={() => setThermalizationIndex((thermalizationIndex - 1 + thermalizationImages.length) % thermalizationImages.length)}>Previous</button>
                <button onClick={() => setThermalizationIndex((thermalizationIndex + 1) % thermalizationImages.length)}>Next</button>
            </div>
        </div>
      </div>
      <ScrollToId id='SetupMap'>Return to Setup Map</ScrollToId>

    <h2 id='microscopy-chamber'> Microscopy chamber (future upgrade) </h2>
        <p align='justify'>
            I designed an upgrade to the thermalization chamber to incorporate microscopy elements for direct optical observation of the thermalized Ba²⁺ ions.
            The microscopy chamber is housed in a stainless-steel cube chamber in which the thermalization chamber is embedded. 
            The analyzing unit is replaced by a chemosensor (sample) that can capture the thermalized Ba²⁺ ions while being observed under a microscope.
            The chamber is designed to accommodate a high-resolution microscope objective (NA = 0.95) placed inside the vacuum chamber to achieve optimal optical performance.
        </p>
        <p align='justify'>
            The sample can be moved in three dimensions using a compact, vacuum-compatible piezoelectric stage, allowing for precise positioning and scanning of the sample under the microscope.
            Moreover, the sample containing the fluorescence molecules can be exchanged through a fast-entry load-lock system.
            This work was a natural extension of my experience at with microscopy for fluorescence imaging <Link to='/projects/experiments/SurfaceSciencePage'> during my PhD at CFM </Link> and <Link to='/projects/experiments/SabatHuji'> at the Hebrew University of Jerusalem</Link>.  
        </p>
        <p align='justify'>
            The following images show the design of the microscopy chamber upgrade for the Barium ion thermal source.
            Click on them to cycle through.
        </p>
        <div>
        <div className="smaller-image-wrapper clickable-image">
            <div className="image-caption">
                <p>{microscopyChamberCaptions[microscopyChamberIndex]} ({microscopyChamberIndex + 1} / {microscopyChamberImages.length})</p>
            </div>
            <img 
            src={microscopyChamberImages[microscopyChamberIndex]} alt={`Microscopy chamber ${microscopyChamberIndex + 1}`} 
            className='image-wrapper clickable-image'
            onClick={() => setMicroscopyChamberIndex((microscopyChamberIndex + 1) % microscopyChamberImages.length)}
            />
            <div className="image-navigation">
                <button onClick={() => setMicroscopyChamberIndex((microscopyChamberIndex - 1 + microscopyChamberImages.length) % microscopyChamberImages.length)}>Previous</button>
                <button onClick={() => setMicroscopyChamberIndex((microscopyChamberIndex + 1) % microscopyChamberImages.length)}>Next</button>
            </div>
        </div>
        </div>
        <p align='justify'>
            The design originally included a re-entrance window to keep the microscope objective outside the pressure chamber, but this was later discarded in favor of placing the entire microscope inside the vacuum chamber to achieve better optical performance.
            This is because the numerical aperture (NA) of the microscope objective would be severely limited by the presence of the window, reducing the resolution and sensitivity of the optical measurements.
        </p>
        <p align='justify'>
            This upgrade aims to enhance the capabilities of the Barium ion thermal source by enabling real-time optical monitoring of the ion beam and its interactions with the surrounding gas.
            The microscopy chamber is designed to accommodate high-resolution optical components, such as lenses and cameras, while maintaining the required vacuum and pressure conditions for ion thermalization.
        </p>
        <ScrollToId id='SetupMap'>Return to Setup Map</ScrollToId>
    </div>
  )
}