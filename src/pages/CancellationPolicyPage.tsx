import React from 'react';
import { motion } from 'framer-motion';
import { FaTimesCircle, FaUndo, FaMoneyBillWave, FaCalendarAlt, FaTrashAlt, FaGift } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import './PolicyPages.css';

const CancellationPolicyPage: React.FC = () => {
  const scenarios = [
    {
      scenario: 'Cancel within 30 days of new service',
      eligibility: 'Full refund for first-time customers',
      status: 'eligible',
      icon: <FaUndo />
    },
    {
      scenario: 'Cancel mid-billing cycle',
      eligibility: 'Prorated credit for remaining days',
      status: 'partial',
      icon: <FaMoneyBillWave />
    },
    {
      scenario: 'Equipment return within 14 days',
      eligibility: 'Full equipment credit',
      status: 'eligible',
      icon: <FaUndo />
    },
    {
      scenario: 'Premium channel add-on cancellation',
      eligibility: 'Prorated credit for premium channels',
      status: 'partial',
      icon: <FaMoneyBillWave />
    },
    {
      scenario: 'Moving out of service area',
      eligibility: 'No early termination fee, prorated credit',
      status: 'eligible',
      icon: <FaCalendarAlt />
    },
    {
      scenario: 'Promotional discount cancellation',
      eligibility: 'Regular rates apply, no refund on services used',
      status: 'non-refundable',
      icon: <FaGift />
    }
  ];

  const getStatusClass = (status: string) => {
    const map: Record<string, string> = {
      'eligible': 'status-badge status-eligible',
      'partial': 'status-badge status-partial',
      'review': 'status-badge status-review',
      'third-party': 'status-badge status-third-party',
      'non-refundable': 'status-badge status-non-refundable'
    };
    return map[status] || 'status-badge';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Return & Cancellation Policy"
        subtitle="Last Updated: January 1, 2026"
      />
      
      <section className="policy-page">
        <div className="container">
          <div className="policy-intro">
            <p>
              Everything you need to know about canceling your <strong>Spectrum TV subscription</strong>, 
              requesting refunds, and managing your plan changes.
            </p>
          </div>

          <motion.div 
            className="refund-table-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">
              <FaMoneyBillWave className="section-icon" />
              Refund Eligibility
            </h2>
            <div className="refund-grid">
              {scenarios.map((item, index) => (
                <motion.div 
                  key={index}
                  className="refund-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-xl)' }}
                >
                  <div className="refund-card-icon">{item.icon}</div>
                  <div className="refund-card-content">
                    <h3 className="refund-card-title">{item.scenario}</h3>
                    <p className="refund-card-eligibility">{item.eligibility}</p>
                    <span className={getStatusClass(item.status)}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="policy-sections-grid">
            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="section-heading">
                <FaTimesCircle className="section-icon" />
                How to Cancel Your Spectrum TV Subscription
              </h2>
              <div className="section-content">
                <p>
                  Canceling your Spectrum TV subscription can be done in several ways:
                </p>
                <ul className="styled-list">
                  <li><strong>Online:</strong> Sign in to your account at spectrum.net, navigate to "Account," and select "Manage Plan" or "Cancel Service."</li>
                  <li><strong>Phone:</strong> Call Spectrum Customer Service at <a href="tel:+18332676094">(833) 267-6094</a></li>
                  <li><strong>In Person:</strong> Visit a local Spectrum store with your account information</li>
                </ul>
                <p className="note">
                  <strong>Note:</strong> Your Spectrum TV access will continue until the end of your current paid billing period — 
                  you will not lose access immediately upon cancellation. You'll receive a confirmation email once your cancellation is processed.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="section-heading">
                <FaMoneyBillWave className="section-icon" />
                Refund Policy
              </h2>
              <div className="section-content">
                <p>
                  Spectrum's general refund policy is that subscription fees are non-refundable once a billing cycle has begun. 
                  However, Spectrum may issue refunds at its discretion in cases of:
                </p>
                <ul className="styled-list">
                  <li>Technical errors preventing service access</li>
                  <li>Accidental duplicate charges</li>
                  <li>First-time subscribers who contact support within 30 days of initial charge</li>
                </ul>
                <p>
                  Refund requests are reviewed on a case-by-case basis. Always contact Spectrum customer support directly 
                  to discuss your specific circumstances before expecting a refund.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="section-heading">
                <FaCalendarAlt className="section-icon" />
                Subscription Plan Changes
              </h2>
              <div className="section-content">
                <p>
                  You may upgrade or downgrade your Spectrum TV subscription plan at any time through your account settings.
                </p>
                <ul className="styled-list">
                  <li><strong>Upgrading:</strong> Takes effect immediately, with any price difference prorated based on your billing cycle</li>
                  <li><strong>Downgrading:</strong> Typically takes effect at the start of your next billing period</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="section-heading">
                <FaGift className="section-icon" />
                Free Trial Cancellations
              </h2>
              <div className="section-content">
                <p>
                  If Spectrum TV offers a free trial promotion, you can cancel at any time before the trial ends without being charged. 
                  If you do not cancel before the trial period expires, your subscription will automatically convert to the paid plan 
                  you selected when signing up. Spectrum recommends setting a reminder before your trial expires if you do not wish to 
                  continue with a paid subscription.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="section-heading">
                <FaTrashAlt className="section-icon" />
                Account Deletion vs. Subscription Cancellation
              </h2>
              <div className="section-content">
                <p>
                  Canceling your Spectrum TV subscription and deleting your account are two different actions:
                </p>
                <ul className="styled-list">
                  <li><strong>Canceling your subscription:</strong> Stops future billing while your account data is retained</li>
                  <li><strong>Deleting your account:</strong> Permanently removes your profile, watch history, and saved preferences</li>
                </ul>
                <p>
                  If you want to delete your account entirely, contact Spectrum support after canceling your subscription. 
                  Deleted accounts cannot be recovered.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="section-heading">
                <FaUndo className="section-icon" />
                Equipment Return Policy
              </h2>
              <div className="section-content">
                <p>
                  All Spectrum equipment (cable boxes, modems, remotes) must be returned within 14 days of service cancellation 
                  to avoid equipment charges. You can return equipment at any Spectrum store or ship it using the provided prepaid 
                  shipping label. Keep your receipt as proof of return.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CancellationPolicyPage;