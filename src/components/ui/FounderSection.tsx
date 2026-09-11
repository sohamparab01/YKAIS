import React from 'react';
import { motion } from 'framer-motion';
import { founderData } from '../../data/founderData';
import { Button } from '../common/Button';
import { Award, CheckCircle2, Medal } from 'lucide-react';
import { useLanguage } from '../../context';

export const FounderSection: React.FC = () => {
  const { dictionary } = useLanguage();
  const f = dictionary.home;

  return (
    <section className="section section-cream" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
      <div className="container">
        <div className="founder-split">
          {/* Left Column: Real Founder Photograph Frame */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="founder-image-card"
          >
            <div className="founder-image-inner">
              <img
                src={founderData.image}
                alt="Dr. Yogita Khade Ayare — Founder & Head Coach"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block',
                }}
              />

              {/* Bottom Gradient Overlay & Title Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(16, 24, 48, 0.95) 0%, rgba(16, 24, 48, 0.65) 50%, transparent 100%)',
                  padding: '2.5rem 2rem 1.75rem',
                  color: 'var(--color-white)',
                }}
              >
                <span
                  className="eyebrow"
                  style={{
                    color: 'var(--color-cream)',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    display: 'inline-block',
                    marginBottom: '0.4rem',
                  }}
                >
                  {f.founderBadge}
                </span>

                <h3
                  style={{
                    color: 'var(--color-white)',
                    fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.02em',
                    marginBottom: '0.35rem',
                    lineHeight: '1.1',
                  }}
                >
                  {founderData.name}
                </h3>

                <p
                  style={{
                    color: 'var(--color-cream)',
                    fontSize: '0.8125rem',
                    lineHeight: '1.45',
                    marginBottom: '0.85rem',
                    opacity: 0.92,
                  }}
                >
                  {f.founderSubhead}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span
                    className="badge-tag"
                    style={{
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-navy)',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.7rem',
                      padding: '0.25rem 0.6rem',
                    }}
                  >
                    <Medal size={12} /> {f.founderTag1}
                  </span>
                  <span
                    className="badge-tag"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'var(--color-white)',
                      fontSize: '0.7rem',
                      padding: '0.25rem 0.6rem',
                    }}
                  >
                    {f.founderTag2}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Biography & Pedigree */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="eyebrow">{f.founderEyebrow}</span>
            <h2
              className="display-title"
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                marginBottom: '1.5rem',
                color: 'var(--color-charcoal)',
              }}
            >
              {f.founderTitle}
            </h2>

            {f.founderBio.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: '#333333',
                  marginBottom: '1.125rem',
                }}
              >
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
              <h4
                style={{
                  fontSize: '1.125rem',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-navy)',
                  letterSpacing: '0.04em',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                }}
              >
                {f.founderCredHeading}
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {f.founderCredentials.map((cred, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--color-charcoal)',
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-navy)', flexShrink: 0 }} />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button to="/about" variant="primary" size="lg" icon={<Award size={20} />}>
              {dictionary.common.aboutYkais}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
