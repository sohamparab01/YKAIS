import React from 'react';
import { useLanguage } from '../context';
import { InstagramIcon } from '../components/common/InstagramIcon';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { motion } from 'framer-motion';

export const EventsPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const ev = dictionary.events;
  const instagramUrl = siteConfig.socials?.instagram || 'https://www.instagram.com/ykais.institute/';

  return (
    <div>
      <section className="section section-navy" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container text-center">
          <span className="eyebrow" style={{ color: 'var(--color-cream)' }}>{ev.bannerEyebrow}</span>
          <h1 style={{ color: 'var(--color-white)' }}>{ev.bannerTitle}</h1>
          <p style={{ color: 'var(--color-cream)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.25rem' }}>
            {ev.bannerSubtitle}
          </p>
        </div>
      </section>

      {/* Standalone Clean Instagram Section */}
      <section className="section section-cream" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            <span
              className="eyebrow"
              style={{
                color: 'var(--color-navy)',
                letterSpacing: '0.14em',
                fontSize: '0.8125rem',
                marginBottom: '0.75rem',
                display: 'inline-block',
              }}
            >
              {ev.instaCtaEyebrow}
            </span>
            <p
              style={{
                color: 'var(--color-charcoal)',
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                lineHeight: 1.65,
                margin: '0 auto 2.25rem',
                opacity: 0.95,
              }}
            >
              {ev.instaCtaText}
            </p>
            <div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '1rem 2.25rem',
                  borderRadius: 'var(--btn-radius)',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <InstagramIcon size={20} />
                <span>{ev.instaCtaButton}</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
