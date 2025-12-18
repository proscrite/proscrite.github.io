import React from 'react';
import { useNavigate } from 'react-router-dom';
// Placeholder image imports - replace with your actual image paths
import synthesisImg from './images/interdisciplinarity/synthesis.png';
import surfacesImg from './images/interdisciplinarity/surfaces.png';
import opticsImg from './images/interdisciplinarity/optics.png';
import ionSourcesImg from './images/interdisciplinarity/ion_sources.png';
import nextImg from './images/interdisciplinarity/next_logo.png';
import boldImg from './images/interdisciplinarity/bold_logo.png';
import './BoldInteractiveMap.css';

const areas = [
  { name: 'Synthesis', img: synthesisImg, style: { left: '59px', top: '15px', width: '185px', height: '239px' }, target: 'synthesis' },
  { name: 'Surfaces', img: surfacesImg, style: { left: '36px', top: '348px', width: '293px', height: '144px' }, target: 'surfaces' },
  { name: 'Optics', img: opticsImg, style: { left: '393px', top: '337px', width: '149px', height: '188px' }, target: 'optics' },
  { name: 'Next', img: nextImg, style: { left: '373px', top: '15px', width: '485px', height: '220px' }, target: '/projects/experiments/nextexperiment' },
  { name: 'Ion Sources', img: ionSourcesImg, style: { left: '690px', top: '224px', width: '246px', height: '288px' }, target: 'ion-sources' },
  { name: 'Bold', img: boldImg, style: { left: '355px', top: '142px', width: '268px', height: '117px' }, target: 'bold-start' },
];


export default function BoldInteractiveMap() {
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
    <div className="bold-map-container">
      {areas.map(area => (
        <img
          key={area.name}
          src={area.img}
          alt={area.name}
          className="bold-map-img"
          style={area.style}
          onClick={() => handleClick(area.target)}
        />
      ))}
    </div>
  );
}
