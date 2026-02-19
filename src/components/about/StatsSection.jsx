const StatsSection = () => {
  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: '😊' },
    { number: '15+', label: 'Cities Covered', icon: '🏙️' },
    { number: '100+', label: 'Service Centers', icon: '🔧' },
    { number: '5M+', label: 'Kilometers Traveled', icon: '🛣️' },
    { number: '12K+', label: 'Tons CO₂ Saved', icon: '🌱' },
    { number: '98%', label: 'Customer Satisfaction', icon: '⭐' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-dark-main to-dark-soft text-text-dark-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-white">
            Making a real difference in sustainable mobility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                {stat.number}
              </div>
              <div className="text-lg text-muted-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
