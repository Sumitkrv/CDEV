import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const MapEmbed = () => {
  const locations = [
    {
      name: 'Mumbai Headquarters',
      address: '123 Green Street, Andheri West',
      city: 'Mumbai, Maharashtra 400001',
      type: 'Headquarters & Showroom'
    },
    {
      name: 'Delhi Showroom',
      address: '456 Innovation Hub, Connaught Place',
      city: 'New Delhi, Delhi 110001',
      type: 'Showroom & Service Center'
    },
    {
      name: 'Bangalore Tech Center',
      address: '789 Tech Park, Whitefield',
      city: 'Bangalore, Karnataka 560066',
      type: 'R&D Center'
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/5 via-transparent to-[#14B8A6]/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0D9488]/8 text-[#0D9488] text-sm font-semibold tracking-wide rounded-full mb-6">
            FIND US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A36] mb-6 leading-tight">
            Visit Our Locations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Experience our electric vehicles in person at any of our showrooms across India
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-2xl shadow-[#0D9488]/10 border border-gray-200 mb-12"
          >
            <div className="h-[500px] flex items-center justify-center relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/5 to-[#14B8A6]/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#0D9488] to-[#14B8A6] shadow-2xl shadow-[#0D9488]/30 mb-6"
                    >
                      <MapPin className="w-12 h-12 text-white" strokeWidth={2} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1A3A36] mb-3">
                      Interactive Map Coming Soon
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 max-w-md">
                      We're integrating an interactive map experience. Meanwhile, visit our locations below.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-xl font-semibold shadow-lg shadow-[#0D9488]/30 hover:shadow-xl transition-all duration-300"
                    >
                      <Navigation size={20} />
                      <span>Open in Google Maps</span>
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-[#0D9488]/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold rounded-full mb-3">
                      {location.type}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A3A36] mb-2">{location.name}</h3>
                  </div>

                  <div className="space-y-1 mb-5">
                    <p className="text-gray-700 font-medium">{location.address}</p>
                    <p className="text-gray-600">{location.city}</p>
                  </div>

                  {/* Action */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9488] group-hover:gap-3 transition-all duration-300"
                  >
                    <Navigation size={16} />
                    <span>Get Directions</span>
                    <ExternalLink size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapEmbed;
