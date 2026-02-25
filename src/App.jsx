import React, { useState } from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import SubscriptionPlans from './components/SubscriptionPlans';
import PostCard from './components/PostCard';
import AdminPanel from './components/AdminPanel';
import { useSiteData } from './hooks/useSiteData';
import './App.css';

function App() {
  const { siteData, updateField, updateStats, resetData, isAdmin, login, logout } = useSiteData();
  const [activeTab, setActiveTab] = useState('posts');
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 >= 3) {
      // Trigger login prompt (managed by AdminPanel but we need to show it)
      // Since AdminPanel handles its own showLogin state, we can use a trick
      // or just add a global state. For now, let's look at AdminPanel.jsx
      // It uses a button .admin-trigger. Let's make that button bigger or 
      // just set showLogin to true via ref or a shared state.
      // Easiest is to add an 'openLogin' function to useSiteData or similar.
      setClickCount(0);
      window.dispatchEvent(new CustomEvent('open-admin-login'));
    }
  };

  return (
    <div className="app">
      <Header onLogoClick={handleLogoClick} />
      <main className="container-inner d-lg-flex d-md-flex mx-auto">
        <div className="render-wrapper w-100">
          <ProfileHeader data={siteData} />
          <SubscriptionPlans />

          <div className="tabs-navigation">
            <div className="tabs-container">
              <button
                className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
                onClick={() => setActiveTab('posts')}
              >
                <span className="tab-count">{siteData.postsCount}</span>
                <span className="tab-label">Postagens</span>
              </button>
              <button
                className={`tab ${activeTab === 'media' ? 'active' : ''}`}
                onClick={() => setActiveTab('media')}
              >
                <span className="tab-count">{siteData.mediaCount}</span>
                <span className="tab-label">Mídias</span>
              </button>
            </div>
          </div>

          <div className="feed-container">
            <PostCard data={siteData} />
            <PostCard data={siteData} />
          </div>
        </div>
      </main>

      <div className="cookie-container">
        <span className="cookie-description">
          Privacy utiliza cookies e tecnologias similares para fornecer, manter e melhorar nossos serviços. Se você aceitar, usaremos esses dados para personalização e análises associadas. Para mais informações, leia nossa <a href="#">Política de Privacidade</a>.
        </span>
        <button className="cookie-button">
          Aceitar
        </button>
      </div>

      <AdminPanel
        siteData={siteData}
        updateField={updateField}
        updateStats={updateStats}
        resetData={resetData}
        isAdmin={isAdmin}
        login={login}
        logout={logout}
      />
    </div>
  );
}

export default App;
