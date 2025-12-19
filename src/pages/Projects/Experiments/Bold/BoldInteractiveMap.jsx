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
  { name: 'Synthesis', img: synthesisImg, style: { left: '6.15%', top: '2.78%', width: '19.27%', height: '44.26%' }, target: 'synthesis' },
  { name: 'Surfaces', img: surfacesImg, style: { left: '3.75%', top: '64.44%', width: '30.52%', height: '26.67%' }, target: 'surfaces' },
  { name: 'Optics', img: opticsImg, style: { left: '40.94%', top: '62.41%', width: '15.52%', height: '34.81%' }, target: 'optics' },
  { name: 'Next', img: nextImg, style: { left: '38.85%', top: '2.78%', width: '50.52%', height: '40.74%' }, target: '/projects/experiments/nextexperiment' },
  { name: 'Ion Sources', img: ionSourcesImg, style: { left: '71.88%', top: '41.48%', width: '25.63%', height: '53.33%' }, target: 'ion-sources' },
  { name: 'Bold', img: boldImg, style: { left: '36.98%', top: '26.30%', width: '27.92%', height: '21.67%' }, target: 'bold-start' },
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
