import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileMenu } from './MobileMenu';
import { useLanguage } from '../../context';

export const Navbar: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef<HTMLDivElement>(null);
  const langTriggerRef = useRef<HTMLDivElement>(null);

  const { t, language, setLanguage, availableLanguages } = useLanguage();

  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMoreOpen(false);
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  }

  // Handle outside click to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
        setIsLangOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMoreOpen(false);
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const moreItems = [
    { label: t('nav.coaches'), path: '/coaches' },
    { label: t('nav.facilities'), path: '/facilities' },
    { label: t('nav.achievements'), path: '/achievements' },
    { label: t('nav.testimonials'), path: '/testimonials' },
    { label: t('nav.events'), path: '/events' },
  ];

  const isMoreActive = moreItems.some((item) => item.path === location.pathname);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          backgroundColor: '#E3E2DA',
          transition: 'var(--transition-normal)',
          paddingLeft: 'clamp(16px, 3.5vw, 36px)',
          paddingRight: 'clamp(16px, 3.5vw, 36px)',
        }}
      >
        <div
          style={{
            maxWidth: '1680px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Minimal Editorial Wordmark Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                letterSpacing: '0.04em',
                color: 'var(--color-navy)',
                lineHeight: '1',
              }}
            >
              YKAIS
            </span>
          </Link>

          {/* Minimal Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/sports" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.sports')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.gallery')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.contact')}
            </NavLink>

            {/* Dropdown for More Items & Language */}
            <div ref={moreRef} style={{ position: 'relative' }}>
              <button
                onClick={() => {
                  setIsMoreOpen(!isMoreOpen);
                  if (isMoreOpen) setIsLangOpen(false);
                }}
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
                aria-label={t('nav.more')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isMoreActive ? 'var(--color-navy)' : 'var(--color-charcoal)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.5rem 0',
                }}
              >
                <span>{t('nav.more')}</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: isMoreOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 0.5rem)',
                      right: 0,
                      width: '210px',
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-cream)',
                      borderRadius: '4px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                      padding: '0.5rem 0',
                      zIndex: 1000,
                    }}
                  >
                    {moreItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          setIsMoreOpen(false);
                          setIsLangOpen(false);
                        }}
                        style={({ isActive }) => ({
                          display: 'block',
                          padding: '0.625rem 1.25rem',
                          color: isActive ? 'var(--color-navy)' : 'var(--color-charcoal)',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          fontWeight: isActive ? 700 : 500,
                          backgroundColor: isActive ? 'var(--color-cream)' : 'transparent',
                          transition: 'background-color 0.15s ease',
                        })}
                      >
                        {item.label}
                      </NavLink>
                    ))}

                    {/* Divider */}
                    <div
                      style={{
                        height: '1px',
                        backgroundColor: 'var(--color-cream)',
                        margin: '0.35rem 0',
                      }}
                    />

                    {/* Language Submenu Trigger & Flyout */}
                    <div
                      ref={langTriggerRef}
                      style={{ position: 'relative' }}
                      onMouseEnter={() => setIsLangOpen(true)}
                      onMouseLeave={() => setIsLangOpen(false)}
                    >
                      <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        onKeyDown={(e) => {
                          if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsLangOpen(true);
                          }
                        }}
                        aria-expanded={isLangOpen}
                        aria-haspopup="true"
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.625rem 1.25rem',
                          color: 'var(--color-charcoal)',
                          background: isLangOpen ? 'var(--color-cream-light)' : 'transparent',
                          border: 'none',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          fontFamily: 'var(--font-body)',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background-color 0.15s ease',
                        }}
                      >
                        <span>{t('nav.language')}</span>
                        <ChevronRight
                          size={15}
                          style={{
                            color: 'var(--color-charcoal)',
                            opacity: 0.7,
                          }}
                        />
                      </button>

                      {/* Language Flyout Submenu */}
                      <AnimatePresence>
                        {isLangOpen && (
                          <motion.div
                            initial={{ opacity: 0, x: 6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 6 }}
                            transition={{ duration: 0.15 }}
                            style={{
                              position: 'absolute',
                              top: '-0.5rem',
                              right: 'calc(100% + 4px)',
                              width: '160px',
                              backgroundColor: 'var(--color-white)',
                              border: '1px solid var(--color-cream)',
                              borderRadius: '4px',
                              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                              padding: '0.5rem 0',
                              zIndex: 1010,
                            }}
                            role="menu"
                            aria-label={t('nav.language')}
                          >
                            {availableLanguages.map((lang) => {
                              const isSelected = language === lang.code;
                              return (
                                <button
                                  key={lang.code}
                                  onClick={() => {
                                    setLanguage(lang.code);
                                    setIsMoreOpen(false);
                                    setIsLangOpen(false);
                                  }}
                                  style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '0.625rem 1.25rem',
                                    border: 'none',
                                    background: isSelected ? 'var(--color-cream-light)' : 'transparent',
                                    color: isSelected ? 'var(--color-navy)' : 'var(--color-charcoal)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.875rem',
                                    fontWeight: isSelected ? 700 : 500,
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'background-color 0.15s ease',
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--color-cream)';
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                                  }}
                                  role="menuitemradio"
                                  aria-checked={isSelected}
                                >
                                  <span>{lang.nativeLabel}</span>
                                  {isSelected && (
                                    <span
                                      style={{
                                        color: 'var(--color-navy)',
                                        fontWeight: 700,
                                        fontSize: '0.9375rem',
                                        marginLeft: '0.5rem',
                                      }}
                                    >
                                      ✓
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-navy)',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <style>{`
        .nav-link {
          color: var(--color-charcoal);
          text-decoration: none;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.9375rem;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-navy);
          font-weight: 600;
        }
        @media (max-width: 960px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 961px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
