import { useState, useEffect, useCallback } from 'preact/hooks';

const sections = ['home', 'about', 'experience', 'education', 'certifications', 'skills', 'contact'];

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'skills', label: 'Skills' },
];

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

function IconGradCap({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 10l-10-5L2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  );
}

function IconBadge({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 15l-3.5 2 1-4L6 10l4-.5L12 6l2 3.5 4 .5-3.5 3 1 4z" />
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4l-10 8L2 4" />
    </svg>
  );
}

const mobileNavItems = [
  { id: 'about', label: 'About', Icon: IconUser },
  { id: 'experience', label: 'Exp', Icon: IconBriefcase },
  { id: 'education', label: 'Edu', Icon: IconGradCap },
  { id: 'certifications', label: 'Certs', Icon: IconBadge },
  { id: 'skills', label: 'Skills', Icon: IconCode },
  { id: 'contact', label: 'Contact', Icon: IconMail },
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
    <>
      {/* Desktop top nav */}
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

          <div className="hidden md:flex items-center gap-1">
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
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              className={`ml-3 px-4 py-1.5 text-sm font-sans rounded-md border transition-all duration-200 ${
                activeSection === 'contact'
                  ? 'text-accent bg-accent/10 border-accent/30'
                  : 'text-accent border-accent/30 hover:bg-accent/10'
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-bg-primary/80 backdrop-blur-2xl border-t border-accent/10"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-around h-14">
          {mobileNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 px-2 py-1 transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-text-muted'
                }`}
                aria-label={item.label}
              >
                {item.Icon ? (
                  <item.Icon className="w-4 h-4" />
                ) : (
                  <span className="font-serif text-sm font-bold leading-none">{item.label}</span>
                )}
                {item.Icon && (
                  <span className="text-[10px] font-sans leading-none">{item.label}</span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
