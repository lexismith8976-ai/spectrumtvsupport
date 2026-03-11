import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../../styles/components/header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/faq', label: 'FAQs' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/cancellation-policy', label: 'Return Policy' },
    { path: '/terms-conditions', label: 'Terms & Conditions' },
    { path: '/troubleshooting', label: 'Troubleshooting' },
    { path: '/billing', label: 'Billing' },
    { path: '/login', label: 'Login' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logoContainer}>
            <span className={styles.logoIcon}>📺</span>
            <div>
              <h1 className={styles.logo}>Spectrum Support</h1>
              <p className={styles.tagline}>Help Center</p>
            </div>
          </Link>

          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navMobile : ''}`}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.path} className={styles.navItem}>
                  <Link
                    to={item.path}
                    className={`${styles.navLink} ${location.pathname === item.path ? styles.navLinkActive : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;