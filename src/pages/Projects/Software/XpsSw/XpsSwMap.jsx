import React from 'react';
import { useNavigate } from 'react-router-dom';
import './XpsSwMap.css';

import importImg from './images/xpsSw_map/import.png';
import backgroundImg from './images/xpsSw_map/background.png';
import alignImg from './images/xpsSw_map/align.png';
import integrateImg from './images/xpsSw_map/integrate.png';
import fittingImg from './images/xpsSw_map/fitting.png';
import txpsImg from './images/xpsSw_map/txps.png';
import nexafsImg from './images/xpsSw_map/nexafs.png'
import aliImg from './images/xpsSw_map/ali.png'
import qcmImg from './images/xpsSw_map/qcm.png'
import rgaImg from './images/xpsSw_map/rga.png'

const areas = [
  { name: 'import', img: importImg, style: {left: '0.89%', top: '11.41%', width: '20.53%', height: '28.44%'}, target: 'import' },
  { name: 'background', img: backgroundImg, style: {left: '24.66%', top: '6.81%', width: '14.89%', height: '33.05%'}, target: 'background'},
  { name: 'align', img: alignImg, style: {left: '41.9%', top: '14.7%', width: '17.7%', height: '25.15%'}, target: 'align'},
  { name: 'integrate', img: integrateImg, style: {left: '62.85%', top: '12.72%', width: '14.48%', height: '27.13%'}, target: 'integrate'},
  { name: 'fitting', img: fittingImg, style: {left: '81.4%', top: '12.79%', width: '17.71%', height: '27.13%'}, target: 'fitting'},
  { name: 'txps', img: txpsImg, style: {left: '0.85%', top: '61.23%', width: '17.71%', height: '37.74%'}, target: 'txps'},
  { name: 'nexafs', img: nexafsImg, style: {left: '20.21%', top: '63.99%', width: '15.99%', height: '34.99%'}, target: 'nexafs'},
  { name: 'ali', img: aliImg, style: {left: '39.17%', top: '62.29%', width: '15.99%', height: '36.73%'}, target: 'ali'},
  { name: 'qcm', img: qcmImg, style: {left: '57.02%', top: '62.29%', width: '21.52%', height: '36.73%'}, target: 'qcm'},
  { name: 'rga', img: rgaImg, style: {left: '80.5%', top: '63.55%', width: '18.62%', height: '35.43%'}, target: 'rga'},
];

export default function XpsSwInteractiveMap() {
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
    <div className="xpsMap-map-container">
      {areas.map(area => (
        <img
          key={area.name}
          src={area.img}
          alt={area.name}
          className="xpsMap-map-img"
          style={area.style}
          onClick={() => handleClick(area.target)}
        />
      ))}
    </div>
  );
}
