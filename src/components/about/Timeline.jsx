import React from 'react';
import { Shield, Eye, TrendingUp, Heart, Leaf } from 'lucide-react';

const Timeline = () => {
  const features = [
    {
      icon: Shield,
      title: "Built on Trust",
      description: "Every product and promise backed by accountability.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Eye,
      title: "Clarity in Approach",
      description: "Straightforward communication. No hidden surprises.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Long-Term Thinking",
      description: "Decisions driven by sustainability and stability.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Heart,
      title: "Customer-First Mindset",
      description: "Every experience designed around real needs.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Leaf,
      title: "Growing with Purpose",
      description: "Expanding thoughtfully, not aggressively.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0D9488]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#0D9488] rounded-full animate-pulse" />
            <span className="text-[#0D9488] text-sm font-semibold tracking-wide">
              WHY CHOOSE CD
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A36] mb-6 leading-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#0D9488]/70">
              CD
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Choosing CD means choosing a brand that values trust over trends.
            We are built on clarity, commitment, and consistency — delivering 
            solutions that are reliable, transparent, and future-focused.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#1A3A36] mb-2 group-hover:text-[#0D9488] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            ))}

            {/* Centered last item for odd number of features */}
            {features.length % 2 !== 0 && (
              <div className="hidden lg:block lg:col-span-3">
                <div className="flex justify-center">
                  <div className="w-1/3">
                    {/* This empty div helps center the last item */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA (optional - can be removed if not needed) */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span className="w-1 h-1 bg-[#0D9488] rounded-full" />
            <span>Built on transparency and trust</span>
            <span className="w-1 h-1 bg-[#0D9488] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;