const AboutIntro = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDFA] via-white to-[#F0FDFA]" />
      
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold rounded-full mb-6">
            ABOUT US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pioneering India's
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
              Electric Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're not just building scooters—we're creating a sustainable future for urban mobility across India.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1A3A36]">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020, CDEV emerged from a simple yet powerful vision: to make electric mobility accessible to every Indian. We started with a team of passionate engineers and designers who believed in the transformative power of sustainable transportation.
              </p>
              <div className="mt-6 inline-flex items-center text-[#0D9488] font-semibold group-hover:gap-3 gap-2 transition-all">
                <span>Learn More</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1A3A36]">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Today, we've empowered over 50,000 customers to transition to electric mobility, collectively saving millions of liters of fuel and significantly reducing carbon emissions across Indian cities. Every ride is a step towards a cleaner tomorrow.
              </p>
              <div className="mt-6 inline-flex items-center text-green-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                <span>See Impact</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
