import React from 'react';
import { User, FileText, Calendar, BarChart2, Info } from 'lucide-react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabItems = [
    { id: 'summary', label: 'Summary', icon: User },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'deadlines', label: 'Deadlines', icon: Calendar },
    { id: 'scorecard', label: 'Scorecard', icon: BarChart2 },
    { id: 'about', label: 'About Us', icon: Info }
  ];

  return (
    <nav className="flex space-x-2 bg-white bg-opacity-60 backdrop-blur-lg rounded-2xl p-2 shadow-lg overflow-x-auto">
      {tabItems.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`flex-shrink-0 flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-medium transform hover:scale-105 ${activeTab === id ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-white'}`}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
