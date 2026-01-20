import React from 'react';

export default function UpdateDbScreen({ onClose }) {
  return (
    <div className="manhattan-screen">
      <header className="manhattan-screen-header">
        <h2>Update Database (mock)</h2>
        <button onClick={onClose} className="manhattan-screen-close">Close</button>
      </header>
      <main className="manhattan-screen-body">
        <p>This is a mock of the Update DB screen. Provide interactive controls here.</p>
        <button onClick={() => alert('Pretend we updated the DB')}>Run update</button>
      </main>
    </div>
  );
}
