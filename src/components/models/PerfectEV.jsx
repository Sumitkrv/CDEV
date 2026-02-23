import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Battery, Clock, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const PerfectEV = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/CD EV/CD_EV15533.jpg",
    "/2.png",
    "/3.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const specs = [
    {
      icon: <Gauge className="w-5 h-5" />,
      label: "Range",
      value: "90",
      unit: "km",
      color: "teal"
    },
    {
      icon: <Battery className="w-5 h-5" />,
      label: "Battery",
      value: "2.8",
      unit: "kWh",
      color: "emerald"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Charging",
      value: "3",
      unit: "Hours",
      color: "teal"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: "Warranty",
      value: "3",
      unit: "Years",
      color: "emerald"
    }
  ];

  const colorStyles = {
    teal: "bg-[#0D9488]/10 text-[#0D9488]",
    emerald: "bg-[#14B8A6]/10 text-[#14B8A6]",
    amber: "bg-amber-50 text-amber-600",
    purple: "bg-purple-50 text-purple-600"
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#F0FDFA] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#F0FDFA] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-px w-8 bg-[#0D9488]/30" />
            <span className="text-[#0D9488] font-bold tracking-[0.2em] text-xs uppercase">Future of Mobility</span>
            <span className="h-px w-8 bg-[#0D9488]/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#1A3A36] mb-6 tracking-tight"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">Perfect EV</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the harmony of modern design and reliable performance — meticulously engineered for Indian roads.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
            
            {/* Left Column: Premium Spec Cards (Charging & Warranty) */}
            <div className="flex flex-col gap-6 w-full lg:w-72 order-2 lg:order-1">
              {specs.slice(2, 4).map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500"
                >
                  <div className={`w-14 h-14 ${colorStyles[spec.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {spec.icon}
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-2">{spec.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-gray-900 tracking-tight">{spec.value}</span>
                    <span className="text-base font-bold text-gray-500">{spec.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Column: Product Showcase */}
            <div className="flex-1 relative order-1 lg:order-2 flex flex-col items-center">
              {/* Product Navigation */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4 lg:-px-20 z-20">
                <button 
                  onClick={prevImage}
                  className="w-14 h-14 rounded-full bg-white/80 backdrop-blur shadow-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:scale-110 transition-all pointer-events-auto border border-gray-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-14 h-14 rounded-full bg-white/80 backdrop-blur shadow-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:scale-110 transition-all pointer-events-auto border border-gray-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Vehicle Presentation */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group w-full max-w-2xl px-12"
              >
                {/* Visual "Stage" */}
                <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[80%] h-12 bg-gray-900/5 blur-3xl rounded-full" />
                
                <img 
                  src={images[currentImageIndex]} 
                  alt="INZOEV S1" 
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 group-hover:scale-[1.02]"
                />
              </motion.div>

              {/* Product Information */}
              <div className="text-center mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3 tracking-tighter italic">INZOEV S1</h3>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-black text-[#0D9488] tracking-tighter">₹69,999</span>
                      <span className="h-6 w-px bg-gray-200" />
                      <div className="text-left">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Low EMI</p>
                        <p className="text-sm font-bold text-[#1A3A36] leading-none">₹2,499/mo</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Primary Actions */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center gap-4 mt-10"
                >
                  <button className="w-full sm:w-auto px-12 py-5 bg-[#1A3A36] text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#0D9488] shadow-2xl hover:shadow-[#0D9488]/30 transition-all duration-500 transform hover:-translate-y-1">
                    Book Now
                  </button>
                  <button className="w-full sm:w-auto px-12 py-5 bg-white text-[#1A3A36] font-black text-sm uppercase tracking-widest rounded-full border border-gray-100 hover:border-[#0D9488]/30 shadow-lg hover:shadow-[#0D9488]/5 transition-all duration-500 flex items-center justify-center gap-3 group">
                    Explore Details
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Premium Spec Cards (Range & Battery) */}
            <div className="flex flex-col gap-6 w-full lg:w-72 order-3">
              {specs.slice(0, 2).map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500"
                >
                  <div className={`w-14 h-14 ${colorStyles[spec.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {spec.icon}
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-2">{spec.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-gray-900 tracking-tight">{spec.value}</span>
                    <span className="text-base font-bold text-gray-500">{spec.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectEV;
