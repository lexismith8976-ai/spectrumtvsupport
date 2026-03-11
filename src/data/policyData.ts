import { RefundScenario, PolicySection } from '../types/policy.types';

export const refundScenarios: RefundScenario[] = [
  {
    scenario: 'Cancel within 7 days of new subscription (first-time subscriber)',
    eligibility: 'Possible refund — contact Spectrum TV support',
    status: 'eligible'
  },
  {
    scenario: 'Cancel mid-billing cycle (existing subscriber)',
    eligibility: 'Access continues until period ends; no partial refund',
    status: 'partial'
  },
  {
    scenario: 'Annual plan cancellation',
    eligibility: 'Contact support — reviewed case by case',
    status: 'review'
  },
  {
    scenario: 'Third-party billed subscription (Apple/Google)',
    eligibility: 'Handled by Apple or Google — not Spectrum directly',
    status: 'third-party'
  },
  {
    scenario: 'Free plan cancellation',
    eligibility: 'No charges — cancel anytime',
    status: 'eligible'
  },
  {
    scenario: 'Promotional or discounted subscription',
    eligibility: 'Typically non-refundable unless specified in offer terms',
    status: 'non-refundable'
  }
];

export const privacyPolicySections: PolicySection[] = [
  {
    id: 'information-collect',
    title: '1. Information We Collect',
    content: 'Spectrum TV collects several categories of personal information to deliver its streaming service. This includes information you provide directly, such as your name, email address, date of birth, and billing information when you create a Spectrum TV account or subscribe to a plan. Spectrum TV also collects usage data automatically, including the content you watch, your search history within the platform, how long you watch, device identifiers, IP addresses, and general location data.'
  },
  {
    id: 'information-use',
    title: '2. How We Use Your Information',
    content: 'Spectrum TV uses your personal information to provide and improve the streaming service, process subscription payments, personalize your content recommendations, send service-related notifications, and comply with legal obligations. Your viewing history and engagement data help Spectrum TV\'s recommendation engine suggest relevant shows, movies, and live events that match your interests.'
  },
  {
    id: 'information-sharing',
    title: '3. How We Share Your Information',
    content: 'Spectrum TV, as a service of NBCUniversal, may share your personal information with affiliated NBCUniversal companies and with trusted third-party service providers who assist in delivering the service, such as payment processors, cloud infrastructure providers, analytics partners, and customer service platforms.'
  },
  {
    id: 'cookies',
    title: '4. Cookies and Tracking Technologies',
    content: 'Spectrum TV uses cookies, web beacons, pixel tags, and similar tracking technologies to operate its website and app, remember your preferences, analyze site traffic, and serve relevant advertising. You can manage cookie preferences through your browser settings.'
  },
  {
    id: 'data-retention',
    title: '5. Data Retention',
    content: 'Spectrum TV retains your personal information for as long as your account is active and for a reasonable period thereafter in order to fulfill legal obligations, resolve disputes, and enforce agreements.'
  },
  {
    id: 'rights-choices',
    title: '6. Your Rights and Choices',
    content: 'Depending on your state or country of residence, you may have rights under applicable data protection laws including the right to access, correct, delete, or restrict the processing of your personal information.'
  },
  {
    id: 'children-privacy',
    title: "7. Children's Privacy",
    content: "Spectrum TV's streaming service is not directed to children under the age of 13, and Spectrum TV does not knowingly collect personal information from children under 13 without verifiable parental consent."
  },
  {
    id: 'security',
    title: '8. Security of Your Information',
    content: 'Spectrum TV employs industry-standard security measures including encryption, secure server infrastructure, and access controls to protect your personal information from unauthorized access, disclosure, alteration, or destruction.'
  },
  {
    id: 'contact',
    title: '9. Contact for Privacy Concerns',
    content: 'For privacy-related questions, data access requests, or to report a privacy concern related to your Spectrum TV account, please use the official Spectrum TV privacy inquiry form available on the spectrumtv.com website under the Privacy section.'
  }
];