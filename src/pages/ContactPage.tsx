import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ContactForm } from '../components/ui/ContactForm';
import { ContactDetails } from '../components/ui/ContactDetails';
import { useLanguage } from '../context';

export const ContactPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const c = dictionary.contact;

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

          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </section>
    </div>
  );
};
