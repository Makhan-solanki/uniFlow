import React, { useState } from 'react';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import ApplicationDetails from './ApplicationDetails';

const ApplicationsTab = ({ applications }) => {
    const [selectedApplication, setSelectedApplication] = useState(null);

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
        <div className="space-y-6">
            {applications.map((application) => (
                <div
                    key={application.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{application.university}</h3>
                            <p className="text-gray-600">{application.program}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(application.status)}`}>
                            {application.status}
                        </span>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Progress</span>
                            <span className="text-sm font-medium text-gray-900">{application.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${application.progress}%` }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {Object.entries(application.documents).map(([doc, status]) => {
                            const { icon: Icon, color, text } = getDocumentStatus(status);
                            return (
                                <div key={doc} className="flex items-center space-x-2">
                                    <Icon className={`w-5 h-5 ${color}`} />
                                    <span className="text-sm text-gray-600 capitalize">{doc.replace('_', ' ')}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={() => setSelectedApplication(application)}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            View Details
                        </button>
                    </div>
                </div>
            ))}

            {selectedApplication && (
                <ApplicationDetails
                    application={selectedApplication}
                    onClose={() => setSelectedApplication(null)}
                />
            )}
        </div>
    );
};

export default ApplicationsTab;