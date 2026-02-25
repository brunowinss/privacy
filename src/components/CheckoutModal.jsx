import React, { useState } from 'react';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose, planName, planPrice, paymentUrl }) => {
    const [step, setStep] = useState('login'); // 'login' or 'checkout'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleContinue = (e) => {
        e.preventDefault();
        setStep('checkout');
    };

    const handleFinalSubscribe = () => {
        window.open(paymentUrl, '_blank');
        onClose();
    };

    return (
        <div className="checkout-overlay">
            <div className="checkout-modal">
                <button className="checkout-close" onClick={onClose}>&times;</button>

                <div className="checkout-header">
                    <img src="https://privacy.com.br/assets/v10/images/logo-black.svg" alt="Privacy" className="checkout-logo" />
                </div>

                {step === 'login' ? (
                    <div className="checkout-body">
                        <h2>Entrar</h2>
                        <p className="checkout-subtitle">Para continuar com a sua assinatura de <strong>{planName}</strong></p>

                        <form onSubmit={handleContinue}>
                            <div className="checkout-form-group">
                                <label>E-mail ou nome de usuário</label>
                                <input
                                    type="text"
                                    placeholder="Ex: seuemail@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="checkout-form-group">
                                <label>Senha</label>
                                <input
                                    type="password"
                                    placeholder="Sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="checkout-primary-btn">Continuar</button>
                        </form>

                        <div className="checkout-divider">
                            <span>ou</span>
                        </div>

                        <button className="checkout-secondary-btn">Criar uma conta</button>
                    </div>
                ) : (
                    <div className="checkout-body checkout-summary">
                        <h2>Finalizar Assinatura</h2>
                        <div className="plan-summary-card">
                            <div className="plan-info">
                                <span className="plan-label">Plano selecionado</span>
                                <span className="plan-val">{planName}</span>
                            </div>
                            <div className="plan-info">
                                <span className="plan-label">Total a pagar</span>
                                <span className="plan-val price">{planPrice}</span>
                            </div>
                        </div>

                        <p className="payment-disclaimer">Ao clicar em assinar, você será redirecionado para o processador de pagamentos seguro.</p>

                        <button className="checkout-primary-btn" onClick={handleFinalSubscribe}>Assinar Agora</button>
                        <button className="checkout-back-link" onClick={() => setStep('login')}>Voltar</button>
                    </div>
                )}

                <div className="checkout-footer">
                    <p>Ambiente Seguro <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
