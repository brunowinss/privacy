import React, { useState } from 'react';
import './Header.css';

const Header = ({ onLogoClick }) => {
  return (
    <nav id="main-navbar" className="navbar is-transparent no-shadow mb-0">
      <div className="top-bar">
        <div className="top-bar-content">
          <img src="https://privacy.com.br/assets/img/logo/logo.png" width="36px" alt="Privacy Logo" />
          <div className="top-bar-content-right">
            <p className="text-sm font-semibold">Acesse a Privacy pelo seu navegador</p>
            <span>Pressione <strong>⋯</strong> e abra no navegador externo</span>
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <div className="wrapper-container">
          <div className="left-container">
            <div className="checkout-back-button" id="checkout-back-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </div>
          </div>

          <div className="center-container">
            <div className="navbar-item" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
              <img alt="home shortcut" src="https://privacy.com.br/assets/v10/images/logo-black.svg" />
            </div>
          </div>

          <div className="right-container">
            <div className="select-wrapper">
              <select id="cultureSelectHeader" name="cultureName" className="idioma px-0 dropdown-header">
                <option value="pt-BR">Português</option>
                <option value="en-US">Inglês</option>
                <option value="es-ES">Espanhol</option>
              </select>
              <div className="select-wrapper-img">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
