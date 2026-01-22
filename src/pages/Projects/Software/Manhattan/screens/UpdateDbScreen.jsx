import React, { useState } from 'react';
import './update_db.css';

const BOOKS = [
  { id: 'castello_bloc', label: 'Il castello dei destini incrociati - Bloc de notas', color: 'orange', active: true },
  { id: 'someone_to_run', label: 'מישהו לרוץ תיתו - Bloc de notas', color: 'orange'},
  { id: 'schachnovelle', label: 'Schachnovelle - Notizbuch', color: 'orange' },
  { id: 'verwandlung_notiz', label: 'Die Verwandlung - Notizbuch', color: 'orange', active: true },
  { id: 'alexandria', label: 'Notes from "The Alexandria Quartet"', color: 'blue' },
  { id: 'underground', label: 'Notes from "Notes from the Underground"', color: 'blue' },
  { id: 'justine', label: 'Notes from "Justine"', color: 'blue' },
  { id: 'siddhartha', label: 'Notizen aus "Siddhartha, eine indische Dichtung"', color: 'blue', active: true },
  { id: 'hebrew_db', label: 'GTranslate Hebrew DB', color: 'green', active: true  },
  { id: 'gtranslate', label: 'GTranslate German DB', color: 'green' },
];

export default function UpdateDbScreen({ onClose }) {
  const [stage, setStage] = useState('choose'); // 'choose' | 'process' | 'preview'
  const [selected, setSelected] = useState(null);

  const handleSelect = (book) => {
    if (!book.active) return; // only active books proceed
    setSelected(book);
    setStage('preview');
  };

  const runUpdate = () => {
    // placeholder for actual DB processing — for now simulate and return
    alert(`Running update for ${selected.label}`);
    // after processing we could close or reset — keep it simple
    setStage('choose');
    setSelected(null);
  };

  // Process screen
  if (stage === 'process' && selected) {
    return (
      <div className="manhattan-screen ma-screen">
        <header className="manhattan-screen-header">
          <h2>Process Book</h2>
          <div>
            <button onClick={() => { setStage('choose'); setSelected(null); }} className="manhattan-screen-close">Back</button>
            <button onClick={onClose} className="manhattan-screen-close">Close</button>
          </div>
        </header>
        <main className="manhattan-screen-body ma-body">
          <div className="ud-process">
            <h3>{selected.label}</h3>
            <p>Ready to process this book into the database. (Mock behavior.)</p>
            <div className="ud-actions">
              <button className="ud-run" onClick={runUpdate}>Run update</button>
              <button className="ud-cancel" onClick={() => { setStage('choose'); setSelected(null); }}>Cancel</button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Preview screen
  if (stage === 'preview' && selected) {
    // sample datasets: Die Verwandlung, Siddhartha, Castello, Hebrew
    const sampleRowsVerwandlung = [
      ['Ungeziefer', 'der Regen fiel noch nieder, aber nur mit', 'Hunger.', 'Schloß'],
      ['Versteifungen', 'Nacht aus einem kleinen', 'Die', '-'],
      ['Umfang', 'War er ein lier, da ihn Musik so ergrifft?', 'Genügte', '-'],
      ['flimmerten', '-', 'Und', '-'],
      ['versehen', '-', 'Leben.', '-'],
      ['Fensterblech', '-', 'still', '-'],
      ['undurchführbar,', '-', 'aufgenommen.', '-'],
      ['schaukelte', '-', 'mürbe', '-'],
      ['Jucken', '-', 'ertappt', '-'],
    ];

    const sampleRowsSiddhartha = [
      ['g oder ein brahmane... ', 'stand siddartha im', 'vorhanden', 'nicht'],
      ['nein, denn die gehören ihm zu', 'augenblick habe ich an dir', 'abgesondert', 'zuzeiten'],
      ['wenn du einen stein ins', 'der buddha dachte', 'zehen', 'lange'],
      ['-', 'daß siddartha mir so fremd un unbekannt', 'rasch', 'pressen'],
      ['-', 'wenn einer eine shrift liest, deren ', 'entschlüpfen', 'siddartha'],
      ['-', 'dies selbst wirklich', 'schleier', '-'],
      ['-', 'struppiger bettler', 'vielfalt', '-'],
      ['-', 'griffel', 'zuliebe', '-'],
      ['-', 'laub', 'adliger', '-'],
    ];

    const sampleCastello = [
      ['rimpicciolita ', 'Morgan Library di New York', '-', '-'],
      ['compiutezza', '-', '-', '-'],
      ['rozzo', '-', '-', '-'],
      ['mi resi conto', '-', '-', '-'],
      ['cruciverba', '-', '-', '-'],
      ['anziché', '-', '-', '-'],
      ['riscosse', '-', '-', '-'],
      ['l`incastro', '-', '-', '-'],
      ['tenuta', '-', '-', '-'],
    ];

    const sampleHebrewDb = [
      ['creature','יְצוּר'],
      ['monster','מִפלֶצֶת'],
      ['servant','מְשָׁרֵת'],
      ['magician','קוֹסֵם'],
      ['hero','גיבור'],
      ['helmet','קסדה'],
      ['armor','שריון'],
      ['incantation','כִּשׁוּף']
    ];
    // mapping tables and palettes by book id for easy extension
    const SAMPLE_ROWS = {
      verwandlung_notiz: sampleRowsVerwandlung,
      siddhartha: sampleRowsSiddhartha,
      castello_bloc: sampleCastello,
      hebrew_db: sampleHebrewDb,
    };

    const PALETTES = {
      verwandlung_notiz: [
        { id: 'blue', label: 'Blue' },
        { id: 'pink', label: 'Pink' },
        { id: 'orange', label: 'Orange' },
        { id: 'yellow', label: 'Yellow' },
      ],
      siddhartha: [
        { id: 'gold', label: 'Gold' },
        { id: 'blue', label: 'Blue' },
        { id: 'orange', label: 'Orange' },
        { id: 'green', label: 'Green' },
      ],
      castello_bloc: [
        { id: 'blue', label: 'Blue' },
        { id: 'pink', label: 'Pink' },
        { id: 'orange', label: 'Orange' },
        { id: 'yellow', label: 'Yellow' },
      ],
      hebrew_db: [
        { id: 'blue', label: 'Blue' },
        { id: 'pink', label: 'Pink' },
      ],
    };

    const sampleRows = SAMPLE_ROWS[selected.id] || sampleRowsVerwandlung;
    // ensure palette length matches number of columns in the sample rows
    const colCount = Math.max(1, ...sampleRows.map(r => r.length));
    const basePalette = PALETTES[selected.id] || PALETTES['verwandlung_notiz'] || PALETTES['castello_bloc'];
    const palette = [];
    for (let i = 0; i < colCount; i++) {
      palette.push(basePalette[i] || basePalette[basePalette.length - 1]);
    }
    const HLCOLORS = palette;

    return (
      <div className="manhattan-screen ma-screen">
        <header className="manhattan-screen-header">
          <h2>Preview — {selected.label}</h2>
          <div>
            <button onClick={() => { setStage('choose'); setSelected(null); }} className="manhattan-screen-close">Back</button>
            <button onClick={onClose} className="manhattan-screen-close">Close</button>
          </div>
        </header>
        <main className="manhattan-screen-body ma-body ud-preview-body">
          <div className="ud-preview-table">
            <div className="ud-table-header" style={{ gridTemplateColumns: `repeat(${Math.max(1, HLCOLORS.length)}, 1fr)` }}>
              {HLCOLORS.map((c) => (
                <div key={c.id} className={`ud-col-head ud-${c.id}`} role="button">{c.label}</div>
              ))}
            </div>
            <div className="ud-table-body">
              {sampleRows.map((r, i) => (
                <div key={i} className="ud-table-row" style={{ gridTemplateColumns: `repeat(${Math.max(1, HLCOLORS.length)}, 1fr)` }}>
                  {Array.from({ length: HLCOLORS.length }).map((_, j) => {
                    const cell = r[j] !== undefined ? r[j] : '-';
                    const colId = HLCOLORS[j] ? HLCOLORS[j].id : HLCOLORS[HLCOLORS.length - 1].id;
                    return <div key={j} className={`ud-table-cell ${j === 0 ? 'left' : ''} ud-${colId}`}>{cell}</div>;
                  })}
                </div>
              ))}
            </div>
          </div>

          <aside className="ud-sidepanel">
            <h3>Select highlight color used:</h3>
            <div className="hl-buttons">
              {HLCOLORS.map((c) => (
                <button key={c.id} type="button" className={`hl-btn hl-${c.id}`} onClick={() => setSelected((s) => ({ ...s, hl: c.id }))}>{c.label}</button>
              ))}
            </div>

            <div className="hl-actions">
              {/* When a highlight color is selected, show action buttons that lead to processing */}
              {selected && selected.hl && (
                <div className="hl-extra">
                  <p>Select user language:</p>
                  <div className="hl-extra-buttons">
                    <button className="hl-extra-btn" onClick={() => setStage('process')}>Spanish</button>
                    <button className="hl-extra-btn" onClick={() => setStage('process')}>English</button>
                    <button className="hl-extra-btn" onClick={() => setStage('process')}>French</button>
                  </div>
                </div>
              )}
            </div>

          </aside>
        </main>
      </div>
    );
  }

  // Choose screen
  return (
    <div className="manhattan-screen ma-screen">
      <header className="manhattan-screen-header">
        <h2>Select book to process</h2>
        <div>
          <button onClick={onClose} className="manhattan-screen-close">Close</button>
        </div>
      </header>
      <main className="manhattan-screen-body ma-body">
        <div className="ud-grid">
          {BOOKS.map((b) => (
            <button
              key={b.id}
              type="button"
              className={`ud-btn ud-${b.color} ${b.active ? '' : 'ud-disabled'}`}
              onClick={() => handleSelect(b)}
              aria-disabled={!b.active}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className="ud-legend">
          <div><span className="legend-swatch blue" /> PlayBook</div>
          <div><span className="legend-swatch orange" /> Kindle</div>
          <div><span className="legend-swatch green" /> Google Translate DB</div>
        </div>
      </main>
    </div>
  );
}
