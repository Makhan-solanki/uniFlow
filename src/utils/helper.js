export const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Under Review': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  export const getDocumentStatus = (status) => {
    switch (status) {
      case 'received': return { icon: 'CheckCircle', color: 'text-green-500', text: 'Received' };
      case 'pending': return { icon: 'Clock', color: 'text-yellow-500', text: 'Pending' };
      case 'missing': return { icon: 'AlertTriangle', color: 'text-red-500', text: 'Missing' };
      default: return { icon: 'AlertTriangle', color: 'text-gray-500', text: 'Unknown' };
    }
  };
  
  export const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };