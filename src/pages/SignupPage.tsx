import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTv, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import './LoginPage.css'; // Reuse the same CSS

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

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
            <p className="brand-subtitle">Join the Entertainment Revolution</p>
            
            <div className="brand-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Free Trial Available</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Cancel Anytime</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>No Contracts</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Multi-Device Streaming</span>
              </div>
            </div>

            <div className="brand-quote">
              "Join millions of satisfied customers experiencing the best in entertainment."
            </div>
          </div>
        </motion.div>

        {/* Right Side - Sign Up Form */}
        <motion.div 
          className="login-form-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="form-header">
            <h2>Create Account</h2>
            <p>Start your Spectrum TV journey today</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="fullName">
                <FaUser className="input-icon" />
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
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
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
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

            <div className="form-group">
              <label htmlFor="confirmPassword">
                <FaLock className="input-icon" />
                Confirm Password
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <span className="checkmark"></span>
                I agree to the <a href="https://getchatsupport.live/" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="https://getchatsupport.live/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              </label>
            </div>

            <motion.button
              type="submit"
              className="login-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Account
            </motion.button>

            <div className="social-login">
              <p className="social-divider">Or sign up with</p>
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
              Already have an account?{' '}
              <Link to="/login" className="signup-link">
                Sign in
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

export default SignupPage;