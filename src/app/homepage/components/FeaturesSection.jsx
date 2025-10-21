import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features" id="features">
      <h2>Our Features</h2>
      <p className="features-description">
        Discover the range of features we offer to make your farming journey smoother, smarter, and more profitable.
      </p>
      <div className="features-container">
        <div className="feature-holder yellow">
          <div className="feature-image feature-image-1" />
          <h3>Soil Monitoring</h3>
          <p>Get real-time insights into your soil health and conditions.</p>
        </div>

        <div className="feature-holder green">
          <div className="feature-image feature-image-2" />
          <h3>Weather Forecast</h3>
          <p>Plan your farming activities with accurate weather predictions.</p>
        </div>

        <div className="feature-holder light-green">
          <div className="feature-image feature-image-3" />
          <h3>Crop Management</h3>
          <p>Track your crop cycles, yields, and performance over time.</p>
        </div>

        <div className="feature-holder brown">
          <div className="feature-image feature-image-4" />
          <h3>Market Access</h3>
          <p>Connect directly with buyers and improve your profits.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;