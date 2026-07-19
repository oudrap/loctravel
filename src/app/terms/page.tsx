import React from "react";

export const metadata = {
  title: "Terms of Service | LocTravel",
  description: "Read the Terms of Service governing the use of LocTravel's free, content-focused travel guides.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 font-light text-slate-600 dark:text-slate-400 leading-relaxed">
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
        Terms of Service
      </h1>
      <p className="text-xs font-mono text-slate-400">Last updated: July 15, 2026</p>

      <p>
        Welcome to LocTravel! These terms and conditions outline the rules and regulations for the use of LocTravel&apos;s Website, located at loctravel.com.
      </p>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        1. Intellectual Property Rights
      </h2>
      <p>
        Other than the content you own, under these Terms, LocTravel and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
      </p>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        2. Restrictions
      </h2>
      <p>
        You are specifically restricted from all of the following:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Publishing any Website material in any other media without credit;</li>
        <li>Selling, sublicensing, and/or otherwise commercializing any Website material;</li>
        <li>Using this Website in any way that is or may be damaging to this Website;</li>
        <li>Using this Website in any way that impacts user access to this Website;</li>
        <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        3. No Warranties
      </h2>
      <p>
        This Website is provided &quot;as is,&quot; with all faults, and LocTravel expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
      </p>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        4. Limitation of Liability
      </h2>
      <p>
        In no event shall LocTravel, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. LocTravel, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
      </p>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 font-display">
        5. Governing Law & Jurisdiction
      </h2>
      <p>
        These Terms will be governed by and interpreted in accordance with the laws of the State, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the country for the resolution of any disputes.
      </p>
    </div>
  );
}
