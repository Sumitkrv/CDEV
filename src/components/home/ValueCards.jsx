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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-dark-main via-dark-soft to-dark-main overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      
      {/* Subtle geometric accent */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        {/* Premium heading with accent */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Our Quality
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 tracking-tight leading-tight">
            What We Have For You
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Engineering excellence meets sustainable innovation
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <div className="w-16 h-px bg-gradient-to-r from-gray-600 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <div className="w-16 h-px bg-gradient-to-l from-gray-600 to-transparent" />
          </div>
        </div>

        {/* Unique asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`group relative ${index % 2 === 0 ? '' : 'md:mt-6'}`}
              >
                {/* Sophisticated card design */}
                <div className="relative h-full bg-white rounded-3xl p-8
                              border border-gray-200 hover:border-blue-400/30
                              shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] 
                              hover:shadow-[0_20px_40px_-8px_rgba(59,130,246,0.10)]
                              transition-all duration-500 ease-out
                              hover:-translate-y-2">
                  
                  <div className="flex flex-col items-start text-left space-y-5">
                    
                    {/* Unique icon design */}
                    <div className="relative">
                      {/* Background accent */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-400/5 rounded-2xl 
                                     transform scale-110 opacity-0 group-hover:opacity-100 blur-xl
                                     transition-all duration-500`} />
                      
                      {/* Icon container */}
                      <div className={`relative w-14 h-14 rounded-2xl 
                                         bg-gradient-to-br from-blue-50 to-blue-100
                                         flex items-center justify-center
                                         border border-gray-200
                                         group-hover:scale-110 group-hover:rotate-3
                                         transition-all duration-500 ease-out
                                         shadow-sm`}>
                            <IconComponent className="w-6 h-6 text-blue-500" strokeWidth={2} />
                          </div>
                      
                      {/* Floating badge */}
                      <div className={`absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full 
                                     opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                     shadow-lg`} />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight 
                                   group-hover:text-blue-500 transition-colors duration-300">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-700 text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Unique footer element */}
                    <div className="w-full pt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-gray-200 group-hover:bg-blue-100 transition-colors duration-300" />
                        <div className={`w-1.5 h-1.5 rounded-full bg-blue-400 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle background card for depth */}
                <div className="absolute inset-0 bg-blue-50 rounded-3xl -z-10 
                              transform translate-x-2 translate-y-2 
                              opacity-0 group-hover:opacity-30 
                              transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;