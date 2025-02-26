// src/pages/User/Settings.js
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const UserSettings = () => {
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'general';

  const handleTabChange = (newTab) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <div>
      <h2>Settings for User {userId}</h2>
      <div>
        <button onClick={() => handleTabChange('general')} 
                style={{ fontWeight: tab === 'general' ? 'bold' : 'normal' }}>
          General
        </button>
        <button onClick={() => handleTabChange('privacy')}
                style={{ fontWeight: tab === 'privacy' ? 'bold' : 'normal' }}>
          Privacy
        </button>
        <button onClick={() => handleTabChange('notifications')}
                style={{ fontWeight: tab === 'notifications' ? 'bold' : 'normal' }}>
          Notifications
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {tab === 'general' && <h3>General Settings Content</h3>}
        {tab === 'privacy' && <h3>Privacy Settings Content</h3>}
        {tab === 'notifications' && <h3>Notifications Settings Content</h3>}
      </div>
    </div>
  );
};

export default UserSettings;