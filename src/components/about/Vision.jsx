import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Lightbulb, Heart, Sparkles } from 'lucide-react';

const Vision = () => {
  const visionCards = [
    {
      icon: Globe,
      title: 'Planet First',
      description: 'Committed to reducing emissions through zero-pollution mobility. Building solutions that protect our cities and future generations.'
    },
    {
      icon: Lightbulb,
      title: 'Tech Driven',
      description: 'Advancing smart battery systems and efficient EV performance. Creating reliable, future-ready technology for everyday riders.'
    },
    {
      icon: Heart,
      title: 'You Matter',
      description: 'Designed around comfort, safety, and affordability. Focused on delivering trust in every ride.'
    },
  ];

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1EE3B5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1EE3B5]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#1EE3B5]/10 px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4 text-[#1EE3B5]" />
            <span className="text-sm font-medium text-[#132F39]">Our Vision</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#132F39] mb-6">
            Driving Towards a <span className="text-[#1EE3B5]">Sustainable</span> Future
          </h2>

          <p className="text-gray-600 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            We envision a future where clean, intelligent, and accessible mobility powers every city. A future where sustainability and innovation move together — creating smarter infrastructure, and long-term economic value.
          </p>
        </motion.div>

        {/* Vision Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#1EE3B5]/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#1EE3B5]/10 transition-all duration-300 group-hover:bg-[#1EE3B5]/20 group-hover:scale-110">
                <card.icon className="h-7 w-7 text-[#1EE3B5]" strokeWidth={2} />
              </div>
              {/* Content */}
              <h3 className="text-xl font-bold text-[#132F39] mb-3 group-hover:text-[#1EE3B5] transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#1EE3B5] to-[#0FB9A6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats/Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
