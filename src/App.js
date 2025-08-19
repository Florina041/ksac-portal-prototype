import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Societies from './pages/Societies';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Navbar />
          <div style={{ display: 'flex', flex: 1 }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/societies"
                  element={
                    <ProtectedRoute>
                      <Societies />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;