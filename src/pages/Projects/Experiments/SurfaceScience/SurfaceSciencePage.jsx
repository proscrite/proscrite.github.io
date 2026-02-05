import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './SurfaceScience.css'
import './SurfaceTechniques.css'
import ImageCarousel from '../../../../components/ImageCarousel'


import moleculeCrop1 from './images/molecule_preparation/molecule_preparation.001.png'
import moleculeCrop2 from './images/molecule_preparation/molecule_preparation.002.png'
import moleculeCrop3 from './images/molecule_preparation/molecule_preparation.003.png'
import moleculeCrop4 from './images/molecule_preparation/molecule_preparation.004.png'
import moleculeCrop5 from './images/molecule_preparation/molecule_preparation.005.png'
import moleculeCrop6 from './images/molecule_preparation/molecule_preparation.006.png'
import moleculeCrop7 from './images/molecule_preparation/molecule_preparation.007.png'
import moleculeCrop8 from './images/molecule_preparation/molecule_preparation.008.png'
import moleculeCrop9 from './images/molecule_preparation/molecule_preparation.009.png'
import moleculeCrop10 from './images/molecule_preparation/molecule_preparation.010.png'
const moleculeCrops = [moleculeCrop1, moleculeCrop2, moleculeCrop3, moleculeCrop4, moleculeCrop5, 
  moleculeCrop6, moleculeCrop7, moleculeCrop8, moleculeCrop9, moleculeCrop10];
const moleculeCaptions = [
  'The field at first is rugged and heterogeneous, and it needs to be flatten and prepared for the molecules to be sown.',
  'The first step is annealing, a term used by smiths, which consists on heating the substrate to high temperatures to remove contaminants and smooth the surface. This step would actually be the opposite of plowing, as the goal is to create a smooth and clean surface.',
  'Once the field is smooth, it can still contain some stubborn pebbles, stones and weeds (contaminants) that need to be removed. ',
  'This is done by sputtering, which is like using a strong herbicide to eliminate unwanted plants from the field.',
  'Now the field is ready for sowing the seeds (molecules).',
  'There are different methods to sow the seeds, with the objective of distributing them evenly across the field. ',
  'When the seeds are sown, we can start experimenting with them, for example by watering them with different solutions to see how they grow.',
  'We can also use fertilizers (like adding Barium) to enhance their growth and performance.',
  'Here we see different plants at different stages of growth. ',
  'Finally, we can harvest the crops, which in our case means collecting the fluorescent signal emitted by the molecules when they capture Ba²⁺ ions.',
];

import preparationImg from './images/preparation.png'
import characterizationImg from './images/characterization.png'
import resultsImg from './images/results.png'

const areas = [
  { name: 'Preparation', img: preparationImg, style: { left: '0.24%', top: '8.48%', width: '28.94%', height: '79.27%' },
  target: '/projects/experiments/SurfaceScience/preparation' },
  { name: 'Characterization', img: characterizationImg, style: { left: '30.56%', top: '8.48%', width: '27.83%', height: '79.27%' }, 
  target: '/projects/experiments/SurfaceScience/characterization' },
  { name: 'Results', img: resultsImg, style: { left: '60.0%', top: '8.48%', width: '39.27%', height: '79.27%' }, 
  target: '/projects/experiments/SurfaceScience/results' },
];


export default function SurfaceSciencePage() {
  const [currentCaptionIndex, setCurrentCaptionIndex] = React.useState(0);
  const navigate = useNavigate();
  const handleClick = (target) => {
    if (!target) return;
    if (typeof target === 'string' && target.startsWith('/')) {
      navigate(target);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="projects-container surface-science-page">
      <h1>Surface Science for BOLD at CFM</h1>
      <p align='justify'>
        The BOLD project revolves around developing a novel sensor technology based on molecules that can capture Ba²⁺ ions and emit a fluorescence signal.
        These molecules need to be immobilized on a substrate surface in a controlled manner to ensure optimal performance of the sensor.
        You can think of this process as a sort of "sowing seeds" on a surface, where the seeds are the molecules and the soil is the substrate. 
        Just like in gardening, the way you prepare the soil and plant the seeds can greatly affect how well they grow and function. 
        The following animation shows a simplified representation of the process of surface functionalization. Click on the image to cycle through the steps.
      </p>
      <div className="image-carousel-container">
        <ImageCarousel images={moleculeCrops} captions={moleculeCaptions} width={100}/>
      </div>
      
      <p align='justify'>
        Characterization of the functionalized surfaces is essential to verify the survival of molecules to the deposition processes, their successful immobilization on surfaces and to assess the properties of the prepared sample.
        While optimal optical performance is the ultimate objective for these samples, classical microscopy techniques (even super resolution ones) are limited by the diffraction limit and cannot provide information at the single-atom level.
        This is critical for samples at the monolayer regime, i.e. a single layer of molecules covering a solid substrate. Therefore surface science techniques are necessary to guide the process of surface functionalization at this scale.
      </p>

      <p align='justify'>
        An important part of my PhD consisted on investigating different surface science techniques to functionalize substrates with the Ba²⁺-capturing molecules and characterize the resulting surfaces.
        This topic is then divided into three subcategories: preparation, characterization, and results. Click on the pages below to learn more about each of these aspects.
      </p>

      {/* Interactive map: click regions to navigate or scroll */}
      <div className="techniques-map-container">
        {areas.map(area => (
          <img
            key={area.name}
            src={area.img}
            alt={area.name}
            className="techniques-map-img"
            style={area.style}
            onClick={() => handleClick(area.target)}
          />
        ))}
      </div>


      
    </div>
  )
}