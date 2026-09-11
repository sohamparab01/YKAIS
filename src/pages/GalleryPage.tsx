import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/common/SectionHeader';
import { galleryData, galleryCategories, type GalleryCategory } from '../data/galleryData';
import { X, ChevronLeft, ChevronRight, Maximize2, Award } from 'lucide-react';
import { useLanguage } from '../context';

export const GalleryPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const g = dictionary.gallery;

  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filter gallery items based on active category
  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  // Navigation handlers for Lightbox
  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard accessibility & scroll locking for Lightbox
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const activePhoto = selectedIndex !== null ? filteredItems[selectedIndex] : null;
  const activeLocalized = activePhoto ? g.items[activePhoto.id] : null;

  return (
    <div className="gallery-page" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* Hero Header */}
      <section className="section section-navy" style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="eyebrow"
              style={{
                color: 'var(--color-cream)',
                letterSpacing: '0.14em',
                marginBottom: '0.75rem',
                display: 'inline-block',
              }}
            >
              {g.bannerEyebrow}
            </span>
            <h1
              style={{
                color: 'var(--color-white)',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                letterSpacing: '0.04em',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              {g.bannerTitle}
            </h1>
            <p
              style={{
                color: 'var(--color-cream)',
                maxWidth: '680px',
                margin: '1.25rem auto 0',
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              {g.bannerSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Content Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-cream-light)', minHeight: '60vh' }}>
        <div className="container">
          <SectionHeader
            eyebrow={g.gridEyebrow}
            title={g.gridTitle}
            subtitle={g.gridSubtitle}
          />

          {/* Category Filter Navigation */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.625rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {galleryCategories.map((cat) => {
              const count = cat === 'All'
                ? galleryData.length
                : galleryData.filter((i) => i.category === cat).length;
              const isActive = selectedCategory === cat;
              const displayCategory = g.categories[cat] || cat;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedIndex(null);
                  }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    padding: '0.6rem 1.25rem',
                    borderRadius: 'var(--btn-radius)',
                    border: isActive ? '1px solid var(--color-navy)' : '1px solid var(--border-subtle)',
                    backgroundColor: isActive ? 'var(--color-navy)' : 'var(--color-white)',
                    color: isActive ? 'var(--color-white)' : 'var(--color-charcoal)',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? 'var(--shadow-card)' : 'var(--shadow-subtle)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span>{displayCategory}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      opacity: isActive ? 1 : 0.6,
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(38, 48, 92, 0.08)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '10px',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Editorial Image Grid */}
          <div className="grid-3" style={{ gap: '2rem' }}>
            {filteredItems.map((item, index) => {
              const localized = g.items[item.id];
              const displayTitle = localized?.title || item.title;
              const displayCategory = localized?.category || item.category;
              const displayCaption = localized?.caption || item.caption;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (index % 6) * 0.08 }}
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    position: 'relative',
                    backgroundColor: 'var(--color-navy)',
                    borderRadius: 'var(--card-radius)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-card)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(38, 48, 92, 0.16)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  }}
                >
                  {/* Image Aspect-Ratio Container */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '4 / 5',
                      backgroundColor: 'var(--color-navy-dark)',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width={item.width || 800}
                      height={item.height || 1000}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />

                    {/* Top Badge Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        zIndex: 2,
                      }}
                    >
                      <span
                        className="badge-tag"
                        style={{
                          backgroundColor: 'rgba(26, 34, 67, 0.85)',
                          backdropFilter: 'blur(8px)',
                          color: 'var(--color-cream)',
                          border: '1px solid rgba(227, 226, 218, 0.25)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        {displayCategory}
                      </span>
                    </div>

                    {/* Expand Icon Hint */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        zIndex: 2,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(6px)',
                        color: 'var(--color-white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <Maximize2 size={16} />
                    </div>

                    {/* Bottom Gradient for Contrast */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(26, 34, 67, 0.95) 0%, rgba(26, 34, 67, 0.4) 40%, transparent 70%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Caption & Title Content Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '1.5rem',
                        zIndex: 3,
                        color: 'var(--color-white)',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.35rem',
                          color: 'var(--color-white)',
                          margin: 0,
                          letterSpacing: '0.03em',
                          lineHeight: 1.2,
                        }}
                      >
                        {displayTitle}
                      </h3>
                      {displayCaption && (
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.875rem',
                            color: 'var(--color-cream)',
                            margin: '0.5rem 0 0',
                            lineHeight: 1.45,
                            fontWeight: 300,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {displayCaption}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Notice footer */}
          <div
            style={{
              marginTop: '4rem',
              padding: '2rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--card-radius)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <Award size={32} style={{ color: 'var(--color-navy)', margin: '0 auto 0.75rem', display: 'block' }} />
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--color-navy)',
                margin: 0,
                letterSpacing: '0.04em',
              }}
            >
              {g.noticeTitle}
            </h4>
            <p
              style={{
                color: 'var(--color-charcoal)',
                fontSize: '0.9375rem',
                maxWidth: '620px',
                margin: '0.5rem auto 0',
                lineHeight: 1.5,
              }}
            >
              {g.noticeDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 3000,
              backgroundColor: 'rgba(10, 15, 30, 0.95)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1rem',
            }}
            onClick={handleClose}
          >
            {/* Lightbox Top Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 1rem',
                zIndex: 3010,
                width: '100%',
                maxWidth: '1280px',
                margin: '0 auto',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  className="badge-tag"
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    color: 'var(--color-navy)',
                    fontWeight: 700,
                  }}
                >
                  {activeLocalized?.category || activePhoto.category}
                </span>
                <span
                  style={{
                    color: 'var(--color-cream)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {selectedIndex! + 1} / {filteredItems.length}
                </span>
              </div>

              <button
                onClick={handleClose}
                aria-label={dictionary.common.close}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  color: 'var(--color-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Lightbox Center Image Stage */}
            <div
              style={{
                position: 'relative',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '1280px',
                width: '100%',
                margin: '0 auto',
                padding: '0.5rem',
                minHeight: 0,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={handlePrev}
                  aria-label={dictionary.common.previous}
                  style={{
                    position: 'absolute',
                    left: '0.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 3020,
                    background: 'rgba(26, 34, 67, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(227, 226, 218, 0.3)',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-navy)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(26, 34, 67, 0.75)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              {/* Main Expanded Image */}
              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                style={{
                  maxHeight: '72vh',
                  maxWidth: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  decoding="async"
                  style={{
                    maxHeight: '72vh',
                    maxWidth: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(227, 226, 218, 0.15)',
                  }}
                />
              </motion.div>

              {/* Next Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={handleNext}
                  aria-label={dictionary.common.next}
                  style={{
                    position: 'absolute',
                    right: '0.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 3020,
                    background: 'rgba(26, 34, 67, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(227, 226, 218, 0.3)',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-navy)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(26, 34, 67, 0.75)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronRight size={28} />
                </button>
              )}
            </div>

            {/* Lightbox Bottom Caption Bar */}
            <div
              style={{
                width: '100%',
                maxWidth: '860px',
                margin: '0 auto',
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'rgba(26, 34, 67, 0.85)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(227, 226, 218, 0.2)',
                color: 'var(--color-white)',
                zIndex: 3010,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
                  color: 'var(--color-white)',
                  margin: 0,
                  letterSpacing: '0.04em',
                }}
              >
                {activeLocalized?.title || activePhoto.title}
              </h2>
              {(activeLocalized?.caption || activePhoto.caption) && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-cream)',
                    marginTop: '0.4rem',
                    marginBottom: 0,
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}
                >
                  {activeLocalized?.caption || activePhoto.caption}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
