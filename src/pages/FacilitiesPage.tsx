import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/common/SectionHeader';
import { facilitiesData, facilityCategories, type FacilityCategory } from '../data/facilitiesData';
import {
  ShieldCheck,
  Dumbbell,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Wind,
  Layers,
} from 'lucide-react';
import { useLanguage } from '../context';

export const FacilitiesPage: React.FC = () => {
  const { dictionary } = useLanguage();
  const f = dictionary.facilities;

  const [selectedCategory, setSelectedCategory] = useState<FacilityCategory>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Filter facilities based on category
  const filteredFacilities = selectedCategory === 'All'
    ? facilitiesData
    : facilitiesData.filter((item) => item.category === selectedCategory);

  // Navigation handlers for Lightbox
  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredFacilities.length - 1));
  }, [selectedPhotoIndex, filteredFacilities.length]);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredFacilities.length - 1 ? prev! + 1 : 0));
  }, [selectedPhotoIndex, filteredFacilities.length]);

  const handleClose = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  // Keyboard accessibility & scroll locking for Lightbox
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
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
  }, [selectedPhotoIndex, handleClose, handlePrev, handleNext]);

  const activePhoto = selectedPhotoIndex !== null ? filteredFacilities[selectedPhotoIndex] : null;
  const activeLocalized = activePhoto ? f.items[activePhoto.id] : null;

  return (
    <div className="facilities-page" style={{ width: '100%', overflowX: 'hidden' }}>
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
              {f.bannerEyebrow}
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
              {f.bannerTitle}
            </h1>
            <p
              style={{
                color: 'var(--color-cream)',
                maxWidth: '720px',
                margin: '1.25rem auto 0',
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              {f.bannerSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Highlights Bar */}
      <section
        style={{
          backgroundColor: 'var(--color-white)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '2rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-cream-light)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-navy)',
                  flexShrink: 0,
                }}
              >
                <Layers size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.9375rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.03em', color: 'var(--color-navy)' }}>
                  {f.highlights.matsTitle}
                </h4>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.8125rem', color: 'var(--color-charcoal)', opacity: 0.8 }}>
                  {f.highlights.matsDesc}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-cream-light)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-navy)',
                  flexShrink: 0,
                }}
              >
                <Dumbbell size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.9375rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.03em', color: 'var(--color-navy)' }}>
                  {f.highlights.strikingTitle}
                </h4>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.8125rem', color: 'var(--color-charcoal)', opacity: 0.8 }}>
                  {f.highlights.strikingDesc}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-cream-light)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-navy)',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.9375rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.03em', color: 'var(--color-navy)' }}>
                  {f.highlights.gearTitle}
                </h4>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.8125rem', color: 'var(--color-charcoal)', opacity: 0.8 }}>
                  {f.highlights.gearDesc}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-cream-light)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-navy)',
                  flexShrink: 0,
                }}
              >
                <Wind size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.9375rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.03em', color: 'var(--color-navy)' }}>
                  {f.highlights.airTitle}
                </h4>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.8125rem', color: 'var(--color-charcoal)', opacity: 0.8 }}>
                  {f.highlights.airDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-cream-light)', minHeight: '60vh' }}>
        <div className="container">
          <SectionHeader
            eyebrow={f.gridEyebrow}
            title={f.gridTitle}
            subtitle={f.gridSubtitle}
          />

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.625rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {facilityCategories.map((cat) => {
              const count = cat === 'All'
                ? facilitiesData.length
                : facilitiesData.filter((i) => i.category === cat).length;
              const isActive = selectedCategory === cat;
              const displayCategory = f.categories[cat] || cat;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedPhotoIndex(null);
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

          {/* Facility Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: '2rem',
            }}
          >
            {filteredFacilities.map((facility, index) => {
              const isPortrait = facility.aspectRatio === '9/16' || facility.aspectRatio === '3/4';
              const localized = f.items[facility.id];
              const displayTitle = localized?.title || facility.title;
              const displayCategory = localized?.category || facility.category;
              const displayDescription = localized?.description || facility.description;
              const displayBadge = localized?.badge || facility.badge;
              const displayFeatures = localized?.features || facility.features;

              return (
                <motion.div
                  key={facility.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
                  style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--card-radius)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(38, 48, 92, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  }}
                >
                  {/* Card Image Stage */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: isPortrait ? '4 / 3' : '16 / 9',
                      backgroundColor: 'var(--color-navy-dark)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedPhotoIndex(index)}
                  >
                    <img
                      src={facility.src}
                      alt={facility.alt}
                      loading="lazy"
                      decoding="async"
                      width={facility.width || 1200}
                      height={facility.height || 675}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
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

                    {/* Category Badge */}
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
                          backgroundColor: 'rgba(26, 34, 67, 0.88)',
                          backdropFilter: 'blur(8px)',
                          color: 'var(--color-cream)',
                          border: '1px solid rgba(227, 226, 218, 0.25)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        {displayCategory}
                      </span>
                    </div>

                    {/* Expand icon button overlay */}
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
                        transition: 'transform 0.2s ease, background-color 0.2s ease',
                      }}
                    >
                      <Maximize2 size={16} />
                    </div>

                    {displayBadge && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0.75rem',
                          right: '0.75rem',
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            padding: '0.25rem 0.6rem',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(227, 226, 218, 0.95)',
                            color: 'var(--color-navy)',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                          }}
                        >
                          {displayBadge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body Details */}
                  <div
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          color: 'var(--color-navy)',
                          margin: 0,
                          letterSpacing: '0.03em',
                          lineHeight: 1.25,
                        }}
                      >
                        {displayTitle}
                      </h3>
                      <p
                        style={{
                          color: 'var(--color-charcoal)',
                          fontSize: '0.90625rem',
                          lineHeight: 1.55,
                          margin: '0.65rem 0 1.25rem',
                          opacity: 0.9,
                        }}
                      >
                        {displayDescription}
                      </p>
                    </div>

                    {/* Features List */}
                    {displayFeatures && displayFeatures.length > 0 && (
                      <div
                        style={{
                          paddingTop: '1rem',
                          borderTop: '1px solid var(--border-subtle)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                        }}
                      >
                        {displayFeatures.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem',
                              fontSize: '0.8125rem',
                              color: 'var(--color-navy)',
                              fontWeight: 500,
                              lineHeight: 1.4,
                            }}
                          >
                            <CheckCircle2
                              size={15}
                              style={{
                                color: 'var(--color-navy)',
                                flexShrink: 0,
                                marginTop: '1px',
                                opacity: 0.75,
                              }}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Training Standards Callout Box */}
          <div
            style={{
              marginTop: '4.5rem',
              backgroundColor: 'var(--color-navy)',
              borderRadius: 'var(--card-radius)',
              color: 'var(--color-white)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid rgba(227, 226, 218, 0.15)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={20} style={{ color: 'var(--color-cream)' }} />
                  <span
                    className="eyebrow"
                    style={{
                      color: 'var(--color-cream)',
                      letterSpacing: '0.12em',
                      margin: 0,
                    }}
                  >
                    {f.standardsEyebrow}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    color: 'var(--color-white)',
                    letterSpacing: '0.03em',
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  {f.standardsTitle}
                </h3>
                <p
                  style={{
                    color: 'var(--color-cream)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    margin: '1rem 0 0',
                    fontWeight: 300,
                  }}
                >
                  {f.standardsDesc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(227, 226, 218, 0.15)',
                }}
              >
                {f.standardsList.map((item, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-cream)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-white)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
                  {selectedPhotoIndex! + 1} / {filteredFacilities.length}
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
              {filteredFacilities.length > 1 && (
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
              {filteredFacilities.length > 1 && (
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
              {(activeLocalized?.description || activePhoto.description) && (
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
                  {activeLocalized?.description || activePhoto.description}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
