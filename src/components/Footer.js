import React, { useCallback } from 'react';

export default function Footer({ resumeData }) {
  const handleBackToTop = useCallback((e) => {
    e.preventDefault();
    const target = document.getElementById('home');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
    }
  }, []);

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => (
                <li key={item.name || item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={item.className} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div id="go-top">
          <a
            className="smoothscroll"
            title="Back to Top"
            href="#home"
            onClick={handleBackToTop}
          >
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}
