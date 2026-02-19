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
    <section className="relative bg-gradient-to-b from-dark-main via-dark-soft to-dark-main py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            Why Choose <span className="text-blue-400">Electric?</span>
          </h2>
          <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto">
            The smarter, cleaner, and more affordable way to move.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-12 gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-4"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
                    {React.createElement(benefits[0].icon, { className: "h-6 w-6 text-blue-500", strokeWidth: 2 })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefits[0].title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {benefits[0].description}
                  </p>
                </div>
              </motion.div>

              <div className="col-span-4 row-span-2 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative w-full"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                      alt="Electric Scooter"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-transparent to-blue-400/10" />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-4"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
                    {React.createElement(benefits[1].icon, { className: "h-6 w-6 text-blue-500", strokeWidth: 2 })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefits[1].title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {benefits[1].description}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-4"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
                    {React.createElement(benefits[2].icon, { className: "h-6 w-6 text-blue-500", strokeWidth: 2 })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefits[2].title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {benefits[2].description}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-4"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
                    {React.createElement(benefits[3].icon, { className: "h-6 w-6 text-blue-500", strokeWidth: 2 })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefits[3].title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {benefits[3].description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full mb-12"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Electric Scooter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#132F39]/20 via-transparent to-[#1EE3B5]/10" />
              </div>
            </motion.div>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full mb-8"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
                    <benefit.icon className="h-6 w-6 text-blue-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 lg:mt-16"
          >
            <Link to="/faq">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-blue-400 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-500 transition-all duration-300"
              >
                Get a FREE quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyEV;