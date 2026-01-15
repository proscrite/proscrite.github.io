import React from 'react';
import { useNavigate } from 'react-router-dom';

import IonProductionImg from './images/baSource_scheme/ion_production.png'
import MassFilterImg from './images/baSource_scheme/mass_filtering.png'
import IonSteeringImg from './images/baSource_scheme/ion_steering.png'
import IonThermalizationImg from './images/baSource_scheme/ion_thermalization.png'
import MicroscopyChamberImg from './images/baSource_scheme/microscopy_chamber.png'

const schemeImages = [IonProductionImg, MassFilterImg, IonSteeringImg, IonThermalizationImg, MicroscopyChamberImg];

import './SourceInteractiveMap.css';

const areas = [
  { name: 'Production', img: IonProductionImg, style: {left: '67.22%', top: '3.75%', width: '30.18%', height: '95.81%'}, target: 'ion-production' },
  { name: 'MassFiltering', img: MassFilterImg, style: {left: '47.79%', top: '3.75%', width: '19.81%', height: '96.22%'}, target: 'mass-filtering' },
  { name: 'Steering', img: IonSteeringImg, style: { left: '24.02%', top: '3.56%', width: '23.67%', height: '96.25%' }, target: 'ion-steering' },
  { name: 'MicroscopyChamber', img: MicroscopyChamberImg, style: { left: '0.0%', top: '3.3%', width: '13.44%', height: '96.7%' }, target: 'microscopy-chamber' },
  { name: 'Thermalization', img: IonThermalizationImg, style: { left: '11.17%', top: '3.53%', width: '13.47%', height: '96.5%' }, target: 'ion-thermalization' },
];

export default function BaSourceInteractiveMap() {
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
    <div className="baSource-map-container">
      {areas.map(area => (
        <img
          key={area.name}
          src={area.img}
          alt={area.name}
          className="baSource-map-img"
          style={area.style}
          onClick={() => handleClick(area.target)}
        />
      ))}
    </div>
  );
}
