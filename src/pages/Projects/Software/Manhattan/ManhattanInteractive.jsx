import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Placeholder image imports - replace with your actual image paths
import updateDbImg from './images/mht_mock/update_db.png';
import wiImg from './images/mht_mock/wi.png';
import maImg from './images/mht_mock/ma.png';
import conjugationImg from './images/mht_mock/conjugation.png';
import viewTeamImg from './images/mht_mock/view_team.png';
import clozeImg from './images/mht_mock/cloze.png';
import settingsImg from './images/mht_mock/settings.png';

import './ManhattanInteractive.css';
import './screens/langselect.css';
import baseMapImg from './images/mht_mock/mht_mock_canvas.png';

const areas = [
    { name: 'ma', img: maImg, style: {left: '7.62%', top: '10.81%', width: '30.1%', height: '17.9%'}, target: 'ma' },
    { name: 'wi', img: wiImg, style: {left: '40.07%', top: '10.81%', width: '30.1%', height: '17.9%'}, target: 'wi' },
    { name: 'conjugation', img: conjugationImg, style: {left: '40.07%', top: '31.39%', width: '30.1%', height: '17.9%'}, target: 'conjugation' },
    { name: 'cloze', img: clozeImg, style: {left: '7.62%', top: '31.15%', width: '30.1%', height: '17.9%'}, target: 'cloze' },
    { name: 'updateDb', img: updateDbImg, style: {left: '40.07%', top: '51.64%', width: '30.1%', height: '17.9%'}, target: 'updateDb' },
  { name: 'viewTeam', img: viewTeamImg, style: {left: '7.62%', top: '51.48%', width: '30.1%', height: '17.9%'}, target: 'viewTeam' },
  // { name: 'langSelect', img: langSelectImg, style: {left: '7.8%', top: '70.5%', width: '27.65%', height: '9%'}, target: 'langSelect' },
  { name: 'settings', img: settingsImg, style: {left: '40.0%', top: '70.4%', width: '26.50%', height: '9%'}, target: 'settings' },
];

// import the small mock screens
import UpdateDbScreen from './screens/UpdateDbScreen';
import WiScreen from './screens/WiScreen';
import MaScreen from './screens/MaScreen';
import ConjugationScreen from './screens/ConjugationScreen';
import ViewTeamScreen from './screens/ViewTeamScreen';
import ClozeScreen from './screens/ClozeScreen';
import SettingsScreen from './screens/SettingsScreen';

const SCREEN_REGISTRY = {
  updateDb: UpdateDbScreen,
  wi: WiScreen,
  ma: MaScreen,
  conjugation: ConjugationScreen,
  viewTeam: ViewTeamScreen,
  cloze: ClozeScreen,
  settings: SettingsScreen,
};

export default function ManhattanInteractiveMap() {
  const navigate = useNavigate();
  const [activeScreen, setActiveScreen] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [langSelected, setLangSelected] = useState('Random');

  const handleClick = (target) => {
    if (!target) return;
    // If there's a registered interactive screen for this target, open it as an overlay.
    if (typeof target === 'string' && SCREEN_REGISTRY[target]) {
      setActiveScreen(target);
      return;
    }
    if (typeof target === 'string' && target.startsWith('/')) {
      navigate(target);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ActiveScreen = activeScreen ? SCREEN_REGISTRY[activeScreen] : null;

  return (
    <div className="manhattan-map-container">
      {/* base map image — ensures overlays align with visual map */}
      <img src={baseMapImg} alt="ManHatTan map" className="manhattan-map-base" />

      {/* If an interactive screen is active, replace the interactive area with the screen in-place */}
      {ActiveScreen ? (
        <div className="manhattan-map-replacement">
          <ActiveScreen onClose={() => setActiveScreen(null)} />
        </div>
      ) : (
        <>
          {areas.map(area => (
            <img
              key={area.name}
              src={area.img}
              alt={area.name}
              className="manhattan-map-img"
              style={area.style}
              onClick={() => handleClick(area.target)}
            />
          ))}

          {/* Inline language selector placed directly on the base map at the original coords */}
          <div
            className="manhattan-map-img lang-inplace"
            style={{ position: 'absolute', left: '7.8%', top: '65%', width: '29.65%', height: '11%' }}
            onClick={() => setLangOpen((v) => !v)}
          >
            <div className="lang-select-panel inplace" onClick={(e) => e.stopPropagation()}>
              <div className="lang-current" onClick={() => setLangOpen((v) => !v)} role="button" tabIndex={0}>
                <div className="lang-current-label">Language ex.</div>
                <div className="lang-current-value">{langSelected} <span className="lang-caret">▾</span></div>
              </div>
              {langOpen && (
                <div className="lang-options up" role="list">
                  {['English','German','Random'].map((o) => (
                    <button key={o} type="button" className={`lang-option ${o === langSelected ? 'active' : ''}`} onClick={() => { setLangSelected(o); setLangOpen(false); }}>
                      {o}
                    </button>
                  ))}
                </div>
              )}
              {/* note removed: button already shows selected language */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
