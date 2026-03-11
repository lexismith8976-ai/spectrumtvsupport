import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaUserCheck, FaCreditCard, FaCopyright, FaBan, FaExclamationTriangle, FaBalanceScale, FaEnvelopeOpen } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import './PolicyPages.css';

const TermsConditionsPage: React.FC = () => {
  const sections = [
    {
      icon: <FaGavel />,
      title: "1. Acceptance of Terms",
      content: `By creating a Spectrum account, accessing the Spectrum TV platform, or using any Spectrum TV streaming service features, you confirm that you have read, understood, and agree to these Terms and Conditions. If you do not agree to these terms, you may not use the Spectrum TV service. These terms apply to all users including free-plan subscribers, paid subscribers, and visitors who access any Spectrum TV content.`
    },
    {
      icon: <FaUserCheck />,
      title: "2. Eligibility",
      content: `The Spectrum TV streaming service is available to customers in Charter Communications service areas. You must be 18 years of age or older to open an account. Services are for residential use only unless you have a business account. Using a VPN or proxy to circumvent geographic restrictions violates Spectrum's terms of service.`
    },
    {
      icon: <FaUserCheck />,
      title: "3. Your Spectrum Account",
      content: `You are responsible for maintaining the confidentiality of your Spectrum account credentials, including your email address and password. You agree not to share your account login details with individuals outside your household. Any activity that occurs under your account is your responsibility. Spectrum reserves the right to suspend or terminate accounts that violate these terms, including accounts suspected of unauthorized sharing or fraudulent activity.`
    },
    {
      icon: <FaCreditCard />,
      title: "4. Subscription and Payment Terms",
      content: `Spectrum TV subscriptions are billed on a recurring basis — monthly. By subscribing, you authorize Spectrum to charge your payment method on file at the beginning of each billing cycle. Spectrum reserves the right to change subscription pricing with reasonable notice to subscribers. Your continued use of the service after a price change constitutes acceptance of the new pricing. Promotional rates are subject to the specific terms of each promotion and may not be combined with other offers.`
    },
    {
      icon: <FaCopyright />,
      title: "5. Content Licensing and Intellectual Property",
      content: `All content available through Spectrum TV — including movies, television shows, sports broadcasts, news content, and original programming — is protected by copyright and other intellectual property laws. By subscribing to Spectrum TV, you are granted a limited, non-exclusive, non-transferable license to stream content for personal, non-commercial viewing only within the licensed territory. You may not download, reproduce, redistribute, broadcast, publicly display, or create derivative works from any Spectrum TV content unless expressly authorized.`
    },
    {
      icon: <FaBan />,
      title: "6. Prohibited Uses",
      content: `When using the Spectrum TV streaming service, you agree not to: attempt to bypass digital rights management (DRM) protections; use automated scripts or bots to access the service; reverse-engineer or decompile any part of the Spectrum TV application; upload or transmit malicious code; engage in any activity that disrupts or interferes with Spectrum servers or infrastructure; or use the service for any commercial purpose without prior written authorization from Charter Communications.`
    },
    {
      icon: <FaExclamationTriangle />,
      title: "7. Disclaimers and Limitation of Liability",
      content: `Spectrum TV provides the streaming service on an "as is" and "as available" basis without warranties of any kind, either express or implied. Spectrum does not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components. To the maximum extent permitted by applicable law, Spectrum's total liability for any claims arising out of or related to these terms or the service will not exceed the amount you paid for the service in the three months preceding the claim.`
    },
    {
      icon: <FaBalanceScale />,
      title: "8. Modifications to the Service and Terms",
      content: `Spectrum TV reserves the right to modify, suspend, or discontinue any aspect of the streaming service at any time, including content availability, features, and pricing, with or without notice. Spectrum may also update these Terms and Conditions from time to time. Continued use of the Spectrum TV service after changes are posted constitutes your acceptance of the revised terms. Users are encouraged to review these terms periodically.`
    },
    {
      icon: <FaBalanceScale />,
      title: "9. Governing Law and Disputes",
      content: `These Terms and Conditions are governed by the laws of the State of New York, United States, without regard to conflict of law principles. Any disputes arising from your use of Spectrum TV that cannot be resolved through Spectrum customer support may be subject to binding arbitration under the rules of the American Arbitration Association. Class action lawsuits against Spectrum are waived under these terms to the fullest extent permitted by law.`
    },
    {
      icon: <FaEnvelopeOpen />,
      title: "10. Contact Information",
      content: `For questions regarding these Terms and Conditions, please contact Spectrum through the official Help Center available at spectrum.net/help. Spectrum's support team is available to address service-related questions and account issues. Legal notices should be directed to Charter Communications, Inc., as described in the official terms of service on the Spectrum website.`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Terms & Conditions"
        subtitle="Last Updated: January 1, 2026"
      />
      
      <section className="policy-page">
        <div className="container">
          <div className="policy-intro legal-notice">
            <p>
              <strong>Please read these terms carefully before using the Spectrum TV streaming service.</strong> 
              By accessing or using Spectrum TV, you agree to be bound by these terms. The following is a summary 
              of key terms governing use of the Spectrum TV streaming service.
            </p>
          </div>

          <div className="policy-grid">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                className="policy-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-xl)' }}
              >
                <div className="policy-card-header">
                  <div className="policy-card-icon">{section.icon}</div>
                  <h2 className="policy-card-title">{section.title}</h2>
                </div>
                <div className="policy-card-content">
                  <p>{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="policy-footer-note">
            <p>
              For the complete, legally binding Terms of Service, please refer to the official terms published 
              at <a href="https://www.spectrum.net/terms" target="_blank" rel="noopener noreferrer">spectrum.net/terms</a>.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsConditionsPage;