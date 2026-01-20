import React, { useEffect } from 'react';
import { useState } from 'react';
import './ma.css';
import cozyImg from '../images/ma_mock/cozy.png';
import bisweilenImg from '../images/ma_mock/bisweilen.png';
import andenkenImg from '../images/ma_mock/andenken.png';

// Small, self-contained Multiple-Answer mock used on the website.
// Each example contains a prompt, four options and the index of the correct one.
const EXAMPLES = [
  {
    prompt: 'Translate: cozy',
    image: cozyImg,
    options: ['Einwirkungen', 'ausgerückt', 'Ungewißheit', 'behaglich'],
    correctIndex: 3,
  },
  {
    prompt: 'Translate: bisweilen',
    image: bisweilenImg,
    options: ['to remain', 'for a while', 'sometimes', 'to whistle'],
    correctIndex: 2,
  },
  {
    prompt: 'Translate: andenken',
    image: andenkenImg,
    options: ['souvenir', 'to forget', 'perplexity', 'colorful'],
    correctIndex: 0,
  },
];

export default function MaScreen({ onClose }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null); // index of selected option

  const example = EXAMPLES[idx];

  const handleSelect = (i) => {
    if (selected !== null) return; // lock after first selection
    setSelected(i);
  };

  const handleNext = () => {
    setSelected(null);
    setIdx((n) => (n + 1 < EXAMPLES.length ? n + 1 : 0));
  };

  // keyboard support: A/B/C/D select options 0..3
  useEffect(() => {
    const onKey = (e) => {
      if (!e || !e.key) return;
      const key = e.key.toLowerCase();
      if (['a','b','c','d'].includes(key)) {
        const index = ['a','b','c','d'].indexOf(key);
        // mimic click behavior
        if (selected === null) {
          handleSelect(index);
        }
      }
      // allow Escape to close the screen
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (onClose) onClose();
      }
      // Enter advances to next only after an answer has been selected
      if (e.key === 'Enter') {
        if (selected !== null) {
          handleNext();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, onClose, handleNext]);

  return (
    <div className="manhattan-screen ma-screen">
      <header className="manhattan-screen-header">
        <h2>Multiple Answer (mock)</h2>
        <div>
          <button onClick={onClose} className="manhattan-screen-close">Close</button>
        </div>
      </header>

      <main className="manhattan-screen-body ma-body">
        <div className="ma-top-row">
          <div className="ma-stats">
            {/* Render a static canvas-like image (sprite + stats) per example */}
            <img src={example.image} alt="mock-canvas" className="ma-canvas-img" />
            <div className="ma-prompt">
              <div className="ma-prompt-label">Translate:</div>
              <div className="ma-prompt-text">{example.prompt.replace(/^Translate:\s*/, '')}</div>
            </div>
          </div>
        </div>

        <div className="ma-grid">
          {example.options.map((opt, i) => {
            let cls = 'ma-option';
            if (selected !== null) {
              if (i === example.correctIndex) cls += ' correct';
              else if (i === selected) cls += ' wrong';
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleSelect(i)}
                aria-pressed={selected === i}
              >
                <div className="ma-option-letter">{String.fromCharCode(65 + i)}</div>
                <div className="ma-option-text">{opt}</div>
              </button>
            );
          })}
        </div>

        <div className="ma-controls">
          {selected !== null ? (
            <>
              <div className="ma-feedback">
                {selected === example.correctIndex ? 'Correct ✅' : 'Incorrect — the correct answer is "' + example.options[example.correctIndex] + '"'}
              </div>
              <button className="ma-next" onClick={handleNext}>{idx + 1 < EXAMPLES.length ? 'Next' : 'Restart'}</button>
            </>
          ) : (
            <div className="ma-instructions">Choose the correct translation by clicking one of the four options.</div>
          )}
        </div>
      </main>
    </div>
  );
}
