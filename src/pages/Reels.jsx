
import React from 'react';

const Reels = () => {
  return (
    <div className="container">
      <div className="coming-soon">
        <h1 className="coming-soon-title">Reels Feature</h1>
        <p className="coming-soon-message">
          Our video showcase feature is currently in development. Soon you'll be able to upload and share your amazing cosplay reels!
        </p>
        <button className="btn btn-secondary">
          Coming Soon
        </button>
      </div>

      <div className="page-header">
        <h2 className="page-title">What to Expect</h2>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h3 className="card-title">Video Uploads</h3>
          <div className="card-content">
            <p>Upload high-quality videos showcasing your cosplay creations, transformations, and behind-the-scenes content.</p>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Portfolio Building</h3>
          <div className="card-content">
            <p>Build a comprehensive video portfolio that brands can browse to find the perfect creator for their campaigns.</p>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Engagement Analytics</h3>
          <div className="card-content">
            <p>Track views, likes, and engagement on your content to understand what resonates with your audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reels;
