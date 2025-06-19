
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Landing = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <section className="hero">
        <h1 className="hero-title">CosmoMatch</h1>
        <p className="hero-subtitle">
          The ultimate platform connecting cosplay creators with brands for amazing collaborations
        </p>
        <div className="hero-buttons">
          {!isAuthenticated ? (
            <>
              <Link to="/register" className="btn">Get Started</Link>
              <Link to="/login" className="btn btn-secondary">Login</Link>
            </>
          ) : (
            <Link to="/dashboard" className="btn">Go to Dashboard</Link>
          )}
        </div>
      </section>

      <div className="container">
        <div className="page-header">
          <h2 className="page-title">Why Choose CosmoMatch?</h2>
          <p className="page-subtitle">Connect, Create, Collaborate</p>
        </div>

        <div className="cards-grid">
          <div className="card">
            <h3 className="card-title">For Creators</h3>
            <div className="card-content">
              <p>Showcase your cosplay skills, build your portfolio, and connect with brands looking for talented creators like you.</p>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">For Brands</h3>
            <div className="card-content">
              <p>Find the perfect cosplay creators to represent your brand, products, and campaigns in the cosplay community.</p>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Easy Matching</h3>
            <div className="card-content">
              <p>Our platform makes it simple to find the right partnerships based on style, audience, and collaboration preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
