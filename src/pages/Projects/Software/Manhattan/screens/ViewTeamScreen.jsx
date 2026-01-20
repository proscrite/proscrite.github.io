import React from 'react';

export default function ViewTeamScreen({ onClose }) {
  return (
    <div className="manhattan-screen">
      <header className="manhattan-screen-header">
        <h2>View Team (mock)</h2>
        <button onClick={onClose} className="manhattan-screen-close">Close</button>
      </header>
      <main className="manhattan-screen-body">
        <p>Team editor mock screen.</p>
      </main>
    </div>
  );
}
