import React, { useMemo } from 'react';
import { useScrollNav } from '../hooks/useScrollNav';

export default function Header({ resumeData }) {
  const sectionIds = useMemo(() => ['home', 'about', 'resume', 'certs', 'skills'], []);
  const { activeSection, navVisible, navOpaque, handleSmoothScroll } = useScrollNav(sectionIds);

  const navStyle = {
    opacity: navVisible ? 1 : 0,
    pointerEvents: navVisible ? 'auto' : 'none',
    transition: 'opacity 0.3s ease',
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'certs', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <header id="home">
      <nav id="nav-wrap" className={navOpaque ? 'opaque' : ''} style={navStyle}>
        <ul id="nav" className="nav">
          {navLinks.map((link) => (
            <li key={link.id} className={activeSection === link.id ? 'current' : ''}>
              <a
                className="smoothscroll"
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Hello, I'm {resumeData.name}.</h1>
          <h2 style={{ color: '#fff', fontFamily: 'sans-serif' }}>
            {resumeData.roleDescription}
          </h2>
          <hr />
          <ul className="social">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={item.className}></i>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a
          className="smoothscroll"
          href="#about"
          onClick={(e) => handleSmoothScroll(e, 'about')}
        >
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
