const ServiceProcess = () => {
  const steps = [
    {
      number: '1',
      title: 'Book Online',
      description: 'Schedule your service through our app or website'
    },
    {
      number: '2',
      title: 'Pickup',
      description: 'We collect your scooter from your doorstep'
    },
    {
      number: '3',
      title: 'Service',
      description: 'Expert technicians perform thorough maintenance'
    },
    {
      number: '4',
      title: 'Delivery',
      description: 'Your scooter is delivered back fully serviced'
    }
  ];

  return (
    <section className="py-16 bg-soft-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted">
            Simple and hassle-free service process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card-bg p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary text-text-dark-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 text-primary text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
