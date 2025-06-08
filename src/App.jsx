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
import { studentData, applications, whyChooseUsData, studentScores } from './data/mockData';

const App = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [notifications] = useState(3);
  const [animateStats, setAnimateStats] = useState(false);

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
        return 
      case 'scorecard':
        return <ScoreCard studentScores={studentScores} />;
      case 'about':
        return <About />;
      default:
        return <SummaryTab studentData={studentData} whyChooseUsData={whyChooseUsData} animateStats={animateStats} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans">
      <Header notifications={notifications} />
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          {tabContent()}
        </div>
      </main>
      <LegalSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
