import React from 'react';
import { PolicySection as PolicySectionType } from '../../types/policy.types';
import PolicySectionComponent from './PolicySection';
import PageHeader from '../common/PageHeader';

interface PolicyPageProps {
  title: string;
  lastUpdated?: string;
  sections: PolicySectionType[];
}

const PolicyPage: React.FC<PolicyPageProps> = ({ title, lastUpdated, sections }) => {
  return (
    <>
      <PageHeader 
        title={title}
        subtitle={lastUpdated ? `Last Updated: ${lastUpdated}` : undefined}
      />
      
      <section className="policy-content">
        <div className="container">
          {sections.map(section => (
            <PolicySectionComponent key={section.id} section={section} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PolicyPage;