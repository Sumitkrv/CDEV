const Locations = () => {
  const cities = [
    {
      name: 'Mumbai',
      branches: '15 Branches',
      phone: '+91 22-1234-5678',
      icon: '🏙️'
    },
    {
      name: 'Delhi',
      branches: '12 Branches',
      phone: '+91 11-1234-5678',
      icon: '🏛️'
    },
    {
      name: 'Bangalore',
      branches: '10 Branches',
      phone: '+91 80-1234-5678',
      icon: '🌆'
    },
    {
      name: 'Pune',
      branches: '8 Branches',
      phone: '+91 20-1234-5678',
      icon: '🏘️'
    },
    {
      name: 'Hyderabad',
      branches: '7 Branches',
      phone: '+91 40-1234-5678',
      icon: '🌇'
    },
    {
      name: 'Chennai',
      branches: '6 Branches',
      phone: '+91 44-1234-5678',
      icon: '🏢'
    }
  ];

  return (
    <section className="py-16 bg-card-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-muted">
            Find us in major cities across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-primary-soft to-card-bg p-6 rounded-xl border-2 border-primary-soft hover:border-primary transition"
            >
              <div className="text-5xl mb-3">{city.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
              <p className="text-muted mb-1">{city.branches}</p>
              <p className="text-primary font-semibold">{city.phone}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted mb-4">
            Can't find a location near you?
          </p>
          <button className="bg-primary text-text-dark-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition">
            Request New Location
          </button>
        </div>
      </div>
    </section>
  );
};

export default Locations;
