import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}) => {
  return (
    <div className={`section-header ${centered ? 'text-center' : 'text-left'}`} style={{ marginBottom: '3rem' }}>
      {eyebrow && (
        <span className="eyebrow" style={{ color: light ? 'var(--color-cream)' : 'var(--color-navy)' }}>
          {eyebrow}
        </span>
      )}
      <h2 style={{ color: light ? 'var(--color-white)' : 'var(--color-navy)', margin: '0.5rem 0 1rem' }}>
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            maxWidth: '720px',
            margin: centered ? '0 auto' : '0',
            color: light ? 'var(--color-cream)' : 'var(--color-charcoal)',
            fontSize: '1.125rem',
            lineHeight: '1.6',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
