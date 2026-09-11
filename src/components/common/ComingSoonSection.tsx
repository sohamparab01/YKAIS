import React from 'react';
import { Button } from './Button';
import { Clock } from 'lucide-react';
import { useLanguage } from '../../context';

interface ComingSoonSectionProps {
  title: string;
  subtitle: string;
  categoryTag?: string;
}

export const ComingSoonSection: React.FC<ComingSoonSectionProps> = ({
  title,
  subtitle,
  categoryTag,
}) => {
  const { dictionary } = useLanguage();
  const defaultTag = dictionary.common.details;

  return (
    <div className="section section-cream">
      <div className="container text-center" style={{ padding: '4rem 1rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-navy)',
            color: 'var(--color-white)',
            marginBottom: '1.5rem',
          }}
        >
          <Clock size={40} />
        </div>
        <span className="badge-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
          {categoryTag || defaultTag}
        </span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.125rem', color: 'var(--color-charcoal)' }}>
          {subtitle}
        </p>
        <Button to="/contact" variant="primary">
          {dictionary.common.enquireNow}
        </Button>
      </div>
    </div>
  );
};
