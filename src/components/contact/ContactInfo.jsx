import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle, Headphones } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@cdev.com', 'support@cdev.com'],
      description: 'Drop us an email anytime',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500',
      borderColor: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
      textColor: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 1800-123-4567', '+91 98765-43210'],
      description: 'Mon-Sat 9AM to 7PM',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500',
      borderColor: 'border-green-200',
      hoverBorder: 'hover:border-green-400',
      textColor: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Green Street', 'Mumbai, Maharashtra 400001'],
      description: 'Come say hello',
      color: 'from-[#0D9488] to-[#14B8A6]',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-[#0D9488]',
      borderColor: 'border-teal-200',
      hoverBorder: 'hover:border-[#0D9488]',
      textColor: 'text-[#0D9488]'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      description: 'We are open',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500',
      borderColor: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400',
      textColor: 'text-purple-600'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: 'Start Chat',
      gradient: 'from-pink-500 to-rose-500',
      iconBg: 'bg-pink-500'
    },
    {
      icon: Headphones,
      title: 'Support',
      description: '24/7 customer support',
      action: 'Get Support',
      gradient: 'from-indigo-500 to-blue-500',
      iconBg: 'bg-indigo-500'
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0D9488]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl" />

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
            REACH OUT TO US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A36] mb-6 leading-tight">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Choose your preferred way to get in touch with our team
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {contactDetails.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative h-full bg-white p-8 rounded-2xl border-2 ${contact.borderColor} ${contact.hoverBorder} shadow-lg hover:shadow-2xl transition-all duration-300`}>
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${contact.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1A3A36] mb-2">{contact.title}</h3>
                  <p className="text-sm text-gray-500 mb-5">{contact.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium text-sm leading-relaxed">{detail}</p>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className={`inline-flex items-center gap-2 ${contact.textColor} text-sm font-bold group-hover:gap-3 transition-all duration-300`}>
                    <span>Contact Now</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative overflow-hidden bg-white rounded-2xl border-2 border-gray-200 hover:border-[#0D9488] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="p-8 flex items-center gap-6">
                    {/* Icon Container */}
                    <div className={`w-16 h-16 rounded-2xl ${action.iconBg} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A3A36] mb-1">{action.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{action.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] group-hover:gap-3 transition-all duration-300">
                        <span>{action.action}</span>
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/5 to-[#14B8A6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
