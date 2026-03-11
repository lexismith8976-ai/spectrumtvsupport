import React from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaHistory, FaExclamationTriangle, FaPhone, FaEnvelope, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import './PolicyPages.css';

const BillingPage: React.FC = () => {
  const plans = [
    { name: 'TV Select', channels: '125+', price: 'Starting at $64.99', features: ['Local channels', 'News & entertainment', 'Sports basics'] },
    { name: 'Silver', channels: '175+', price: 'Starting at $84.99', features: ['Everything in Select', 'Regional sports', 'More premium channels'] },
    { name: 'Gold', channels: '200+', price: 'Starting at $104.99', features: ['Everything in Silver', 'All premium channels', 'International options'] }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader title="Billing & Subscription Help" />
      
      <section className="policy-page">
        <div className="container">
          <div className="plans-showcase">
            <h2 className="section-heading">
              <FaCreditCard className="section-icon" />
              Subscription Plans
            </h2>
            <div className="plans-grid">
              {plans.map((plan, index) => (
                <motion.div 
                  key={index}
                  className="plan-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-xl)' }}
                >
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-channels">{plan.channels} channels</p>
                  <p className="plan-price">{plan.price}</p>
                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheckCircle className="feature-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="plan-select-btn">Select Plan</button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="policy-sections-grid">
            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="section-heading">
                <FaCreditCard className="section-icon" />
                Update Payment Method
              </h2>
              <div className="section-content">
                <p>
                  To update your Spectrum TV payment method, sign in to your account and navigate to the "Billing" section. 
                  Select "Payment Methods" and choose one of the following options:
                </p>
                <ul className="styled-list">
                  <li>Add a new credit or debit card</li>
                  <li>Update bank account information</li>
                  <li>Change your billing address</li>
                  <li>Remove outdated payment methods</li>
                </ul>
                <div className="warning-box">
                  <FaExclamationTriangle className="warning-icon" />
                  <p>
                    <strong>Note:</strong> If your subscription was purchased through a third party such as Apple, Google Play, 
                    or your cable provider, you will need to update your payment information directly through that provider, 
                    as Spectrum does not manage billing for third-party purchases.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="section-heading">
                <FaHistory className="section-icon" />
                Billing History
              </h2>
              <div className="section-content">
                <p>
                  You can view your billing history by signing into your account and navigating to the "Billing" or "Payment History" section. 
                  Here you'll find:
                </p>
                <ul className="styled-list">
                  <li>Past charges and payment dates</li>
                  <li>Subscription receipts and invoices</li>
                  <li>Payment method used for each transaction</li>
                  <li>Promotional credits and adjustments</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="section-heading">
                <FaExclamationTriangle className="section-icon" />
                Common Billing Issues
              </h2>
              
              <div className="issue-item">
                <h3>Duplicate Charges</h3>
                <p>
                  Duplicate charges for Spectrum TV are uncommon but can occur if you subscribed through more than one platform 
                  or if there was a processing error. Check your bank statements and compare with your email subscription confirmations. 
                  If you identify a genuine duplicate charge, contact Spectrum customer support with your billing details.
                </p>
              </div>

              <div className="issue-item">
                <h3>Subscription Not Active After Payment</h3>
                <p>If you've paid but your subscription shows as inactive, try these steps:</p>
                <ul className="styled-list">
                  <li>Wait up to 24 hours for payment processing</li>
                  <li>Sign out and sign back into your account</li>
                  <li>Check if the payment was processed by your bank</li>
                  <li>Clear your browser cache and cookies</li>
                  <li>Contact support with your payment confirmation</li>
                </ul>
              </div>

              <div className="issue-item">
                <h3>Price Changes</h3>
                <p>
                  Spectrum may adjust subscription pricing from time to time. When price changes occur, subscribers are notified in advance. 
                  The new pricing will take effect at the start of your next billing cycle. You have the option to change or cancel your 
                  plan before the new pricing takes effect.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="policy-section-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="section-heading">
                <FaPhone className="section-icon" />
                Contact Billing Support
              </h2>
              <div className="contact-info">
                <p>
                  For billing-related inquiries not answered here, please contact Spectrum support:
                </p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <FaPhone className="contact-icon" />
                    <div>
                      <strong>Phone:</strong>
                      <a href="tel:+18332676094"> (833) 267-6094</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <FaEnvelope className="contact-icon" />
                    <div>
                      <strong>Email:</strong>
                      <a href="mailto:billing@spectrum.com"> billing@spectrum.com</a>
                    </div>
                  </div>
                </div>
                <p className="note">
                  Have your account email and recent billing statements ready to expedite assistance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BillingPage;