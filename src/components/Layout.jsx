import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, Outlet, useNavigate } from 'react-router-dom';// Layout Component


const Layout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {user ? (
            <li><button onClick={handleLogout}>Logout ({user})</button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
          {user && (
            <li><Link to={`/users/${user}`}>My Profile</Link></li>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;