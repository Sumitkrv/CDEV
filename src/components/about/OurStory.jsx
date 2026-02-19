import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Header with vertical text */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Vertical Label */}
              <div className="hidden lg:block absolute -left-8 top-0 bottom-0">
                <div className="sticky top-32 h-fit">
                  <span className="text-xs font-semibold text-gray-400 tracking-widest [writing-mode:vertical-lr] rotate-180">
                    CDEV — EST. 2020
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none">
                  Our
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
                    Story
                  </span>
                </h2>
              </div>

              {/* Subheading */}
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1A3A36] mb-6">
                CD EV started with one clear belief
                <br />— sustainable mobility should be practical and accessible.
              </h3>

              {/* Description */}
              <div className="space-y-5 text-gray-600 leading-relaxed max-w-xl">
                <p className="text-lg md:text-xl">
                  We saw rising pollution, growing cities, and daily commuters needing better solutions.
                </p>
                <p className="text-base">
                  So we built:
                  <ul className="list-disc pl-6 mt-2">
                    <li>EVs designed for Indian roads</li>
                    <li>Affordable ownership models</li>
                    <li>Reliable everyday performance</li>
                  </ul>
                </p>
                <p className="text-lg font-semibold text-[#0D9488] pt-2">
                  What began as a vision is now a movement toward smarter commuting.
                </p>
              </div>

              {/* Stats removed as requested */}
            </motion.div>

            {/* Right Side - Image Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image */}
                <div className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
                    alt="CDEV Scooter in Nature"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium opacity-90">Where innovation meets nature</p>
                  </div>
                </div>

                {/* Certificate Badge */}
                <div className="relative h-[250px] rounded-3xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] p-8 flex flex-col items-center justify-center shadow-xl group hover:shadow-2xl transition-all">
                  <div className="w-28 h-28 rounded-full border-4 border-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-center">
                      <svg className="w-14 h-14 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-white text-center">
                    <p className="text-sm font-bold mb-1">ECO CERTIFIED</p>
                    <p className="text-xs opacity-90">Carbon Neutral</p>
                  </div>
                </div>

                {/* Small Image */}
                <div className="relative h-[250px] rounded-3xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80" 
                    alt="Engineering Excellence"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0D9488]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#14B8A6]/10 rounded-full blur-3xl" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
