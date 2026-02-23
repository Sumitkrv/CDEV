import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  DollarSign, 
  Zap, 
  Wrench
} from 'lucide-react';

const WhyEV = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Save More, Spend Less',
      description: 'No petrol bills. Minimal servicing costs.\nCharging costs significantly less than daily fuel refills.',
      position: 'top-right'
    },
    {
      icon: Wrench,
      title: 'Low Maintenance',
      description: 'Fewer moving parts mean fewer breakdowns.\nLess time in service centers, more time on the road.',
      position: 'bottom-right'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Choice',
      description: 'Zero tailpipe emissions.\nA smarter ride that supports cleaner cities.',
      position: 'top-left'
    },
    {
      icon: Zap,
      title: 'Simple Charging',
      description: 'Charge at home or workplace.\nNo long fuel queues. No waiting.',
      position: 'bottom-left'
    },
    {
      icon: Wrench,
      title: 'Dedicated Support',
      description: 'Reliable customer assistance and service support at every step of your journey.',
      position: 'support'
    },
    {
      icon: Zap,
      title: 'Smart Innovation',
      description: 'Advanced EV technology designed for efficient, smooth, and intelligent performance.',
      position: 'innovation'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDFA] via-white to-[#F0FDFA]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
            Benefits
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Why Choose
            <span className="inline-block mx-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
              Electric?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Join the revolution of smarter, cleaner, and more affordable urban mobility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/70 backdrop-blur-sm p-10 rounded-[2.5rem] border border-[#F0FDFA] hover:border-[#0D9488]/30 hover:shadow-2xl hover:shadow-[#0D9488]/10 transition-all duration-500 overflow-hidden"
            >
              {/* Card Background Accent */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#0D9488]/5 rounded-full blur-2xl group-hover:bg-[#0D9488]/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0D9488]/10 text-[#0D9488] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0D9488] group-hover:text-white group-hover:rotate-6">
                  {benefit.icon && React.createElement(benefit.icon, { className: "h-8 w-8", strokeWidth: 2.5 })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0D9488] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEV;