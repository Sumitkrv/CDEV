import PageHero from '../components/common/PageHero';
import ServiceCard from '../components/services/ServiceCard';
import ServiceProcess from '../components/services/ServiceProcess';
import CTASection from '../components/common/CTASection';

const Services = () => {
  const services = [
    {
      icon: '🔧',
      title: 'Regular Maintenance',
      description: 'Comprehensive periodic maintenance to keep your scooter running at peak performance with genuine parts and expert technicians.'
    },
    {
      icon: '🔋',
      title: 'Battery Service',
      description: 'Battery health checks, optimization, and replacement services with extended warranty options for your peace of mind.'
    },
    {
      icon: '🚗',
      title: 'Doorstep Service',
      description: 'Convenient pickup and drop service for routine maintenance. Book online and we handle the rest at your preferred time.'
    },
    {
      icon: '⚡',
      title: 'Fast Repairs',
      description: 'Quick turnaround time for repairs with transparent pricing. Most repairs completed within 24 hours.'
    },
    {
      icon: '📱',
      title: 'Software Updates',
      description: 'Over-the-air software updates and smart feature upgrades to keep your scooter always up-to-date with latest features.'
    },
    {
      icon: '🛡️',
      title: 'Extended Warranty',
      description: 'Flexible extended warranty plans covering battery, motor, and all major components with cashless claims.'
    }
  ];

  return (
    <div>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive care for your electric scooter"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to emergency repairs, we've got you covered with our comprehensive service offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Service Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Genuine parts guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Certified technicians</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 roadside assistance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Need Service?</h3>
                <p className="text-gray-700 mb-6">
                  Book your service online or call our helpline. Our customer support team is available to assist you.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Book Service Online
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                    Call: 1800-123-4567
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Service or Support?"
        subtitle="Our expert team is ready to help you"
        buttonText="Book Service"
      />
    </div>
  );
};

export default Services;
