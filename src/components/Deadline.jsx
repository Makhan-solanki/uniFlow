import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

const DeadlinesComponent = ({ upcomingDeadlines }) => {
  const [expandedDeadlines, setExpandedDeadlines] = useState({});

  // Default deadlines if none provided
  const defaultDeadlines = [
    { id: 1, university: 'MIT', task: 'Personal Essay', date: '2025-06-12', priority: 'high', admissionPeriod: '2025-06-01 to 2025-07-15' },
    { id: 2, university: 'Stanford', task: 'Recommendation Follow-up', date: '2025-06-15', priority: 'medium', admissionPeriod: '2025-06-10 to 2025-08-01' },
    { id: 3, university: 'UC Berkeley', task: 'Application Start', date: '2025-06-20', priority: 'low', admissionPeriod: '2025-05-15 to 2025-07-30' },
    { id: 4, university: 'Harvard', task: 'Document Upload', date: '2025-06-25', priority: 'medium', admissionPeriod: '2025-06-20 to 2025-08-10' }
  ];

  const deadlines = upcomingDeadlines || defaultDeadlines;

  const toggleDeadline = (id) => {
    setExpandedDeadlines(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

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

      <div className="space-y-6">
        {deadlines.map((deadline, index) => (
          <div 
            key={deadline.id} 
            className={`p-6 rounded-2xl border-l-4 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp ${getPriorityColor(deadline.priority)}`} 
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => toggleDeadline(deadline.id)}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  deadline.priority === 'high' ? 'bg-red-100' : 
                  deadline.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                }`}>
                  <Clock className={`w-6 h-6 ${
                    deadline.priority === 'high' ? 'text-red-600 animate-pulse' : 
                    deadline.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                  }`} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{deadline.task}</h4>
                  <p className="text-gray-600 font-medium">{deadline.university}</p>
                  <p className="text-sm text-gray-500">Due: {deadline.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                  deadline.priority === 'high' ? 'bg-red-100 text-red-800 animate-pulse' : 
                  deadline.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-green-100 text-green-800'
                }`}>
                  {deadline.priority.toUpperCase()}
                </span>
                {expandedDeadlines[deadline.id] ? 
                  <ChevronUp className="w-5 h-5 text-gray-600" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                }
              </div>
            </button>
            
            {expandedDeadlines[deadline.id] && (
              <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeInUp">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-700 font-medium mb-2">Admission Period:</p>
                    <p className="text-md font-semibold text-gray-800">{deadline.admissionPeriod}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium mb-2">Task Details:</p>
                    <p className="text-md text-gray-800">Complete {deadline.task.toLowerCase()} for {deadline.university}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-sm">
                    Mark as Complete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeadlinesComponent;