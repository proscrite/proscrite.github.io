import React, { useEffect, useRef, useState } from 'react';
import './ma.css';
import './wi.css';
import caressImg from '../images/conjugate_mock/caress.png';
import begImg from '../images/conjugate_mock/beg.png';
import writeImg from '../images/conjugate_mock/write.png';


// Conjugation exercise (Hebrew). Mirrors WiScreen layout but uses RTL input
// and shows the hint "היום היא". Starts with one example using the verb
// ללטף and expects the present-feminine-singular form "מלטפת".
const EXAMPLES = [
  {
    prompt: 'ללטף',
    tense: 'present feminine, singular',
    image: caressImg,
    hint: 'היום היא',
    correctAnswer: 'מלטפת',
    translation: 'caresses',
  },
  {
    prompt: 'להתחנן',
    tense: 'future 3rd person, plural',
    image: begImg,
    hint: 'מחר הם',
    correctAnswer: 'יתחננו',
    translation: 'will beg',
  },
  {
    prompt: 'לכתוב',
    tense: 'past 2nd person feminine, singular',
    image: writeImg,
    hint: 'אתמול את',
    correctAnswer: 'כתבת',
    translation: 'wrote',
  }
];

export default function ConjugationScreen({ onClose }) {
  const [idx, setIdx] = useState(0);
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef(null);

  const example = EXAMPLES[idx];

  const normalize = (s) => (s || '').toString().trim();

  const handleSubmit = () => {
    if (submitted) return;
    const ok = normalize(value) === normalize(example.correctAnswer);
    setIsCorrect(ok);
    setSubmitted(true);
  };

  const handleNext = () => {
    setValue('');
    setSubmitted(false);
    setIsCorrect(false);
    setIdx((n) => (n + 1 < EXAMPLES.length ? n + 1 : 0));
    setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!e || !e.key) return;
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (onClose) onClose();
      }
      if (e.key === 'Enter') {
        if (!submitted) {
          if (value && value.trim().length > 0) handleSubmit();
        } else {
          handleNext();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [value, submitted, onClose]);

  useEffect(() => {
    setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
  }, []);

  return (
    <div className="manhattan-screen ma-screen">
      <header className="manhattan-screen-header">
        <h2>Hebrew Verbs Conjugation</h2>
        <div>
          <button onClick={onClose} className="manhattan-screen-close">Close</button>
        </div>
      </header>

      <main className="manhattan-screen-body ma-body">
        <div className="ma-top-row">
          <div className="ma-stats">
            <img src={example.image} alt="mock-canvas" className="ma-canvas-img" />
            <div className="ma-prompt">
              <div className="ma-prompt-label">Conjugate: ({example.tense})</div>
              <div className="ma-prompt-text">{example.prompt}</div>
            </div>
          </div>
        </div>

        <div className="wi-input-block">
          <label className="wi-input-label">{example.hint}:</label>
          <div className="wi-input-row">
            <input
              ref={inputRef}
              dir="rtl"
              className={`wi-input hebrew ${submitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={submitted}
              placeholder={example.hint + " ..."}
            />
            {!submitted ? (
              <button onClick={handleSubmit} className="wi-next">Submit</button>
            ) : (
              <button onClick={handleNext} className="wi-next">{idx + 1 < EXAMPLES.length ? 'Next' : 'Restart'}</button>
            )}
          </div>
        </div>

        <div className="ma-controls">
          {submitted ? (
            <div className="ma-feedback">
              {isCorrect ? `Correct! ✅, translation: ${example.translation}` : `Incorrect — the correct answer is "${example.correctAnswer}"`}
            </div>
          ) : (
            <div className="ma-instructions">Hint: {example.hint} — press Enter or the Submit button.</div>
          )}
        </div>
      </main>
    </div>
  );
}
