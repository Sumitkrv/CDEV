const CompareTable = () => {
  const models = [
    {
      name: 'City Cruiser',
      price: '₹89,999',
      range: '80 km',
      topSpeed: '45 km/h',
      chargingTime: '4 hours',
      battery: '2.5 kWh',
      warranty: '3 years',
      features: ['Basic Display', 'USB Charging', 'LED Lights']
    },
    {
      name: 'Sport Pro',
      price: '₹1,24,999',
      range: '120 km',
      topSpeed: '75 km/h',
      chargingTime: '3 hours',
      battery: '3.5 kWh',
      warranty: '5 years',
      features: ['Digital Display', 'Smart Connectivity', 'Fast Charging', 'GPS Tracking']
    },
    {
      name: 'Premium Elite',
      price: '₹1,49,999',
      range: '150 km',
      topSpeed: '85 km/h',
      chargingTime: '2.5 hours',
      battery: '4.5 kWh',
      warranty: '5 years',
      features: ['Touchscreen', 'AI Assistant', 'Premium Sound', 'Auto Pilot', 'Cloud Storage']
    }
  ];

  return (
    <section className="py-16 bg-card-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
            Compare Models
          </h2>
          <p className="text-xl text-muted">
            Find the perfect scooter for your needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-6xl mx-auto bg-card-bg shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-dark-main to-dark-soft text-text-dark-white">
              <tr>
                <th className="px-6 py-4 text-left">Feature</th>
                {models.map((model, index) => (
                  <th key={index} className="px-6 py-4 text-center">{model.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-soft-section">
                <td className="px-6 py-4 font-semibold">Price</td>
                {models.map((model, index) => (
                  <td key={index} className="px-6 py-4 text-center text-primary font-bold">{model.price}</td>
                ))}
              </tr>
              <tr className="border-b hover:bg-soft-section">
                <td className="px-6 py-4 font-semibold">Range</td>
                {models.map((model, index) => (
                  <td key={index} className="px-6 py-4 text-center">{model.range}</td>
                ))}
              </tr>
              <tr className="border-b hover:bg-soft-section">
                <td className="px-6 py-4 font-semibold">Top Speed</td>
                {models.map((model, index) => (
                  <td key={index} className="px-6 py-4 text-center">{model.topSpeed}</td>
                ))}
              </tr>
              <tr className="border-b hover:bg-soft-section">
                <td className="px-6 py-4 font-semibold">Charging Time</td>
                {models.map((model, index) => (
                  <td key={index} className="px-6 py-4 text-center">{model.chargingTime}</td>
                ))}
              </tr>
              <tr className="border-b hover:bg-soft-section">
                <td className="px-6 py-4 font-semibold">Battery</td>
                {models.map((model, index) => (
                  <td key={index} className="px-6 py-4 text-center">{model.battery}</td>
                ))}
              </tr>
              <tr className="border-b hover:bg-soft-section">
                <td className="px-6 py-4 font-semibold">Warranty</td>
                {models.map((model, index) => (
                  <td key={index} className="px-6 py-4 text-center">{model.warranty}</td>
                ))}
              </tr>
              <tr className="hover:bg-soft-section">
                <td className="px-6 py-4 font-semibold align-top">Key Features</td>
                {models.map((model, index) => (
                  <td key={index} className="px-6 py-4">
                    <ul className="text-sm space-y-1">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
