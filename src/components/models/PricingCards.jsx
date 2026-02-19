import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Zap, 
  Clock, 
  Shield, 
  Battery, 
  Gauge, 
  Gift, 
  Smartphone,
  MapPin,
  Sparkles,
  Check
} from 'lucide-react';

const PricingCards = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const products = [
    {
      id: 1,
      model: 'City Cruiser',
      badge: 'Most Popular',
      badgeColor: 'bg-blue-500',
      price: '₹89,999',
      monthlyEMI: '₹3,499',
      savings: 'Save ₹15,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      features: [
        { icon: Battery, text: '80 km range' },
        { icon: Gauge, text: '45 km/h top speed' },
        { icon: Shield, text: '3 years warranty' },
        { icon: Zap, text: 'Free home charging kit' },
        { icon: Shield, text: 'Basic insurance included' },
        { icon: Gift, text: '2 free services' },
      ],
      fullSpecs: {
        motor: '2.5 kW BLDC Motor',
        battery: '2.5 kWh Li-ion',
        chargingTime: '4-5 hours',
        weight: '95 kg',
        loadCapacity: '150 kg',
        brakes: 'Disc brakes (Front & Rear)',
      },
      highlight: true,
    },
    {
      id: 2,
      model: 'Sport Pro',
      badge: 'Best Value',
      badgeColor: 'bg-green-500',
      price: '₹1,24,999',
      monthlyEMI: '₹4,999',
      savings: 'Save ₹20,000',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
      features: [
        { icon: Battery, text: '120 km range' },
        { icon: Gauge, text: '75 km/h top speed' },
        { icon: Shield, text: '5 years warranty' },
        { icon: Zap, text: 'Free fast charger' },
        { icon: Shield, text: 'Comprehensive insurance' },
        { icon: Gift, text: '5 free services' },
        { icon: Smartphone, text: 'Smart connectivity' },
        { icon: MapPin, text: 'GPS tracking' },
      ],
      fullSpecs: {
        motor: '4 kW BLDC Motor',
        battery: '4 kWh Li-ion',
        chargingTime: '3-4 hours',
        weight: '110 kg',
        loadCapacity: '180 kg',
        brakes: 'Hydraulic disc brakes',
      },
      highlight: false,
    },
    {
      id: 3,
      model: 'Premium Elite',
      badge: 'Premium',
      badgeColor: 'bg-purple-500',
      price: '₹1,49,999',
      monthlyEMI: '₹5,999',
      savings: 'Save ₹25,000',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
      features: [
        { icon: Battery, text: '150 km range' },
        { icon: Gauge, text: '85 km/h top speed' },
        { icon: Shield, text: '5 years warranty' },
        { icon: Gift, text: 'Premium accessories' },
        { icon: Shield, text: 'Premium insurance' },
        { icon: Gift, text: '10 free services' },
        { icon: Sparkles, text: 'AI assistant' },
        { icon: Smartphone, text: 'Cloud connectivity' },
        { icon: Clock, text: 'Priority support' },
      ],
      fullSpecs: {
        motor: '5 kW BLDC Motor',
        battery: '5 kWh Li-ion',
        chargingTime: '2-3 hours',
        weight: '120 kg',
        loadCapacity: '200 kg',
        brakes: 'ABS with regenerative braking',
      },
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A3A36]">
            Choose Your Model
          </h2>
          <p className="text-xl text-gray-600">
            Flexible payment options available
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  product.highlight
                    ? 'ring-4 ring-[#0D9488] ring-opacity-50 transform lg:scale-105'
                    : ''
                }`}
              >
                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className={`${product.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                    {product.badge}
                  </span>
                </div>

                {/* Header */}
                <div className="relative p-6 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white">
                  <h3 className="text-2xl font-bold mb-2">{product.model}</h3>
                  <div className="text-4xl font-bold mb-1">{product.price}</div>
                  <p className="text-xs opacity-90">
                    Starting from <span className="font-semibold">{product.monthlyEMI}/month</span>
                  </p>
                </div>

                {/* Savings Banner */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 py-2 px-4">
                  <span className="text-yellow-800 font-semibold text-xs">🎉 {product.savings}</span>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mr-2">
                            <Icon className="w-4 h-4 text-green-600" />
                          </div>
                          <span>{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Buttons */}
                  <div className="space-y-2">
                    <button className="w-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white py-3 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-[#0D9488]/30 transition-all duration-300 transform hover:-translate-y-0.5">
                      Book Now
                    </button>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl text-sm font-semibold hover:border-[#0D9488] hover:text-[#0D9488] transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compare All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => setShowComparison(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#0D9488]/30 transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            Compare All Products
          </button>
        </motion.div>
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      {/* Comparison Modal */}
      <ComparisonModal products={products} isOpen={showComparison} onClose={() => setShowComparison(false)} />
    </section>
  );
};

// Product Details Modal Component
const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Header with Image */}
          <div className="relative h-64 bg-gradient-to-br from-[#0D9488] to-[#14B8A6]">
            <img
              src={product.image}
              alt={product.model}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">{product.model}</h2>
                <p className="text-2xl font-semibold">{product.price}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Features Grid */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-[#1A3A36]">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#0D9488]" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Full Specifications */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-[#1A3A36]">Full Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.fullSpecs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty & Services */}
            <div className="bg-gradient-to-br from-[#0D9488]/5 to-[#14B8A6]/10 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#1A3A36]">Warranty & Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive warranty coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Free periodic maintenance services</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">24/7 roadside assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Battery health monitoring</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white py-5 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-[#0D9488]/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Book {product.model} Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Comparison Modal Component
const ComparisonModal = ({ products, isOpen, onClose }) => {
  const comparisonData = [
    { label: 'Price', key: 'price' },
    { label: 'Range', getValue: (p) => p.features.find(f => f.text.includes('km range'))?.text || 'N/A' },
    { label: 'Top Speed', getValue: (p) => p.features.find(f => f.text.includes('top speed'))?.text || 'N/A' },
    { label: 'Warranty', getValue: (p) => p.features.find(f => f.text.includes('warranty'))?.text || 'N/A' },
    { label: 'Motor', getValue: (p) => p.fullSpecs.motor },
    { label: 'Battery', getValue: (p) => p.fullSpecs.battery },
    { label: 'Charging Time', getValue: (p) => p.fullSpecs.chargingTime },
    { label: 'Insurance', getValue: (p) => p.features.find(f => f.text.includes('insurance'))?.text || 'N/A' },
    { label: 'Free Services', getValue: (p) => p.features.find(f => f.text.includes('free services'))?.text || 'N/A' },
    { label: 'Smart Features', getValue: (p) => p.features.filter(f => f.text.includes('Smart') || f.text.includes('GPS') || f.text.includes('AI')).length > 0 ? 'Yes' : 'Basic' },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white p-6 flex items-center justify-between z-10">
            <h2 className="text-3xl font-bold">Compare All Models</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close comparison"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-[88px] bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="p-4 text-left font-bold text-gray-700 min-w-[150px]">Feature</th>
                  {products.map((product) => (
                    <th key={product.id} className="p-4 text-center min-w-[200px]">
                      <div className="font-bold text-[#1A3A36] text-lg">{product.model}</div>
                      <div className="text-2xl font-bold text-[#0D9488] mt-1">{product.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-semibold text-gray-700 border-r border-gray-200">
                      {row.label}
                    </td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center text-gray-600">
                        {row.key ? product[row.key] : row.getValue(product)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer CTA */}
          <div className="sticky bottom-0 bg-white border-t-2 border-gray-200 p-6 flex justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Book a Test Ride
            </button>
            <button
              onClick={onClose}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#0D9488] hover:text-[#0D9488] transition-all"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingCards;
