import React from 'react';
import { useTranslation } from 'react-i18next';
import './TerminalFooter.css';

export default function TerminalFooter() {
  const { t } = useTranslation();

  return (
    <section className="terminal-footer-section">
    
      {/* --- Part 1: The "Let's Build" CTA --- */}
      <div className="cta-container">
        <h2 className="cta-headline">{t('terminalFooter.headline')}</h2>
        <p className="cta-subtext">
          {t('terminalFooter.subtext')}
        </p>
        <div className="cta-buttons">
          {/* Update this href to point to your actual Systems Engineer PDF in your public folder */}
          <a href="/assets/Herrero_Pablo_systems_engineer.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
            {t('terminalFooter.downloadResume')}
          </a>
          <a href="mailto:pablo.herrero-gomez@mail.huji.ac.il" className="cta-btn secondary">
            {t('terminalFooter.emailMe')}
          </a>
        </div>
      </div>

      {/* --- Part 2: The Terminal --- */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot close"></span>
          <span className="dot min"></span>
          <span className="dot max"></span>
          <span className="terminal-title">{t('terminalFooter.terminal.windowTitle')}</span>
        </div>
        <div className="terminal-body">
          <p><span className="prompt">➜</span> <span className="command">cat</span> status.txt</p>
          <p className="output">{t('terminalFooter.terminal.location')}</p>
          <p className="output">{t('terminalFooter.terminal.languages')}</p>
          <p className="output">{t('terminalFooter.terminal.learning')}</p>
          
          <br/>
          <p><span className="prompt">➜</span> <span className="command">ls</span> -l connections/</p>
          <div className="output link-row" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span>drwxr-xr-x  2  guest  admin  4096  <a href="https://github.com/proscrite" target="_blank" rel="noopener noreferrer">GitHub</a></span>
            <span>drwxr-xr-x  2  guest  admin  4096  <a href="https://www.linkedin.com/in/pablo-herrero-g%C3%B3mez-23a886214/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </div>

          <br/>
          <p><span className="prompt">➜</span> <span className="command">echo</span> $COPYRIGHT</p>
          <p className="output">{t('terminalFooter.terminal.copyright')}</p>
          <p className="cursor">_</p>
        </div>
      </div>

    </section>
  );
}