import { useState } from 'react';

const SpecsAccordion = ({ model }) => {
  const [openSection, setOpenSection] = useState('performance');

  const specs = {
    performance: {
      title: 'Performance',
      icon: '⚡',
      items: [
        { label: 'Top Speed', value: model?.topSpeed || '75 km/h' },
        { label: 'Range', value: model?.range || '120 km' },
        { label: 'Acceleration (0-40 km/h)', value: model?.acceleration || '4.5 seconds' },
        { label: 'Motor Power', value: model?.motorPower || '3000W' },
        { label: 'Torque', value: model?.torque || '95 Nm' }
      ]
    },
    battery: {
      title: 'Battery & Charging',
      icon: '🔋',
      items: [
        { label: 'Battery Capacity', value: model?.battery || '3.5 kWh' },
        { label: 'Battery Type', value: model?.batteryType || 'Lithium-ion' },
        { label: 'Charging Time (0-80%)', value: model?.chargingTime || '2 hours' },
        { label: 'Full Charge Time', value: model?.fullCharge || '3 hours' },
        { label: 'Charger Type', value: model?.chargerType || 'Fast Charger Included' }
      ]
    },
    dimensions: {
      title: 'Dimensions & Weight',
      icon: '📏',
      items: [
        { label: 'Length', value: model?.length || '1850 mm' },
        { label: 'Width', value: model?.width || '700 mm' },
        { label: 'Height', value: model?.height || '1150 mm' },
        { label: 'Weight', value: model?.weight || '95 kg' },
        { label: 'Load Capacity', value: model?.loadCapacity || '150 kg' }
      ]
    },
    features: {
      title: 'Features',
      icon: '⭐',
      items: [
        { label: 'Display', value: model?.display || 'Digital LCD' },
        { label: 'Connectivity', value: model?.connectivity || 'Bluetooth, GPS' },
        { label: 'Lights', value: model?.lights || 'LED Headlight & Tail light' },
        { label: 'Brakes', value: model?.brakes || 'Disc (Front & Rear)' },
        { label: 'Smart Features', value: model?.smartFeatures || 'Mobile App Integration' }
      ]
    }
  };

  return (
    <section className="py-16 bg-soft-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
              Detailed Specifications
            </h2>
            <p className="text-xl text-muted">
              Everything you need to know
            </p>
          </div>

          <div className="space-y-4">
            {Object.entries(specs).map(([key, section]) => (
              <div 
                key={key}
                className="bg-card-bg rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenSection(openSection === key ? null : key)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-soft-section transition"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{section.icon}</span>
                    <span className="font-bold text-xl">{section.title}</span>
                  </div>
                  <svg 
                    className={`w-6 h-6 transform transition-transform ${openSection === key ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSection === key && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, index) => (
                        <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                          <span className="text-muted">{item.label}</span>
                          <span className="font-semibold text-primary">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsAccordion;
