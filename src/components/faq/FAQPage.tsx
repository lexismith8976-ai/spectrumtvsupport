import React, { useState } from 'react';
import FAQCategory from './FAQCategory';
import { faqCategories } from '../../data/faqData';
import PageHeader from '../common/PageHeader';

const FAQPage: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Find quick answers to the most common Spectrum TV support questions. Browse by category below."
      />
      
      <section className="faq-section">
        <div className="container">
          {faqCategories.map(category => (
            <FAQCategory
              key={category.id}
              category={category}
              isOpen={openCategories.includes(category.id)}
              onToggle={() => toggleCategory(category.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQPage;