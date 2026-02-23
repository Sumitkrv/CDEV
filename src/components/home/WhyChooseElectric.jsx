import { motion } from 'framer-motion';
import { Zap, Wrench, Leaf, Battery } from 'lucide-react';

const WhyChooseElectric = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Save More, Spend Less",
      description: "No petrol bills. Minimal servicing costs. Charging costs significantly less than daily fuel refills.",
      color: "from-[#0D9488] to-[#14B8A6]"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Low Maintenance",
      description: "Fewer moving parts mean fewer breakdowns. Less time in service centers, more time on the road.",
      color: "from-[#0D9488] to-[#14B8A6]"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Choice",
      description: "Zero tailpipe emissions. A smarter ride that supports cleaner cities and a greener tomorrow.",
      color: "from-[#0D9488] to-[#14B8A6]"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Simple Charging",
      description: "Charge at home or workplace. No long fuel queues. No waiting for daily refills.",
      color: "from-[#0D9488] to-[#14B8A6]"
    }
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDFA] via-white to-[#F0FDFA]" />
      
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold rounded-full mb-6">
            WHY CHOOSE ELECTRIC
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Smarter Way to
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
              Navigate Your City
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Experience the fusion of efficiency, sustainability, and performance in every ride.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1A3A36] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseElectric;
