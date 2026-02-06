import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook that handles:
 * 1. Active section highlighting in navigation (via IntersectionObserver)
 * 2. Nav bar fade/show on scroll (replaces jQuery scroll handler)
 */
export function useScrollNav(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const [navVisible, setNavVisible] = useState(true);
  const [navOpaque, setNavOpaque] = useState(false);

  // IntersectionObserver for active section detection
  useEffect(() => {
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-35% 0px -65% 0px',
      threshold: 0,
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  // Throttled scroll handler for nav visibility
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const header = document.querySelector('header');
        if (!header) {
          ticking = false;
          return;
        }

        const headerHeight = header.offsetHeight;
        const scrollY = window.scrollY;
        const isWideScreen = window.innerWidth > 768;

        if (scrollY > headerHeight * 0.2 && scrollY < headerHeight && isWideScreen) {
          setNavVisible(false);
          setNavOpaque(false);
        } else if (scrollY < headerHeight * 0.2) {
          setNavVisible(true);
          setNavOpaque(false);
        } else {
          setNavVisible(true);
          setNavOpaque(true);
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for anchor links
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  }, []);

  return { activeSection, navVisible, navOpaque, handleSmoothScroll };
}
