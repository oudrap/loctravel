import React from "react";

export const metadata = {
  title: "Privacy Policy | LocTravel",
  description: "Learn how LocTravel collects, uses, and protects your information, including details about Google AdSense cookies.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 font-light text-slate-600 dark:text-slate-400 leading-relaxed">
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
        Privacy Policy
      </h1>
      <p className="text-xs font-mono text-slate-400">Last updated: July 15, 2026</p>
      
      <p>
        At LocTravel, accessible from loctravel.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by LocTravel and how we use it.
      </p>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        Log Files
      </h2>
      <p>
        LocTravel follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
      </p>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        Google DoubleClick DART Cookie
      </h2>
      <p>
        Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to loctravel.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-amber-500 underline">https://policies.google.com/technologies/ads</a>
      </p>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        Our Advertising Partners
      </h2>
      <p>
        Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Google AdSense:</strong> Their Privacy Policy can be found at <a href="https://policies.google.com/technologies/ads" className="text-amber-500 underline">Google Ads Policy</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        GDPR Data Protection Rights
      </h2>
      <p>
        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
        <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
        <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        Consent
      </h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
      </p>
    </div>
  );
}
