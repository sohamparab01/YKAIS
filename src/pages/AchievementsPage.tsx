import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Award, Trophy, Medal, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context';
import { achievementStoriesMeta } from '../data/achievementsData';
import { assetUrl } from '../utils/assetUrl';

export const AchievementsPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const a = dictionary.achievements;

  return (
    <div className="achievements-page">
      {/* 1. Hero Banner */}
      <section className="achievements-hero">
        <div className="container">
          <motion.div
            className="achievements-hero-inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="achievements-hero-eyebrow">{a.hero.eyebrow}</span>
            <h1 className="achievements-hero-title">{a.hero.title}</h1>
            <p className="achievements-hero-subtitle">{a.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Major Feature: 37th National Games Gold Medalist */}
      <section className="achievement-section achievement-section-white">
        <div className="container">
          <div className="achievement-split">
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="gold-feature-card">
                <div className="gold-feature-img-wrapper">
                  <img
                    src={assetUrl('/assets/gallery/gallery-09.webp')}
                    alt="Dr. Yogita Khade Ayare — 37th National Games Goa Gold Medalist"
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '1.5rem 1.75rem', backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', borderTop: '1px solid rgba(227, 226, 218, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Medal size={18} style={{ color: 'var(--color-cream)' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', letterSpacing: '0.04em', color: 'var(--color-white)', textTransform: 'uppercase' }}>
                      {a.nationalGames.event}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-cream)', fontSize: '0.875rem', margin: 0, opacity: 0.9 }}>
                    Dr. Yogita Khade Ayare
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="gold-feature-badge">
                <Medal size={14} />
                <span>{a.nationalGames.badge}</span>
              </div>
              <h2 className="achievement-title">{a.nationalGames.title}</h2>
              <div className="gold-subtitle-badge">
                {a.nationalGames.event}
              </div>
              <p className="achievement-paragraph" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                {a.nationalGames.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Feature: International Championships */}
      <section className="achievement-section achievement-section-cream">
        <div className="container">
          <div className="achievement-split achievement-split-reverse">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="achievement-eyebrow">
                <Globe2 size={16} />
                <span>{a.internationalChampionships.eyebrow}</span>
              </span>
              <h2 className="achievement-title">{a.internationalChampionships.title}</h2>

              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'var(--color-navy)',
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '0.45rem 1.15rem',
                    borderRadius: '4px',
                  }}
                >
                  {a.internationalChampionships.subtitle}
                </span>
              </div>

              <p className="achievement-paragraph" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                {a.internationalChampionships.description}
              </p>

              <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', backgroundColor: 'var(--color-white)', borderRadius: '8px', border: '1px solid rgba(38, 48, 92, 0.12)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-navy)', fontSize: '0.75rem', display: 'block', marginBottom: '0.35rem' }}>
                  Martial Arts Disciplines
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)', lineHeight: '1.5' }}>
                  {a.internationalChampionships.disciplinesTag}
                </span>
              </div>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="nomad-visual-card">
                <div className="nomad-image-main">
                  <img
                    src={assetUrl('/assets/gallery/gallery-01.webp')}
                    alt="International Martial Arts Podium and Championship Triumph"
                    loading="lazy"
                  />
                </div>
                <div className="nomad-caption-box">
                  <Globe2 size={18} style={{ color: 'var(--color-navy)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Gold, Silver and Bronze medals across international championships</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Feature Spread: WAKO Best Fighter & Ratnagiri Bhushan Award */}
      <section className="achievement-section achievement-section-white">
        <div className="container">
          <div className="prestige-awards-grid">
            {/* WAKO Asian Kickboxing Best Fighter Card */}
            <motion.div
              className="prestige-award-card prestige-award-card-navy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div>
                <div className="prestige-award-icon">
                  <Award size={28} />
                </div>
                <span className="achievement-eyebrow achievement-eyebrow-light" style={{ marginBottom: '0.5rem' }}>
                  {a.wakoAward.eyebrow}
                </span>
                <h3 className="prestige-award-title">{a.wakoAward.title}</h3>
                <div className="prestige-award-sub">{a.wakoAward.championship}</div>
              </div>
              <p className="prestige-award-desc">{a.wakoAward.description}</p>
            </motion.div>

            {/* Ratnagiri Bhushan Award Card */}
            <motion.div
              className="prestige-award-card prestige-award-card-cream"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <div>
                <div className="prestige-award-icon">
                  <Trophy size={28} />
                </div>
                <span className="achievement-eyebrow" style={{ marginBottom: '0.5rem' }}>
                  {a.ratnagiriBhushan.eyebrow}
                </span>
                <h3 className="prestige-award-title">{a.ratnagiriBhushan.title}</h3>
                <div className="prestige-award-sub">{a.ratnagiriBhushan.year}</div>
              </div>
              <p className="prestige-award-desc">{a.ratnagiriBhushan.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Long-term Sporting Journey (Professional Longevity) */}
      <section className="longevity-banner">
        <div className="container">
          <motion.div
            className="longevity-inner"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="achievements-hero-eyebrow" style={{ color: 'var(--color-cream)' }}>
              {a.experience.eyebrow}
            </span>
            <h2 className="achievements-hero-title" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}>
              {a.experience.title}
            </h2>

            <div className="longevity-stats-grid">
              <div className="longevity-stat-box">
                <span className="longevity-stat-number">{a.experience.playerYears}</span>
                <span className="longevity-stat-label">{a.experience.playerLabel}</span>
              </div>
              <div className="longevity-stat-box">
                <span className="longevity-stat-number">{a.experience.coachYears}</span>
                <span className="longevity-stat-label">{a.experience.coachLabel}</span>
              </div>
            </div>

            <p className="longevity-desc">{a.experience.description}</p>
          </motion.div>
        </div>
      </section>

      {/* 6. Supporting Feature 1: The Journey of Dr. Yogita Khade Ayare */}
      <section className="achievement-section achievement-section-white">
        <div className="container">
          <div className="achievement-split">
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="achievement-portrait-card">
                <div className="achievement-portrait-image-wrapper">
                  <img
                    src={achievementStoriesMeta.story1.image}
                    alt={achievementStoriesMeta.story1.imageAlt}
                    className="achievement-portrait-img"
                    loading="lazy"
                  />
                </div>
                <div className="achievement-portrait-footer">
                  <h3 className="achievement-portrait-name">Dr. Yogita Khade Ayare</h3>
                  <p className="achievement-portrait-role">{a.story1.founderRole}</p>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <span className="achievement-eyebrow">{a.story1.eyebrow}</span>
              <h2 className="achievement-title">{a.story1.title}</h2>

              {a.story1.paragraphs.map((p, idx) => (
                <p key={idx} className="achievement-paragraph">
                  {p}
                </p>
              ))}

              <div className="achievement-badge-group">
                {a.story1.badges.map((badge, idx) => (
                  <span key={idx} className="achievement-badge-pill">
                    {badge}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href={achievementStoriesMeta.story1.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-action-btn youtube-action-btn-navy"
                  aria-label={`${a.watchOnYoutube} - ${a.story1.title}`}
                >
                  <span>{a.watchOnYoutube}</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Supporting Feature 2: World Combat Games 2013 */}
      <section className="achievement-section achievement-section-navy">
        <div className="container">
          <motion.div
            className="combat-feature-container"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="achievement-eyebrow achievement-eyebrow-light">
              {a.story2.eyebrow}
            </span>
            <h2 className="achievement-title achievement-title-light">
              {a.story2.title}
            </h2>

            <div>
              <span className="combat-sublabel-badge">
                {a.story2.sublabel}
              </span>
            </div>

            {/* Matchup Arena Board */}
            <div className="combat-arena-board">
              <div className="combat-matchup-grid">
                {/* Fighter 1 (BEL) */}
                <div className="combat-fighter-card">
                  <div className="combat-country-pill">
                    <span className="combat-country-code">
                      {a.story2.fighter1.countryCode}
                    </span>
                    <span>{a.story2.fighter1.country}</span>
                  </div>
                  <h3 className="combat-fighter-name">
                    {a.story2.fighter1.name}
                  </h3>
                </div>

                {/* Center VS Indicator */}
                <div className="combat-vs-divider">
                  <div className="combat-vs-circle">{a.story2.vs}</div>
                </div>

                {/* Fighter 2 (IND) */}
                <div className="combat-fighter-card">
                  <div className="combat-country-pill">
                    <span className="combat-country-code">
                      {a.story2.fighter2.countryCode}
                    </span>
                    <span>{a.story2.fighter2.country}</span>
                  </div>
                  <h3 className="combat-fighter-name">
                    {a.story2.fighter2.name}
                  </h3>
                </div>
              </div>

              <p className="combat-context-desc">{a.story2.description}</p>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <a
                href={achievementStoriesMeta.story2.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-action-btn youtube-action-btn-light"
                aria-label={`${a.watchOnYoutube} - ${a.story2.title}`}
              >
                <span>{a.watchOnYoutube}</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Supporting Feature 3: World Nomad Games */}
      <section className="achievement-section achievement-section-cream">
        <div className="container">
          <div className="achievement-split achievement-split-reverse">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="achievement-eyebrow">{a.story3.eyebrow}</span>
              <h2 className="achievement-title">{a.story3.title}</h2>

              <div>
                <span className="achievement-location-badge">
                  <MapPin size={15} />
                  <span>{a.story3.location}</span>
                </span>
              </div>

              {a.story3.paragraphs.map((p, idx) => (
                <p key={idx} className="achievement-paragraph">
                  {p}
                </p>
              ))}

              <div style={{ marginTop: '2rem' }}>
                <a
                  href={achievementStoriesMeta.story3.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-action-btn youtube-action-btn-navy"
                  aria-label={`${a.watchOnYoutube} - ${a.story3.title}`}
                >
                  <span>{a.watchOnYoutube}</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="nomad-visual-card">
                <div className="nomad-image-main">
                  <img
                    src={achievementStoriesMeta.story3.image}
                    alt={achievementStoriesMeta.story3.imageAlt}
                    loading="lazy"
                  />
                </div>
                <div className="nomad-caption-box">
                  <MapPin size={18} style={{ color: 'var(--color-navy)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{a.story3.imageCaption}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Final Closing CTA: The Journey Continues */}
      <section className="achievements-final-cta">
        <div className="container">
          <motion.div
            className="achievements-final-cta-inner"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="achievements-final-cta-eyebrow">
              {a.finalCta.eyebrow}
            </span>
            <div className="achievements-final-cta-lines">
              <span className="achievements-final-cta-line">{a.finalCta.line1}</span>
              <span className="achievements-final-cta-line">{a.finalCta.line2}</span>
              <span className="achievements-final-cta-line">{a.finalCta.line3}</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'inline-block' }}
            >
              <Link
                to="/sports"
                className="btn btn-primary btn-lg"
                aria-label={a.finalCta.button}
              >
                <span>{a.finalCta.button}</span>
                <ArrowUpRight size={20} className="btn-icon" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

