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
      className={`relative w-full min-h-[720px] py-12 md:py-16 overflow-hidden transition-all duration-1000 bg-gradient-to-b from-dark-main via-dark-soft to-dark-main ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-blue-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className={`text-center mb-10 md:mb-14 transition-all duration-700 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        <h2 className="text-3xl md:text-[44px] font-bold text-gray-100 tracking-tight mb-3">
          Choose Your Perfect EV
        </h2>
        <p className="text-gray-400 text-base md:text-lg font-normal">
          Modern design meets reliable performance — built for everyday Indian roads.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 min-h-[450px] flex items-center justify-center">
        
        {/* Left Side - Feature List */}
        <div className={`absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-10 hidden md:block transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="relative flex items-center">
            {/* Left Curve - "(" shape, elements sit ON TOP of this curve */}
            <svg
              className="absolute left-[120px] top-1/2 -translate-y-1/2 h-[340px] w-[50px] pointer-events-none z-0"
              viewBox="0 0 50 340"
              fill="none"
            >
              <path
                d="M 48 0 
                   Q -5 170, 48 340"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            
            {/* Features Column - icons sit ON the curve */}
            <div className="flex flex-col gap-[72px] relative z-10">
              {features.map((feature, index) => {
                // Icons positioned to sit ON the curve (curve bows left)
                // Calculate offset based on quadratic bezier curve shape
                const offsets = [0, -22, -22, 0];
                return (
                  <div 
                    key={feature.label} 
                    className="flex items-center gap-4 group"
                    style={{ marginLeft: `${offsets[index]}px` }}
                  >
                    {/* Text on left */}
                    <div className="text-right min-w-[85px]">
                      <p className="text-[11px] text-gray-400 font-medium mb-0.5 uppercase tracking-wide">{feature.label}</p>
                      <p className="text-[15px] font-bold text-gray-100 transition-colors group-hover:text-blue-400">{feature.value}</p>
                    </div>
                    {/* Icon on right - sits ON the curve */}
                    <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center shadow-lg flex-shrink-0 transition-transform group-hover:scale-110">
                      <feature.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
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
          {/* Badge */}
          {currentScooter.badge && (
            <div className={`absolute -top-2 md:top-0 left-1/2 -translate-x-1/2 z-20 transition-all duration-300 ${getSlideClass()}`}>
              <div className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full shadow-lg ${
                currentScooter.badge === 'Best Seller' 
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              }`}>
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-bold uppercase tracking-wide">{currentScooter.badge}</span>
              </div>
            </div>
          )}

          {/* Glow effect behind scooter */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-blue-400/10 blur-[60px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-gray-400/15 blur-[40px]" />
          
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
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{ 
                  filter: `${currentColorOption?.filter || 'none'} drop-shadow(0 25px 50px rgba(0,0,0,0.15))`
                }}
              />
            ) : (
              <div className="w-full h-full bg-gray-100/50 animate-pulse rounded-2xl" />
            )}
          </div>
          
          {/* Scooter Name & Price */}
          <div className={`mt-4 text-center transition-all duration-300 ${getSlideClass()}`}>
            <span className="text-xl md:text-2xl font-bold text-gray-100 block">{currentScooter.name}</span>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="text-2xl md:text-3xl font-bold text-blue-400">{currentScooter.price}</span>
              <span className="text-sm text-gray-400 bg-gray-800 px-2 py-0.5 rounded">EMI {currentScooter.emi}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Color Selector */}
        <div className={`absolute right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-10 hidden md:block transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="relative flex items-center">
            {/* Right Curve - ")" shape, color dots sit ON TOP of this curve */}
            <svg
              className="absolute -left-[15px] top-1/2 -translate-y-1/2 h-[340px] w-[50px] pointer-events-none z-0"
              viewBox="0 0 50 340"
              fill="none"
            >
              <path
                d="M 2 0 
                   Q 55 170, 2 340"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            
            {/* Colors Column - dots sit ON the curve */}
            <div className="flex flex-col gap-[38px] items-start relative z-10">
              {colorOptions.map((color, index) => {
                // Dots positioned to sit ON the curve (curve bows right) - pushed more outward
                const offsets = [5, 22, 32, 22, 5];
                return (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    onMouseEnter={() => setHoveredColor(color.id)}
                    onMouseLeave={() => setHoveredColor(null)}
                    className="flex items-center gap-3 group transition-all duration-200 relative"
                    style={{ marginLeft: `${offsets[index]}px` }}
                  >
                    {/* Color dot - sits ON the curve */}
                    <div
                      className={`rounded-full transition-all duration-300 flex-shrink-0 ${
                        selectedColor === color.id 
                          ? 'w-12 h-12 shadow-xl ring-2 ring-offset-2 ring-[#0D9488]/30' 
                          : 'w-6 h-6 shadow-md group-hover:w-8 group-hover:h-8 group-hover:shadow-lg'
                      }`}
                      style={{ 
                        backgroundColor: color.color,
                        border: color.border ? `2px solid ${color.border}` : '2px solid rgba(255,255,255,0.9)',
                      }}
                    />
                    {/* Text - show on hover or when selected */}
                    <span className={`text-sm transition-all duration-200 whitespace-nowrap ${
                      selectedColor === color.id 
                        ? 'text-[#1A3A36] font-semibold opacity-100' 
                        : hoveredColor === color.id 
                          ? 'text-[#1A3A36] font-medium opacity-100'
                          : 'text-gray-400 font-medium opacity-0 group-hover:opacity-100'
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
          aria-label="Previous scooter"
          className="absolute left-2 md:left-4 bottom-[-50px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-blue-400 shadow-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 hover:shadow-2xl transition-all duration-300 z-20 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Right Navigation Arrow */}
        <button 
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next scooter"
          className="absolute right-2 md:right-4 bottom-[-50px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-blue-400 shadow-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 hover:shadow-2xl transition-all duration-300 z-20 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>

      {/* Mobile Features & Colors */}
      <div className={`md:hidden mt-10 px-4 transition-all duration-700 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        {/* Mobile Features */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-center gap-2.5 bg-gray-900/80 backdrop-blur-sm rounded-xl px-3 py-2.5 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 shadow-md">
                <feature.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{feature.label}</p>
                <p className="text-sm font-bold text-gray-100">{feature.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Color Selector */}
        <div className="flex justify-center gap-3 mb-3">
          {colorOptions.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Select ${color.name} color`}
              className={`rounded-full transition-all duration-300 ${
                selectedColor === color.id ? 'w-11 h-11 ring-2 ring-offset-2 ring-[#0D9488] shadow-lg' : 'w-7 h-7 shadow-md'
              }`}
              style={{ 
                backgroundColor: color.color,
                border: color.border ? `2px solid ${color.border}` : '2px solid rgba(255,255,255,0.9)'
              }}
            />
          ))}
        </div>
        <p className="text-center text-xs text-gray-400">
          {colorOptions.find(c => c.id === selectedColor)?.name}
        </p>

        {/* Mobile swipe hint */}
        <p className="text-center text-xs text-gray-400 mt-4">← Swipe to explore more →</p>
      </div>

      {/* Bottom Buttons */}
      <div className={`flex items-center justify-center gap-4 mt-12 md:mt-10 px-4 transition-all duration-700 delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        <Link to="/about">
          <button className="group px-10 md:px-14 py-3.5 bg-blue-400 text-white font-semibold rounded-lg shadow-xl hover:bg-blue-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Learn More
          </button>
        </Link>
        <Link to="/about">
          <button className="group flex items-center gap-2 px-8 md:px-12 py-3.5 bg-gray-900 border-2 border-gray-700 text-gray-100 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm md:text-base shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Explore
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </div>

      {/* Compare Link */}
      <div className={`text-center mt-5 transition-all duration-700 delay-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <Link 
          to="/about" 
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors"
        >
          View all scooters
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default ScooterGrid;
