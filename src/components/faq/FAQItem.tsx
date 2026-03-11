import React, { useState } from 'react';
import { FAQItem as FAQItemType } from '../../types/faq.types';

interface FAQItemProps {
  item: FAQItemType;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.question}</span>
        <span className="faq-toggle">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;