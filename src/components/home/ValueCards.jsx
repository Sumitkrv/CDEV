import { Star, Lightbulb, HeartHandshake, Leaf } from 'lucide-react';

const ValueCards = () => {
  const values = [
    {
      title: 'Sustainable Commitment',
      icon: Leaf,
      description: 'Driving zero-emission mobility to create cleaner cities and a greener tomorrow.',
      accent: 'from-green-50 to-lime-50',
      iconBg: 'bg-green-500',
      borderAccent: 'group-hover:border-green-200'
    },
    {
      title: 'Dedicated Support',
      icon: HeartHandshake,
      description: 'Reliable customer assistance and service support at every step of your journey.',
      accent: 'from-emerald-50 to-teal-50',
      iconBg: 'bg-emerald-500',
      borderAccent: 'group-hover:border-emerald-200'
    },
    {
      title: 'Smart Innovation',
      icon: Lightbulb,
      description: 'Advanced EV technology designed for efficient, smooth, and intelligent performance.',
      accent: 'from-amber-50 to-orange-50',
      iconBg: 'bg-amber-500',
      borderAccent: 'group-hover:border-amber-200'
    },
    {
      title: 'Premium Build Quality',
      icon: Star,
      description: 'Engineered with high-quality materials for durability, safety, and long-lasting reliability.',
      accent: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-blue-500',
      borderAccent: 'group-hover:border-blue-200'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDFA] via-white to-[#F0FDFA]" />
      
      <div className="container relative mx-auto px-4 z-10">
        {/* Premium heading with accent */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
            Our Core Values
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            The
            <span className="inline-block mx-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
              Excellence
            </span>
            We Deliver
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Engineering excellence meets sustainable innovation for the modern world.
          </p>
        </div>

        {/* Unique asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative h-full bg-white/70 backdrop-blur-md rounded-[2.5rem] p-10
                              border border-[#F0FDFA] hover:border-[#0D9488]/30
                              shadow-2xl shadow-gray-200/50 hover:shadow-[#0D9488]/10
                              transition-all duration-500 ease-out
                              hover:-translate-y-2">
                  
                  <div className="flex flex-col items-start text-left space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <IconComponent className="w-8 h-8" strokeWidth={2.5} />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0D9488] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;