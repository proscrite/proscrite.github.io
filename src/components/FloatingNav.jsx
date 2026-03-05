import React from 'react';
import './FloatingNav.css';

export default function FloatingNav() {
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
    </nav>
  );
}