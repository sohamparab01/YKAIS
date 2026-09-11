import React, { useRef, useEffect } from 'react';

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({
  videoSrc = '/assets/hero/ykais-hero.mp4.mp4',
  posterSrc = '/assets/hero/hero-poster.jpg',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy graceful handler
      });
    }
  }, []);

  return (
    <section
      className="hero-banner-section"
      style={{
        backgroundColor: '#E3E2DA',
        paddingTop: '0.75rem',
        paddingBottom: '2.5rem',
        paddingLeft: 'clamp(16px, 3.5vw, 36px)',
        paddingRight: 'clamp(16px, 3.5vw, 36px)',
      }}
    >
      <div
        className="hero-banner-container"
        style={{
          width: '100%',
          maxWidth: '1680px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0px',
          aspectRatio: '2.3 / 1',
          maxHeight: '680px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
          backgroundColor: '#000000',
        }}
      >
        <video
          ref={videoRef}
          className="hero-banner-video"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            border: 'none',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src="/assets/hero/ykais-hero.mp4.mp4" type="video/mp4" />
          <source src="/assets/hero/ykais-hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
