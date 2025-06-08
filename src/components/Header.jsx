import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = ({ notifications }) => (
  <header className="bg-white bg-opacity-80 backdrop-blur-lg shadow-md sticky top-0 z-50">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-110">
            <User className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">UniFlow</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6" />
            {notifications > 0 && <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">{notifications}</span>}
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;