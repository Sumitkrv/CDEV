import { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultFAQs = [
    {
      question: 'What is the range of CDEV scooters?',
      answer: 'Our scooters offer a range from 80 km to 150 km on a single charge, depending on the model. The City Cruiser offers 80 km, Sport Pro offers 120 km, and Premium Elite offers up to 150 km range.'
    },
    {
      question: 'How long does it take to charge?',
      answer: 'Charging time varies by model. The City Cruiser takes about 4 hours, Sport Pro takes 3 hours, and Premium Elite takes 2.5 hours for a full charge. Fast charging options can reduce this time significantly.'
    },
    {
      question: 'What is the warranty period?',
      answer: 'All our models come with a comprehensive warranty. City Cruiser has 3 years warranty, while Sport Pro and Premium Elite come with 5 years warranty covering battery and motor.'
    },
    {
      question: 'Are there any government subsidies available?',
      answer: 'Yes! Under the FAME II scheme, you can avail subsidies ranging from ₹10,000 to ₹25,000 depending on your state and model. We help you with all the paperwork.'
    },
    {
      question: 'What are the maintenance costs?',
      answer: 'Electric scooters have minimal maintenance costs compared to petrol scooters. Average annual maintenance cost is around ₹2,000-3,000, which is significantly lower than conventional scooters.'
    },
    {
      question: 'Can I test ride before purchasing?',
      answer: 'Absolutely! We encourage test rides. You can book a test ride through our website or by visiting any of our showrooms. The test ride is completely free.'
    },
    {
      question: 'What payment options are available?',
      answer: 'We offer multiple payment options including cash, EMI, bank loans, and exchange offers. EMI starts from as low as ₹3,499 per month with zero down payment options available.'
    },
    {
      question: 'Is home charging possible?',
      answer: 'Yes! All our scooters come with a portable charger that can be plugged into any standard 15A household socket. No special installation required.'
    },
    {
      question: 'What happens if I run out of charge?',
      answer: 'Our scooters have range indicators to prevent this. However, if it happens, our 24/7 roadside assistance will help you. You can also use our network of charging stations across cities.'
    },
    {
      question: 'Are spare parts easily available?',
      answer: 'Yes, we have a well-established network of 100+ service centers across 15 cities. Spare parts are readily available and we also offer doorstep service in select cities.'
    }
  ];

  const faqList = faqs || defaultFAQs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-card-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted">
              Find answers to common questions about our electric scooters
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-soft-section to-card-bg rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-start hover:bg-soft-section transition"
                >
                  <span className="font-semibold text-lg pr-8 text-heading">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-6 h-6 flex-shrink-0 transform transition-transform ${openIndex === index ? 'rotate-180' : ''} text-primary`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-soft-section p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted mb-6">
              Can't find the answer you're looking for? Our customer support team is here to help.
            </p>
            <button className="bg-primary text-text-dark-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
