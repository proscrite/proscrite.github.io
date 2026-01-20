import React from 'react';

export default function WiScreen({ onClose }) {
  return (
    <div className="manhattan-screen">
      <header className="manhattan-screen-header">
        <h2>WI (mock)</h2>
        <button onClick={onClose} className="manhattan-screen-close">Close</button>
      </header>
      <main className="manhattan-screen-body">
        <p>Word Input / WI mock screen.</p>
        <input placeholder="Type a word" />
      </main>
    </div>
  );
}
