import Hero from '../components/home/Hero';
import WhyEV from '../components/home/WhyEV';
import ScooterGrid from '../components/home/ScooterGrid';
import ValueCards from '../components/home/ValueCards';
import TestRideForm from '../components/home/TestRideForm';
import CTASection from '../components/common/CTASection';

const Models = () => {
  return (
    <div>
      <Hero />
      <TestRideForm />
      <WhyEV />
      <ScooterGrid />
      <ValueCards />
      <CTASection />
    </div>
  );
};

export default Models;
