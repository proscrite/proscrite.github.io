import React from 'react';
import './SkillsTags.css';


export default function SkillsTags() {
  const skills = {
    "Languages": ["Python", "Julia", "C++", "JavaScript", "SQL"],
    "Frameworks & UI": ["React", "Kivy", "Dash", "Tailwind CSS"],
    "Data & ML": ["Pandas", "SciPy", "SpaCy (NLP)", "LLM APIs", "PyTorch"],
    "Hardware & Systems": ["SCPI Protocols", "UHV Systems", "Optics", "DAQ Orchestration", "Hardware APIs"]
  };

  return (
    <section className="terminal-footer-section">
      
      {/* --- The Skills Keyword Bank --- */}
      <div className="skills-bank">
        <h3 className="skills-bank-title">Core Competencies</h3>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-column">
              <h4 className="skill-category">{category}</h4>
              <ul className="skill-list">
                {items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
