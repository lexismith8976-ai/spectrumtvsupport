import React from 'react';
import { RefundScenario } from '../../types/policy.types';

interface RefundTableProps {
  scenarios: RefundScenario[];
}

const RefundTable: React.FC<RefundTableProps> = ({ scenarios }) => {
  const getStatusClass = (status: string): string => {
    const statusMap: Record<string, string> = {
      'eligible': 'status-eligible',
      'partial': 'status-partial',
      'review': 'status-review',
      'third-party': 'status-third-party',
      'non-refundable': 'status-non-refundable'
    };
    return statusMap[status] || '';
  };

  return (
    <table className="refund-table">
      <thead>
        <tr>
          <th>Scenario</th>
          <th>Refund Eligibility</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {scenarios.map((scenario, index) => (
          <tr key={index}>
            <td>{scenario.scenario}</td>
            <td>{scenario.eligibility}</td>
            <td>
              <span className={`status ${getStatusClass(scenario.status)}`}>
                {scenario.status.replace('-', ' ')}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RefundTable;