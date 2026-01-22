import React, { useState } from 'react';
import './langselect.css';

const OPTIONS = ['English', 'Hebrew', 'Random'];

export default function LangSelectScreen({ onClose }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Random');

  const handleSelect = (opt) => {
    setSelected(opt);
    setOpen(false);
  };

  return (
    <div className="manhattan-screen ma-screen">
      <header className="manhattan-screen-header">
        <h2>Exercise Language</h2>
        <div>
          <button onClick={onClose} className="manhattan-screen-close">Close</button>
        </div>
      </header>

      <main className="manhattan-screen-body ma-body">
        <div className="lang-select-panel">
          <div className="lang-current" onClick={() => setOpen((v) => !v)} role="button" tabIndex={0}>
            <div className="lang-current-label">Language</div>
            <div className="lang-current-value">{selected} <span className="lang-caret">▾</span></div>
          </div>

          {open && (
            <div className="lang-options" role="list">
              {OPTIONS.map((o) => (
                <button key={o} type="button" className={`lang-option ${o === selected ? 'active' : ''}`} onClick={() => handleSelect(o)}>
                  {o}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
