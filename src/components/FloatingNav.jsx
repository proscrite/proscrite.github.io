import React from 'react';
import { useTranslation } from 'react-i18next';
import './FloatingNav.css';

export default function FloatingNav() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', flag: '🇬🇧', label: 'EN' },
    { code: 'es', flag: '🇪🇸', label: 'ES' },
  ];

  // Normalise to bare language code (e.g. 'en-US' → 'en')
  const currentLang = i18n.language.split('-')[0];

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Timeline', href: '#science-career' },
    { label: 'Projects', href: '#featured-projects' },
    { label: 'Skills', href: '#skills-section' },
    { label: 'Contact', href: '#contact-footer' }
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      // Smooth scroll to the section, accounting for the height of the navbar
      const yOffset = -20; 
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-nav">
      <ul className="floating-nav-list">
        {navItems.map((item) => (
          <li key={item.label} className="floating-nav-item">
            <a 
              href={item.href} 
              className="floating-nav-link"
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Language selector */}
      <div className="floating-nav-lang-wrapper">
        <select
          className="floating-nav-lang-select"
          value={currentLang}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          aria-label="Select language"
        >
          {languages.map(({ code, flag, label }) => (
            <option key={code} value={code}>{flag} {label}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}