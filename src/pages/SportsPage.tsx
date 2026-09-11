import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { SportCard } from '../components/ui/SportCard';
import { sportsData } from '../data/sportsData';
import { useLanguage } from '../context';

export const SportsPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const s = dictionary.sports;

  return (
    <div>
      {/* Header Banner */}
      <section className="section section-navy" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container text-center">
          <span className="eyebrow" style={{ color: 'var(--color-cream)' }}>{s.bannerEyebrow}</span>
          <h1 style={{ color: 'var(--color-white)' }}>{s.bannerTitle}</h1>
          <p style={{ color: 'var(--color-cream)', maxWidth: '720px', margin: '1rem auto 0', fontSize: '1.25rem' }}>
            {s.bannerSubtitle}
          </p>
        </div>
      </section>

      {/* 13 Disciplines Grid */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={s.gridEyebrow}
            title={s.gridTitle}
            subtitle={s.gridSubtitle}
          />

          <div className="grid-3">
            {sportsData.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
