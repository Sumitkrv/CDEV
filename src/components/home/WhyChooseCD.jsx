import { motion } from 'framer-motion';
import { Shield, Eye, TrendingUp, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Built on Trust',
    description: 'Every product and promise backed by accountability.',
  },
  {
    icon: Eye,
    title: 'Clarity in Approach',
    description: 'Straightforward communication. No hidden surprises.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Thinking',
    description: 'Decisions driven by sustainability and stability.',
  },
  {
    icon: Heart,
    title: 'Customer-First Mindset',
    description: 'Every experience designed around real needs.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const WhyChooseCD = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0D9488]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0D9488]/15 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F0FDFA] blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#F0FDFA] blur-3xl opacity-70" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/20 text-[#0D9488] text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            WHY CHOOSE CD
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1A3A36] mb-6 leading-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
              CD
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Choosing CD means choosing a brand that values trust over trends.
            Built on clarity, commitment, and consistency — delivering solutions
            that are reliable, transparent, and future-focused.
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(13,148,136,0.12)] hover:border-[#0D9488]/20 transition-all duration-300 flex flex-col"
            >
              {/* Teal glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0D9488]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#0D9488]/20 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-6 h-6" strokeWidth={2} />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-[#1A3A36] mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {pillar.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Divider tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <span className="inline-flex items-center gap-3 text-sm text-gray-400 tracking-wide">
            <span className="w-8 h-px bg-gray-200" />
            Built on transparency and trust
            <span className="w-8 h-px bg-gray-200" />
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseCD;
