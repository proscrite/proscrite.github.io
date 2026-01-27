import React from 'react';
import { useNavigate } from 'react-router-dom';
// Placeholder image imports - replace with your actual image paths
import afmImg from './images/techniques/afm.png';
import xpsImg from './images/techniques/xps.png';
import stmImg from './images/techniques/stm.png';
import nexafsImg from './images/techniques/nexafs.png';
import './SurfaceTechniques.css';


const areas = [
  { name: 'STM', img: stmImg, style: {left: '8.86%', top: '1.62%', width: '22.7%', height: '55.15%'}, target: 'stm' },
  { name: 'XPS', img: xpsImg, style: {left: '35.71%', top: '1.62%', width: '28.79%', height: '55.15%'}, target: 'xps' },
  { name: 'AFM', img: afmImg, style: {left: '68.38%', top: '1.62%', width: '22.7%', height: '55.15%'}, target: 'afm' },
  { name: 'NEXAFS', img: nexafsImg, style: {left: '19.1%', top: '60.74%', width: '62.02%', height: '37.13%'}, target: 'nexafs' },
];

export default function SurfaceTechniques() {
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
  );
}
