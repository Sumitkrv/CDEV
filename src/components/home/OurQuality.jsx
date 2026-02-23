import { motion } from 'framer-motion';
import { Leaf, Headphones, Lightbulb, Shield } from 'lucide-react';

const OurQuality = () => {
  const qualities = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Commitment",
      description: "Driving zero-emission mobility to create cleaner cities and a greener tomorrow for future generations.",
      gradient: "from-[#0D9488] to-[#14B8A6]"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Reliable customer assistance and service support at every step of your maintenance journey.",
      gradient: "from-[#0D9488] to-[#14B8A6]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Smart Innovation",
      description: "Advanced EV technology designed for efficient, smooth, and intelligent city performance.",
      gradient: "from-[#0D9488] to-[#14B8A6]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Build Quality",
      description: "Engineered with high-quality materials for durability, safety, and long-lasting reliability.",
      gradient: "from-[#0D9488] to-[#14B8A6]"
    }
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F0FDFA]/50 to-white" />
      
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
            Our Quality
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-6 leading-tight">
            Engineering
            <span className="inline-block mx-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
              Excellence
            </span>
            for Every Ride
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            What We Have For You — engineered with precision and built with purpose.
          </p>
        </motion.div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#F0FDFA] flex items-start gap-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${quality.gradient} flex-shrink-0 flex items-center justify-center text-white mb-6 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-emerald-500/20`}>
                  {quality.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A3A36] mb-3">
                    {quality.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurQuality;
