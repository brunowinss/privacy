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
        <div className="top-profile-row">
          <div className="avatar-section">
            <div className="avatar-wrapper">
              <img src={data.avatarImage} alt={data.name} className="avatar" />
            </div>
          </div>
          <div className="creator-stats">
            <div className="stat">
              <span className="stat-label-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </span>
              <span className="stat-label">{data.stats.posts}</span>
            </div>
            <div className="stat">
              <span className="stat-label-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
              </span>
              <span className="stat-label">{data.stats.media}</span>
            </div>
            <div className="stat">
              <span className="stat-label-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </span>
              <span className="stat-label">{data.stats.likes}</span>
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
            <p className="creator-bio-text">{data.bio}</p>
          </div>
          <button className="read-more" onClick={() => setIsBioExpanded(!isBioExpanded)}>
            {isBioExpanded ? 'Ler menos' : 'Ler mais'}
          </button>

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
