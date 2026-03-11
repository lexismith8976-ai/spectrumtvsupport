import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTwitter, FaFacebook, FaInstagram, FaYoutube, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight,
  FaSignInAlt, FaUserPlus 
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '../../styles/components/footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.footerAbout}>
            <div className={styles.footerLogo}>
              <span className={styles.footerLogoIcon}>📺</span>
              <span className={styles.footerLogoText}>Spectrum Support</span>
            </div>
            <p className={styles.footerDescription}>
              Your trusted help center for all Spectrum TV support needs. 
              Get 24/7 assistance with streaming, billing, and technical issues.
            </p>
            
            {/* Login & Sign Up Buttons - NEW */}
            <div className={styles.authButtons}>
              <Link to="/login" className={styles.authButton}>
                <FaSignInAlt /> Sign In
              </Link>
              <Link to="/signup" className={styles.authButtonPrimary}>
                <FaUserPlus /> Sign Up
              </Link>
            </div>

            <div className={styles.socialLinks}>
              <motion.a 
                href="#" 
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/faq">
                  <FaArrowRight size={12} /> FAQ
                </Link>
              </li>
              <li>
                <Link to="/troubleshooting">
                  <FaArrowRight size={12} /> Troubleshooting
                </Link>
              </li>
              <li>
                <Link to="/billing">
                  <FaArrowRight size={12} /> Billing
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <FaArrowRight size={12} /> Privacy
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <FaArrowRight size={12} /> Login
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <FaArrowRight size={12} /> Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={styles.footerTitle}>Support</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="tel:+18332676094">
                  <FaPhone size={12} /> (833) 267-6094
                </a>
              </li>
              <li>
                <a href="mailto:support@spectrum.com">
                  <FaEnvelope size={12} /> support@spectrum.com
                </a>
              </li>
              <li>
                <a href="#">
                  <FaMapMarkerAlt size={12} /> Find a Store
                </a>
              </li>
              <li>
                <Link to="/cancellation-policy">
                  <FaArrowRight size={12} /> Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={styles.footerTitle}>Stay Updated</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
              Get the latest updates and support tips
            </p>
            <form onSubmit={handleNewsletter} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.newsletterInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                className={styles.newsletterButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdEmail />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Spectrum TV Support. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-conditions">Terms</Link>
            <Link to="/cancellation-policy">Cancellation</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p>
            <strong>Disclaimer:</strong> This website is an independent informational support resource 
            and is not officially affiliated with, endorsed by, or sponsored by Spectrum TV, 
            Charter Communications, Inc., or any of their affiliates. All trademarks, service marks, 
            trade names, and logos mentioned are the property of their respective owners. 
            For official Spectrum customer support, visit spectrum.net or call (833) 267-6094.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;