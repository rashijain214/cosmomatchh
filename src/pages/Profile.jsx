
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    location: user?.location || '',
    skills: user?.skills || '',
    experience: user?.experience || '',
    instagram: user?.social?.instagram || '',
    tiktok: user?.social?.tiktok || '',
    twitter: user?.social?.twitter || '',
    website: user?.website || ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const profileData = {
      ...formData,
      social: {
        instagram: formData.instagram,
        tiktok: formData.tiktok,
        twitter: formData.twitter
      }
    };

    const result = updateProfile(profileData);
    if (result.success) {
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Edit Profile</h1>
        <p className="page-subtitle">Update your information to attract the best collaborations</p>
      </div>

      {message && <div className="success-message" style={{ textAlign: 'center', marginBottom: '2rem' }}>{message}</div>}

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            className="form-input"
            rows="4"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself and your cosplay journey..."
            style={{ resize: 'vertical', height: 'auto' }}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-input"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State/Country"
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience Level</label>
            <select
              id="experience"
              name="experience"
              className="form-input"
              value={formData.experience}
              onChange={handleChange}
            >
              <option value="">Select experience level</option>
              <option value="beginner">Beginner (0-1 years)</option>
              <option value="intermediate">Intermediate (2-4 years)</option>
              <option value="advanced">Advanced (5+ years)</option>
              <option value="professional">Professional</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills & Specialties</label>
          <input
            type="text"
            id="skills"
            name="skills"
            className="form-input"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g. Armor crafting, Wig styling, Makeup, Photography..."
          />
        </div>

        <div className="page-header" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
          <h3 className="page-title" style={{ fontSize: '1.8rem' }}>Social Media Links</h3>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="instagram">Instagram</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              className="form-input"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="@yourusername"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tiktok">TikTok</label>
            <input
              type="text"
              id="tiktok"
              name="tiktok"
              className="form-input"
              value={formData.tiktok}
              onChange={handleChange}
              placeholder="@yourusername"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="twitter">Twitter/X</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              className="form-input"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="@yourusername"
            />
          </div>

          <div className="form-group">
            <label htmlFor="website">Personal Website</label>
            <input
              type="url"
              id="website"
              name="website"
              className="form-input"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>

        <button type="submit" className="btn" style={{ marginTop: '2rem' }}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
