import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Zap, Battery, Clock, Shield, Star, ArrowRight } from 'lucide-react';

// Scooter variants data with pricing
const scooterVariants = [
  {
    id: 'inzoev-s1',
    name: 'INZOEV S1',
    price: '₹69,999',
    emi: '₹2,499/month',
    range: '90 km',
    battery: '2.8 kWh',
    charging: '3 Hours',
    guarantee: '3 Years',
    badge: null,
    image: '/scooter.png',
  },
  {
    id: 'cdev-s200',
    name: 'CDEV S200 (Passenger Electric Auto)',
    price: '₹3.5 – 4.5 Lakh*',
    emi: '₹8,500/month*',
    range: '150–170 km',
    battery: '12.1 kWh',
    charging: '4–5 Hours',
    guarantee: '3 Years Battery',
    badge: null,
    image: '/2.png',
    topSpeed: '50 km/h',
  },
  {
    id: 'cdev-s300',
    name: 'CDEV S300 (Electric Cargo Auto)',
    price: '₹1.6 – 1.8 Lakh*',
    emi: '₹4,000/month*',
    range: '80–100 km',
    battery: '9.6 kWh',
    charging: '4–5 Hours',
    guarantee: '3 Years Battery',
    badge: null,
    image: '/3.png',
    payload: '350–400 kg',
    motor: '1 HP Equivalent',
  },
];

const colorOptions = [
  { id: 'white', name: 'White', color: '#FFFFFF', border: '#D1D5DB', filter: 'brightness(1.1) saturate(0.3)' },
  { id: 'lavender', name: 'Lavender', color: '#C4B5FD', filter: 'hue-rotate(260deg) saturate(0.7) brightness(1.05)' },
  { id: 'cyan', name: 'Cyan Blue', color: '#67E8F9', filter: 'hue-rotate(180deg) saturate(0.8)' },
  { id: 'red', name: 'Red', color: '#EF4444', filter: 'saturate(1.1) brightness(1.0)' },
  { id: 'panach', name: 'Panach', color: '#86EFAC', filter: 'hue-rotate(90deg) saturate(0.7)' },
];

