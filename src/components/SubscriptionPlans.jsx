import React from 'react';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  return (
    <div className="subscription-plans">
      <div className="plans-container">
        <h2 className="section-title">Assinaturas</h2>
        <button className="plan-button">
          <span className="plan-name">1 mês</span>
          <span className="plan-price">R$ 29,99</span>
        </button>

        <div className="promotions-header">
          <h2 className="section-title">Promoções</h2>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </div>

        <button className="plan-button">
          <span className="plan-name">3 meses</span>
          <span className="plan-price">R$ 89,97</span>
        </button>

        <button className="plan-button">
          <span className="plan-name">6 meses (15% off )</span>
          <span className="plan-price">R$ 152,95</span>
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
