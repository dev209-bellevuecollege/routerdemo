import { useNavigate, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    // Using navigate programmatically
    navigate('/dashboard/settings');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleButtonClick}>Go to Settings</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;