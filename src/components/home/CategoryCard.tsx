import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/components/cards.module.css';

interface CategoryCardProps {
  category: {
    icon: string;
    title: string;
    description: string;
    link: string;
    badge?: string;
    color?: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className={styles.cardWrapper}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={category.link} className={styles.cardLink}>
        <div className={styles.card}>
          {category.badge && (
            <span className={styles.cardBadge}>{category.badge}</span>
          )}
          
          <div 
            className={styles.cardIcon}
            style={{ background: category.color ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)` : undefined }}
          >
            <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
          </div>
          
          <h3 className={styles.cardTitle}>{category.title}</h3>
          <p className={styles.cardDescription}>{category.description}</p>
          
          <div className={styles.cardLinkIndicator}>
            Learn More <FaArrowRight />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;