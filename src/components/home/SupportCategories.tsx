import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CategoryCard from './CategoryCard';
import styles from '../../styles/components/cards.module.css';

const categories = [
  {
    id: 1,
    icon: '❓',
    title: 'Frequently Asked Questions',
    description: 'Quick answers to common questions about Spectrum TV streaming, subscriptions, accounts, and devices.',
    link: '/faq',
    badge: 'Most Popular',
    color: '#0055b7'
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Privacy Policy',
    description: 'Learn how Spectrum protects your personal data and viewing information.',
    link: '/privacy-policy',
    badge: 'Important',
    color: '#ff6b00'
  },
  {
    id: 3,
    icon: '↩',
    title: 'Return & Cancellation',
    description: 'Everything about Spectrum service cancellations, refunds, and managing your plan.',
    link: '/cancellation-policy',
    badge: 'Updated',
    color: '#00b7ff'
  },
  {
    id: 4,
    icon: '📋',
    title: 'Terms & Conditions',
    description: 'Read Spectrum\'s terms of service and usage guidelines.',
    link: '/terms-conditions',
    badge: 'Legal',
    color: '#28a745'
  },
  {
    id: 5,
    icon: '⚙️',
    title: 'Troubleshooting',
    description: 'Fix buffering, playback errors, login issues, and device problems with Spectrum TV.',
    link: '/troubleshooting',
    badge: 'Help',
    color: '#dc3545'
  },
  {
    id: 6,
    icon: '💳',
    title: 'Billing & Subscription',
    description: 'Manage Spectrum payments, update methods, and review billing history.',
    link: '/billing',
    badge: 'Support',
    color: '#6f42c1'
  }
];

const SupportCategories: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            How Can We Help You Today?
          </motion.h2>
          <motion.p 
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Browse our support categories for quick solutions to your Spectrum TV questions
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className={styles.cardGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportCategories;