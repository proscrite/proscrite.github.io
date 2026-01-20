import React from 'react';

export default function LangSelectScreen({ onClose }) {
  return (
    <div className="manhattan-screen">
      <header className="manhattan-screen-header">
        <h2>Language Select (mock)</h2>
        <button onClick={onClose} className="manhattan-screen-close">Close</button>
      </header>
      <main className="manhattan-screen-body">
        <p>Select language mock screen.</p>
      </main>
    </div>
  );
}
