import React, { useState } from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ data }) => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  if (!data) return null;

  return (
    <div className="profile-header">
      <div className="cover-image">
        <img src={data.coverImage} alt="Cover" />
      </div>

      <div className="profile-info-container">
        <div className="avatar-section">
          <div className="avatar-wrapper">
            <img src={data.avatarImage} alt={data.name} className="avatar" />
            <div className="verification-badge">
              <svg viewBox="0 0 24 24" aria-label="Verified account" fill="#ef9671" width="22" height="22">
                <g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2l-3.53-3.53 1.06-1.06 2.47 2.47 6.13-6.13 1.06 1.06-7.19 7.19z"></path></g>
              </svg>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="name-with-badge">
            <h1 className="creator-name">{data.name}</h1>
            <div className="verification-badge-inline">
              <svg viewBox="0 0 24 24" fill="#ef9671" width="18" height="18">
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2l-3.53-3.53 1.06-1.06 2.47 2.47 6.13-6.13 1.06 1.06-7.19 7.19z"></path>
              </svg>
            </div>
          </div>
          <p className="creator-handle">{data.handle}</p>

          <div className={`creator-bio-wrapper ${isBioExpanded ? 'expanded' : ''}`}>
            <p className="creator-bio">{data.bio}</p>
          </div>
          <button className="read-more" onClick={() => setIsBioExpanded(!isBioExpanded)}>
            {isBioExpanded ? 'Ler menos' : 'Ler mais'}
          </button>

          <div className="creator-stats">
            <div className="stat">
              <span className="stat-label-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg></span>
              <span className="stat-label">{data.stats.posts}</span>
            </div>
            <div className="stat">
              <span className="stat-label-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" /></svg></span>
              <span className="stat-label">{data.stats.media}</span>
            </div>
            <div className="stat">
              <span className="stat-label-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></span>
              <span className="stat-label">{data.stats.likes}</span>
            </div>
          </div>

          <div className="social-links">
            <button className="social-btn"><span className="social-icon instagram"></span></button>
            <button className="social-btn"><span className="social-icon twitter"></span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
