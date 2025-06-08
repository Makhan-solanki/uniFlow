import React, { useState } from 'react';
import { FileText, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import InfoCard from './InfoCard';

const TermsContent = () => (
    <div className="prose prose-lg max-w-none text-gray-700">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Terms of Service</h4>
        <p className="mb-4">By using UniFlow, you agree to these terms. Please read them carefully.</p>
        <div className="space-y-4">
            <div>
                <h5 className="font-semibold text-gray-800">1. Acceptance of Terms</h5>
                <p>By accessing and using UniFlow, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </div>
            <div>
                <h5 className="font-semibold text-gray-800">2. Use License</h5>
                <p>Permission is granted to temporarily use UniFlow for personal, non-commercial transitory viewing only.</p>
            </div>
            <div>
                <h5 className="font-semibold text-gray-800">3. User Account</h5>
                <p>You are responsible for maintaining the confidentiality of your account and password.</p>
            </div>
        </div>
    </div>
);

const PrivacyContent = () => (
    <div className="prose prose-lg max-w-none text-gray-700">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Privacy Policy</h4>
        <p className="mb-4">Your privacy is critically important to us. This Privacy Policy document contains types of information that is collected and recorded by UniFlow.</p>
        <div className="space-y-4">
            <div>
                <h5 className="font-semibold text-gray-800">1. Information We Collect</h5>
                <p>We collect information that you provide directly to us, including your name, email address, and application details.</p>
            </div>
            <div>
                <h5 className="font-semibold text-gray-800">2. How We Use Your Information</h5>
                <p>We use the information we collect to provide, maintain, and improve our services.</p>
            </div>
            <div>
                <h5 className="font-semibold text-gray-800">3. Data Security</h5>
                <p>We implement appropriate security measures to protect your personal information.</p>
            </div>
        </div>
    </div>
);

const LegalSection = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8 space-y-8">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">Legal & Privacy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white border-opacity-20 animate-fadeInUp">
          <button
            className="flex items-center justify-between w-full text-left p-4 rounded-xl transition-all duration-300 group hover:shadow-lg hover:from-blue-50 hover:to-purple-50 focus:outline-none"
            onClick={() => setShowTerms(!showTerms)}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white"/>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Terms & Conditions</h3>
            </div>
            {showTerms ? <ChevronUp className="w-6 h-6 text-gray-600" /> : <ChevronDown className="w-6 h-6 text-gray-600" />}
          </button>
          {showTerms && <div className="mt-6"><TermsContent /></div>}
        </div>
        <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white border-opacity-20 animate-fadeInUp">
           <button
              className="flex items-center justify-between w-full text-left p-4 rounded-xl transition-all duration-300 group hover:shadow-lg hover:from-blue-50 hover:to-purple-50 focus:outline-none"
              onClick={() => setShowPrivacy(!showPrivacy)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Privacy Policy</h3>
              </div>
              {showPrivacy ? <ChevronUp className="w-6 h-6 text-gray-600" /> : <ChevronDown className="w-6 h-6 text-gray-600" />}
            </button>
            {showPrivacy && <div className="mt-6"><PrivacyContent /></div>}
        </div>
      </div>
    </section>
  );
};

export default LegalSection;