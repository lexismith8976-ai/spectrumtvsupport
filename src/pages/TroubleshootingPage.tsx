import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaWifi, FaLock, FaMobile, FaDesktop, 
  FaRedo, FaTrash, FaDownload, FaCheckCircle, 
  FaInfoCircle, FaGamepad, FaApple
} from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import './TroubleshootingPage.css';

const TroubleshootingPage: React.FC = () => {
  const categories = [
    {
      icon: <FaMobile />,
      title: "📱 App Issues",
      color: "#0055b7",
      issues: [
        {
          title: "Spectrum TV app is not working",
          steps: [
            "Force-close the app and reopen it",
            "Restart the device you are using",
            "Uninstall and reinstall the Spectrum TV app",
            "Ensure your device's operating system is up to date",
            "Check your internet connection",
            "Verify that Spectrum services are not experiencing an outage"
          ],
          note: "These steps resolve the majority of Spectrum TV app issues. If problems persist, try using a different device to isolate the issue."
        }
      ]
    },
    {
      icon: <FaWifi />,
      title: "🌐 Streaming & Playback",
      color: "#ff6b00",
      issues: [
        {
          title: "Why is Spectrum TV buffering or lagging?",
          steps: [
            "Restart your router and modem (unplug for 30 seconds)",
            "Move closer to your WiFi source",
            "Close other apps or devices using your internet bandwidth",
            "Connect via a wired Ethernet connection if possible",
            "Clear the Spectrum TV app cache on your device",
            "Check for app or firmware updates"
          ],
          note: "Spectrum recommends a minimum internet speed of 10 Mbps for streaming HD content."
        },
        {
          title: "Video quality is poor or pixelated",
          steps: [
            "Check your internet speed (should be at least 10 Mbps)",
            "Reduce the number of devices using your network",
            "Try lowering the video quality in app settings",
            "Restart your streaming device",
            "Check for service outages in your area"
          ]
        }
      ]
    },
    {
      icon: <FaLock />,
      title: "🔐 Login Issues",
      color: "#28a745",
      issues: [
        {
          title: "Can't sign in to Spectrum TV",
          steps: [
            "Verify you're using the correct email and password",
            "Use the 'Forgot Password' option to reset your password",
            "Check if your subscription is still active",
            "Clear your browser cache or app data",
            "Try signing in on a different device",
            "Disable VPN or proxy services if you're using them"
          ]
        },
        {
          title: "Account locked or suspended",
          steps: [
            "Wait 30 minutes and try again",
            "Reset your password",
            "Contact Spectrum support if issue persists",
            "Verify your payment method is up to date"
          ]
        }
      ]
    },
    {
      icon: <FaDesktop />,
      title: "💻 Device Compatibility",
      color: "#dc3545",
      issues: [
        {
          title: "Supported Devices for Spectrum TV",
          steps: [
            "Smart TVs: Samsung (2016+), LG (2017+), Vizio (2017+)",
            "Streaming Devices: Roku, Amazon Fire TV, Apple TV (4th gen+), Chromecast",
            "Gaming Consoles: PlayStation 4/5, Xbox One/Series X|S",
            "Mobile Devices: iOS 12+ and Android 8+ smartphones and tablets",
            "Web Browsers: Chrome, Safari, Firefox, Edge (latest versions)"
          ]
        },
        {
          title: "Device not compatible message",
          steps: [
            "Update your device's operating system",
            "Check if your device model is supported",
            "Try using a different supported device",
            "Contact Spectrum support for device-specific help"
          ]
        }
      ]
    },
    {
      icon: <FaGamepad />,
      title: "🎮 Gaming Console Issues",
      color: "#6f42c1",
      issues: [
        {
          title: "Spectrum TV on PlayStation/Xbox",
          steps: [
            "Ensure your console software is up to date",
            "Delete and reinstall the Spectrum TV app",
            "Clear console cache (restart console)",
            "Check your network connection",
            "Verify PlayStation Plus/Xbox Live is active (if required)"
          ]
        }
      ]
    },
    {
      icon: <FaApple />,
      title: "📱 iOS/Android Issues",
      color: "#fd7e14",
      issues: [
        {
          title: "Mobile app problems",
          steps: [
            "Update to latest app version",
            "Check iOS/Android system updates",
            "Clear app cache (Android) or offload app (iOS)",
            "Check device storage space",
            "Enable background app refresh for better performance"
          ]
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader title="Troubleshooting & Technical Help" />
      
      <section className="troubleshooting-page">
        <div className="container">
          {/* Quick Tips Banner */}
          <motion.div 
            className="quick-tips-banner"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>🔧 Before You Start</h2>
            <p>Try these quick fixes first - they solve 80% of common issues!</p>
            <div className="quick-tips-grid">
              <div className="quick-tip">
                <FaRedo />
                <span>Restart your device</span>
              </div>
              <div className="quick-tip">
                <FaWifi />
                <span>Check internet connection</span>
              </div>
              <div className="quick-tip">
                <FaTrash />
                <span>Clear app cache</span>
              </div>
              <div className="quick-tip">
                <FaDownload />
                <span>Update the app</span>
              </div>
            </div>
          </motion.div>

          {/* Main Troubleshooting Grid */}
          <div className="troubleshooting-grid">
            {categories.map((category, catIndex) => (
              <motion.div 
                key={catIndex}
                className="troubleshooting-category"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="category-header" style={{ borderBottomColor: category.color }}>
                  <div className="category-icon" style={{ background: category.color }}>
                    {category.icon}
                  </div>
                  <h2 className="category-title">{category.title}</h2>
                </div>

                {category.issues.map((issue, issueIndex) => (
                  <motion.div 
                    key={issueIndex}
                    className="issue-card"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: (catIndex * 0.1) + (issueIndex * 0.1) }}
                  >
                    <h3 className="issue-title">{issue.title}</h3>
                    <ul className="issue-steps">
                      {issue.steps.map((step, stepIndex) => (
                        <motion.li 
                          key={stepIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: stepIndex * 0.05 }}
                        >
                          <FaCheckCircle className="step-icon" />
                          <span>{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                    {issue.note && (
                      <div className="issue-note">
                        <FaInfoCircle className="note-icon" />
                        <p>{issue.note}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Speed Test Section */}
          <motion.div 
            className="speed-test-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="section-heading">
              <FaWifi className="section-icon" />
              Internet Speed Requirements
            </h2>
            <div className="speed-grid">
              <div className="speed-card">
                <h3>Standard Definition (SD)</h3>
                <div className="speed-value">3 Mbps</div>
                <p>Minimum required for basic quality</p>
              </div>
              <div className="speed-card">
                <h3>High Definition (HD)</h3>
                <div className="speed-value">8-10 Mbps</div>
                <p>Recommended for HD content</p>
              </div>
              <div className="speed-card">
                <h3>4K Ultra HD</h3>
                <div className="speed-value">25+ Mbps</div>
                <p>Required for 4K streaming</p>
              </div>
            </div>
            <div className="speed-test-note">
              <p>Run a speed test at <strong>speedtest.net</strong> to check your current internet speed.</p>
            </div>
          </motion.div>

          {/* Still Need Help Section */}
          <motion.div 
            className="still-need-help"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2>Still Having Issues?</h2>
            <p>Our support team is here to help 24/7</p>
            <div className="help-options">
              <a href="tel:+18332676094" className="help-option">
                <span>📞</span>
                <div>
                  <strong>Call Us</strong>
                  <p>(833) 267-6094</p>
                </div>
              </a>
              <a href="#" className="help-option">
                <span>💬</span>
                <div>
                  <strong>Live Chat</strong>
                  <p>Chat with support</p>
                </div>
              </a>
              <a href="#" className="help-option">
                <span>📧</span>
                <div>
                  <strong>Email</strong>
                  <p>support@spectrum.com</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TroubleshootingPage;