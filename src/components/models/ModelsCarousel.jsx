import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ModelsCarousel = ({
  heading = "Explore Our Models",
  items = [
    {
      id: "item-1",
      title: "City Cruiser",
      price: "₹89,999",
      monthlyEMI: "₹3,499",
      summary: "Perfect for daily commutes with 80km range and smart features. Eco-friendly urban mobility at its best.",
      image: "/CD_EV_compressed/scooter.jpg",
      badge: "Most Popular",
      badgeColor: "bg-blue-500",
      features: [
        "80 km range",
        "45 km/h top speed",
        "3 years warranty",
        "Free home charging kit",
        "Basic insurance included",
        "2 free services"
      ],
      specs: {
        motor: "2.5 kW BLDC Motor",
        battery: "2.5 kWh Li-ion",
        chargingTime: "4-5 hours",
        weight: "95 kg",
        loadCapacity: "150 kg",
        brakes: "Disc brakes (Front & Rear)"
      }
    },
    {
      id: "item-2",
      title: "Sport Pro",
      price: "₹1,24,999",
      monthlyEMI: "₹4,999",
      summary: "High-performance electric scooter with 120km range and 75 km/h top speed. Built for thrill-seekers.",
      image: "/CD_EV_compressed/2.jpg",
      badge: "Best Value",
      badgeColor: "bg-green-500",
      features: [
        "120 km range",
        "75 km/h top speed",
        "5 years warranty",
        "Free fast charger",
        "Comprehensive insurance",
        "5 free services",
        "Smart connectivity",
        "GPS tracking"
      ],
      specs: {
        motor: "4 kW BLDC Motor",
        battery: "4 kWh Li-ion",
        chargingTime: "3-4 hours",
        weight: "110 kg",
        loadCapacity: "180 kg",
        brakes: "Hydraulic disc brakes"
      }
    },
    {
      id: "item-3",
      title: "Premium Elite",
      price: "₹1,49,999",
      monthlyEMI: "₹5,999",
      summary: "Luxury meets sustainability with 150km range, AI assistant, and premium accessories. The ultimate EV experience.",
      image: "/CD_EV_compressed/3.jpg",
      badge: "Premium",
      badgeColor: "bg-purple-500",
      features: [
        "150 km range",
        "85 km/h top speed",
        "5 years warranty",
        "Premium accessories",
        "Premium insurance",
        "10 free services",
        "AI assistant",
        "Cloud connectivity",
        "Priority support"
      ],
      specs: {
        motor: "5 kW BLDC Motor",
        battery: "5 kWh Li-ion",
        chargingTime: "2-3 hours",
        weight: "120 kg",
        loadCapacity: "200 kg",
        brakes: "ABS with regenerative braking"
      }
    }
  ],
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-dark-main via-dark-soft to-dark-main">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-14 lg:mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 leading-relaxed">
              {heading}{" "}
              <span className="text-gray-400 text-base sm:text-lg lg:text-xl font-normal block mt-2">
                Discover our range of innovative electric vehicles designed for every lifestyle and need.
              </span>
            </h3>
          </div>
        </div>

        {/* Carousel - Centered Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <div
                  onClick={() => setSelectedItem(item)}
                  className="group block relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`${item.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gray-900">
                    {/* Image Container */}
                    <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      {/* Bottom fade on hover */}
                      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Text Section */}
                    <div className="absolute bottom-0 left-0 w-full h-0 px-6 py-4 transition-all duration-500 group-hover:h-1/2 flex flex-col justify-center bg-gray-900/98 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base line-clamp-3 mb-4">
                        {item.summary}
                      </p>
                      
                      {/* Arrow Button */}
                      <div className="absolute bottom-4 right-4">
                        <div className="h-10 w-10 rounded-full border-2 border-blue-400 bg-gray-900 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-500 shadow-md">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Title Badge (visible by default) */}
                    <div className="absolute bottom-6 left-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                      <h4 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowComparison(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-300 transform hover:scale-105"
          >
            Compare Models
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className={`${selectedItem.badgeColor} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}>
                  {selectedItem.badge}
                </span>
              </div>

              {/* Header with Image */}
              <div className="relative h-64 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">{selectedItem.title}</h2>
                    <p className="text-3xl font-bold">{selectedItem.price}</p>
                    <p className="text-lg opacity-90 mt-1">Starting from {selectedItem.monthlyEMI}/month</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Summary */}
                <p className="text-lg text-gray-600 mb-8">{selectedItem.summary}</p>

                {/* Features */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-6 text-[#1A3A36]">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-6 text-[#1A3A36]">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(selectedItem.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-600 font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-gray-900 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-[#0D9488]/30 transition-all duration-300 transform hover:-translate-y-0.5">
                    Book {selectedItem.title} Now
                  </button>
                  <button className="flex-1 border-2 border-[#0D9488] text-[#0D9488] py-4 rounded-xl font-semibold text-lg hover:bg-[#0D9488] hover:text-white transition-all duration-300">
                    Schedule Test Ride
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowComparison(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex-shrink-0 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl md:text-3xl font-bold">Compare All Models</h2>
                <button
                  onClick={() => setShowComparison(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close comparison"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Comparison Table */}
              <div className="flex-1 overflow-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="p-4 text-left font-bold text-gray-700 min-w-[150px]">Feature</th>
                      {items.map((item) => (
                        <th key={item.id} className="p-4 text-center min-w-[200px]">
                          <div className="font-bold text-[#1A3A36] text-lg">{item.title}</div>
                          <div className="text-2xl font-bold text-[#0D9488] mt-1">{item.price}</div>
                          <div className={`inline-block ${item.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mt-2`}>
                            {item.badge}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Price Row */}
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Monthly EMI</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600 font-medium">
                          Starting from {item.monthlyEMI}
                        </td>
                      ))}
                    </tr>

                    {/* Motor Row */}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Motor</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.specs.motor}
                        </td>
                      ))}
                    </tr>

                    {/* Battery Row */}
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Battery</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.specs.battery}
                        </td>
                      ))}
                    </tr>

                    {/* Range Row */}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Range</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.features.find(f => f.includes('km range')) || 'N/A'}
                        </td>
                      ))}
                    </tr>

                    {/* Top Speed Row */}
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Top Speed</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.features.find(f => f.includes('top speed')) || 'N/A'}
                        </td>
                      ))}
                    </tr>

                    {/* Charging Time Row */}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Charging Time</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.specs.chargingTime}
                        </td>
                      ))}
                    </tr>

                    {/* Weight Row */}
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Weight</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.specs.weight}
                        </td>
                      ))}
                    </tr>

                    {/* Load Capacity Row */}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Load Capacity</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.specs.loadCapacity}
                        </td>
                      ))}
                    </tr>

                    {/* Brakes Row */}
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Brakes</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.specs.brakes}
                        </td>
                      ))}
                    </tr>

                    {/* Warranty Row */}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Warranty</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.features.find(f => f.includes('warranty')) || 'N/A'}
                        </td>
                      ))}
                    </tr>

                    {/* Free Services Row */}
                    <tr className="bg-white">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Free Services</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.features.find(f => f.includes('free services')) || 'N/A'}
                        </td>
                      ))}
                    </tr>

                    {/* Smart Features Row */}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">Smart Features</td>
                      {items.map((item) => (
                        <td key={item.id} className="p-4 text-center text-gray-600">
                          {item.features.some(f => f.includes('Smart') || f.includes('GPS') || f.includes('AI')) 
                            ? <span className="text-green-600 font-semibold">✓ Available</span>
                            : <span className="text-gray-400">Basic</span>
                          }
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer CTA */}
              <div className="flex-shrink-0 bg-white border-t-2 border-gray-200 p-6 flex justify-center gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  Book a Test Ride
                </button>
                <button
                  onClick={() => setShowComparison(false)}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#0D9488] hover:text-[#0D9488] transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ModelsCarousel;
