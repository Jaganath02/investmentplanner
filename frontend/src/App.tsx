import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Investments from './pages/Investments';
import InvestmentDetail from './pages/InvestmentDetail';
import Profile from './pages/Profile';
import TaxCalculator from './pages/TaxCalculator';
import BuyVsRent from './pages/BuyVsRent';
import SIPCalculator from './pages/SIPCalculator';
import PPFCalculator from './pages/PPFCalculator';
import HomeLoanEMI from './pages/HomeLoanEMI';
import NotFound from './pages/NotFound';

// Google Analytics
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your tracking ID
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Calculator routes (public) */}
          <Route path="/tax-calculator" element={<TaxCalculator />} />
          <Route path="/buy-vs-rent" element={<BuyVsRent />} />
          <Route path="/sip-calculator" element={<SIPCalculator />} />
          <Route path="/ppf-calculator" element={<PPFCalculator />} />
          <Route path="/home-loan-emi" element={<HomeLoanEMI />} />
          
          {/* Protected routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/investments" 
            element={
              <ProtectedRoute>
                <Investments />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/investments/:id" 
            element={
              <ProtectedRoute>
                <InvestmentDetail />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;