import React from 'react';
import './TerminalFooter.css';

export default function TerminalFooter() {

  return (
    <section className="terminal-footer-section">
    
      {/* --- Part 1: The "Let's Build" CTA --- */}
      <div className="cta-container">
        <h2 className="cta-headline">Ready to tackle the next complex system.</h2>
        <p className="cta-subtext">
          Currently wrapping up Postdoc R&D. Seeking Senior Data / Systems Engineering roles to solve high-stakes architectural challenges.
        </p>
        <div className="cta-buttons">
          {/* Update this href to point to your actual Systems Engineer PDF in your public folder */}
          <a href="/assets/Herrero_Pablo_systems_engineer.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
            Download Full Resume (.pdf)
          </a>
          <a href="mailto:pablo.herrero-gomez@mail.huji.ac.il" className="cta-btn secondary">
            Email Me
          </a>
        </div>
      </div>

      {/* --- Part 2: The Terminal --- */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot close"></span>
          <span className="dot min"></span>
          <span className="dot max"></span>
          <span className="terminal-title">guest@phg-portfolio: ~</span>
        </div>
        <div className="terminal-body">
          <p><span className="prompt">➜</span> <span className="command">cat</span> status.txt</p>
          <p className="output">Target Location: Valencia, Spain (Open to Remote / Relocation)</p>
          <p className="output">Spoken Languages: Spanish (Native), English (Fluent, C2), German (B2), Hebrew (B1)</p>
          <p className="output">Continuous Learning: 100+ Data Science Certifications (DataCamp)</p>
          
          <br/>
          <p><span className="prompt">➜</span> <span className="command">ls</span> -l connections/</p>
          <div className="output link-row" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span>drwxr-xr-x  2  guest  admin  4096  <a href="https://github.com/proscrite" target="_blank" rel="noopener noreferrer">GitHub</a></span>
            <span>drwxr-xr-x  2  guest  admin  4096  <a href="https://www.linkedin.com/in/pablo-herrero-g%C3%B3mez-23a886214/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </div>

          <br/>
          <p><span className="prompt">➜</span> <span className="command">echo</span> $COPYRIGHT</p>
          <p className="output">© 2026 Pablo Herrero-Gomez. Built with React & Vite.</p>
          <p className="cursor">_</p>
        </div>
      </div>

    </section>
  );
}