import React from 'react';
import { X, Clock, CheckCircle, AlertTriangle, FileText, Calendar, User, Mail, Phone } from 'lucide-react';

const ApplicationDetails = ({ application, onClose }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDocumentStatus = (status) => {
    switch (status) {
      case 'received': return { icon: CheckCircle, color: 'text-green-500', text: 'Received' };
      case 'pending': return { icon: Clock, color: 'text-yellow-500', text: 'Pending' };
      case 'missing': return { icon: AlertTriangle, color: 'text-red-500', text: 'Missing' };
      default: return { icon: AlertTriangle, color: 'text-gray-500', text: 'Unknown' };
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">{application.university.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{application.university}</h2>
              <p className="text-gray-600">{application.program}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status and Progress */}
          <div className="flex justify-between items-center">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(application.status)} shadow-lg`}>
              {application.status}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">Progress:</span>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {application.progress}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500" 
              style={{ width: `${application.progress}%` }}
            />
          </div>

          {/* Documents Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(application.documents).map(([doc, status]) => {
                const { icon: Icon, color, text } = getDocumentStatus(status);
                return (
                  <div 
                    key={doc} 
                    className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                      status === 'received' ? 'bg-green-50 border-green-200' :
                      status === 'pending' ? 'bg-yellow-50 border-yellow-200' :
                      'bg-red-50 border-red-200'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${color}`} />
                    <div>
                      <p className="text-sm font-medium text-gray-800 capitalize">{doc.replace('_', ' ')}</p>
                      <p className="text-xs text-gray-600">{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Application Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Application Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Application Deadline: {application.deadline}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Application ID: {application.id}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Admissions Officer: John Smith</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">admissions@{application.university.toLowerCase().replace(/\s+/g, '')}.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
          <button 
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
          >
            Close
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
            Update Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails; 