import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextScramble } from '../common/TextScramble';

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-dark-main" style={{ minHeight: '100svh' }}>
      {/* Mobile: Single image */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="/ev mob 2.png"
          alt="CDEV Electric Scooter"
          className="w-full h-full object-cover"
          style={{ 
            minHeight: '100svh',
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-main/70 via-transparent to-dark-main/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-main/30 via-transparent to-dark-main/50" />
      </div>

      {/* Desktop: Static image */}
      <div className="hidden sm:block absolute inset-0">
        <img
          src="/CD EV new/blue scooty.jpg"
          alt="CDEV Electric Scooter"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 75%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-main/90 via-dark-main/70 to-dark-main/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-main/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[100svh] px-4 sm:px-6 md:px-8">
        <div className="text-center text-text-dark-white w-full max-w-5xl py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <TextScramble
              as="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
              duration={1.2}
              speed={0.05}
              trigger={isVisible}
            >
              Consider Done EV
            </TextScramble>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TextScramble
              as="p"
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-text-muted-white font-light px-2 sm:px-0"
              duration={1.5}
              speed={0.04}
              trigger={isVisible}
            >
              Not just building scooters — building India’s electric future.
            </TextScramble>
          </motion.div>

          {/* Animated Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-0.5 sm:h-1 bg-primary mx-auto mt-4 sm:mt-6 md:mt-8 rounded-full"
            style={{ maxWidth: '100px' }}
          />

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 sm:mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/60"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
