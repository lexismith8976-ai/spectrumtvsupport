import React from 'react';
import FAQItem from './FAQItem';
import { FAQCategory as FAQCategoryType } from '../../types/faq.types';

interface FAQCategoryProps {
  category: FAQCategoryType;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ category, isOpen, onToggle }) => {
  return (
    <div className="faq-category">
      <button 
        className={`category-title ${isOpen ? 'active' : ''}`}
        onClick={onToggle}
      >
        <span className="category-icon">{category.icon}</span>
        <h3>{category.title}</h3>
        <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="category-items">
          {category.items.map(item => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQCategory;