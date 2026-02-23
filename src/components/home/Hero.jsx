import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// --- Performance Constants ---
const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1366; // Include iPad Pro (1024-1366px)
const DESKTOP_TOTAL_IMAGES = 3;
const TABLET_TOTAL_IMAGES = 3; // Show all images
const MOBILE_TOTAL_IMAGES = 3; // Show all 3 images
const MAX_SCROLL = 3000;

// --- Mobile Performance Flags ---
const MOBILE_USE_TWEEN = true; // Use tween instead of spring on mobile
const MOBILE_DISABLE_3D = true; // Disable 3D transforms on mobile
const MOBILE_REDUCE_BLUR = true; // Reduce backdrop blur on mobile

// --- Images Array ---
const IMAGES = [
    "/CD EV new/CD 2.jpg",
    "/CD EV new/CD 3.jpg",
    "/CD EV new/CD 4.jpg",
];

// --- Utility Functions ---
const lerp = (start, end, t) => start * (1 - t) + end * t;

// Detect if device is touch-capable (more reliable than width check)
const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// --- Mobile/Tablet Optimized Card Component ---
// Uses TWEEN animations instead of springs for better mobile performance
// No 3D transforms to reduce GPU load
function MobileCard({ src, index, onClick, isTablet }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth tween
                type: "tween" // Explicitly use tween, not spring
            }}
            className={isTablet ? "flex-shrink-0 w-32 h-46 md:w-36 md:h-52 cursor-pointer" : "flex-shrink-0 w-36 h-52 cursor-pointer"}
            onClick={onClick}
        >
            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl">
                <img
                    src={src}
                    alt={`EV ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold">
                    View Details
                </div>
            </div>
        </motion.div>
    );
}

// --- Desktop FlipCard Component ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function DesktopFlipCard({ src, index, target, onClick }) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
                willChange: "transform",
            }}
            className="cursor-pointer group"
            onClick={onClick}
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`ev-${index}`}
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-[#0D9488] to-[#1A3A36] flex flex-col items-center justify-center p-4 border-2 border-[#14B8A6] hover:border-teal-300 transition-colors"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-teal-200 uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-white">Details</p>
                        <div className="mt-2 text-teal-300">
                            <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Mobile/Tablet Hero Component ---
function MobileHero({ images, onImageClick, isTablet }) {
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        // Delay card appearance for smoother initial render
        const timer = setTimeout(() => setShowCards(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Split images into two rows for tablet
    const firstRow = isTablet ? images.slice(0, 10) : images;
    const secondRow = isTablet ? images.slice(10, 20) : [];

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-dark-main via-dark-soft to-dark-main">
            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-12">
                {/* Title & Stats */}
                <div className="text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                            Drive the Future with <span className="text-[#14B8A6]">CDEV</span>
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg mb-8">
                            Experience Electric Mobility
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex justify-center gap-8 md:gap-12"
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[#14B8A6]">100+</div>
                            <div className="text-xs md:text-sm text-gray-400 mt-1">km Range</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[#14B8A6]">65</div>
                            <div className="text-xs md:text-sm text-gray-400 mt-1">km/h Speed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[#14B8A6]">0%</div>
                            <div className="text-xs md:text-sm text-gray-400 mt-1">Emissions</div>
                        </div>
                    </motion.div>
                </div>

                {/* Cards at Bottom - Horizontal Scroll or Two Rows */}
                {showCards && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full"
                    >
                        {isTablet ? (
                            // Tablet: Two horizontal scrollable rows
                            <div className="space-y-6">
                                {/* First Row - 10 images */}
                                <div className="overflow-x-auto pb-4 scrollbar-hide">
                                    <div className="flex gap-3 md:gap-4 px-4" style={{ minWidth: 'max-content' }}>
                                        {firstRow.map((src, i) => (
                                            <MobileCard
                                                key={i}
                                                src={src}
                                                index={i}
                                                onClick={(e) => onImageClick(src, i, e)}
                                                isTablet={isTablet}
                                            />
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Second Row - 10 images */}
                                <div className="overflow-x-auto pb-4 scrollbar-hide">
                                    <div className="flex gap-3 md:gap-4 px-4" style={{ minWidth: 'max-content' }}>
                                        {secondRow.map((src, i) => (
                                            <MobileCard
                                                key={i + 10}
                                                src={src}
                                                index={i + 10}
                                                onClick={(e) => onImageClick(src, i + 10, e)}
                                                isTablet={isTablet}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Mobile: Single row at bottom
                            <div className="overflow-x-auto pb-4 scrollbar-hide">
                                <div className="flex gap-4 px-4" style={{ minWidth: 'max-content' }}>
                                    {images.map((src, i) => (
                                        <MobileCard
                                            key={i}
                                            src={src}
                                            index={i}
                                            onClick={(e) => onImageClick(src, i, e)}
                                            isTablet={false}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        <p className="text-center text-gray-400 text-xs mt-3">
                            ← Swipe to explore our models →
                        </p>
                    </motion.div>
                )}

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:row-row items-center gap-4 mt-12"
                >
                    <button 
                        onClick={() => window.location.href = '/models'}
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                        View All Models
                    </button>
                    <button 
                        onClick={() => window.location.href = '/contact'}
                        className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                    >
                        Book Test Ride
                    </button>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-400 text-sm text-center mt-4"
                >
                    Zero emissions • Maximum performance • Unlimited possibilities
                </motion.p>
            </div>
        </div>
    );
}

// --- Desktop Hero Component ---
function DesktopHero({ images, onImageClick }) {
    const [introPhase, setIntroPhase] = useState("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [isHeroActive, setIsHeroActive] = useState(true);
    const containerRef = useRef(null);

    // Virtual Scroll
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    // Container Size (only update on mount and significant resize)
    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            setContainerSize({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight,
            });
        };

        updateSize();

        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateSize, 250); // Throttled
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    // Desktop Virtual Scroll Logic
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e) => {
            if (!isHeroActive) return;

            const isScrollingDown = e.deltaY > 0;
            const isScrollingUp = e.deltaY < 0;

            if (scrollRef.current >= MAX_SCROLL && isScrollingDown) {
                setIsHeroActive(false);
                setTimeout(() => {
                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }, 100);
                return;
            }

            if (scrollRef.current <= 0 && isScrollingUp) return;

            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel);
    }, [virtualScroll, isHeroActive]);

    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    // Mouse Parallax
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // Intro Sequence
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Scatter Positions
    const scatterPositions = useMemo(() => {
        return images.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, [images]);

    // Render Loop State
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-gradient-to-b from-dark-main via-dark-soft to-dark-main overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">
                {/* Intro Text */}
                <div className="absolute z-50 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-bold tracking-tight text-white bg-[#1A3A36]/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl"
                    >
                        Drive the Future with <span className="text-[#14B8A6]">CDEV</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-400 bg-dark-main/60 backdrop-blur-sm px-4 py-2 rounded-full"
                    >
                        SCROLL TO EXPLORE
                    </motion.p>
                </div>

                {/* Arc Active Content */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[10%] z-50 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <span className="inline-block px-4 py-2 bg-[#0D9488]/20 text-[#14B8A6] text-sm font-semibold rounded-full mb-6 uppercase tracking-wider backdrop-blur-md">
                        The Future is Electric
                    </span>
                    <h2 className="text-6xl font-bold text-white tracking-tight mb-6">
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">Electric</span> Mobility
                    </h2>
                    <p className="text-lg text-gray-300 max-w-xl leading-relaxed bg-[#1A3A36]/40 backdrop-blur-md px-8 py-5 rounded-[2rem] border border-white/10 shadow-2xl">
                        Discover the next generation of urban transportation.<br />
                        High-performance engineering meets sustainable design.
                    </p>
                </motion.div>

                {/* Cards Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {images.map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70;
                            const lineTotalWidth = images.length * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const minDimension = Math.min(containerSize.width, containerSize.height);
                            const circleRadius = Math.min(minDimension * 0.35, 350);
                            const circleAngle = (i / images.length) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * 1.1;
                            const arcApexY = containerSize.height * 0.25;
                            const arcCenterY = arcApexY + arcRadius;
                            const spreadAngle = 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (images.length - 1);
                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.8;
                            const boundedRotation = -scrollProgress * maxRotation;
                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: 1.8,
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <DesktopFlipCard
                                key={i}
                                src={src}
                                index={i}
                                target={target}
                                onClick={(e) => onImageClick(src, i, e)}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: morphValue > 0.9 && isHeroActive ? 1 : 0 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center"
            >
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Continue Scrolling</p>
                <motion.svg
                    className="w-6 h-6 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
            </motion.div>
        </div>
    );
}

// --- Main Hero Component ---
const Hero = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Detect mobile and tablet on mount (avoid hydration mismatch)
    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobile(width < MOBILE_BREAKPOINT || isTouchDevice());
            setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT && isTouchDevice());
        };
        
        checkDevice();
        
        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(checkDevice, 300);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    // Select appropriate images for platform
    const displayImages = useMemo(() => {
        if (isMobile && !isTablet) return IMAGES.slice(0, MOBILE_TOTAL_IMAGES);
        if (isTablet) return IMAGES.slice(0, TABLET_TOTAL_IMAGES);
        return IMAGES.slice(0, DESKTOP_TOTAL_IMAGES);
    }, [isMobile, isTablet]);

    // Modal Handlers
    const handleCardClick = useCallback((imageSrc, index, e) => {
        e.stopPropagation();
        setSelectedImage(imageSrc);
        setSelectedImageIndex(index);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const nextImage = useCallback((e) => {
        e.stopPropagation();
        const newIndex = (selectedImageIndex + 1) % IMAGES.length;
        setSelectedImageIndex(newIndex);
        setSelectedImage(IMAGES[newIndex]);
    }, [selectedImageIndex]);

    const prevImage = useCallback((e) => {
        e.stopPropagation();
        const newIndex = (selectedImageIndex - 1 + IMAGES.length) % IMAGES.length;
        setSelectedImageIndex(newIndex);
        setSelectedImage(IMAGES[newIndex]);
    }, [selectedImageIndex]);

    // Keyboard navigation
    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                const newIndex = (selectedImageIndex + 1) % IMAGES.length;
                setSelectedImageIndex(newIndex);
                setSelectedImage(IMAGES[newIndex]);
            } else if (e.key === 'ArrowLeft') {
                const newIndex = (selectedImageIndex - 1 + IMAGES.length) % IMAGES.length;
                setSelectedImageIndex(newIndex);
                setSelectedImage(IMAGES[newIndex]);
            } else if (e.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, selectedImageIndex, closeModal]);

    return (
        <>
            {/* Render appropriate Hero based on device */}
            {isMobile || isTablet ? (
                <MobileHero images={displayImages} onImageClick={handleCardClick} isTablet={isTablet} />
            ) : (
                <DesktopHero images={displayImages} onImageClick={handleCardClick} />
            )}

            {/* Shared Modal/Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
                        onClick={closeModal}
                        style={{ backdropFilter: isMobile ? 'none' : 'blur(8px)' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-[110] w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Buttons - All Devices */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                            aria-label="Previous"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                            aria-label="Next"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="CDEV Electric Scooter"
                                className="w-full h-full object-contain"
                            />
                            
                            {/* Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">CDEV Electric Scooter</h3>
                                    <span className="text-white/60 text-sm font-medium">
                                        {selectedImageIndex + 1} / {IMAGES.length}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm md:text-base mb-4">Experience the future of electric mobility</p>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            closeModal();
                                            navigate('/about');
                                        }}
                                        className="px-8 py-3 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:shadow-emerald-500/25 shadow-lg text-white rounded-full font-bold transition-all inline-flex items-center gap-2 transform hover:scale-105"
                                    >
                                        Learn More
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Hero;
