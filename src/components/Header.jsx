import React from 'react';
import './Header.css';

const Header = ({ onLogoClick }) => {
  return (
    <nav className="navbar">
      <div className="header-container">
        <div className="logo-center" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
          <img alt="Privacy" src="https://privacy.com.br/assets/v10/images/logo-black.svg" />
        </div>
        <div className="globe-right">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
