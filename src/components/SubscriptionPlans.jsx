import React, { useState } from 'react';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const [showPromotions, setShowPromotions] = useState(true);

  return (
    <div className="subscription-plans">
      <div className="plans-container">
        <h2 className="section-title">Assinaturas</h2>
        <button className="plan-button main-plan">
          <span className="plan-name">1 mês</span>
          <span className="plan-price">R$ 29,99</span>
        </button>

        <div className="promotions-header" onClick={() => setShowPromotions(!showPromotions)}>
          <h2 className="section-title">Promoções</h2>
          <svg className={`chevron ${showPromotions ? 'up' : 'down'}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>

        {showPromotions && (
          <div className="promotions-list">
            <button className="plan-button">
              <span className="plan-name">3 meses</span>
              <span className="plan-price">R$ 89,97</span>
            </button>

            <button className="plan-button">
              <span className="plan-name">6 meses (15% off )</span>
              <span className="plan-price">R$ 152,95</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
