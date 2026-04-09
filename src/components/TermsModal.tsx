import React from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-xl font-serif font-semibold text-[#1d1d1f]">Terms and Conditions of Use (ToU)</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-[15px] text-[#515154] space-y-6 leading-relaxed">
          <p className="font-semibold text-lg text-[#1d1d1f] border-b border-gray-100 pb-4">
            Scientific Access Portal – AudioVitality
          </p>

          <section>
            <h3 className="font-semibold text-[#1d1d1f] mb-2">1. Preamble and Scope</h3>
            <div className="space-y-2">
              <p>These Terms and Conditions of Use (hereinafter the "ToU") govern the access to and use of the secure scientific portal (hereinafter the "Portal") published by AudioVitality (hereinafter the "Publisher" or "AudioVitality").</p>
              <p>By creating an account and accessing the Portal, the user (hereinafter the "User") unreservedly accepts these ToU. If the User does not agree to these terms, they must refrain from using the Portal.</p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-[#1d1d1f] mb-2">2. Portal Access and Security</h3>
            <div className="space-y-2">
              <p>The Portal is a strictly private space, exclusively reserved for healthcare professionals, researchers, technical and institutional partners, and investors of AudioVitality.</p>
              <p>Access requires the creation of a user account (Email and password). Login credentials are strictly personal and confidential. The User is solely responsible for the safekeeping and use of their credentials. Any connection to the Portal made using the User's credentials will be deemed to have been made by the User themselves.</p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-[#1d1d1f] mb-2">3. Nature of Data and Medical Disclaimer</h3>
            <div className="space-y-2">
              <p>The Portal provides access to documents, research protocols (e.g., AUDIO-DOMS), clinical trial results, and physiological data related to Low-Frequency Vibroacoustic Sound Stimulation (LFVSS) technology.</p>
              <p>The User expressly acknowledges that:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>This data is provided for strictly informational, scientific, and professional purposes.</li>
                <li>The information contained on the Portal in no way constitutes medical advice, a diagnosis, or a treatment recommendation for any specific patient.</li>
                <li>Although the data is derived from rigorous research (notably in collaboration with institutions such as the CHUV), it does not replace the clinical judgment of a licensed healthcare professional.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-[#1d1d1f] mb-2">4. Confidentiality (Non-Disclosure Agreement)</h3>
            <div className="space-y-2">
              <p>Due to the strategic and unprecedented nature of the research data, clinical trials, and technological advancements presented, all content on the Portal is classified as Confidential.</p>
              <p>By accessing this Portal, the User formally agrees to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Not disclose, share, transmit, or make public the Portal's content (White Paper, protocols, study results) to any third party without the prior written consent of AudioVitality.</li>
                <li>Not use this information for competitive purposes, reverse engineering, or the development of a similar technology.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-[#1d1d1f] mb-2">5. Intellectual Property</h3>
            <div className="space-y-2">
              <p>All elements comprising the Portal (texts, graphics, logos, acronyms, clinical protocols, statistical data, videos, web architecture) are the exclusive property of AudioVitality and are protected by intellectual property laws.</p>
              <p>Any reproduction, representation, modification, publication, or adaptation of all or part of the Portal's elements, regardless of the means or process used, is strictly prohibited without the prior written authorization of AudioVitality's management.</p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-[#1d1d1f] mb-2">6. Personal Data Protection</h3>
            <div className="space-y-2">
              <p>To enable secure access to the Portal, AudioVitality collects and processes the User's email address (via the Firebase authentication provider).</p>
              <p>This login data is used exclusively to manage access, secure the platform, and prevent unauthorized connections. AudioVitality commits to not selling or using these email addresses for unsolicited commercial prospecting. The User has the right to access, rectify, and delete their data by contacting AudioVitality directly.</p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-[#1d1d1f] mb-2">7. Limitation of Liability</h3>
            <div className="space-y-2">
              <p>The Publisher strives to provide information on the Portal that is as accurate as possible and based on verified research. However, AudioVitality cannot be held liable for any omissions, inaccuracies, or delays in updating scientific data that is still undergoing validation.</p>
              <p>The use of the information available on the Portal is under the User's sole and entire responsibility. AudioVitality declines all liability for any direct or indirect damage resulting from accessing the Portal or utilizing the data presented therein.</p>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-[#1d1d1f] mb-2">8. Applicable Law and Jurisdiction</h3>
            <div className="space-y-2">
              <p>These ToU are governed by Swiss law.</p>
              <p>Any dispute relating to the use of the AudioVitality scientific Portal that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the competent courts of the Canton of Vaud (Switzerland), subject to an appeal to the Swiss Federal Supreme Court.</p>
            </div>
          </section>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end">
          <button 
            onClick={onClose} 
            className="px-6 py-2.5 bg-[#1d1d1f] text-white rounded-xl font-medium hover:bg-black transition-colors shadow-sm"
          >
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
}
