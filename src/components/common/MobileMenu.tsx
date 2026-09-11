import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { useLanguage } from '../../context';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t, language, setLanguage, availableLanguages } = useLanguage();

  const allNavLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.sports'), path: '/sports' },
    { label: t('nav.gallery'), path: '/gallery' },
    { label: t('nav.contact'), path: '/contact' },
    { label: t('nav.coaches'), path: '/coaches' },
    { label: t('nav.facilities'), path: '/facilities' },
    { label: t('nav.achievements'), path: '/achievements' },
    { label: t('nav.testimonials'), path: '/testimonials' },
    { label: t('nav.events'), path: '/events' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'var(--color-navy)',
            color: 'var(--color-white)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            overflowY: 'auto',
          }}
        >
          {/* Mobile Menu Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              paddingBottom: '1.25rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                letterSpacing: '0.06em',
                color: 'var(--color-white)',
              }}
            >
              YKAIS
            </div>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-white)',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={30} />
            </button>
          </div>

          {/* Large Editorial Navigation Links */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              marginBottom: '2rem',
            }}
          >
            {allNavLinks.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.025, duration: 0.2 }}
              >
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={onClose}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-cream)' : 'var(--color-white)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.625rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    padding: '0.4rem 0',
                    display: 'block',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  })}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Language Selector */}
          <div
            style={{
              marginBottom: '2.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div
              style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '0.75rem',
                fontWeight: 600,
              }}
            >
              {t('nav.language')}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
              }}
            >
              {availableLanguages.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                    }}
                    style={{
                      background: isSelected ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${isSelected ? 'var(--color-cream)' : 'rgba(255, 255, 255, 0.12)'}`,
                      borderRadius: '4px',
                      color: isSelected ? 'var(--color-cream)' : 'var(--color-white)',
                      padding: '0.625rem 0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: isSelected ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    aria-label={`Select ${lang.label}`}
                  >
                    <span>{lang.nativeLabel}</span>
                    {isSelected && <span style={{ fontWeight: 700 }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Direct Line */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'var(--color-cream)',
              fontSize: '0.9375rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
              <Phone size={16} />
              <span>{siteConfig.contacts.phone1}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <Mail size={16} />
              <span>{siteConfig.contacts.email}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
