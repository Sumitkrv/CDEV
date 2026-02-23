import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Contact form submission:', formData);
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/4 via-transparent to-[#14B8A6]/4" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0D9488]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#14B8A6]/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl shadow-[#0D9488]/10 border border-gray-100 overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="group">
                    <label className="block text-[#1A3A36] mb-3 font-semibold text-sm uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0D9488] transition-colors">
                        <User size={20} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="block text-[#1A3A36] mb-3 font-semibold text-sm uppercase tracking-wide">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0D9488] transition-colors">
                        <Mail size={20} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <div className="group">
                    <label className="block text-[#1A3A36] mb-3 font-semibold text-sm uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0D9488] transition-colors">
                        <Phone size={20} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="group">
                    <label className="block text-[#1A3A36] mb-3 font-semibold text-sm uppercase tracking-wide">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0D9488] transition-colors">
                        <Sparkles size={20} />
                      </div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="test-ride">Book Test Ride</option>
                        <option value="service">Service & Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-[#1A3A36] mb-3 font-semibold text-sm uppercase tracking-wide">
                    Your Message *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#0D9488] transition-colors">
                      <MessageSquare size={20} />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white py-5 rounded-xl font-semibold text-lg shadow-lg shadow-[#0D9488]/30 hover:shadow-xl hover:shadow-[#0D9488]/40 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Info Text */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
