import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './SurfaceScience.css'
import './SurfaceTechniques.css'

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
        Therefore, surface science techniques are employed to prepare and analyze these functionalized surfaces.
      </p>
      
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