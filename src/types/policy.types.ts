export interface RefundScenario {
  scenario: string;
  eligibility: string;
  status: 'eligible' | 'partial' | 'review' | 'third-party' | 'non-refundable';
}

export interface PolicySection {
  id: string;
  title: string;
  content: string;
  subsections?: PolicySubsection[];
}

export interface PolicySubsection {
  title: string;
  content: string;
}