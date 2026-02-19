import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// --- Performance Constants ---
const MOBILE_BREAKPOINT = 768;
const DESKTOP_TOTAL_IMAGES = 20;
const MOBILE_TOTAL_IMAGES = 7; // Reduced for performance
const MAX_SCROLL = 3000;

// --- Images Array ---
const IMAGES = [
    "/CD_EV_compressed/scooter.jpg",
    "/CD_EV_compressed/2.jpg",
    "/CD_EV_compressed/3.jpg",
    "/CD_EV_compressed/CD_EV15533.jpg",
    "/CD_EV_compressed/CD_EV15544.jpg",
    "/CD_EV_compressed/CD_EV15555.jpg",
    "/CD_EV_compressed/CD_EV15577.jpg",
    "/CD_EV_compressed/CD_EV15611.jpg",
    "/CD_EV_compressed/CD_EV15650.jpg",
    "/CD_EV_compressed/CD_EV15705.jpg",
    "/CD_EV_compressed/CD_EV15730.jpg",
    "/CD_EV_compressed/CD_EV15750.jpg",
    "/CD_EV_compressed/CD_EV15783.jpg",
    "/CD_EV_compressed/CD_EV15828.jpg",
    "/CD_EV_compressed/CD_EV15856.jpg",
    "/CD_EV_compressed/CD_EV15868.jpg",
    "/CD_EV_compressed/CD_EV15890.jpg",
    "/CD_EV_compressed/CD_EV15914.jpg",
    "/CD_EV_compressed/CD_EV15919.jpg",
    "/CD_EV_compressed/CD_EV15923.jpg",
];

// --- Utility Functions ---
const lerp = (start, end, t) => start * (1 - t) + end * t;

// Detect if device is touch-capable (more reliable than width check)
const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// --- Mobile Optimized Card Component ---
function MobileCard({ src, index, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
                delay: index * 0.1,
                duration: 0.4,
                ease: "easeOut"
            }}
            className="flex-shrink-0 w-32 h-44 cursor-pointer"
            onClick={onClick}
            style={{ willChange: "transform" }}
        >
            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl">
                <img
                    src={src}
                    alt={`EV ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
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
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-blue-600 to-blue-900 flex flex-col items-center justify-center p-4 border-2 border-blue-400 hover:border-blue-300 transition-colors"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-blue-200 uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-white">Details</p>
                        <div className="mt-2 text-blue-300">
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

// --- Mobile Hero Component ---
function MobileHero({ images, onImageClick }) {
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        // Delay card appearance for smoother initial render
        const timer = setTimeout(() => setShowCards(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-dark-main via-dark-soft to-dark-main">
            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-16">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Drive the Future with <span className="text-blue-400">CDEV</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Experience Electric Mobility
                    </p>
                </motion.div>

                {/* Cards - Horizontal Scroll */}
                {showCards && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-full"
                    >
                        <div className="overflow-x-auto pb-8 scrollbar-hide">
                            <div className="flex gap-4 px-4" style={{ minWidth: 'max-content' }}>
                                {images.map((src, i) => (
                                    <MobileCard
                                        key={i}
                                        src={src}
                                        index={i}
                                        onClick={(e) => onImageClick(src, i, e)}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-center text-gray-400 text-sm mt-4">
                            ← Swipe to explore →
                        </p>
                    </motion.div>
                )}

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12"
                >
                    <p className="text-gray-400 text-sm text-center mb-4">
                        Zero emissions, maximum performance
                    </p>
                </motion.div>
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
                        className="text-4xl font-medium tracking-tight text-gray-100 bg-dark-main/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
                    >
                        Drive the Future with <span className="text-blue-400">CDEV</span>
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
                    <h2 className="text-5xl font-semibold text-gray-100 tracking-tight mb-4 bg-dark-main/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl">
                        Experience Electric Mobility
                    </h2>
                    <p className="text-base text-gray-300 max-w-lg leading-relaxed bg-dark-main/70 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
                        Discover our cutting-edge electric scooters.<br />
                        Zero emissions, maximum performance, unlimited possibilities.
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
    // Initialize with proper mobile detection to prevent desktop flash
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth < MOBILE_BREAKPOINT || isTouchDevice();
        }
        return false;
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Update mobile state on resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT || isTouchDevice());
        };
        
        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(checkMobile, 300);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    // Select appropriate images for platform
    const displayImages = useMemo(() => {
        const count = isMobile ? MOBILE_TOTAL_IMAGES : DESKTOP_TOTAL_IMAGES;
        return IMAGES.slice(0, count);
    }, [isMobile]);

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
            {isMobile ? (
                <MobileHero images={displayImages} onImageClick={handleCardClick} />
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

                        {/* Navigation Buttons - Desktop Only */}
                        {!isMobile && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] w-14 h-14 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                                    aria-label="Previous"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] w-14 h-14 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                                    aria-label="Next"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

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
                                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-colors inline-flex items-center gap-2"
                                    >
                                        Learn More
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
