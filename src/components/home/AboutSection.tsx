import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaTv, FaMobile, FaLaptop, FaTabletAlt } from 'react-icons/fa';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const devices = [
    { icon: FaTv, name: 'Smart TVs' },
    { icon: FaMobile, name: 'Mobile Phones' },
    { icon: FaTabletAlt, name: 'Tablets' },
    { icon: FaLaptop, name: 'Web Browsers' }
  ];

  const features = [
    '24/7 Customer Support',
    'Live Chat Available',
    'Video Tutorials',
    'Step-by-Step Guides'
  ];

  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid} ref={ref}>
          <motion.div 
            className={styles.aboutContent}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.aboutTitle}>About Spectrum TV</h2>
            <p className={styles.aboutText}>
              Spectrum is Charter Communications' streaming service offering thousands of hours 
              of content including live sports, hit TV shows, movies, and original programming. 
              Spectrum TV support is here to ensure subscribers enjoy a seamless, uninterrupted 
              streaming experience across all compatible devices.
            </p>
            
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <FaCheckCircle className={styles.featureIcon} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.devicesSection}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.devicesTitle}>Compatible Devices</h3>
            <div className={styles.devicesGrid}>
              {devices.map((device, index) => (
                <motion.div 
                  key={index}
                  className={styles.deviceCard}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <device.icon className={styles.deviceIcon} />
                  <span className={styles.deviceName}>{device.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className={styles.statsBox}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10M+</span>
                <span className={styles.statLabel}>Active Users</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;