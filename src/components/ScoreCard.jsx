import React from 'react';
import { BarChart2, BookOpen } from 'lucide-react';

const ScorecardComponent = ({ studentScores }) => {
  // Default scores if none provided
  const defaultScores = {
    gmat: { score: 720, date: '2024-11-01' },
    ielts: { score: 7.5, date: '2024-10-15' },
    sgpa: { score: 9.2, session: 'Fall 2024' },
    cgpa: { score: 8.8 }
  };

  const scores = studentScores || defaultScores;

  // Icon is used in JSX below
  const InfoCard = ({ title, icon: Icon, children }) => (
    <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white border-opacity-20 animate-fadeInUp">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-white"/>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{title}</h2>
      </div>
      <div className="prose prose-lg max-w-none text-gray-700">
        {children}
      </div>
    </div>
  );

  return (
    <div>
      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-fadeInUp { 
            animation: fadeInUp 0.6s ease-out forwards; 
            opacity: 0; 
            transform: translateY(20px); 
          }
          @keyframes fadeInUp { 
            to { 
              opacity: 1; 
              transform: translateY(0); 
            } 
          }
        `
      }} />

      <InfoCard title="Academic Scorecard" icon={BarChart2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GMAT Score Card */}
          <div className="bg-blue-50 bg-opacity-60 p-6 rounded-xl shadow-md border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h4 className="text-xl font-semibold text-gray-800">GMAT Score</h4>
            </div>
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {scores.gmat.score}
            </p>
            <p className="text-gray-600 text-sm">Last updated: {scores.gmat.date}</p>
          </div>

          {/* IELTS Score Card */}
          <div className="bg-purple-50 bg-opacity-60 p-6 rounded-xl shadow-md border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <BookOpen className="w-6 h-6 text-purple-600" />
              <h4 className="text-xl font-semibold text-gray-800">IELTS Score</h4>
            </div>
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {scores.ielts.score}
            </p>
            <p className="text-gray-600 text-sm">Last updated: {scores.ielts.date}</p>
          </div>

          {/* SGPA Score Card */}
          <div className="bg-green-50 bg-opacity-60 p-6 rounded-xl shadow-md border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <BarChart2 className="w-6 h-6 text-green-600" />
              <h4 className="text-xl font-semibold text-gray-800">SGPA (Current Session)</h4>
            </div>
            <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              {scores.sgpa.score}
            </p>
            <p className="text-gray-600 text-sm">Session: {scores.sgpa.session}</p>
          </div>

          {/* CGPA Score Card */}
          <div className="bg-yellow-50 bg-opacity-60 p-6 rounded-xl shadow-md border border-yellow-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <BarChart2 className="w-6 h-6 text-yellow-600" />
              <h4 className="text-xl font-semibold text-gray-800">CGPA (Overall)</h4>
            </div>
            <p className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
              {scores.cgpa.score}
            </p>
            <p className="text-gray-600 text-sm">Cumulative Score</p>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default ScorecardComponent;