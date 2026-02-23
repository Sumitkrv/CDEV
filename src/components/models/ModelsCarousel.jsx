import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, X, ChevronRight, Zap, Shield, Award, Star } from 'lucide-react';

// TiltCard: subtle 3D parallax on mouse move
const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 280, damping: 30 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 280, damping: 30 });

  const handleMouseMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mx, my]);

  const handleMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const ModelsCarousel = ({
  heading = "Explore Our Models",
  items = [
    {
      id: "item-1",
      title: "City Cruiser",
      price: "₹89,999",
      monthlyEMI: "₹3,499",
      summary: "Perfect for daily commutes with 80km range and smart features. Eco-friendly urban mobility at its best.",
      image: "/CD_EV_compressed/scooter.jpg",
      badge: "Most Popular",
      badgeColor: "bg-[#0D9488]",
      features: [
        "80 km range",
        "45 km/h top speed",
        "3 years warranty",
        "Free home charging kit",
        "Basic insurance included",
        "2 free services"
      ],
      specs: {
        motor: "2.5 kW BLDC Motor",
        battery: "2.5 kWh Li-ion",
        chargingTime: "4-5 hours",
        weight: "95 kg",
        loadCapacity: "150 kg",
        brakes: "Disc brakes (Front & Rear)"
      }
    },
    {
      id: "item-2",
      title: "Sport Pro",
      price: "₹1,24,999",
      monthlyEMI: "₹4,999",
      summary: "High-performance electric scooter with 120km range and 75 km/h top speed. Built for thrill-seekers.",
      image: "/CD_EV_compressed/2.jpg",
      badge: "Best Value",
      badgeColor: "bg-[#14B8A6]",
      features: [
        "120 km range",
        "75 km/h top speed",
        "5 years warranty",
        "Free fast charger",
        "Comprehensive insurance",
        "5 free services",
        "Smart connectivity",
        "GPS tracking"
      ],
      specs: {
        motor: "4 kW BLDC Motor",
        battery: "4 kWh Li-ion",
        chargingTime: "3-4 hours",
        weight: "110 kg",
        loadCapacity: "180 kg",
        brakes: "Hydraulic disc brakes"
      }
    },
    {
      id: "item-3",
      title: "Premium Elite",
      price: "₹1,49,999",
      monthlyEMI: "₹5,999",
      summary: "Luxury meets sustainability with 150km range, AI assistant, and premium accessories. The ultimate EV experience.",
      image: "/CD_EV_compressed/3.jpg",
      badge: "Premium",
      badgeColor: "bg-[#0D9488]",
      features: [
        "150 km range",
        "85 km/h top speed",
        "5 years warranty",
        "Premium accessories",
        "Premium insurance",
        "10 free services",
        "AI assistant",
        "Cloud connectivity",
        "Priority support"
      ],
      specs: {
        motor: "5 kW BLDC Motor",
        battery: "5 kWh Li-ion",
        chargingTime: "2-3 hours",
        weight: "120 kg",
        loadCapacity: "200 kg",
        brakes: "ABS with regenerative braking"
      }
    }
  ],
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-[#F0FDFA]/40 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D9488]/6 rounded-full blur-[140px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#14B8A6]/6 rounded-full blur-[120px] -ml-64 -mb-64" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0D9488]/3 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-14 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold rounded-full mb-5 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" /> Our Lineup
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A3A36] mb-5 tracking-tight leading-tight"
          >
            {heading}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 w-16 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] mx-auto rounded-full origin-left"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-2">
          {items.map((item, index) => {
            const [hovered, setHovered] = useState(false);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className="group cursor-pointer h-full">
                  <motion.div
                    onClick={() => setSelectedItem(item)}
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="relative h-[460px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_60px_rgba(13,148,136,0.22)] transition-shadow duration-500"
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${item.title}`}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
                  >
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.12 + 0.3 }}
                        className={`${item.badgeColor} text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wide`}
                      >
                        {item.badge}
                      </motion.span>
                    </div>

                    <div className="absolute inset-0 bg-white" />

                    {/* Image – fully visible and centred */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center overflow-hidden"
                      animate={{ scale: hovered ? 1.04 : 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain object-center p-6"
                        loading="lazy"
                        draggable={false}
                      />
                    </motion.div>

                    {/* Default: title + price */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-6"
                      animate={{ opacity: hovered ? 0 : 1, y: hovered ? 8 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[#0D9488] text-xs font-bold uppercase tracking-[0.15em] mb-1">{item.badge}</p>
                      <h3 className="text-[#1A3A36] text-2xl font-black tracking-tight">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-0.5 font-medium">{item.price}</p>
                    </motion.div>

                    {/* Hover: summary + specs + CTA */}
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-white/95 via-white/80 to-transparent"
                      animate={{ opacity: hovered ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="text-[#14B8A6] text-xs font-bold uppercase tracking-[0.15em] mb-1.5">{item.badge}</p>
                      <h3 className="text-[#1A3A36] text-2xl font-black tracking-tight mb-2">{item.title}</h3>
                      <p className="text-[#1A3A36]/70 text-sm leading-relaxed mb-5 line-clamp-2">{item.summary}</p>
                      <div className="flex gap-4 mb-5">
                        {item.features.slice(0, 2).map((f, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                            <span className="text-[#1A3A36]/80 text-xs font-medium">{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#1A3A36] text-xl font-black">{item.price}</p>
                          <p className="text-[#1A3A36]/50 text-xs">from {item.monthlyEMI}/mo</p>
                        </div>
                        <motion.div
                          animate={{ x: hovered ? 0 : 4, opacity: hovered ? 1 : 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex items-center gap-2 bg-[#0D9488] text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg shadow-[#0D9488]/40"
                        >
                          Explore <ArrowRight className="w-3.5 h-3.5" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Compare CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowComparison(true)}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white border border-[#0D9488]/30 text-[#0D9488] rounded-full font-bold text-sm shadow-md hover:shadow-lg hover:bg-[#0D9488] hover:text-white hover:border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2"
          >
            <Star className="w-4 h-4" />
            Compare All Models
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.8 }}
              className="bg-white w-full sm:rounded-3xl sm:max-w-4xl max-h-[95dvh] overflow-y-auto shadow-2xl relative rounded-t-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-5 left-5 z-20">
                <span className={`${selectedItem.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow`}>
                  {selectedItem.badge}
                </span>
              </div>

              {/* Hero */}
              <div className="relative bg-white rounded-t-3xl overflow-hidden">
                {/* Image */}
                <div className="flex items-center justify-center bg-gray-50 h-56 sm:h-72 px-6 pt-14 pb-4">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="h-full w-full object-contain object-center"
                    draggable={false}
                  />
                </div>
                {/* Title + price strip */}
                <div className="px-6 sm:px-10 py-5 border-b border-gray-100">
                  <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-2xl sm:text-3xl font-black text-[#1A3A36] tracking-tight">
                    {selectedItem.title}
                  </motion.h2>
                  <div className="flex items-baseline gap-3 mt-1">
                    <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="text-2xl font-black text-[#0D9488]">
                      {selectedItem.price}
                    </motion.p>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-400 text-sm">
                      Starting from {selectedItem.monthlyEMI}/month
                    </motion.p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <p className="text-gray-500 text-base leading-relaxed mb-8">{selectedItem.summary}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-black text-[#1A3A36] mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#0D9488]" /> Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedItem.features.map((feature, idx) => (
                      <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * idx }} className="flex items-center gap-3 p-3.5 bg-[#F0FDFA] rounded-xl border border-[#0D9488]/10">
                        <div className="w-8 h-8 rounded-lg bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-black text-[#1A3A36] mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#0D9488]" /> Technical Specs
                  </h3>
                  <div className="rounded-2xl overflow-hidden border border-gray-100">
                    {Object.entries(selectedItem.specs).map(([key, value], idx) => (
                      <div key={key} className={`flex justify-between items-center px-5 py-3.5 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}`}>
                        <span className="text-gray-500 text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-[#1A3A36] font-bold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className="flex-1 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-[#0D9488]/25 hover:shadow-[#0D9488]/40 transition-shadow focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2">
                    Book {selectedItem.title} Now
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} onClick={() => setSelectedItem(null)} className="flex-1 border-2 border-[#0D9488] text-[#0D9488] py-4 rounded-2xl font-bold text-base hover:bg-[#0D9488] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2">
                    Schedule Test Ride
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowComparison(false)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="bg-white rounded-3xl w-full max-w-6xl max-h-[90dvh] flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-shrink-0 bg-gradient-to-r from-[#0F2520] to-[#1A3A36] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
                <div>
                  <p className="text-[#14B8A6] text-xs font-bold uppercase tracking-widest mb-0.5">Side by Side</p>
                  <h2 className="text-xl sm:text-2xl font-black">Compare All Models</h2>
                </div>
                <button onClick={() => setShowComparison(false)} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Close comparison">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto overscroll-contain">
                <table className="w-full min-w-[560px]">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="sticky left-0 bg-white px-5 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider w-[140px] shadow-[2px_0_8px_rgba(0,0,0,0.04)]">Spec</th>
                      {items.map((item) => (
                        <th key={item.id} className="px-5 py-4 text-center min-w-[180px]" scope="col">
                          <div className="font-black text-[#1A3A36] text-base">{item.title}</div>
                          <div className="text-[#0D9488] font-black text-lg mt-0.5">{item.price}</div>
                          <span className={`inline-block mt-1.5 ${item.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>{item.badge}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: 'Monthly EMI', fn: (item) => `From ${item.monthlyEMI}` },
                      { label: 'Motor',       fn: (item) => item.specs.motor },
                      { label: 'Battery',     fn: (item) => item.specs.battery },
                      { label: 'Range',       fn: (item) => item.features.find(f => f.includes('km range')) || 'N/A' },
                      { label: 'Top Speed',   fn: (item) => item.features.find(f => f.includes('top speed')) || 'N/A' },
                      { label: 'Charging',    fn: (item) => item.specs.chargingTime },
                      { label: 'Weight',      fn: (item) => item.specs.weight },
                      { label: 'Load',        fn: (item) => item.specs.loadCapacity },
                      { label: 'Brakes',      fn: (item) => item.specs.brakes },
                      { label: 'Warranty',    fn: (item) => item.features.find(f => f.includes('warranty')) || 'N/A' },
                      { label: 'Free Services', fn: (item) => item.features.find(f => f.includes('free service')) || 'N/A' },
                      { label: 'Smart Tech',  fn: (item) => item.features.some(f => f.match(/Smart|GPS|AI|Cloud/i)) ? <span className="text-[#0D9488] font-bold">Yes</span> : <span className="text-gray-400">Basic</span> },
                    ].map(({ label, fn }, rowIdx) => (
                      <tr key={label} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="sticky left-0 bg-inherit px-5 py-3.5 text-gray-500 text-sm font-semibold shadow-[2px_0_8px_rgba(0,0,0,0.04)]">{label}</td>
                        {items.map((item) => (
                          <td key={item.id} className="px-5 py-3.5 text-center text-sm text-gray-700">{fn(item)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex-shrink-0 border-t border-gray-100 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white">
                <p className="text-xs text-gray-400">Swipe horizontally to see all specs on mobile.</p>
                <div className="flex gap-3">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-6 py-2.5 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-[#0D9488]/30 transition-shadow">
                    Book a Test Ride
                  </motion.button>
                  <button onClick={() => setShowComparison(false)} className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:border-[#0D9488] hover:text-[#0D9488] transition-all">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ModelsCarousel;
