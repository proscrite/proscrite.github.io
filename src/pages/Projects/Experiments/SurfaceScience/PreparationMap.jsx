import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PreparationMap.css';
import membraneImg from './images/preparation/xps_preparation/membrane.png';
import scrollsImg from './images/preparation/xps_preparation/scrolls.png';
import turbosImg from './images/preparation/xps_preparation/turbos.png';
import ionPumpImg from './images/preparation/xps_preparation/ion_pump.png';
import manipulators1Img from './images/preparation/xps_preparation/manipulators1.png';
import manipulators2Img from './images/preparation/xps_preparation/manipulators2.png';
import microbalanceImg from './images/preparation/xps_preparation/microbalance.png';
import sputterImg from './images/preparation/xps_preparation/sputtering.png';
import plasmaImg from './images/preparation/xps_preparation/plasma.png';
import analyzerImg from './images/preparation/xps_preparation/analyzer.png';

const areas = [
  { name: 'membrane', img: membraneImg, style: {left: '6.95%', top: '80.18%', width: '17.86%', height: '19.04%'}, target: 'vacuum' },
  { name: 'scrolls', img: scrollsImg, style: {left: '18.27%', top: '78.16%', width: '36.27%', height: '20.96%'}, target: 'vacuum' },
  { name: 'turbos', img: turbosImg, style: {left: '23.42%', top: '50.0%', width: '32.61%', height: '37.68%'}, target: 'vacuum' },
  { name: 'ion_pump', img: ionPumpImg, style: {left: '57.45%', top: '63.75%', width: '14.67%', height: '26.47%'}, target: 'vacuum' },
  { name: 'manipulators1', img: manipulators1Img, style: {left: '1.55%', top: '39.15%', width: '38.48%', height: '19.74%'}, target: 'manipulators' },
  { name: 'manipulators2', img: manipulators2Img, style: {left: '48.73%', top: '32.21%', width: '41.2%', height: '34.49%'}, target: 'manipulators' },
  { name: 'microbalance', img: microbalanceImg, style: {left: '39.4%', top: '23.9%', width: '13.46%', height: '23.9%'}, target: 'sublimation' },
  { name: 'sputter', img: sputterImg, style: {left: '30.18%', top: '15.07%', width: '9.97%', height: '23.53%'}, target: 'cleaning' },
  { name: 'plasma', img: plasmaImg, style: {left: '64.23%', top: '7.68%', width: '20.76%', height: '31.99%'}, target: 'cleaning' },
  { name: 'analyzer', img: analyzerImg, style: {left: '46.82%', top: '1.1%', width: '21.87%', height: '27.02%'}, target: '/projects/experiments/SurfaceScience/characterization' },
];

export default function VacuumInteractiveMap() {
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
    <div className="vacuum-map-container">
      {areas.map(area => (
        <img
          key={area.name}
          src={area.img}
          alt={area.name}
          className="vacuum-map-img"
          style={area.style}
          onClick={() => handleClick(area.target)}
        />
      ))}
    </div>
  );
}
