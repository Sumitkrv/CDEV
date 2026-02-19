import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import OurMission from '../components/about/OurMission';
import Vision from '../components/about/Vision';
import Timeline from '../components/about/Timeline';
import CTASection from '../components/common/CTASection';

const About = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <OurMission />
      <Vision />
      <Timeline />
      <CTASection 
        title="Join the Electric Movement"
        subtitle="Be part of India's sustainable mobility revolution"
      />
    </div>
  );
};

export default About;





