import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { founderData } from '../data/founderData';
import { Button } from '../components/common/Button';
import { Award } from 'lucide-react';
import { useLanguage } from '../context';

export const CoachesPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const c = dictionary.coaches;

  return (
    <div>
      <section className="section section-navy" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container text-center">
          <span className="eyebrow" style={{ color: 'var(--color-cream)' }}>{c.bannerEyebrow}</span>
          <h1 style={{ color: 'var(--color-white)' }}>{c.bannerTitle}</h1>
          <p style={{ color: 'var(--color-cream)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.25rem' }}>
            {c.bannerSubtitle}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={c.sectionEyebrow}
            title={c.sectionTitle}
            subtitle={c.sectionSubtitle}
          />

          <div
            style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: '16px',
              border: '1px solid var(--color-gray-border)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            <div className="grid-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4 / 5', backgroundColor: 'var(--color-navy)' }}>
                <img
                  src={founderData.image}
                  alt="Dr. Yogita Khade Ayare — Head Coach & Founder"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block',
                  }}
                />
              </div>

              <div>
                <span className="badge-tag" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                  {c.founderRole}
                </span>
                <h3 style={{ color: 'var(--color-navy)', fontSize: '2rem', marginBottom: '1rem' }}>
                  {founderData.name}
                </h3>

                {c.bio.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '1rem', lineHeight: '1.65', color: 'var(--color-charcoal)', marginBottom: '0.85rem' }}>
                    {p}
                  </p>
                ))}

                <div style={{ marginTop: '1.75rem' }}>
                  <Button to="/contact" variant="primary" icon={<Award size={18} />}>
                    {c.contactBtn}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
