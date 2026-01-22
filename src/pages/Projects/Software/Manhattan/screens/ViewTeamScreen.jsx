import React, { useState, useEffect, useRef } from 'react';
import './ma.css';
import './viewteam.css';
import behaglichImg from '../images/team_mock/behaglich.png';
import bisweilenImg from '../images/team_mock/bisweilen.png';
import andenkenImg from '../images/team_mock/andenken.png';
import benehmenImg from '../images/team_mock/benehmen.png';
import objectionsImg from '../images/team_mock/einwande.png';
import ratlosigkeitImg from '../images/team_mock/ratlosigkeit.png';
import loadingEgg from '../images/team_mock/loading_egg.png';
import loadingEggVid from '../images/team_mock/egg_loading.mp4';


// import loadingEgg from '../images/loading_egg.png';

// Team view: shows 6 cards (image + word). Clicking any card opens a "loading" screen
// which (for this demo) simply shows the loadingEgg image.
const TEAM = [
  { word: 'Ratlosigkeit', image: ratlosigkeitImg, egg1: 'Verwirrung', egg2: 'Entsetzen', egg3: 'Fassungslosigkeit', 
    egg4: 'Zweifel', egg5: 'Unsicherheit', egg6: 'Bestürzung' },
  { word: 'Andenken', image: andenkenImg, egg1: 'Denkmal', egg2: 'Erinnerung', egg3: 'Souvenir',
     egg4: 'Andenkenstück', egg5: 'Gedenken', egg6: 'Gedächtnis' },
  { word: 'Benehmen', image: benehmenImg , egg1: 'Verhalten', egg2: 'Manieren', egg3: 'Führung',
    egg4: 'Auftreten', egg5: 'Anstand', egg6: 'Reaktion' },
  { word: 'behaglich', image: behaglichImg, egg1: 'komfortabel', egg2: 'gemütlich', egg3: 'wohnlich',
    egg4: 'angenehm', egg5: 'heimelig', egg6: 'bequem' },
  { word: 'Einwände', image: objectionsImg, egg1: 'Einwand', egg2: 'Widerspruch', egg3: 'Kritik',
    egg4: 'Protest', egg5: 'Bedenken', egg6: 'Vorbehalt' },
  { word: 'bisweilen', image: bisweilenImg, egg1: 'kurzzeitig', egg2: 'gelegentlich', egg3: 'manchmal',
    egg4: 'zeitweise', egg5: 'hin und wieder', egg6: 'ab und zu' },
];

export default function ViewTeamScreen({ onClose }) {
  // active: null | { phase: 'loading' } | { phase: 'eggscreen' }
  const [active, setActive] = useState(null);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleCardClick = (item, idx) => {
    // start loading phase, then show eggscreen after 3s
    setActive({ phase: 'loading' });
    setSelectedIndex(idx);
    // start counter at 1 (show 1/3s immediately)
    setCounter(1);
    // clear any previous timers
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    // increment counter every 1s
    intervalRef.current = setInterval(() => {
      setCounter((c) => {
        if (c >= 3) return c;
        return c + 1;
      });
    }, 1000);

    // after 3s move to eggscreen and clear interval
    timerRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setActive({ phase: 'eggscreen' });
      timerRef.current = null;
      setCounter(0);
    }, 3000);
  };

  if (active && active.phase === 'loading') {
    return (
      <div className="manhattan-screen ma-screen">
        <header className="manhattan-screen-header">
          <h2>Loading{counter > 0 ? ` (${counter}/3s)` : ''}</h2>
          <div>
            <button onClick={() => { 
              if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
              if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
              setCounter(0);
              setSelectedIndex(null);
              setActive(null);
            }} className="manhattan-screen-close">Back</button>
          </div>
        </header>
        <main className="manhattan-screen-body ma-body">
          <div className="vt-loading-container">
            <video className="vt-loading-video" src={loadingEggVid} autoPlay muted loop playsInline>
              {/* fallback for very old browsers: show the static image */}
              <img src={loadingEgg} alt="loading" />
            </video>
          </div>
        </main>
      </div>
    );
  }

  if (active && active.phase === 'eggscreen') {
    // TeamEggScreen: identical layout but images are all loadingEgg and cards are not clickable
    return (
      <div className="manhattan-screen ma-screen">
        <header className="manhattan-screen-header">
          <h2>Team (Eggs){selectedIndex !== null ? ` — ${TEAM[selectedIndex].word}` : ''}</h2>
          <div>
            <button onClick={() => { setSelectedIndex(null); setActive(null); }} className="manhattan-screen-close">Back</button>
          </div>
        </header>
        <main className="manhattan-screen-body ma-body">
            <div className="vt-grid">
            {(() => {
              // If we have a selected index, show that word's eggs (egg1..egg6)
              const sel = (selectedIndex !== null && TEAM[selectedIndex]) ? TEAM[selectedIndex] : null;
              if (sel) {
                const eggs = [sel.egg1, sel.egg2, sel.egg3, sel.egg4, sel.egg5, sel.egg6];
                return eggs.map((w, j) => (
                  <div key={j} className="vt-card" aria-hidden>
                    <img src={loadingEgg} alt="egg" className="vt-card-img" />
                    <div className="vt-card-word">{w}</div>
                  </div>
                ));
              }
              // Fallback: show original TEAM words if no selection
              return TEAM.map((item, i) => (
                <div key={i} className="vt-card" aria-hidden>
                  <img src={loadingEgg} alt="egg" className="vt-card-img" />
                  <div className="vt-card-word">{item.word}</div>
                </div>
              ));
            })()}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="manhattan-screen ma-screen">
      <header className="manhattan-screen-header">
        <h2>View Team (mock)</h2>
        <div>
          <button onClick={onClose} className="manhattan-screen-close">Close</button>
        </div>
      </header>

      <main className="manhattan-screen-body ma-body">
            <div className="vt-grid">
          {TEAM.map((item, i) => (
            <button key={i} className="vt-card" onClick={() => handleCardClick(item, i)}>
              <img src={item.image} alt={item.word} className="vt-card-img" />
              <div className="vt-card-word">{item.word}</div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
