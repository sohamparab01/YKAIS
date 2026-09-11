import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { siteConfig } from '../../data/siteConfig';
import { useLanguage } from '../../context';

export const Footer: React.FC = () => {
  const { dictionary } = useLanguage();
  const f = dictionary.footer;

  return (
    <footer style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-white)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Brand Info */}
          <div>
            <h3 style={{ color: 'var(--color-cream)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              YKAIS
            </h3>
            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-white)', marginBottom: '1rem' }}>
              Dr. Yogita Khade Ayare Institute of Sports
            </p>
            <p style={{ fontSize: '0.875rem', color: '#AAA', lineHeight: '1.6' }}>
              {f.brandDescription}
            </p>
          </div>

          {/* Navigation Sitemap (Col 1) */}
          <div>
            <h4 style={{ color: 'var(--color-cream)', fontSize: '1.125rem', marginBottom: '1.25rem' }}>
              {f.quickLinksHeading}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><Link to="/" style={linkStyle}>{f.links.home}</Link></li>
              <li><Link to="/about" style={linkStyle}>{f.links.aboutDrYogita}</Link></li>
              <li><Link to="/sports" style={linkStyle}>{f.links.sports13}</Link></li>
              <li><Link to="/gallery" style={linkStyle}>{f.links.photoGallery}</Link></li>
              <li><Link to="/contact" style={linkStyle}>{f.links.contactUs}</Link></li>
            </ul>
          </div>

          {/* Navigation Sitemap (Col 2) */}
          <div>
            <h4 style={{ color: 'var(--color-cream)', fontSize: '1.125rem', marginBottom: '1.25rem' }}>
              {f.instituteHeading}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><Link to="/coaches" style={linkStyle}>{f.links.coachingLeadership}</Link></li>
              <li><Link to="/facilities" style={linkStyle}>{f.links.trainingFacilities}</Link></li>
              <li><Link to="/achievements" style={linkStyle}>{f.links.honoursMedals}</Link></li>
              <li><Link to="/testimonials" style={linkStyle}>{f.links.testimonials}</Link></li>
              <li><Link to="/events" style={linkStyle}>{f.links.upcomingEvents}</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: 'var(--color-cream)', fontSize: '1.125rem', marginBottom: '1.25rem' }}>
              {f.directContactHeading}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem', color: '#DDD' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} style={{ color: 'var(--color-cream)' }} />
                <span>{siteConfig.contacts.phone1} / {siteConfig.contacts.phone2}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} style={{ color: 'var(--color-cream)' }} />
                <span>{siteConfig.contacts.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-cream)', flexShrink: 0, marginTop: '3px' }} />
                <span>{f.location}</span>
              </div>
              {siteConfig.socials?.instagram && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                  <InstagramIcon size={18} style={{ color: 'var(--color-cream)' }} />
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--color-cream)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    <span>Instagram {siteConfig.socials.instagramHandle}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.8125rem', color: '#888' }}>
          <div>
            © {new Date().getFullYear()} YKAIS — Dr. Yogita Khade Ayare Institute of Sports. {f.rights}
          </div>
          <div>
            {f.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkStyle: React.CSSProperties = {
  color: '#CCC',
  textDecoration: 'none',
  fontSize: '0.875rem',
  transition: 'color 0.2s ease',
};
