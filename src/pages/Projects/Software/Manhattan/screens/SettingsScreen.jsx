import React from 'react';
import './settings.css';

const BUTTONS = [
  { label: 'Select Database', cls: 'btn-teal' },
  { label: 'Edit Database', cls: 'btn-green' },
  { label: 'Set Scheduler', cls: 'btn-purple' },
  { label: 'Difficulty Level', cls: 'btn-brown' },
  { label: 'Rebagging Frequency', cls: 'btn-darkgreen' },
  { label: 'Back to Main Menu', cls: 'btn-dark' },
];

export default function SettingsScreen({ onClose }) {
  return (
    <div className="manhattan-screen ma-screen">
      <header className="manhattan-screen-header">
        <h2>Settings</h2>
        <div>
          <button onClick={onClose} className="manhattan-screen-close">Close</button>
        </div>
      </header>

      <main className="manhattan-screen-body ma-body">
        <div className="settings-grid">
          {BUTTONS.map((b, i) => (
            <button
              key={i}
              type="button"
              className={`settings-btn ${b.cls}`}
              onClick={() => { if (b.label === 'Back to Main Menu') { if (onClose) onClose(); } }}
              aria-label={b.label}
            >
              {b.label}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
