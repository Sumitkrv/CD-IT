import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustMetrics from '../components/home/TrustMetrics';
import CoreServices from '../components/home/CoreServices';
import WhyChooseCD from '../components/home/WhyChooseCD';
import SecurityCompliance from '../components/home/SecurityCompliance';
import OurApproach from '../components/home/OurApproach';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import TechStack from '../components/home/TechStack';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustMetrics />
      <CoreServices />
      <WhyChooseCD />
      <SecurityCompliance />
      <OurApproach />
      <CaseStudiesPreview />
      {/* <TechStack /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
