import { motion } from 'framer-motion';
import ModelsHero from '../components/models/ModelsHero';
import ModernTestRide from '../components/home/ModernTestRide';
import WhyChooseElectric from '../components/home/WhyChooseElectric';
import ModelsCarousel from '../components/models/ModelsCarousel';
import OurQuality from '../components/home/OurQuality';
import WhyChooseCD from '../components/home/WhyChooseCD';
import PerfectEV from '../components/models/PerfectEV';
import CTASection from '../components/common/CTASection';

const Home = () => {
  return (
    <div>
      <ModelsHero />
      <ModernTestRide />
      <WhyChooseElectric />

      <ModelsCarousel />
      <OurQuality />
      <PerfectEV />
      <WhyChooseCD />

      <section className="py-24 bg-[#F0FDFA]/50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/20"
              >
                <span className="text-[#0D9488] font-bold tracking-wider text-xs uppercase">Process</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#1A3A36] tracking-tight">
                How It Works
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Experience a simple and hassle-free service process designed for your convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Book Online", desc: "Schedule your service through our app or website" },
                { step: "2", title: "Pickup", desc: "We collect your scooter from your doorstep" },
                { step: "3", title: "Service", desc: "Expert technicians perform thorough maintenance" },
                { step: "4", title: "Delivery", desc: "Your scooter is delivered back fully serviced" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-[#0D9488]/10 shadow-[0_10px_40px_rgba(13,148,136,0.05)] hover:shadow-[0_20px_60px_rgba(13,148,136,0.1)] transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] text-white flex items-center justify-center text-2xl font-black mb-6 mx-auto shadow-lg shadow-[#0D9488]/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A3A36]">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
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

export default Home;
