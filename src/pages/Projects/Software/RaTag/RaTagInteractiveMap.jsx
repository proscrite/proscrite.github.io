import React from 'react';
import { useNavigate } from 'react-router-dom';
// Placeholder image imports - replace with your actual image paths
import preparationImg from './images/repo_modules/preparation.png';
import xRaysImg from './images/repo_modules/xrays.png';
import recoilImg from './images/repo_modules/recoil.png';
import finalImg from './images/repo_modules/final.png';
import alphasImg from './images/repo_modules/alphas.png';
import './RaTagInteractiveMap.css';

const areas = [
  { name: 'Preparation', img: preparationImg, style: {left: '7.08%', top: '40.89%', width: '17.25%', height: '60%'}, target: 'preparation' },
  { name: 'Recoils', img: recoilImg, style: {left: '38.25%', top: '53.75%', width: '36.27%', height: '29.16%'}, target: 'recoils' },
  { name: 'X-Rays', img: xRaysImg, style: {left: '39.5%', top: '27.4%', width: '34.27%', height: '11.61%'}, target: 'xrays' },
  { name: 'Final Analysis', img: finalImg, style: {left: '74.1%', top: '32%', width: '21.51%', height: '39%'}, target: 'finalAnalysis' },
  { name: 'Alphas', img: alphasImg, style: {left: '7.44%', top: '14.67%', width: '24%', height: '32.1%'}, target: 'alphas' },
];

export default function RaTagInteractiveMap() {
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
    <div className="ratag-map-container">
      {areas.map(area => (
        <img
          key={area.name}
          src={area.img}
          alt={area.name}
          className="ratag-map-img"
          style={area.style}
          onClick={() => handleClick(area.target)}
        />
      ))}
    </div>
  );
}
