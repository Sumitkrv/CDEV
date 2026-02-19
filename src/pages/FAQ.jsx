import PageHero from '../components/common/PageHero';
import FAQAccordion from '../components/faq/FAQAccordion';
import CTASection from '../components/common/CTASection';

const FAQ = () => {
  return (
    <div>
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about CDEV scooters"
      />
      <FAQAccordion />
      <CTASection 
        title="Still Have Questions?"
        subtitle="Our support team is ready to help you with any queries"
        buttonText="Browse FAQ"
        buttonLink="/faq"
      />
    </div>
  );
};

export default FAQ;
