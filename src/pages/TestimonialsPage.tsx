import React from 'react';
import { ComingSoonSection } from '../components/common/ComingSoonSection';
import { useLanguage } from '../context';

export const TestimonialsPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const t = dictionary.testimonials;

  return (
    <div>
      <section className="section section-navy" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container text-center">
          <span className="eyebrow" style={{ color: 'var(--color-cream)' }}>{t.bannerEyebrow}</span>
          <h1 style={{ color: 'var(--color-white)' }}>{t.bannerTitle}</h1>
          <p style={{ color: 'var(--color-cream)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.25rem' }}>
            {t.bannerSubtitle}
          </p>
        </div>
      </section>

      <ComingSoonSection
        title={t.comingSoonTitle}
        subtitle={t.comingSoonSubtitle}
        categoryTag={t.comingSoonTag}
      />
    </div>
  );
};
