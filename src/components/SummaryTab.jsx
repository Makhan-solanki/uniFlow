import React from 'react';
import { FileText, CheckCircle, Clock, Bell, Sparkles, TrendingUp, GraduationCap, Target, Award, Users } from 'lucide-react';
import { applications } from '../data/mockData';

const SummaryTab = ({ studentData, whyChooseUsData }) => (
  <div className="space-y-8">
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 rounded-2xl text-white overflow-hidden animate-fadeInUp">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-4">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
          <h2 className="text-2xl font-bold">Welcome back, {studentData.name}! ✨</h2>
        </div>
        <p className="text-blue-100 mb-6">Good to see you again! Let's build on your progress.</p>
        <div className="flex items-center space-x-4">
          <TrendingUp className="w-5 h-5 text-green-300" />
          <span className="text-sm">75% completion rate this week</span>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-5 rounded-full -ml-24 -mb-24"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-200 rounded-xl">
            <GraduationCap className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Applications</p>
            <p className="text-2xl font-bold text-gray-800">{applications.length}</p>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-2xl font-bold text-gray-800">{applications.filter(app => app.status === 'Under Review' && app.progress === 90).length}</p>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-xl">
            <Clock className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">In Progress</p>
            <p className="text-2xl font-bold text-gray-800">{applications.filter(app => app.status === 'In Progress').length}</p>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-red-100 to-rose-200 rounded-xl">
            <Bell className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Under Review</p>
            <p className="text-2xl font-bold text-gray-800">{applications.filter(app => app.status === 'Under Review' && app.progress < 90).length}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white border-opacity-20 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
      <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Why Choose UniFlow?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {whyChooseUsData.map((item, index) => {
          let Icon;
          switch (item.icon) {
            case '🎓':
              Icon = GraduationCap;
              break;
            case '📊':
              Icon = Target;
              break;
            case '📁':
              Icon = FileText;
              break;
            case '💬':
              Icon = Users;
              break;
            default:
              Icon = Award;
          }
          return (
            <div key={index} className="flex flex-col items-center text-center p-4 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full mb-4 shadow-lg transition-all duration-300 group-hover:shadow-purple-300 group-hover:scale-110">
                <Icon className="w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <p className="font-bold text-lg text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  </div>
);

export default SummaryTab;