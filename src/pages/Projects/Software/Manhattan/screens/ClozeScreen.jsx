import React, { useEffect, useRef, useState } from 'react';
import './ma.css';
import './wi.css';
import './cloze.css';
import mascotImg from '../images/mascott_v3.png';

const EXAMPLES = [
  {
    prompt: 'Kinder stellen Fragen, um die Welt zu verstehen. Eltern fühlen sich angesichts der vielen Fragen ihrer Kinder oft bis zur ____ getrieben.',
    answer: 'Ratlosigkeit',
  },
  {
    prompt: 'Das Zimmer wirkt mit diesen Farben ____, aber auch schwerer, etwas gesetzter.',
    answer: 'behaglich',
  },
  {
    prompt: 'Im Verlauf der Diskussion wurden gewichtige ____ gegen das Projekt erhoben.',
    answer: 'Einwände',
  },
];

export default function ClozeScreen({ onClose }) {
  const [idx, setIdx] = useState(0);
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(3);
  const [loadingDots, setLoadingDots] = useState('');
  const inputRef = useRef(null);

  const example = EXAMPLES[idx];

  const normalize = (s) => (s || '').toString().trim().toLowerCase();

  const handleSubmit = () => {
    if (submitted) return;
    const ok = normalize(value) === normalize(example.answer);
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
      if (loading) return; // ignore keys while loading
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

  // focus input when loading finishes
  useEffect(() => {
    if (!loading) {
      setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
    }
  }, [loading]);

  // loading counter / timer
  useEffect(() => {
    if (!loading) return undefined;
    // change dots every 500ms
    const dotsInterval = setInterval(() => {
      setLoadingDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 500);
    // stop loading after 3s
    const to = setTimeout(() => {
      setLoading(false);
      setLoadingDots('');
    }, 3000);
    return () => {
      clearInterval(dotsInterval);
      clearTimeout(to);
    };
  }, [loading]);

  // render the sentence with the blank emphasized
  const renderPrompt = (text) => {
    // assume blank is represented by '____' in the prompt; if absent, replace last word
    if (text.includes('____')) {
      const parts = text.split('____');
      return (
        <div className="cloze-prompt-text">
          <span>{parts[0]}</span>
          <span className="cloze-blank">____</span>
          <span>{parts[1] || ''}</span>
        </div>
      );
    }
    // fallback: hide last word and show blank
    const words = text.split(' ');
    const last = words.pop();
    return (
      <div className="cloze-prompt-text">
        <span>{words.join(' ')} </span>
        <span className="cloze-blank">____</span>
      </div>
    );
  };

  return (
    <div className="manhattan-screen ma-screen">
      <header className="manhattan-screen-header">
        <h2>Cloze — fill the blank with the fitting word from your team</h2>
        <div>
          <button onClick={onClose} className="manhattan-screen-close">Close</button>
        </div>
      </header>

      <main className="manhattan-screen-body ma-body">
        {loading ? (
          <div className="ma-top-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '0.6rem' }}>
            <img src={mascotImg} alt="loading" className="ma-canvas-img" style={{ width: '60%', maxWidth: '420px', transform: 'scale(0.8)', boxShadow: '0 6px 22px rgba(0,0,0,0.45)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', marginTop: '0.6rem', fontSize: '1.05rem' }}>
              <div className="loader" aria-hidden="true" />
              <div className="loading-text">Loading{loadingDots}</div>
            </div>
          </div>
        ) : (
          <div className="ma-top-row">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', width: '100%' }}>
              <img src={mascotImg} alt="prompt-img" className="ma-canvas-img" style={{ width: '70%', maxWidth: '720px', transform: 'scale(0.8)', boxShadow: '0 6px 22px rgba(0,0,0,0.45)' }} />
              <div className="ma-prompt" style={{ position: 'static', textAlign: 'center', pointerEvents: 'auto', width: '100%' }}>
                <div className="ma-prompt-label">Cloze:</div>
                <div className="ma-prompt-text">{renderPrompt(example.prompt)}</div>
              </div>
            </div>
          </div>
        )}

        <div className="wi-input-block">
          <div className="wi-input-row">
            <input
              ref={inputRef}
              className={`wi-input ${submitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={submitted}
              placeholder="Type your answer"
            />
            {!submitted ? (
              <button onClick={handleSubmit} className="wi-next">Submit</button>
            ) : (
              <button onClick={handleNext} className="wi-next">{idx + 1 < EXAMPLES.length ? 'Next' : 'Restart'}</button>
            )}
          </div>
        </div>

        <div className="ma-controls" style={{ marginTop: '1rem' }}>
          {submitted ? (
            <div className="ma-feedback">
              {isCorrect ? 'Correct ✅' : `Incorrect — the correct answer is "${example.answer}"`}
            </div>
          ) : (
            <div className="ma-instructions">Type the word from your team that fits the context and press Enter or click Submit.</div>
          )}
        </div>
      </main>
    </div>
  );
}
