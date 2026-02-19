import ModelsHero from '../components/models/ModelsHero';
import ModelsCarousel from '../components/models/ModelsCarousel';
import CTASection from '../components/common/CTASection';

const Models = () => {
  return (
    <div>
      <ModelsHero />

      <ModelsCarousel />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A3A36]">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">Simple and hassle-free service process</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A3A36] text-center">Book Online</h3>
                  <p className="text-gray-600 text-center">
                    Schedule your service through our app or website
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A3A36] text-center">Pickup</h3>
                  <p className="text-gray-600 text-center">
                    We collect your scooter from your doorstep
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A3A36] text-center">Service</h3>
                  <p className="text-gray-600 text-center">
                    Expert technicians perform thorough maintenance
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A3A36] text-center">Delivery</h3>
                  <p className="text-gray-600 text-center">
                    Your scooter is delivered back fully serviced
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Test Ride?"
        subtitle="Experience the difference yourself. Book a free test ride today!"
        buttonText="Book Test Ride"
      />
    </div>
  );
};

export default Models;
