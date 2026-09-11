import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { siteConfig } from '../../data/siteConfig';
import { useLanguage } from '../../context';

export const ContactDetails: React.FC = () => {
  const { dictionary } = useLanguage();
  const d = dictionary.contact.details;

  return (
    <div
      style={{
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        padding: '2.5rem',
        borderRadius: 'var(--card-radius)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div>
        <span className="eyebrow" style={{ color: 'var(--color-cream)' }}>
          {d.eyebrow}
        </span>
        <h3 style={{ color: 'var(--color-white)', fontSize: '2rem', marginBottom: '1.5rem' }}>
          {d.title}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={iconBoxStyle}>
              <Phone size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-cream)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {d.phoneLabel}
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600, marginTop: '4px' }}>
                <a href={`tel:${siteConfig.contacts.phone1.replace(/\s+/g, '')}`} style={{ color: 'var(--color-white)', textDecoration: 'none' }}>
                  {siteConfig.contacts.phone1}
                </a>
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600, marginTop: '2px' }}>
                <a href={`tel:${siteConfig.contacts.phone2.replace(/\s+/g, '')}`} style={{ color: 'var(--color-white)', textDecoration: 'none' }}>
                  {siteConfig.contacts.phone2}
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={iconBoxStyle}>
              <Mail size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-cream)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {d.emailLabel}
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600, marginTop: '4px' }}>
                <a href={`mailto:${siteConfig.contacts.email}`} style={{ color: 'var(--color-white)', textDecoration: 'none' }}>
                  {siteConfig.contacts.email}
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={iconBoxStyle}>
              <MapPin size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-cream)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {d.locationLabel}
              </div>
              <div style={{ fontSize: '1rem', lineHeight: '1.5', marginTop: '4px', color: 'var(--color-cream)' }}>
                {d.locationValue}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Connect */}
      <div
        style={{
          padding: '1.25rem',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          border: '1px solid rgba(227, 226, 218, 0.15)',
        }}
      >
        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-cream)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}
        >
          {d.connectTitle}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-cream)',
              }}
            >
              <InstagramIcon size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-cream)', opacity: 0.8 }}>
                Instagram
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-white)' }}>
                {siteConfig.socials?.instagramHandle || '@ykais.institute'}
              </div>
            </div>
          </div>

          <a
            href={siteConfig.socials?.instagram || 'https://www.instagram.com/ykais.institute/'}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--color-cream)',
              color: 'var(--color-navy)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--btn-radius)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>{d.visitInstagram}</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

const iconBoxStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  color: 'var(--color-white)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};
