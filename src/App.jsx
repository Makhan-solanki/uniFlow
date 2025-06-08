// 📄 src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import Tabs from './components/Tabs';
import SummaryTab from './components/SummaryTab';
import ApplicationsTab from './components/ApplicationTab';
import LegalSection from './components/LegalSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScoreCard from './components/ScoreCard';
import About from './components/About';
import DeadlinesComponent from './components/Deadline'
import ProfileComponent from './components/Profile';
import { studentData, whyChooseUsData, applications, studentScores } from './data/mockData';

const App = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [notifications, setNotifications] = useState(3);
  const [animateStats, setAnimateStats] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const tabContent = () => {
    switch (activeTab) {
      case 'summary':
        return <SummaryTab studentData={studentData} whyChooseUsData={whyChooseUsData} animateStats={animateStats} />;
      case 'applications':
        return <ApplicationsTab applications={applications} />;
      case 'deadlines':
        return <DeadlinesComponent />;
      case 'scorecard':
        return <ScoreCard studentScores={studentScores} />;
      case 'about':
        return <About />;
      default:
        return <SummaryTab studentData={studentData} whyChooseUsData={whyChooseUsData} animateStats={animateStats} />;
    }
  };

  const handleProfileUpdate = (updatedProfile) => {
    // Handle profile update logic here
    console.log('Profile updated:', updatedProfile);
    setShowProfile(false); // Close modal after successful update
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowProfile(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header notifications={notifications} onProfileClick={() => setShowProfile(true)} />
      <main className="max-w-screen-xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-4 sm:mt-6">
          {tabContent()}
        </div>
      </main>
      <LegalSection />
      <Footer />
      <ChatBot />
      {showProfile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-3 sm:p-4 md:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                <button
                  onClick={handleCloseProfile}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close profile"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ProfileComponent 
                onProfileUpdate={handleProfileUpdate} 
                onClose={handleCloseProfile}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
