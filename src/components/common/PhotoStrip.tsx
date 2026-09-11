import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import { galleryData } from '../../data/galleryData';
import { useLanguage } from '../../context';

export const PhotoStrip: React.FC = () => {
  const { dictionary } = useLanguage();
  const featuredPhotos = [galleryData[0], galleryData[2], galleryData[3]].filter(Boolean);

  return (
    <section className="section section-cream">
      <div className="container">
        <SectionHeader
          eyebrow={dictionary.home.photoStripEyebrow}
          title={dictionary.home.photoStripTitle}
          subtitle={dictionary.home.photoStripSubtitle}
        />

        <div className="photo-strip-grid" style={{ marginBottom: '3rem' }}>
          {featuredPhotos.map((photo, idx) => {
            const localizedItem = dictionary.gallery.items[photo.id];
            const displayTitle = localizedItem?.title || photo.title;
            const displayCategory = localizedItem?.category || photo.category;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  position: 'relative',
                  height: '260px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--color-navy)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  width={photo.width || 800}
                  height={photo.height || 600}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                  }}
                />
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(26, 34, 67, 0.9) 0%, rgba(26, 34, 67, 0.2) 50%, transparent 80%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    color: 'var(--color-white)',
                    zIndex: 2,
                  }}
                >
                  <span
                    className="badge-tag"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--color-cream)',
                      fontSize: '0.75rem',
                      marginBottom: '0.4rem',
                      display: 'inline-block',
                    }}
                  >
                    {displayCategory}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      color: 'var(--color-white)',
                      margin: 0,
                      letterSpacing: '0.03em',
                      lineHeight: 1.2,
                    }}
                  >
                    {displayTitle}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button to="/gallery" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            {dictionary.common.viewFullGallery}
          </Button>
        </div>
      </div>
    </section>
  );
};
