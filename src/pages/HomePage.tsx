import React from 'react';
import { Hero } from '../components/ui/Hero';
import { FounderSection } from '../components/ui/FounderSection';
import { ExploreYkaisSection } from '../components/ui/ExploreYkaisSection';
import { SectionHeader } from '../components/common/SectionHeader';
import { SportCard } from '../components/ui/SportCard';
import { PhotoStrip } from '../components/common/PhotoStrip';
import { InstagramSection } from '../components/ui/InstagramSection';
import { sportsData } from '../data/sportsData';
import { Button } from '../components/common/Button';
import { ArrowRight, Trophy, Users, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context';

export const HomePage: React.FC = () => {
  const { dictionary } = useLanguage();
  const h = dictionary.home;

  // Curated subset of featured sports for the homepage teaser grid (excluding Pankration and Belt Wrestling)
  const featuredSports = sportsData
    .slice(0, 6)
    .filter((sport) => sport.id !== 'pankration' && sport.id !== 'belt-wrestling');

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* 1. HERO SECTION */}
      <Hero />

      {/* BRAND LOCKUP TITLE */}
      <section
        style={{
          backgroundColor: '#E3E2DA',
          paddingTop: 0,
          paddingBottom: 'clamp(2.25rem, 4vw, 4rem)',
          paddingLeft: 'clamp(16px, 3.5vw, 36px)',
          paddingRight: 'clamp(16px, 3.5vw, 36px)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3.2vw + 0.5rem, 3.25rem)',
              color: 'var(--color-navy)',
              letterSpacing: '0.03em',
              lineHeight: 1.15,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            YOGITA KHADE AYARE INSTITUTE OF SPORTS
          </h1>
        </div>
      </section>

      {/* 2. FOUNDER SECTION */}
      <FounderSection />

      {/* 3. EXPLORE YKAIS SECTION */}
      <ExploreYkaisSection />

      {/* 4. SPORTS TEASER SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', padding: '6rem 0' }}>
        <div className="container">
          <SectionHeader
            eyebrow={h.eyebrowDisciplines}
            title={h.sportsHeading}
            subtitle={h.sportsSubtitle}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3.5rem',
            }}
          >
            {featuredSports.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>

          <div className="text-center">
            <Button to="/sports" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
              {dictionary.common.viewAllSports}
            </Button>
          </div>
        </div>
      </section>

      {/* Institute Highlights Band */}
      <section className="section section-navy" style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2.5rem',
              textAlign: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div style={iconBadgeStyle}>
                <Trophy size={32} />
              </div>
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.875rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                {h.highlight1Title}
              </h3>
              <p style={{ color: 'var(--color-cream)', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>
                {h.highlight1Desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div style={iconBadgeStyle}>
                <Users size={32} />
              </div>
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.875rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                {h.highlight2Title}
              </h3>
              <p style={{ color: 'var(--color-cream)', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>
                {h.highlight2Desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div style={iconBadgeStyle}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.875rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                {h.highlight3Title}
              </h3>
              <p style={{ color: 'var(--color-cream)', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>
                {h.highlight3Desc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FOLLOW OUR JOURNEY PHOTO STRIP */}
      <PhotoStrip />

      {/* 6. INSTAGRAM SOCIAL FEED SECTION */}
      <InstagramSection />

      {/* 7. CONTACT CTA SECTION */}
      <section className="section section-charcoal" style={{ padding: '6.5rem 0' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <span
              className="eyebrow"
              style={{
                color: 'var(--color-cream)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '0.4rem 1.25rem',
                borderRadius: '9999px',
                marginBottom: '1.5rem',
                display: 'inline-block',
              }}
            >
              {h.ctaEyebrow}
            </span>

            <h2
              style={{
                color: 'var(--color-white)',
                fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
                fontFamily: 'var(--font-heading)',
                marginBottom: '1.25rem',
                lineHeight: '1.05',
                letterSpacing: '0.02em',
              }}
            >
              {h.ctaTitle}
            </h2>

            <p
              style={{
                color: 'var(--color-cream)',
                maxWidth: '660px',
                margin: '0 auto 2.75rem',
                fontSize: '1.125rem',
                lineHeight: '1.65',
                opacity: 0.9,
              }}
            >
              {h.ctaSubtitle}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Button to="/contact" variant="light" size="lg" icon={<ChevronRight size={20} />}>
                {h.ctaButton1}
              </Button>
              <Button to="/sports" variant="light-outline" size="lg">
                {h.ctaButton2}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const iconBadgeStyle: React.CSSProperties = {
  width: '68px',
  height: '68px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  color: 'var(--color-cream)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.25rem',
  border: '1px solid rgba(227, 226, 218, 0.25)',
};
