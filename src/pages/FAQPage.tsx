import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import './FAQPage.css';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>(['account-login']);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData = [
    {
      id: 'account-login',
      title: '🔐 Account & Login',
      icon: '🔐',
      questions: [
        {
          id: 'create-account',
          q: 'How do I create a Spectrum TV account?',
          a: 'To create a Spectrum TV account, visit the official Spectrum website at spectrum.net and click "Sign Up" or "Create Account." You will need to provide your Spectrum account number or the phone number associated with your services, a valid email address, create a password, and verify your identity. After completing registration, you can sign in on any supported device using your email and password. Spectrum TV account creation is included with your Spectrum TV subscription.'
        },
        {
          id: 'forgot-password',
          q: 'I forgot my Spectrum TV password — how do I reset it?',
          a: 'If you have forgotten your Spectrum TV account password, go to the sign-in page at spectrum.net and click "Forgot Username/Password." Enter the email address or username associated with your Spectrum account, and you will receive a password reset email within a few minutes. Click the secure link in that email to create a new password. If you do not see the reset email, check your spam or junk folder. For security, the reset link typically expires after 24 hours, so use it promptly.'
        },
        {
          id: 'simultaneous-streams',
          q: 'How many devices can stream Spectrum TV simultaneously?',
          a: 'Spectrum TV allows up to 3 simultaneous streams within your home network. When streaming away from home, the Spectrum TV app allows 1 stream at a time. Some premium channels may have different streaming limits. You can manage your devices and view active streams in your account settings at spectrum.net.'
        },
        {
          id: 'sign-out-all-devices',
          q: 'How do I sign out of Spectrum TV on all devices?',
          a: 'To sign out of your Spectrum TV account on all devices simultaneously, log in to your account at spectrum.net, go to "Account Settings," select "Devices," and look for the option to "Sign Out of All Devices." This is particularly helpful if you have signed in on a shared or public device and need to secure your account. After signing out remotely, each device will require your email and password to log back in.'
        }
      ]
    },
    {
      id: 'subscription-billing',
      title: '💳 Subscription & Billing',
      icon: '💳',
      questions: [
        {
          id: 'plans-pricing',
          q: 'What are the Spectrum TV subscription plans and pricing?',
          a: 'Spectrum offers several TV plans: TV Select (includes over 125 channels), Silver (over 175 channels), and Gold (over 200 channels). Pricing varies by location and current promotions. Premium channels like HBO, Showtime, and Starz are available as add-ons for an additional monthly fee. Spectrum also offers bundle discounts when combining TV with Internet and Voice services. For the most current Spectrum TV pricing in your area, visit spectrum.net.'
        },
        {
          id: 'update-payment',
          q: 'How do I update my Spectrum TV payment method?',
          a: 'To update your Spectrum TV payment method, sign in to your account at spectrum.net, navigate to the "Billing" section, and select "Payment Methods." You can add a new credit card, debit card, or bank account, or update existing payment details. If you need to remove an old payment method, you can do so after adding a new one. Changes take effect immediately for future bills. Always ensure your payment information is current to avoid service interruptions.'
        },
        {
          id: 'duplicate-charge',
          q: 'Why was I charged twice for Spectrum TV?',
          a: 'Duplicate charges for Spectrum TV are uncommon but can occur if you made multiple payments close together or if there was a billing system error. Check your billing history in your account at spectrum.net. If you identify a genuine duplicate charge, contact Spectrum customer support at (833) 267-6094 with your billing details. Spectrum is committed to resolving billing discrepancies promptly.'
        }
      ]
    },
    {
      id: 'streaming-playback',
      title: '📺 Streaming & Playback',
      icon: '📺',
      questions: [
        {
          id: 'buffering',
          q: 'Why is Spectrum TV buffering or lagging?',
          a: 'Buffering during Spectrum TV streaming is usually caused by a slow or unstable internet connection. Spectrum recommends a minimum internet speed of 10 Mbps for streaming. To fix buffering: restart your router and modem, move closer to your WiFi source, close other apps or devices using your internet bandwidth, connect via a wired Ethernet connection if possible, clear the Spectrum TV app cache on your device, and check for app or firmware updates. If buffering continues, the issue may be temporary server congestion.'
        },
        {
          id: 'app-not-working',
          q: 'Spectrum TV app is not working — how do I fix it?',
          a: 'If the Spectrum TV app is not working, try these troubleshooting steps: 1) Force-close the app and reopen it 2) Restart the device you are using 3) Uninstall and reinstall the Spectrum TV app 4) Ensure your device\'s operating system is up to date 5) Check your internet connection 6) Verify that Spectrum services are not experiencing an outage by checking spectrum.net/status. These steps resolve the majority of Spectrum TV app issues.'
        },
        {
          id: 'compatible-devices',
          q: 'What devices are compatible with Spectrum TV?',
          a: 'Spectrum TV is compatible with a wide range of devices including: Smart TVs from Samsung, LG, and Vizio; streaming devices such as Roku, Amazon Fire TV, Apple TV, and Chromecast; gaming consoles including PlayStation and Xbox; iOS and Android smartphones and tablets; and web browsers on Mac and PC computers. Some older device models may not support the latest version of the Spectrum TV app. Check spectrum.net/compatible-devices for the complete list.'
        },
        {
          id: 'offline-downloads',
          q: 'Can I download Spectrum TV content to watch offline?',
          a: 'Yes, the Spectrum TV app allows downloads on mobile devices for select on-demand content. To download, open the Spectrum TV app on a supported mobile device, find a title with the download icon, and tap it to save to your device. Downloaded content has an expiration window and will only be available for a limited period (typically 30 days). Not all titles are available for download due to licensing restrictions.'
        }
      ]
    },
    {
      id: 'content-channels',
      title: '🎬 Content & Channels',
      icon: '🎬',
      questions: [
        {
          id: 'live-tv-sports',
          q: 'Does Spectrum TV offer live TV and sports?',
          a: 'Yes, Spectrum TV includes live TV channels including local broadcasts, news networks, and sports channels. You get regional sports networks (RSNs) based on your location, plus national sports channels like ESPN, FS1, NBCSN, and more. The Spectrum TV app lets you watch live sports on supported devices both at home and on the go. Some sports events may be subject to regional blackout restrictions.'
        },
        {
          id: 'content-availability',
          q: 'Why is a show or movie not available on Spectrum TV?',
          a: 'Content availability on Spectrum TV is governed by licensing agreements with networks and content partners. Some titles may be available for a limited time before being removed due to expiring licenses. Other content may require premium channel subscriptions (like HBO or Showtime). Regional restrictions may also apply for certain programming. Spectrum regularly adds new content, so a title unavailable today may become available in the future.'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleItem = (itemId: string) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Find quick answers to the most common Spectrum TV support questions"
      />
      
      <section className="faq-page">
        <div className="container">
          <div className="faq-search-container">
            <FaSearch className="faq-search-icon" />
            <input
              type="text"
              className="faq-search-input"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="faq-categories">
            {filteredData.map((category, catIndex) => (
              <motion.div 
                key={category.id}
                className="faq-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <button
                  className={`faq-category-header ${openCategories.includes(category.id) ? 'active' : ''}`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <span className="faq-category-icon">{category.icon}</span>
                  <h2 className="faq-category-title">{category.title}</h2>
                  {openCategories.includes(category.id) ? 
                    <FaChevronUp className="faq-category-toggle" /> : 
                    <FaChevronDown className="faq-category-toggle" />
                  }
                </button>

                <AnimatePresence>
                  {openCategories.includes(category.id) && (
                    <motion.div 
                      className="faq-category-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.questions.map((item) => (
                        <div key={item.id} className="faq-item">
                          <button
                            className={`faq-question ${openItems.includes(item.id) ? 'active' : ''}`}
                            onClick={() => toggleItem(item.id)}
                          >
                            <span>{item.q}</span>
                            {openItems.includes(item.id) ? 
                              <FaChevronUp className="faq-toggle-icon" /> : 
                              <FaChevronDown className="faq-toggle-icon" />
                            }
                          </button>
                          <AnimatePresence>
                            {openItems.includes(item.id) && (
                              <motion.div 
                                className="faq-answer"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <p>{item.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQPage;