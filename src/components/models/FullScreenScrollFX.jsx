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

          {/* TEXT OVERLAY */}
          <div className="fx-content">
            <span className="fx-left">{section.leftLabel}</span>
            <h1>{section.title}</h1>
            <span className="fx-right">{section.rightLabel}</span>
          </div>
        </section>
      ))}

      {/* SIMPLE NAV (for testing) */}
      <div className="fx-dots">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={i === activeIndex ? 'active' : ''}
          />
        ))}
      </div>

     
    </div>
  );
};
