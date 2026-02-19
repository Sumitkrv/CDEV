import { Leaf, Droplet, TreePine, CheckCircle } from 'lucide-react';

const Sustainability = () => {
  const stats = [
    { icon: Droplet, value: '5M+', label: 'Liters of Fuel Saved', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Leaf, value: '12K+', label: 'Tons CO₂ Reduced', gradient: 'from-green-500 to-emerald-600' },
    { icon: TreePine, value: '50K+', label: 'Trees Equivalent', gradient: 'from-emerald-600 to-teal-600' },
  ];

  const initiatives = [
    '100% recyclable battery components with responsible disposal programs',
    'Carbon-neutral manufacturing facilities powered by renewable energy',
    'Partnership with environmental organizations for tree plantation drives',
    'Sustainable packaging materials and eco-friendly delivery methods'
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-6 mx-auto">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A3A36]">
              Commitment to Sustainability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every ride with CDEV is a step towards a greener planet and cleaner cities
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#1A3A36] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Initiatives Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-[#1A3A36] flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </span>
              Our Green Initiatives
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">{initiative}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
