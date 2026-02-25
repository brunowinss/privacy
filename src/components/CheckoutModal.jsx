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
                        <p className="checkout-subtitle">Para assinar o perfil de <strong>{planName === 'Assinatura' ? 'beca barreto' : planName}</strong></p>

                        <div className="checkout-social-logins">
                            <button className="checkout-social-btn google">
                                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="" />
                                Entrar com o Google
                            </button>
                            <button className="checkout-social-btn facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                Entrar com o Facebook
                            </button>
                        </div>

                        <div className="checkout-divider">
                            <span>OU</span>
                        </div>

                        <form onSubmit={handleContinue}>
                            <div className="checkout-form-group">
                                <input
                                    type="text"
                                    placeholder="E-mail ou nome de usuário"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="checkout-form-group">
                                <input
                                    type="password"
                                    placeholder="Sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="checkout-forgot-password">
                                <a href="#">Esqueceu a senha?</a>
                            </div>
                            <button type="submit" className="checkout-primary-btn">Entrar</button>
                        </form>

                        <p className="checkout-signup-link">Não tem uma conta? <a href="#">Inscrever-se</a></p>
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
