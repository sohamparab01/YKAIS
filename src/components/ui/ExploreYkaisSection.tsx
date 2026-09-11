import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Trophy, Users, Shield, Image, Calendar, MessageSquareQuote, Dumbbell } from 'lucide-react';
import { useLanguage } from '../../context';
import { assetUrl } from '../../utils/assetUrl';

interface ExploreItemConfig {
  id: 'sports' | 'coaches' | 'facilities' | 'achievements' | 'gallery' | 'events' | 'testimonials';
  path: string;
  icon: React.ReactNode;
  bgVariant: 'navy' | 'charcoal' | 'cream' | 'white';
  spanTwo?: boolean;
}

export const ExploreYkaisSection: React.FC = () => {
  const { dictionary } = useLanguage();
  const e = dictionary.home.exploreItems;

  const exploreConfigs: ExploreItemConfig[] = [
    {
      id: 'sports',
      path: '/sports',
      icon: <Dumbbell size={28} />,
      bgVariant: 'navy',
      spanTwo: true,
    },
    {
      id: 'coaches',
      path: '/coaches',
      icon: <Users size={28} />,
      bgVariant: 'charcoal',
    },
    {
      id: 'facilities',
      path: '/facilities',
      icon: <Shield size={28} />,
      bgVariant: 'cream',
    },
    {
      id: 'achievements',
      path: '/achievements',
      icon: <Trophy size={28} />,
      bgVariant: 'navy',
    },
    {
      id: 'gallery',
      path: '/gallery',
      icon: <Image size={28} />,
      bgVariant: 'charcoal',
    },
    {
      id: 'events',
      path: '/events',
      icon: <Calendar size={28} />,
      bgVariant: 'cream',
    },
    {
      id: 'testimonials',
      path: '/testimonials',
      icon: <MessageSquareQuote size={28} />,
      bgVariant: 'white',
      spanTwo: true,
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="explore-header-wrapper">
          <div className="explore-header-composition">
            <div className="explore-logo-wrap">
              <img
                src={assetUrl('/assets/branding/YKAIS-logo.jpeg')}
                alt="Official YKAIS Logo"
                className="explore-header-logo"
              />
            </div>
            <div className="explore-header-text">
              <span className="eyebrow" style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.35rem' }}>
                {dictionary.home.exploreEyebrow}
              </span>
              <h2 style={{ color: 'var(--color-navy)', margin: '0 0 0.75rem', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                {dictionary.home.exploreTitle}
              </h2>
              <p
                style={{
                  maxWidth: '540px',
                  color: 'var(--color-charcoal)',
                  fontSize: '1.125rem',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                {dictionary.home.exploreSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {exploreConfigs.map((config, idx) => {
            const itemData = e[config.id];

            return (
              <motion.div
                key={config.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                style={{
                  gridColumn: config.spanTwo ? 'span 1' : 'span 1',
                }}
              >
                <Link
                  to={config.path}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    minHeight: '260px',
                    padding: '2.25rem 2rem',
                    borderRadius: 'var(--card-radius)',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    ...getBgStyle(config.bgVariant),
                  }}
                >
                  {/* Top Badge & Arrow Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <span
                      className="badge-tag"
                      style={{
                        ...getBadgeStyle(config.bgVariant),
                        fontSize: '0.75rem',
                        letterSpacing: '0.08em',
                        padding: '0.35rem 0.85rem',
                      }}
                    >
                      {itemData.tag}
                    </span>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...getIconCircleStyle(config.bgVariant),
                      }}
                    >
                      <ArrowUpRight size={22} />
                    </div>
                  </div>

                  {/* Main Content */}
                  <div>
                    <div style={{ marginBottom: '1rem', ...getIconColor(config.bgVariant) }}>{config.icon}</div>
                    <h3
                      style={{
                        fontSize: '1.75rem',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '0.03em',
                        marginBottom: '0.625rem',
                        lineHeight: '1.15',
                        ...getTextColor(config.bgVariant),
                      }}
                    >
                      {itemData.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        lineHeight: '1.55',
                        margin: 0,
                        ...getSubtitleColor(config.bgVariant),
                      }}
                    >
                      {itemData.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Helper style functions for brand colors: Navy, Charcoal, Cream, White
function getBgStyle(variant: 'navy' | 'charcoal' | 'cream' | 'white'): React.CSSProperties {
  switch (variant) {
    case 'navy':
      return {
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 12px 32px rgba(38, 48, 92, 0.25)',
      };
    case 'charcoal':
      return {
        backgroundColor: 'var(--color-charcoal)',
        color: 'var(--color-white)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
      };
    case 'cream':
      return {
        backgroundColor: 'var(--color-cream)',
        color: 'var(--color-charcoal)',
        border: '1px solid rgba(38, 48, 92, 0.15)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
      };
    case 'white':
    default:
      return {
        backgroundColor: '#FFFFFF',
        color: 'var(--color-charcoal)',
        border: '1px solid var(--color-cream)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
      };
  }
}

function getBadgeStyle(variant: 'navy' | 'charcoal' | 'cream' | 'white'): React.CSSProperties {
  switch (variant) {
    case 'navy':
      return { backgroundColor: 'rgba(227, 226, 218, 0.2)', color: 'var(--color-cream)' };
    case 'charcoal':
      return { backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--color-white)' };
    case 'cream':
      return { backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' };
    case 'white':
    default:
      return { backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' };
  }
}

function getIconCircleStyle(variant: 'navy' | 'charcoal' | 'cream' | 'white'): React.CSSProperties {
  switch (variant) {
    case 'navy':
      return { backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--color-white)' };
    case 'charcoal':
      return { backgroundColor: 'rgba(255, 255, 255, 0.12)', color: 'var(--color-white)' };
    case 'cream':
      return { backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' };
    case 'white':
    default:
      return { backgroundColor: 'var(--color-cream)', color: 'var(--color-navy)' };
  }
}

function getIconColor(variant: 'navy' | 'charcoal' | 'cream' | 'white'): React.CSSProperties {
  switch (variant) {
    case 'navy':
    case 'charcoal':
      return { color: 'var(--color-cream)' };
    case 'cream':
    case 'white':
    default:
      return { color: 'var(--color-navy)' };
  }
}

function getTextColor(variant: 'navy' | 'charcoal' | 'cream' | 'white'): React.CSSProperties {
  switch (variant) {
    case 'navy':
    case 'charcoal':
      return { color: 'var(--color-white)' };
    case 'cream':
    case 'white':
    default:
      return { color: 'var(--color-charcoal)' };
  }
}

function getSubtitleColor(variant: 'navy' | 'charcoal' | 'cream' | 'white'): React.CSSProperties {
  switch (variant) {
    case 'navy':
    case 'charcoal':
      return { color: 'var(--color-cream)', opacity: 0.9 };
    case 'cream':
      return { color: 'rgba(38, 38, 38, 0.85)' };
    case 'white':
    default:
      return { color: '#555555' };
  }
}
