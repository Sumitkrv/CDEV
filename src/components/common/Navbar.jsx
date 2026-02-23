"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Bike, Mail } from "lucide-react";
import { cn } from "../../utils/helpers";

export function NavBar({ className }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Navigation items with icons
  const items = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: Info },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  // Sync activeTab with current route and scroll to top
  useEffect(() => {
    setActiveTab(location.pathname);
    // Small delay to ensure route has changed before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  }, [location.pathname]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 bg-[#132F39]/95 backdrop-blur-xl shadow-lg shadow-primary/10"
            : "py-5 bg-[#132F39]/95 backdrop-blur-sm",
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with EV glow effect */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
              className="group relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/CD EV logo (1).svg" 
                  alt="CDEV Logo" 
                  className="h-10 w-auto"
                />
              </motion.div>
            </a>

            {/* Desktop Navigation - Centered with Lamp Effect */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.url;

                  return (
                    <Link
                      key={item.name}
                      to={item.url}
                      onClick={() => {
                        setActiveTab(item.url);
                      }}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300",
                        "text-white/80 hover:text-[#1EE3B5]",
                        isActive && "text-[#1EE3B5]"
                      )}
                    >
                      <span className="hidden md:inline">{item.name}</span>
                      
                      {/* Lamp Effect Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-lamp"
                          className="absolute inset-0 w-full bg-[#1EE3B5]/10 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#1EE3B5] rounded-t-full">
                            <div className="absolute w-12 h-6 bg-[#1EE3B5]/30 rounded-full blur-md -top-2 -left-2" />
                            <div className="absolute w-8 h-6 bg-[#1EE3B5]/30 rounded-full blur-md -top-1" />
                            <div className="absolute w-4 h-4 bg-[#1EE3B5]/40 rounded-full blur-sm top-0 left-2" />
                          </div>
                        </motion.div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="
                    relative group px-6 py-2.5 rounded-full font-semibold text-sm lg:text-base
                    bg-[#1EE3B5] text-[#0B2C2F]
                    transition-all duration-300 ease-out
                    hover:shadow-lg hover:shadow-[#1EE3B5]/40
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1EE3B5] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                    overflow-hidden
                  "
                >
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-0 bg-[#0FB9A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center text-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative">
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180, opacity: 0 },
                    closed: { rotate: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 0, opacity: 1 },
                    closed: { rotate: -180, opacity: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - With Lamp Style */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: "auto" },
          closed: { opacity: 0, y: -20, pointerEvents: "none" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-x-0 top-[72px] z-40 md:hidden"
      >
        <div className="bg-[#132F39]/95 backdrop-blur-xl border-t border-white/12 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col space-y-3">
              {items.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeTab === item.url;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isMobileMenuOpen ? 1 : 0, 
                      x: isMobileMenuOpen ? 0 : -20 
                    }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.url}
                      onClick={() => {
                        setActiveTab(item.url);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "relative flex items-center gap-4 py-4 px-6 text-lg font-medium rounded-xl transition-all duration-300",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1EE3B5]",
                        isActive
                          ? "bg-[#1EE3B5]/10 text-[#1EE3B5] border-l-4 border-[#1EE3B5]"
                          : "text-white/80 hover:bg-[#1EE3B5]/5 hover:text-[#1EE3B5] hover:pl-8"
                      )}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                      {item.name}
                      
                      {/* Mini lamp effect for active mobile item */}
                      {isActive && (
                        <motion.div
                          layoutId="mobile-lamp"
                          className="absolute left-0 w-1 h-8 bg-[#1EE3B5] rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          <div className="absolute -left-1 w-3 h-8 bg-[#1EE3B5]/20 blur-md" />
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
                transition={{ delay: 0.3 }}
                className="pt-6 mt-2 border-t border-white/12"
              >
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  className="
                    relative group block w-full py-5 px-6
                    bg-[#1EE3B5]
                    text-[#0B2C2F] text-center text-lg font-semibold
                    rounded-xl shadow-lg shadow-[#1EE3B5]/30
                    transition-all duration-300
                    hover:shadow-xl hover:shadow-[#1EE3B5]/40
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1EE3B5]
                    overflow-hidden
                  "
                >
                  <span className="relative z-10">Book Now</span>
                  <motion.div
                    className="absolute inset-0 bg-[#0FB9A6]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Backdrop */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" },
          closed: { opacity: 0, pointerEvents: "none" }
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-[#132F39]/40 backdrop-blur-sm z-30 md:hidden"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer */}
      <div className={`${scrolled ? "h-16" : "h-20"} md:h-20 transition-all duration-300`} />
    </>
  );
}