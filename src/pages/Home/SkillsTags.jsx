import React from 'react';
import { useTranslation } from 'react-i18next';
import './SkillsTags.css';

export default function SkillsTags() {
  const { t } = useTranslation();

  // Technology names are universal — only category labels are translated
  const skills = [
    { key: 'languages', items: ["Python", "Julia", "C++", "JavaScript", "SQL"] },
    { key: 'frameworks', items: ["React", "Kivy", "Dash", "Tailwind CSS"] },
    { key: 'dataML', items: ["Pandas", "SciPy", "SpaCy (NLP)", "LLM APIs", "PyTorch"] },
    { key: 'hardware', items: ["SCPI Protocols", "UHV Systems", "Optics", "DAQ Orchestration", "Hardware APIs"] },
  ];

  return (
    <section className="terminal-footer-section">
      <div className="skills-bank">
        <h3 className="skills-bank-title">{t('skillsTags.title')}</h3>
        <div className="skills-grid">
          {skills.map((cat) => (
            <div key={cat.key} className="skill-column">
              <h4 className="skill-category">{t(`skillsTags.categories.${cat.key}`)}</h4>
              <ul className="skill-list">
                {cat.items.map(item => (
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
