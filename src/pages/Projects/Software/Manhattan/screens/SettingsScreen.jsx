import React from 'react';

export default function SettingsScreen({ onClose }) {
  return (
    <div className="manhattan-screen">
      <header className="manhattan-screen-header">
        <h2>Settings (mock)</h2>
        <button onClick={onClose} className="manhattan-screen-close">Close</button>
      </header>
      <main className="manhattan-screen-body">
        <p>Settings mock screen.</p>
      </main>
    </div>
  );
}
