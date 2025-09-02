import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import FeaturesSection from './FeaturesSection';
import '../styles/homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <LandingPage />
      <FeaturesSection />
    </div>
  );
};

export default Homepage;
