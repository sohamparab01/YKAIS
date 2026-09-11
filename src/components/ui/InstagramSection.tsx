import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { galleryData } from '../../data/galleryData';
import { siteConfig } from '../../data/siteConfig';
import { useLanguage } from '../../context';

export const InstagramSection: React.FC = () => {
  const { dictionary } = useLanguage();
  const insta = dictionary.home;

  // Curated set of authentic local gallery photos for the editorial feed preview
  const instagramPreviewImages = [
    galleryData.find((g) => g.id === 'gallery-01') || galleryData[0],
    galleryData.find((g) => g.id === 'gallery-02') || galleryData[1],
    galleryData.find((g) => g.id === 'gallery-05') || galleryData[2],
    galleryData.find((g) => g.id === 'gallery-06') || galleryData[3],
    galleryData.find((g) => g.id === 'gallery-09') || galleryData[4],
    galleryData.find((g) => g.id === 'gallery-13') || galleryData[5],
  ].filter(Boolean);

  const instagramUrl = siteConfig.socials?.instagram || 'https://www.instagram.com/ykais.institute/';
  const instagramHandle = siteConfig.socials?.instagramHandle || '@ykais.institute';

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)', padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span
            className="eyebrow"
            style={{
              color: 'var(--color-navy)',
              letterSpacing: '0.14em',
              marginBottom: '0.75rem',
              display: 'inline-block',
            }}
          >
            {insta.instaEyebrow}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--color-navy)',
              margin: 0,
              letterSpacing: '0.04em',
              lineHeight: 1.08,
            }}
          >
            {insta.instaTitle}
          </h2>
          <p
            style={{
              color: 'var(--color-charcoal)',
              maxWidth: '680px',
              margin: '1.25rem auto 0',
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            {insta.instaSubtitle1}
            <br />
            {insta.instaSubtitle2}
          </p>
        </div>

        {/* 6-Image Editorial Photo Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {instagramPreviewImages.map((photo, index) => (
            <motion.a
              key={photo.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              style={{
                position: 'relative',
                display: 'block',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--card-radius)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-navy)',
                boxShadow: 'var(--shadow-subtle)',
                border: '1px solid var(--border-subtle)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.insta-overlay') as HTMLElement;
                const img = e.currentTarget.querySelector('img') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
                if (img) img.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.insta-overlay') as HTMLElement;
                const img = e.currentTarget.querySelector('img') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                width={photo.width || 600}
                height={photo.height || 600}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Hover Overlay */}
              <div
                className="insta-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(38, 48, 92, 0.75)',
                  backdropFilter: 'blur(3px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-white)',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  padding: '1rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.5rem',
                  }}
                >
                  <InstagramIcon size={22} style={{ color: 'var(--color-cream)' }} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--color-cream)',
                  }}
                >
                  {instagramHandle}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Instagram Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto',
          }}
        >
          <span
            className="eyebrow"
            style={{
              color: 'var(--color-navy)',
              letterSpacing: '0.14em',
              fontSize: '0.8125rem',
              marginBottom: '0.75rem',
              display: 'inline-block',
            }}
          >
            {insta.instaCtaEyebrow}
          </span>
          <p
            style={{
              color: 'var(--color-charcoal)',
              fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
              lineHeight: 1.65,
              margin: '0 auto 2rem',
              opacity: 0.9,
            }}
          >
            {insta.instaCtaText}
          </p>
          <div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '1rem 2.25rem',
                borderRadius: 'var(--btn-radius)',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <InstagramIcon size={20} />
              <span>{insta.instaCtaButton}</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
