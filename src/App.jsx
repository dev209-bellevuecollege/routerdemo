import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import { ProtectedRoute } from './components/ProtectedRoute'
import About from './pages/About';
import Team from './pages/About/Team';
import Company from './pages/About/Company';
import Dashboard from './pages/Dashboard';
import DashboardSettings from './pages/Dashboard/Settings';
import DashboardProfile from './pages/Dashboard/Profile';
import User from './pages/User';
import UserPosts from './pages/User/Posts';
import UserSettings from './pages/User/Settings';

// Main App Component
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="team" element={<Team />} />
              <Route path="company" element={<Company />} />
            </Route>
            <Route path="login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="settings" element={<DashboardSettings />} />
                <Route path="profile" element={<DashboardProfile />} />
              </Route>
              
              {/* User Routes with URL Parameters */}
              <Route path="users/:userId" element={<User />}>
                <Route path="posts" element={<UserPosts />} />
                <Route path="settings" element={<UserSettings />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;