const SupportInfo = () => {
  const supportOptions = [
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: '📚',
      title: 'Help Center',
      description: 'Browse FAQs and troubleshooting guides',
      availability: 'Always accessible',
      action: 'Visit Help Center'
    },
    {
      icon: '🎥',
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      availability: 'On-demand',
      action: 'Watch Videos'
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'Download our app for instant support',
      availability: 'iOS & Android',
      action: 'Download App'
    }
  ];

  return (
    <section className="py-16 bg-card-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Options
          </h2>
          <p className="text-xl text-muted">
            We're here to help you anytime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {supportOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-primary-soft to-card-bg p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center"
            >
              <div className="text-5xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold mb-2">{option.title}</h3>
              <p className="text-muted mb-3 text-sm">{option.description}</p>
              <p className="text-primary font-semibold text-sm mb-4">
                {option.availability}
              </p>
              <button className="bg-primary text-text-dark-white px-4 py-2 rounded-lg hover:bg-primary-dark transition text-sm">
                {option.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportInfo;
