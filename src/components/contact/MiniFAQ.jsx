import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const MiniFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to get a response?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our hotline at +91 1800-123-4567 for immediate assistance.'
    },
    {
      question: 'Can I visit your showroom without an appointment?',
      answer: 'Yes, our showrooms are open during business hours and walk-ins are welcome. However, we recommend booking an appointment for a personalized consultation and test ride experience.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Currently, we only operate within India with service centers across major cities. We are planning international expansion in the near future. Subscribe to our newsletter for updates.'
    },
    {
      question: 'What are your customer support hours?',
      answer: 'Our customer support is available Monday to Saturday, 9 AM to 7 PM, and Sunday, 10 AM to 5 PM. Emergency roadside assistance is available 24/7 for all vehicle owners.'
    },
    {
      question: 'How can I schedule a test ride?',
      answer: 'You can schedule a test ride by filling out our contact form above, calling us directly, or visiting any of our showrooms. We offer flexible time slots to suit your schedule.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including credit/debit cards, bank transfers, and EMI options through leading financial institutions. Our sales team can help you with financing options.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0D9488]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#0D9488]/8 text-[#0D9488] text-sm font-semibold tracking-wide rounded-full mb-6">
              QUICK ANSWERS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A36] mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Common questions about contacting us and our services
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-[#0D9488]/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mt-1">
                        <HelpCircle className="w-5 h-5 text-[#0D9488]" strokeWidth={2} />
                      </div>
                      <span className="font-bold text-lg md:text-xl text-[#1A3A36] pr-4">
                        {faq.question}
                      </span>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0D9488]/10 flex items-center justify-center"
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-[#0D9488]" strokeWidth={2} />
                      ) : (
                        <Plus className="w-5 h-5 text-[#0D9488]" strokeWidth={2} />
                      )}
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 pt-2">
                          <div className="pl-14 pr-12">
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-xl font-semibold shadow-lg shadow-[#0D9488]/30 hover:shadow-xl hover:shadow-[#0D9488]/40 transition-all duration-300"
            >
              <HelpCircle size={20} />
              <span>Contact Our Support Team</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MiniFAQ;
