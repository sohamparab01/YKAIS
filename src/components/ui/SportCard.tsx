import React from 'react';
import { motion } from 'framer-motion';
import type { Sport } from '../../types';
import { Button } from '../common/Button';
import { ArrowRight, Trophy } from 'lucide-react';
import { useLanguage } from '../../context';

interface SportCardProps {
  sport: Sport;
}

export const SportCard: React.FC<SportCardProps> = ({ sport }) => {
  const { dictionary } = useLanguage();

  // Category translation helper
  const getCategoryLabel = (cat?: string): string => {
    if (!cat) return dictionary.common.discipline;
    switch (cat) {
      case 'Combat':
        return dictionary.sports.categories.combat;
      case 'Team':
        return dictionary.sports.categories.team;
      case 'Racquet':
        return dictionary.sports.categories.racquet;
      case 'Athletics & Fitness':
        return dictionary.sports.categories.athleticsFitness;
      case 'Specialty':
        return dictionary.sports.categories.specialty;
      default:
        return cat;
    }
  };

  const localizedDesc = dictionary.sports.descriptions[sport.id] || sport.description;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--card-radius)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-subtle)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Editorial Typographic / Photographic Header Tile */}
      <div
        style={{
          height: '170px',
          backgroundColor: 'var(--color-navy)',
          color: 'var(--color-white)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          background: sport.image ? 'none' : 'linear-gradient(145deg, var(--color-navy) 0%, var(--color-charcoal) 100%)',
        }}
      >
        {sport.image && (
          <>
            <img
              src={sport.image}
              alt={`${sport.title} — YKAIS Sports Discipline`}
              loading="lazy"
              decoding="async"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(16, 24, 48, 0.92) 0%, rgba(16, 24, 48, 0.45) 55%, rgba(16, 24, 48, 0.3) 100%)',
                pointerEvents: 'none',
              }}
            />
          </>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: sport.image ? 'blur(4px)' : 'none',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--btn-radius)',
              color: 'var(--color-cream)',
            }}
          >
            {getCategoryLabel(sport.category)}
          </span>
          <Trophy size={20} style={{ color: 'var(--color-cream)', opacity: 0.9 }} />
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            color: 'var(--color-white)',
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 1,
            textShadow: sport.image ? '0 2px 6px rgba(0, 0, 0, 0.6)' : 'none',
          }}
        >
          {sport.title}
        </h3>
      </div>

      {/* Content Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal)', lineHeight: '1.65', marginBottom: '1.75rem', flex: 1 }}>
          {localizedDesc}
        </p>

        <Button to="/contact" variant="secondary" size="sm" icon={<ArrowRight size={16} />}>
          {dictionary.common.enquireNow}
        </Button>
      </div>
    </motion.div>
  );
};
