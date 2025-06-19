
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome, {user?.name}!</h1>
        <p className="welcome-message">
          Ready to start your cosplay collaboration journey? Explore gigs, showcase your work, and connect with brands.
        </p>
      </div>

      <div className="page-header">
        <h2 className="page-title">Your Dashboard</h2>
        <p className="page-subtitle">Everything you need to manage your cosplay career</p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h3 className="card-title">Browse Gigs</h3>
          <div className="card-content">
            <p>Discover exciting collaboration opportunities with brands looking for talented cosplay creators.</p>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/gigs" className="btn">View Gigs</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Your Reels</h3>
          <div className="card-content">
            <p>Showcase your cosplay skills and creativity through engaging video content.</p>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/reels" className="btn btn-secondary">Manage Reels</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Profile Settings</h3>
          <div className="card-content">
            <p>Update your profile, skills, and social media links to attract the right collaborations.</p>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/profile" className="btn">Edit Profile</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Quick Stats</h3>
          <div className="card-content">
            <p><strong>Profile Views:</strong> 127</p>
            <p><strong>Active Applications:</strong> 3</p>
            <p><strong>Completed Projects:</strong> 0</p>
            <p><strong>Member Since:</strong> {new Date(user?.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
