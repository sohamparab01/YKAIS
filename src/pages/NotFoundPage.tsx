import React from 'react';
import { Button } from '../components/common/Button';
import { Home } from 'lucide-react';
import { useLanguage } from '../context';

export const NotFoundPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const nf = dictionary.notFound;

  return (
    <div className="section section-cream" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container text-center">
        <span className="badge-tag" style={{ marginBottom: '1rem' }}>{nf.badge}</span>
        <h1 style={{ fontSize: '5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{nf.title}</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '500px', margin: '0 auto 2rem', color: 'var(--color-charcoal)' }}>
          {nf.message}
        </p>
        <Button to="/" variant="primary" size="lg" icon={<Home size={20} />}>
          {nf.returnHome}
        </Button>
      </div>
    </div>
  );
};
