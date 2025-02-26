import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile - ID: {userId}</h1>
      <nav>
        <ul>
          <li><Link to="posts">User's Posts</Link></li>
          <li><Link to="settings">User Settings</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default User;