const ScooterGrid = () => {
  const [currentScooterIndex, setCurrentScooterIndex] = useState(0); // Start with Mint Cruiser
  const [selectedColor, setSelectedColor] = useState('red');
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('none');
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [hoveredColor, setHoveredColor] = useState(null);
  
  const sectionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentScooter = scooterVariants[currentScooterIndex];
  const currentColorOption = colorOptions.find(c => c.id === selectedColor);

  // Preload all scooter images
  useEffect(() => {
    const images = scooterVariants.map(v => v.image).filter((v, i, a) => a.indexOf(v) === i);
    let loadedCount = 0;
    images.forEach(src => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);

  // Intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, currentScooterIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating]);

  const handlePrevious = useCallback(() => {
    if (isAnimating) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScooterIndex((prev) => 
        prev === 0 ? scooterVariants.length - 1 : prev - 1
      );
      setSlideDirection('none');
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScooterIndex((prev) => 
        prev === scooterVariants.length - 1 ? 0 : prev + 1
      );
      setSlideDirection('none');
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  const features = [
    { icon: Zap, label: 'Range', value: currentScooter.range },
    { icon: Battery, label: 'Battery', value: currentScooter.battery },
    { icon: Clock, label: 'Charging', value: currentScooter.charging },
    { icon: Shield, label: 'Guarantee', value: currentScooter.guarantee },
  ];

  const getSlideClass = () => {
    if (slideDirection === 'left') return 'translate-x-[-100px] opacity-0';
    if (slideDirection === 'right') return 'translate-x-[100px] opacity-0';
    return 'translate-x-0 opacity-100';
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative w-full min-h-[720px] py-20 md:py-28 overflow-hidden transition-all duration-1000 bg-white ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDFA] via-white to-[#F0FDFA]" />

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center">
        {/* Header Content */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <span className="inline-block px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
            Our Models
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Choose Your 
            <span className="inline-block mx-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
              Perfect
            </span>
            Ride
          </h2>
        </div>

        <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mt-8 md:mt-20">
          {/* Left Side Feature Indicators (Desktop) */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10px]'
          }`}>
            <div className="relative flex items-center h-[340px]">
              {/* Left Curve - "(" shape, elements sit ON TOP of this curve */}
              <svg
                className="absolute left-[120px] top-1/2 -translate-y-1/2 h-[340px] w-[50px] pointer-events-none z-0"
                viewBox="0 0 50 340"
                fill="none"
              >
                <path
                  d="M 48 0 
                     Q -5 170, 48 340"
                  stroke="#0D9488"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              
              {/* Features Column - icons sit ON the curve */}
              <div className="flex flex-col gap-[72px] relative z-10">
                {features.map((feature, index) => {
                  const offsets = [0, -22, -22, 0];
                  return (
                    <div 
                      key={feature.label} 
                      className="flex items-center gap-4 group"
                      style={{ marginLeft: `${offsets[index]}px` }}
                    >
                      {/* Text on left */}
                      <div className="text-right min-w-[85px]">
                        <p className="text-[11px] text-gray-400 font-bold mb-0.5 uppercase tracking-wide">{feature.label}</p>
                        <p className="text-lg font-black text-gray-900 transition-colors group-hover:text-[#0D9488]">{feature.value}</p>
                      </div>
                      {/* Icon on right - sits ON the curve */}
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xl border border-[#F0FDFA] flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                        <feature.icon className="w-6 h-6 text-[#0D9488] group-hover:text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Center - Scooter Image */}
          <div className={`relative z-0 flex flex-col items-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-[#0D9488]/5 blur-[60px]" />
            
            {/* Scooter Image Container with floating animation */}
            <div 
              className={`w-[280px] h-[240px] md:w-[400px] md:h-[320px] lg:w-[460px] lg:h-[360px] flex items-center justify-center transition-all duration-300 ${getSlideClass()}`}
              style={{
                animation: !isAnimating ? 'float 4s ease-in-out infinite' : 'none'
              }}
            >
              {imagesLoaded ? (
                <img 
                  src={currentScooter.image}
                  alt={currentScooter.name}
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  style={{ 
                    filter: `${currentColorOption?.filter || 'none'}`
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-100/50 animate-pulse rounded-2xl" />
              )}
            </div>
            
            {/* Scooter Name & Price */}
            <div className={`mt-4 text-center transition-all duration-300 ${getSlideClass()}`}>
              <span className="text-2xl md:text-3xl font-black text-gray-900 block">{currentScooter.name}</span>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="text-3xl md:text-4xl font-black text-[#0D9488]">{currentScooter.price}</span>
                <span className="text-sm font-bold text-gray-500 bg-[#F0FDFA] px-4 py-1 rounded-full border border-[#0D9488]/10 tracking-widest uppercase">EMI {currentScooter.emi}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Color Selector */}
          <div className={`absolute right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-10 hidden md:block transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative flex items-center">
              <svg
                className="absolute -left-[15px] top-1/2 -translate-y-1/2 h-[340px] w-[50px] pointer-events-none z-0"
                viewBox="0 0 50 340"
                fill="none"
              >
                <path
                  d="M 2 0 
                     Q 55 170, 2 340"
                  stroke="#0D9488"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              
              <div className="flex flex-col gap-[38px] items-start relative z-10">
                {colorOptions.map((color, index) => {
                  const offsets = [5, 22, 32, 22, 5];
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      onMouseEnter={() => setHoveredColor(color.id)}
                      onMouseLeave={() => setHoveredColor(null)}
                      className="flex items-center gap-4 group"
                      style={{ marginLeft: `${offsets[index]}px` }}
                    >
                      <div
                        className={`rounded-full transition-all duration-300 flex-shrink-0 ${
                          selectedColor === color.id 
                            ? 'w-12 h-12 shadow-xl ring-2 ring-offset-2 ring-[#0D9488]/30' 
                            : 'w-8 h-8 shadow-md group-hover:w-10 group-hover:h-10 group-hover:shadow-lg'
                        }`}
                        style={{ 
                          backgroundColor: color.color,
                          border: color.border ? `2px solid ${color.border}` : '2px solid rgba(255,255,255,0.9)',
                        }}
                      />
                      <span className={`text-sm font-bold uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                        selectedColor === color.id 
                          ? 'text-[#0D9488]' 
                          : hoveredColor === color.id 
                            ? 'text-gray-600'
                            : 'text-gray-400 opacity-0 group-hover:opacity-100'
                      }`}>
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Left Navigation Arrow */}
          <button 
            onClick={handlePrevious}
            disabled={isAnimating}
            className="absolute left-2 md:left-4 bottom-[-50px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-[#1A3A36] hover:bg-[#0D9488] hover:text-white transition-all duration-300 z-20 group"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button 
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-2 md:right-4 bottom-[-50px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-[#1A3A36] hover:bg-[#0D9488] hover:text-white transition-all duration-300 z-20 group"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <Link to="/about">
            <button className="px-12 py-5 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-12 py-5 bg-white text-[#1A3A36] border-2 border-[#F0FDFA] font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:border-[#0D9488]/30 transition-all duration-300 transform hover:scale-105">
              Book Test Ride
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default ScooterGrid;
