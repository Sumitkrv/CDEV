import { motion } from 'framer-motion';
import { MessageCircle, Zap } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import MiniFAQ from '../components/contact/MiniFAQ';

const Contact = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0D9488] overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full mb-8"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                  WE'RE HERE TO HELP
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight tracking-tight"
              >
                Let's Connect
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
              >
                Have questions about our electric vehicles? Our team is ready to assist you with expert guidance and support.
              </motion.p>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {[
                  { icon: '⏱', label: '24-Hour Response Time' },
                  { icon: '🎯', label: 'Expert Support Team' },
                  { icon: '📍', label: 'Multiple Locations' },
                ].map(({ icon, label }, i) => (
                  <div key={label} className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full">
                    <span className="text-sm">{icon}</span>
                    <span className="text-white font-semibold text-sm">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Sections */}
      <ContactForm />
      <ContactInfo />
      <MiniFAQ />
    </div>
  );
};

export default Contact;
