import React from 'react';
import { founderData } from '../data/founderData';
import { Button } from '../components/common/Button';
import { Award, CheckCircle2, ArrowUpRight, GraduationCap, ShieldCheck, Trophy } from 'lucide-react';
import { InstagramIcon } from '../components/common/InstagramIcon';
import { useLanguage } from '../context';
import { assetUrl } from '../utils/assetUrl';

export const AboutPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const a = dictionary.about;

  return (
    <div>
      {/* Banner */}
      <section className="section section-navy" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container text-center">
          <span className="eyebrow" style={{ color: 'var(--color-cream)' }}>{a.bannerEyebrow}</span>
          <h1 style={{ color: 'var(--color-white)' }}>{a.bannerTitle}</h1>
          <p style={{ color: 'var(--color-cream)', maxWidth: '720px', margin: '1rem auto 0', fontSize: '1.25rem' }}>
            {a.bannerSubtitle}
          </p>
        </div>
      </section>

      {/* Main Profile */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>
            {/* Left: Founder Portrait Card */}
            <div>
              <div
                style={{
                  borderRadius: 'var(--card-radius)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  backgroundColor: 'var(--color-navy)',
                  border: '1px solid rgba(38, 48, 92, 0.12)',
                }}
              >
                <div style={{ width: '100%', aspectRatio: '4 / 5', overflow: 'hidden' }}>
                  <img
                    src={founderData.image}
                    alt="Dr. Yogita Khade Ayare — Sports Coach & Founder"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 12%',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{ padding: '1.5rem 1.75rem', backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
                  <span className="eyebrow" style={{ color: 'var(--color-cream)', fontSize: '0.75rem', marginBottom: '0.25rem', display: 'block' }}>
                    {a.founderRole}
                  </span>
                  <h3 style={{ color: 'var(--color-white)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', margin: '0 0 0.5rem' }}>
                    {founderData.name}
                  </h3>
                  <p style={{ color: 'var(--color-cream)', fontSize: '0.875rem', lineHeight: '1.45', margin: '0 0 1.25rem', opacity: 0.9 }}>
                    {a.founderSubhead}
                  </p>

                  {/* Longevity / Experience Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-cream)', letterSpacing: '0.04em' }}>
                        {a.experience.playerYears}
                      </span>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        {a.experience.playerLabel}
                      </span>
                    </div>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-cream)', letterSpacing: '0.04em' }}>
                        {a.experience.coachYears}
                      </span>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        {a.experience.coachLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Vision & Official Biography */}
            <div>
              <div className="about-vision-header">
                <img
                  src={assetUrl('/assets/branding/YKAIS-logo.jpeg')}
                  alt="Official YKAIS Logo"
                  className="about-founder-logo"
                />
                <div>
                  <span className="eyebrow" style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.35rem' }}>
                    {a.visionEyebrow}
                  </span>
                  <h2 style={{ color: 'var(--color-navy)', margin: 0, fontSize: 'clamp(1.75rem, 2.5vw, 2.35rem)', lineHeight: '1.1' }}>
                    {a.visionTitle}
                  </h2>
                </div>
              </div>

              {/* Intro */}
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-charcoal)', marginBottom: '1.25rem' }}>
                {a.intro}
              </p>

              {/* International Sporting Experience */}
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                {a.internationalDisciplinesIntro}
              </p>

              {/* Disciplines Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {a.disciplinesList.map((disc, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-navy)',
                      backgroundColor: 'var(--color-cream)',
                      border: '1px solid rgba(38, 48, 92, 0.15)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '6px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {disc}
                  </span>
                ))}
              </div>

              {/* Specialties */}
              <div style={{ marginBottom: '1.75rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-navy)', fontSize: '0.75rem', marginBottom: '0.65rem', display: 'block' }}>
                  {a.specialtiesHeading}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {a.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-navy)',
                        backgroundColor: 'var(--color-white)',
                        border: '1px solid var(--color-gray-border)',
                        padding: '0.45rem 1rem',
                        borderRadius: 'var(--btn-radius)',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Personal Instagram CTA */}
              <div
                style={{
                  marginTop: '1.75rem',
                  marginBottom: '1.75rem',
                  padding: '1.35rem 1.5rem',
                  backgroundColor: 'var(--color-cream)',
                  borderRadius: '12px',
                  border: '1px solid rgba(38, 48, 92, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.4rem' }}>
                  <InstagramIcon size={15} style={{ color: 'var(--color-navy)' }} />
                  <span
                    className="eyebrow"
                    style={{
                      color: 'var(--color-navy)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      margin: 0,
                    }}
                  >
                    {a.instagramEyebrow}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: '1.55',
                    color: 'var(--color-charcoal)',
                    margin: '0 0 1.15rem',
                    opacity: 0.9,
                  }}
                >
                  {a.instagramText}
                </p>

                <a
                  href={founderData.instagram || 'https://www.instagram.com/dr.yogitakhadeayare/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>{a.instagramBtn}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Button to="/contact" variant="primary" icon={<Award size={18} />}>
                  {a.enquireBtn}
                </Button>
              </div>
            </div>
          </div>

          {/* Section 2: Three Clean Editorial Panels for Credentials, Leadership, & Awards */}
          <div style={{ marginTop: '4.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* 1. Academic & Professional Profile */}
            <div
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: '16px',
                padding: '2.5rem',
                border: '1px solid var(--color-gray-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <GraduationCap size={26} style={{ color: 'var(--color-navy)' }} />
                <h3 style={{ color: 'var(--color-navy)', fontSize: '1.65rem', margin: 0 }}>
                  {a.academicHeading}
                </h3>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1rem',
                }}
              >
                {a.academicProfile.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      backgroundColor: 'var(--color-white)',
                      padding: '1.15rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(38, 48, 92, 0.08)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-navy)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontWeight: 600, color: 'var(--color-charcoal)', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Leadership & Association Roles */}
            <div
              style={{
                backgroundColor: 'var(--color-navy)',
                color: 'var(--color-white)',
                borderRadius: '16px',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <ShieldCheck size={26} style={{ color: 'var(--color-cream)' }} />
                <h3 style={{ color: 'var(--color-white)', fontSize: '1.65rem', margin: 0 }}>
                  {a.leadershipHeading}
                </h3>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '1rem',
                }}
              >
                {a.leadershipRoles.map((role, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '1.15rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: 'var(--color-cream)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--color-cream)', fontSize: '0.9375rem', lineHeight: '1.55', opacity: 0.95 }}>
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Awards & Recognition */}
            <div
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: '16px',
                padding: '2.5rem',
                border: '1px solid var(--color-gray-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Trophy size={26} style={{ color: 'var(--color-navy)' }} />
                <h3 style={{ color: 'var(--color-navy)', fontSize: '1.65rem', margin: 0 }}>
                  {a.awardsHeading}
                </h3>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1rem',
                }}
              >
                {a.awards.map((award, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      backgroundColor: 'var(--color-white)',
                      padding: '1.15rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(38, 48, 92, 0.08)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <Award size={20} style={{ color: 'var(--color-navy)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontWeight: 600, color: 'var(--color-charcoal)', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                      {award}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

