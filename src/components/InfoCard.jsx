import React from 'react';

const InfoCard = ({ title, icon: Icon, children }) => (
  <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white border-opacity-20 animate-fadeInUp">
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{title}</h2>
    </div>
    <div className="prose prose-lg max-w-none text-gray-700">
      {children}
    </div>
  </div>
);

export default InfoCard;