import React, { useEffect, useRef, useState } from 'react';
import './ma.css';
import './wi.css';
import benehmenImg from '../images/wi_mock/Benehmen.png';
import objectionsImg from '../images/wi_mock/objections.png';
import ratlosigkeitImg from '../images/wi_mock/Ratlosigkeit.png';

// Written-Answer mock. Mirrors MaScreen but user types the answer instead of choosing
// from four options. Reuses the same layout and styles from ma.css.
const EXAMPLES = [
  {
    prompt: 'Translate: Benehmen',
    image: benehmenImg,
    correctAnswer: 'behavior',
  },
  {
    prompt: 'Translate: objections',
    image: objectionsImg,
    correctAnswer: 'Einwände',
  },
  {
    prompt: 'Translate: Ratlosigkeit',
    image: ratlosigkeitImg,
    correctAnswer: 'perplexity',
  },
];

export default function WiScreen({ onClose }) {
  const [idx, setIdx] = useState(0);
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef(null);

  const example = EXAMPLES[idx];

  const normalize = (s) => (s || '').toString().trim().toLowerCase();

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
    // focus the input on next
    setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!e || !e.key) return;
      // Escape closes
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (onClose) onClose();
      }
      // Enter: if not yet submitted, submit (if there's content). If already submitted, advance.
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
    // auto-focus input when screen mounts
    setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
  }, []);

  return (
    <div className="manhattan-screen ma-screen">
      <header className="manhattan-screen-header">
        <h2>{idx === 1 ? 'Written Input: Reverse Translation' : 'Written Input: Direct Translation'}</h2>
        <div>
          <button onClick={onClose} className="manhattan-screen-close">Close</button>
        </div>
      </header>

      <main className="manhattan-screen-body ma-body">
        <div className="ma-top-row">
          <div className="ma-stats">
            <img src={example.image} alt="mock-canvas" className="ma-canvas-img" />
            <div className="ma-prompt">
              <div className="ma-prompt-label">{example.prompt.split(':')[0] + ':'}</div>
              <div className="ma-prompt-text">{example.prompt.replace(/^Translate:\s*/, '')}</div>
            </div>
          </div>
        </div>

        <div className="wi-input-block">
          <label className="wi-input-label">Type your answer below:</label>
          <div className="wi-input-row">
            <input
              ref={inputRef}
              className={`wi-input ${submitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={submitted}
              placeholder="Type the translation here"
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
              {isCorrect ? 'Correct ✅' : `Incorrect — the correct answer is "${example.correctAnswer}"`}
            </div>
          ) : (
            <div className="ma-instructions">Type the answer and press Enter or click Submit.</div>
          )}
        </div>
      </main>
    </div>
  );
}
