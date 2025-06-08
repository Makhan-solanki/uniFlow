import React from 'react';
import { User, FileText, Calendar, BarChart2, Info } from 'lucide-react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabItems = [
    { id: 'summary', label: 'Summary', icon: User },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'deadlines', label: 'Deadlines', icon: Calendar },
    { id: 'scorecard', label: 'Score Card', icon: BarChart2 },
    { id: 'about', label: 'About Us', icon: Info },
  ];

  return (
    <nav className="bg-white rounded-xl shadow-sm p-1 sm:p-2">
      <div className="flex flex-wrap sm:flex-nowrap gap-1 sm:gap-2">
        {tabItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center justify-center sm:justify-start px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 flex-1 sm:flex-none min-w-[80px] sm:min-w-0
              ${
                activeTab === id
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{label.split(" ")[0]}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Tabs;
