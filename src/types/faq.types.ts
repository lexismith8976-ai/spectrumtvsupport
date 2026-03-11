export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  items: FAQItem[];
}

export interface FAQCategoryProps {
  category: FAQCategory;
  isOpen?: boolean;
  onToggle?: () => void;
}