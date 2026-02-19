import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// --- FlipCard Component ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({ src, index, phase, target, onClick, isMobile }) {
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
                stiffness: isMobile ? 60 : 40,
                damping: isMobile ? 25 : 15,
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
                whileHover={!isMobile ? { rotateY: 180 } : {}}
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

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

// CDEV High Quality EV Scooter Images - 20 Unique Images (Compressed & Optimized)
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

const lerp = (start, end, t) => start * (1 - t) + end * t;

const Hero = () => {
    const navigate = useNavigate();
    const [introPhase, setIntroPhase] = useState("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [isHeroActive, setIsHeroActive] = useState(true);
    const [typewriterText, setTypewriterText] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const containerRef = useRef(null);

    const handleCardClick = (imageSrc, index, e) => {
        e.stopPropagation();
        setSelectedImage(imageSrc);
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const newIndex = (selectedImageIndex + 1) % IMAGES.length;
        setSelectedImageIndex(newIndex);
        setSelectedImage(IMAGES[newIndex]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const newIndex = (selectedImageIndex - 1 + IMAGES.length) % IMAGES.length;
        setSelectedImageIndex(newIndex);
        setSelectedImage(IMAGES[newIndex]);
    };

    // Keyboard navigation for modal
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
    }, [selectedImage, selectedImageIndex]);

    // --- Typewriter Effect ---
    useEffect(() => {
        const text = "CDEV";
        let index = 0;
        let isDeleting = false;
        
        const typeWriter = () => {
            if (!isDeleting && index <= text.length) {
                setTypewriterText(text.slice(0, index));
                index++;
            } else if (!isDeleting && index > text.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000); // Wait 2 seconds before deleting
            } else if (isDeleting && index > 0) {
                index--;
                setTypewriterText(text.slice(0, index));
            } else if (isDeleting && index === 0) {
                isDeleting = false;
                setTimeout(() => {
                    index = 0;
                }, 500); // Wait 0.5 seconds before retyping
            }
        };

        const interval = setInterval(typeWriter, isDeleting ? 100 : 200);
        return () => clearInterval(interval);
    }, []);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    // Detect page scroll position to re-engage hero animation
    useEffect(() => {
        const handlePageScroll = () => {
            const scrollY = window.scrollY;
            
            // If user scrolls back to top, reset hero as active
            if (scrollY < window.innerHeight / 2) {
                setIsHeroActive(true);
            }
        };

        window.addEventListener('scroll', handlePageScroll);
        return () => window.removeEventListener('scroll', handlePageScroll);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e) => {
            // Only capture wheel events when hero is active
            if (!isHeroActive) {
                return;
            }

            const isScrollingDown = e.deltaY > 0;
            const isScrollingUp = e.deltaY < 0;

            // Allow normal scroll if at the end and scrolling down
            if (scrollRef.current >= MAX_SCROLL && isScrollingDown) {
                setIsHeroActive(false);
                // Scroll to next section
                setTimeout(() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }, 100);
                return;
            }

            // Allow normal scroll if at the start and scrolling up
            if (scrollRef.current <= 0 && isScrollingUp) {
                return;
            }

            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        let touchStartY = 0;
        const handleTouchStart = (e) => {
            if (!isHeroActive) return;
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e) => {
            if (!isHeroActive) return;

            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            const isScrollingDown = deltaY > 0;
            const isScrollingUp = deltaY < 0;

            // Allow normal scroll if at the end and scrolling down
            if (scrollRef.current >= MAX_SCROLL && isScrollingDown) {
                setIsHeroActive(false);
                setTimeout(() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }, 100);
                return;
            }

            // Allow normal scroll if at the start and scrolling up
            if (scrollRef.current <= 0 && isScrollingUp) {
                return;
            }

            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll, isHeroActive]);

    const isMobileDevice = containerSize.width < 768;
    
    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { 
        stiffness: isMobileDevice ? 80 : 40, 
        damping: isMobileDevice ? 30 : 20 
    });

    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { 
        stiffness: isMobileDevice ? 80 : 40, 
        damping: isMobileDevice ? 30 : 20 
    });

    // --- Mouse Parallax ---
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

    // --- Intro Sequence ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    // --- Render Loop ---
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

    // --- Content Opacity ---
    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-gradient-to-b from-dark-main via-dark-soft to-dark-main overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text */}
                <div className="absolute z-50 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-2xl font-medium tracking-tight text-gray-100 md:text-4xl bg-dark-main/90 md:backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
                    >
                        Drive the Future with <span className="text-blue-400">{typewriterText}</span>
                        <span className="text-blue-400 animate-pulse">|</span>
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
                    className="absolute top-[5%] md:top-[10%] z-50 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="text-2xl md:text-5xl font-semibold text-gray-100 tracking-tight mb-4 bg-dark-main/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl">
                        Experience Electric Mobility
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 max-w-lg leading-relaxed bg-dark-main/70 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
                        Discover our cutting-edge electric scooters. <br className="hidden md:block" />
                        Zero emissions, maximum performance, unlimited possibilities.
                    </p>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, isMobileDevice ? 15 : TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);
                            const totalCards = isMobile ? 15 : TOTAL_IMAGES;

                            const circleRadius = Math.min(minDimension * 0.35, 350);
                            const circleAngle = (i / totalCards) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.5 : 1.1);

                            const arcApexY = containerSize.height * (isMobile ? 0.38 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;

                            const spreadAngle = isMobile ? 140 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (totalCards - 1);

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * (isMobile ? 1.1 : 0.8);
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + (isMobile ? 0 : parallaxValue),
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.2 : 1.8,
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
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                phase={introPhase}
                                target={target}
                                onClick={(e) => handleCardClick(src, i, e)}
                                isMobile={isMobileDevice}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Scroll Indicator - Shows when animation is near complete */}
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

            {/* Image Modal/Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={closeModal}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ delay: 0.1 }}
                            onClick={closeModal}
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group"
                        >
                            <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        {/* Previous Button */}
                        <motion.button
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ delay: 0.15 }}
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all group"
                        >
                            <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        {/* Next Button */}
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ delay: 0.15 }}
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all group"
                        >
                            <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="CDEV Electric Scooter"
                                className="w-full h-full object-contain object-center"
                            />
                            
                            {/* Image Info Overlay */}
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">CDEV Electric Scooter</h3>
                                    <span className="text-white/60 text-sm font-medium">
                                        {selectedImageIndex + 1} / {IMAGES.length}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm md:text-base mb-4">Experience the future of electric mobility</p>
                                <div className="flex items-center gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
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
                                    </motion.button>
                                    <p className="text-white/40 text-xs hidden md:block">
                                        Use arrow keys or buttons to navigate
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Hero;
