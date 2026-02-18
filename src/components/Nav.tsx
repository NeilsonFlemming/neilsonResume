import { useState, useEffect, useCallback } from 'preact/hooks';

const sections = ['home', 'about', 'experience', 'education', 'certifications', 'skills'];

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'skills', label: 'Skills' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = useCallback((e: Event, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/70 backdrop-blur-2xl border-b border-accent/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-16">
        <a
          href="#home"
          onClick={(e) => handleClick(e, 'home')}
          className="font-serif text-text-primary text-lg hover:text-accent transition-colors duration-200"
        >
          NF
        </a>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`px-3 py-1.5 text-sm font-sans rounded-md transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-accent bg-accent/10'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
