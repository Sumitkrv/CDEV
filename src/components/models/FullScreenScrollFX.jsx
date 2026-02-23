import { useEffect, useState } from 'react';
import './FullScreenScrollFX.css';

export const FullScreenScrollFX = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sections.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fx-wrapper">
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`fx-section ${index === activeIndex ? 'active' : ''}`}
        >
          {/* DESKTOP BACKGROUND */}
          {!isMobile && (
            <div className="fx-bg">
              <img
                src={section.background}
                alt={section.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: section.objectPosition || 'center 100%'
                }}
              />
            </div>
          )}

          {/* MOBILE IMAGE (NO CUT EVER) */}
          {isMobile && (
            <div className="fx-mobile-media">
              <img
                src={section.mobileBackground}
                alt={section.title}
              />
            </div>
          )}

        </section>
      ))}

      {/* Arrow Navigation */}
      <button
        onClick={handlePrev}
        className="fx-nav-btn fx-nav-prev"
        aria-label="Previous"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={handleNext}
        className="fx-nav-btn fx-nav-next"
        aria-label="Next"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};
