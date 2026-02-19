import { motion } from 'framer-motion';
import { Zap, Target, Leaf, Globe } from 'lucide-react';

const OurMission = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image Grid (Opposite side now) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative lg:order-1 order-2"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Small Image Top */}
                <div className="relative h-[250px] rounded-3xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=600&q=80" 
                    alt="Clean Energy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Mission Icon */}
                <div className="relative h-[250px] rounded-3xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] p-8 flex flex-col items-center justify-center shadow-xl text-white group hover:shadow-2xl transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Target className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform relative z-10" strokeWidth={1.5} />
                  <h4 className="text-2xl font-bold text-center relative z-10">Our Goal</h4>
                  <p className="text-sm text-center mt-2 opacity-90 relative z-10">Carbon-free<br/>by 2030</p>
                </div>

                {/* Large Image Bottom */}
                <div className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" 
                    alt="Sustainable Future"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium opacity-90">Building tomorrow's transportation, today</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#14B8A6]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0D9488]/10 rounded-full blur-3xl" />
            </motion.div>

            {/* Right Side - Content (Opposite side now) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative lg:order-2 order-1"
            >
              {/* Vertical Label */}
              <div className="hidden lg:block absolute -right-8 top-0 bottom-0">
                <div className="sticky top-32 h-fit">
                  <span className="text-xs font-semibold text-gray-400 tracking-widest [writing-mode:vertical-lr]">
                    MISSION DRIVEN
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none">
                  Our
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#0D9488]">
                    Mission
                  </span>
                </h2>
              </div>

              {/* Subheading */}
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1A3A36] mb-6">
                We are committed to transforming how India moves.
              </h3>

              {/* Description */}
              <div className="space-y-5 text-gray-600 leading-relaxed max-w-xl">
                <p className="text-lg md:text-xl">
                  Our goal is to make electric mobility a natural, everyday choice — not an alternative.
                </p>
                <p className="text-base">
                  To accelerate India’s electric shift with:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Reliable and efficient EV technology</li>
                    <li>Transparent ownership experience</li>
                    <li>Rider-first design and service</li>
                  </ul>
                </p>
              </div>

              {/* Mission Points and CTA removed as requested */}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
