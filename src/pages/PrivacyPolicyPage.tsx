import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCookie, FaUserLock, FaChild, FaDatabase, FaEye, FaEnvelope, FaLock } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import './PolicyPages.css';

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      icon: <FaShieldAlt />,
      title: "1. Information We Collect",
      content: `Spectrum TV collects several categories of personal information to deliver its streaming service. This includes information you provide directly, such as your name, email address, date of birth, and billing information when you create a Spectrum account or subscribe to a plan. Spectrum also collects usage data automatically, including the content you watch, your search history within the platform, how long you watch, device identifiers, IP addresses, and general location data.

      When you use the Spectrum TV app or website, technical data is collected such as your device type, operating system version, app version, browser type, and connection information. This data is used to improve the Spectrum TV streaming experience and troubleshoot technical issues.`
    },
    {
      icon: <FaEye />,
      title: "2. How We Use Your Information",
      content: `Spectrum TV uses your personal information to provide and improve the streaming service, process subscription payments, personalize your content recommendations, send service-related notifications (such as billing reminders or changes to terms), and comply with legal obligations. Your viewing history and engagement data help Spectrum's recommendation engine suggest relevant shows, movies, and live events that match your interests.

      Spectrum may also use your information to deliver targeted advertising on ad-supported plans. Advertisements are served based on general demographic data and viewing interests, not sensitive personal information such as health or financial data.`
    },
    {
      icon: <FaUserLock />,
      title: "3. How We Share Your Information",
      content: `Spectrum, as a service of Charter Communications, may share your personal information with affiliated companies and with trusted third-party service providers who assist in delivering the service, such as payment processors, cloud infrastructure providers, analytics partners, and customer service platforms. These third parties are contractually obligated to protect your data and may only use it for the specific purposes for which it was shared.

      Spectrum does not sell your personal information to unrelated third parties for their independent marketing purposes. Your data may be disclosed if required by law, court order, or government regulation, or to protect the rights, safety, and property of Spectrum, its users, or the public.`
    },
    {
      icon: <FaCookie />,
      title: "4. Cookies and Tracking Technologies",
      content: `Spectrum TV uses cookies, web beacons, pixel tags, and similar tracking technologies to operate its website and app, remember your preferences, analyze site traffic, and serve relevant advertising. You can manage cookie preferences through your browser settings, though disabling certain cookies may affect your ability to use some features of the Spectrum platform. Opt-out tools for interest-based advertising may also be available through industry platforms such as the Digital Advertising Alliance.`
    },
    {
      icon: <FaDatabase />,
      title: "5. Data Retention",
      content: `Spectrum TV retains your personal information for as long as your account is active and for a reasonable period thereafter in order to fulfill legal obligations, resolve disputes, and enforce agreements. Viewing history and account data may be retained for analytical and personalization purposes even after you cancel your subscription, unless you specifically request deletion of your account data.`
    },
    {
      icon: <FaUserLock />,
      title: "6. Your Rights and Choices",
      content: `Depending on your state or country of residence, you may have rights under applicable data protection laws including the right to access, correct, delete, or restrict the processing of your personal information. California residents have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to request deletion. To exercise these rights, contact Spectrum through the official privacy request process described on their website.`
    },
    {
      icon: <FaChild />,
      title: "7. Children's Privacy",
      content: `Spectrum TV's streaming service is not directed to children under the age of 13, and Spectrum does not knowingly collect personal information from children under 13 without verifiable parental consent. If a parent or guardian believes their child has registered for a Spectrum account, they should contact Spectrum support immediately to have the account reviewed and the data removed as appropriate.`
    },
    {
      icon: <FaLock />,
      title: "8. Security of Your Information",
      content: `Spectrum TV employs industry-standard security measures including encryption, secure server infrastructure, and access controls to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no digital transmission or storage system is completely secure, and users are encouraged to use strong, unique passwords and to sign out of shared devices after use.`
    },
    {
      icon: <FaEnvelope />,
      title: "9. Contact for Privacy Concerns",
      content: `For privacy-related questions, data access requests, or to report a privacy concern related to your Spectrum account, please use the official Spectrum privacy inquiry form available on the spectrum.net website under the Privacy section. Spectrum's privacy team is committed to addressing all inquiries in a timely manner.`
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
        title="Privacy Policy"
        subtitle="Last Updated: January 1, 2026"
      />
      
      <section className="policy-page">
        <div className="container">
          <div className="policy-intro">
            <p>
              This privacy policy explains how <strong>Spectrum TV</strong> collects, uses, shares, and protects 
              the personal information of its users. This privacy policy is provided for informational purposes 
              to help Spectrum subscribers understand their rights and how their data is handled.
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
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="policy-footer-note">
            <p>
              <strong>📅 Last Updated:</strong> January 1, 2026
            </p>
            <p>
              For the legally binding and most current privacy policy, always refer to the official 
              <a href="https://www.spectrum.net/privacy" target="_blank" rel="noopener noreferrer"> Spectrum Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicyPage;