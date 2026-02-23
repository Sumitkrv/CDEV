import { Link } from 'react-router-dom';
import { Zap, ArrowRight, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';

const CTASection = ({ 
  title = "Ready to Go Electric?", 
  subtitle = "Book your test ride today and experience the future of mobility",
  buttonText = "Book Test Ride",
  buttonLink = "/faq"
}) => {

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&q=80"
          alt="Electric mobility"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/40 mb-8">
            <Zap className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-semibold text-teal-400">FREE TEST RIDE</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            {subtitle}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5 text-teal-400" />
              <span>50+ Locations</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5 text-teal-400" />
              <span>30 Min Sessions</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5 text-teal-400" />
              <span>Fully Insured</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            to={buttonLink}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105"
          >
            {buttonText}
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Trust text */}
          <p className="mt-6 text-sm text-gray-300">
            ✓ No obligation  ✓ Expert guidance  ✓ All models available
          </p>
        </div>
      </div>

      {/* Floating card - Desktop only */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[340px]">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Test Ride Benefits</h3>
            <p className="text-sm text-white/70">What you get</p>
          </div>
          
          <div className="space-y-4">
            {[
              { num: '01', text: 'Hands-on experience with all models' },
              { num: '02', text: 'Expert guidance from our team' },
              { num: '03', text: 'Special discount on booking' },
              { num: '04', text: 'Free helmet & accessories demo' },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-3">
                <span className="text-teal-400 font-bold text-sm">{item.num}</span>
                <span className="text-white/90 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
