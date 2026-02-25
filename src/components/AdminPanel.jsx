import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = ({ siteData, updateField, updateStats, updatePaymentLink, resetData, isAdmin, login, logout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [code, setCode] = useState('');

    useEffect(() => {
        const handleOpenLogin = () => setShowLogin(true);
        window.addEventListener('open-admin-login', handleOpenLogin);
        return () => window.removeEventListener('open-admin-login', handleOpenLogin);
    }, []);

    const handleImageUpload = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateField(field, reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (login(code)) {
            setShowLogin(false);
            setIsOpen(true);
            setCode('');
        } else {
            alert('Código incorreto!');
        }
    };

    if (!isAdmin) {
        if (showLogin) {
            return (
                <div className="admin-login-overlay">
                    <form className="admin-login-form" onSubmit={handleLogin}>
                        <h3>Acesso Administrativo</h3>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>Digite seu código de acesso para editar o site.</p>
                        <input
                            type="password"
                            placeholder="Digite o código"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            autoFocus
                        />
                        <div className="login-actions">
                            <button type="button" onClick={() => setShowLogin(false)} className="cancel-btn">Cancelar</button>
                            <button type="submit" className="confirm-btn">Entrar</button>
                        </div>
                    </form>
                </div>
            );
        }
        return (
            <div className="admin-secret-trigger" onClick={() => setShowLogin(true)}></div>
        );
    }

    if (!isOpen) {
        return (
            <button className="admin-toggle" onClick={() => setIsOpen(true)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                <span>Painel do Dono</span>
            </button>
        );
    }

    return (
        <div className="admin-panel-overlay">
            <div className="admin-panel">
                <div className="admin-header">
                    <h3>Configurações do Site</h3>
                    <div className="header-btns">
                        <button className="logout-btn" onClick={logout}>Sair</button>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
                    </div>
                </div>

                <div className="admin-content">
                    <div className="admin-section">
                        <h4>Perfil</h4>
                        <div className="form-group">
                            <label>Nome Visível</label>
                            <input
                                type="text"
                                value={siteData.name}
                                onChange={(e) => updateField('name', e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nome do Usuário (@)</label>
                            <input
                                type="text"
                                value={siteData.handle}
                                onChange={(e) => updateField('handle', e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Sua Bio</label>
                            <textarea
                                value={siteData.bio}
                                onChange={(e) => updateField('bio', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="admin-section">
                        <h4>Fotos Principais</h4>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Foto de Capa</label>
                                <div className="upload-btn-wrapper">
                                    <button className="btn">Enviar Foto</button>
                                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'coverImage')} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Foto do Perfil</label>
                                <div className="upload-btn-wrapper">
                                    <button className="btn">Enviar Foto</button>
                                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'avatarImage')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-section">
                        <h4>Segurança e Acesso</h4>
                        <div className="form-group">
                            <label>Senha do Painel (mude se quiser)</label>
                            <input
                                type="text"
                                value={siteData.adminAccessCode}
                                onChange={(e) => updateField('adminAccessCode', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="admin-section">
                        <h4>Números e Contagem</h4>
                        <div className="stats-edit-grid">
                            <div className="form-group">
                                <label>Posts (ex: 821)</label>
                                <input
                                    type="text"
                                    value={siteData.postsCount}
                                    onChange={(e) => updateField('postsCount', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mídias (ex: 1.4k)</label>
                                <input
                                    type="text"
                                    value={siteData.mediaCount}
                                    onChange={(e) => updateField('mediaCount', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Likes (ex: 75.9k)</label>
                                <input
                                    type="text"
                                    value={siteData.stats.likes}
                                    onChange={(e) => updateStats('likes', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="admin-section">
                        <h4>Links de Pagamento (Gateway)</h4>
                        <div className="form-group">
                            <label>Link de 1 mês</label>
                            <input
                                type="text"
                                placeholder="https://..."
                                value={siteData.paymentLinks.month1}
                                onChange={(e) => updatePaymentLink('month1', e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Link de 3 meses</label>
                            <input
                                type="text"
                                placeholder="https://..."
                                value={siteData.paymentLinks.month3}
                                onChange={(e) => updatePaymentLink('month3', e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Link de 6 meses</label>
                            <input
                                type="text"
                                placeholder="https://..."
                                value={siteData.paymentLinks.month6}
                                onChange={(e) => updatePaymentLink('month6', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="admin-section">
                        <h4>Persistência Global</h4>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                            As alterações no painel ficam salvas no seu navegador. Para salvar para **todos os usuários**, clique no botão abaixo e me envie o código gerado.
                        </p>
                        <button className="export-btn" onClick={() => {
                            const data = JSON.stringify(siteData, null, 2);
                            navigator.clipboard.writeText(data);
                            alert('Código da configuração copiado! Me envie esse código no chat para eu salvar para todo mundo.');
                        }}>
                            Copiar Configuração para o Chat
                        </button>
                    </div>

                    <div className="admin-actions">
                        <button className="reset-btn" onClick={resetData}>Resetar Padrão</button>
                        <button className="save-btn" onClick={() => setIsOpen(false)}>Fechar Painel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
