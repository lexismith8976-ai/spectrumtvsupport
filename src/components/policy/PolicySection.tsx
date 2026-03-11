import React from 'react';
import { PolicySection } from '../../types/policy.types';

interface PolicySectionProps {
  section: PolicySection;
}

const PolicySectionComponent: React.FC<PolicySectionProps> = ({ section }) => {
  return (
    <div className="policy-section">
      <h2>{section.title}</h2>
      <p>{section.content}</p>
      {section.subsections && section.subsections.map((subsection, index) => (
        <div key={index} className="policy-subsection">
          <h3>{subsection.title}</h3>
          <p>{subsection.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PolicySectionComponent;