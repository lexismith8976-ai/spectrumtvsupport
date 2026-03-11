import { FAQCategory } from '../types/faq.types';

export const faqCategories: FAQCategory[] = [
  {
    id: 'account-login',
    title: 'Account & Login',
    icon: '🔐',
    items: [
      {
        id: 'create-account',
        question: 'How do I create a Spectrum TV account?',
        answer: 'To create a Spectrum TV account, visit the official Spectrum website at spectrumtv.com and click "Sign Up." You will need to provide a valid email address, create a password, enter your date of birth, and select a subscription plan — including the free tier if available in your region. After completing registration, you can sign in on any supported device using your email and password.'
      },
      {
        id: 'forgot-password',
        question: 'I forgot my Spectrum TV password — how do I reset it?',
        answer: 'If you have forgotten your Spectrum TV account password, go to the sign-in page and click "Forgot Password." Enter the email address associated with your Spectrum TV account, and you will receive a password reset email within a few minutes. Click the secure link in that email to create a new password.'
      },
      {
        id: 'simultaneous-streams',
        question: 'How many devices can stream Spectrum TV simultaneously?',
        answer: 'Spectrum TV allows up to three simultaneous streams per account on the Spectrum Premium and Spectrum Premium Plus plans. This means three different household members can watch content at the same time.'
      },
      {
        id: 'sign-out-all-devices',
        question: 'How do I sign out of Spectrum TV on all devices?',
        answer: 'To sign out of your Spectrum TV account on all devices simultaneously, log in to your account on a web browser, go to "Account" settings, and look for "Manage Devices" or the option to "Sign Out of All Devices."'
      }
    ]
  },
  {
    id: 'subscription-billing',
    title: 'Subscription & Billing',
    icon: '💳',
    items: [
      {
        id: 'plans-pricing',
        question: 'What are the Spectrum TV subscription plans and pricing?',
        answer: 'Spectrum TV offers several subscription tiers. The free plan provides limited content with ads. Spectrum Premium offers a broader content library with limited ad interruptions. Spectrum Premium Plus is the highest tier, offering an expanded content library with significantly fewer or no ads and the ability to download certain content for offline viewing.'
      },
      {
        id: 'update-payment',
        question: 'How do I update my Spectrum TV payment method?',
        answer: 'To update your Spectrum TV payment method, sign in to your account and navigate to the "Account" or "Billing" section. Select "Payment Method" and enter your new credit card, debit card, or payment details.'
      },
      {
        id: 'duplicate-charge',
        question: 'Why was I charged twice for Spectrum TV?',
        answer: 'Duplicate charges for Spectrum TV are uncommon but can occur if you subscribed through more than one platform. Check your bank statements and compare with your email subscription confirmations. If you identify a genuine duplicate charge, contact Spectrum TV customer support.'
      }
    ]
  },
  {
    id: 'streaming-playback',
    title: 'Streaming & Playback',
    icon: '📺',
    items: [
      {
        id: 'buffering',
        question: 'Why is Spectrum TV buffering or lagging?',
        answer: 'Buffering during Spectrum TV streaming is usually caused by a slow or unstable internet connection. Spectrum TV recommends a minimum internet speed of 3 Mbps for standard definition, 8 Mbps for HD streaming, and 25 Mbps or higher for 4K content where available.'
      },
      {
        id: 'app-not-working',
        question: 'Spectrum TV app is not working — how do I fix it?',
        answer: 'If the Spectrum TV app is not working, try these troubleshooting steps: force-close the app and reopen it; restart the device; uninstall and reinstall the app; ensure your device OS is up to date; check your internet connection; verify Spectrum TV servers are not experiencing an outage.'
      },
      {
        id: 'compatible-devices',
        question: 'What devices are compatible with Spectrum TV?',
        answer: 'Spectrum TV is compatible with smart TVs (Samsung, LG, Vizio, Sony), streaming devices (Roku, Amazon Fire TV, Apple TV, Chromecast), gaming consoles (PlayStation, Xbox), iOS and Android devices, and web browsers on Mac and PC.'
      },
      {
        id: 'offline-downloads',
        question: 'Can I download Spectrum TV content to watch offline?',
        answer: 'Offline downloads on Spectrum TV are available for select content on the Spectrum Premium Plus plan. To download, open the Spectrum TV app on a supported mobile device, find a title with the download icon, and tap it to save to your device.'
      }
    ]
  },
  {
    id: 'content-channels',
    title: 'Content & Channels',
    icon: '🎬',
    items: [
      {
        id: 'live-tv-sports',
        question: 'Does Spectrum TV offer live TV and sports?',
        answer: 'Yes, Spectrum TV offers live sports and live news channels. Spectrum is the exclusive streaming home of Premier League soccer in the US and offers coverage of select NFL games, WWE events, the Olympics, golf, and other live sporting events.'
      },
      {
        id: 'content-availability',
        question: 'Why is a show or movie not available on Spectrum TV?',
        answer: 'Content availability is governed by licensing agreements. Some titles may be available for a limited time before being removed due to expiring licenses. Other content may be exclusive to a higher subscription tier.'
      }
    ]
  }
];