import React, { useState } from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import SubscriptionPlans from './components/SubscriptionPlans';
import PostCard from './components/PostCard';
import MediaGrid from './components/MediaGrid';
import AdminPanel from './components/AdminPanel';
import { useSiteData } from './hooks/useSiteData';
import './App.css';

function App() {
  const { siteData, updateField, updateStats, resetData, isAdmin, login, logout } = useSiteData();
  const [activeTab, setActiveTab] = useState('posts'); // 'posts' or 'media'
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'photos', 'videos'
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
          <SubscriptionPlans data={siteData} />

          <div className="tab-navigation">
            <div className={`tab-item ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => setActiveTab('posts')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              <span>Postagens ({siteData.stats.posts})</span>
            </div>
            <div className={`tab-item ${activeTab === 'media' ? 'active' : ''}`} onClick={() => setActiveTab('media')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><path d="M15.5 11.5l-4 3 4 3z"></path></svg>
              <span>Mídias ({siteData.stats.media})</span>
            </div>
          </div>

          {activeTab === 'media' && (
            <div className="filter-capsules">
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>Todos</button>
              <button className={`filter-btn ${activeFilter === 'photos' ? 'active' : ''}`} onClick={() => setActiveFilter('photos')}>Fotos</button>
              <button className={`filter-btn ${activeFilter === 'videos' ? 'active' : ''}`} onClick={() => setActiveFilter('videos')}>Vídeos</button>
            </div>
          )}

          <div className="feed-container">
            {activeTab === 'posts' ? (
              siteData.posts.map(post => (
                <PostCard key={post.id} data={siteData} post={post} />
              ))
            ) : (
              <MediaGrid posts={siteData.posts} />
            )}
          </div>
        </div>
      </main>



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
