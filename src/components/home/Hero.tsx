import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaTv, FaHeadset } from 'react-icons/fa';
import styles from '../../styles/components/hero.module.css';

const Hero: React.FC = () => {
  const stats = [
    { number: '24/7', label: 'Support', icon: FaHeadset },
    { number: '100%', label: 'Satisfaction', icon: FaShieldAlt },
    { number: '1M+', label: 'Users', icon: FaTv }
  ];

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <motion.span 
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ⚡ OFFICIAL HELP CENTER
          </motion.span>
          
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.heroTitleGradient}>
              Spectrum TV
            </span>
            <br />
            <span className={styles.heroSubText}> {/* New class for the sub text */}
              Support & Help Center
            </span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Find answers to all your Spectrum TV streaming questions, billing issues, 
            account help, and more — all in one place with our 24/7 support.
          </motion.p>
          
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/faq" className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>
              Get Started
            </Link>
            <Link to="/troubleshooting" className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>
              Watch Tutorial
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className={styles.statItem}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon size={32} color="#ff6b00" />
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;