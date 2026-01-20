import React from 'react';

export default function ClozeScreen({ onClose }) {
  return (
    <div className="manhattan-screen">
      <header className="manhattan-screen-header">
        <h2>Cloze (mock)</h2>
        <button onClick={onClose} className="manhattan-screen-close">Close</button>
      </header>
      <main className="manhattan-screen-body">
        <p>Cloze activity mock screen.</p>
      </main>
    </div>
  );
}
