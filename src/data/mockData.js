import { Target, Award, Sparkles, Users } from 'lucide-react';

export const studentData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, USA',
  education: {
    current: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    graduationYear: '2024',
    gpa: '3.8'
  },
  applications: {
    total: 5,
    inProgress: 2,
    completed: 3
  },
  documents: {
    total: 12,
    uploaded: 8,
    pending: 4
  }
};

export const applications = [
  {
    id: 'APP001',
    university: 'Harvard University',
    program: 'Master of Business Administration',
    status: 'Under Review',
    progress: 75,
    deadline: '2024-12-15',
    documents: {
      transcript: 'received',
      recommendation_letter: 'received',
      statement_of_purpose: 'pending',
      resume: 'received',
      test_scores: 'missing'
    }
  },
  {
    id: 'APP002',
    university: 'Stanford University',
    program: 'Master of Computer Science',
    status: 'In Progress',
    progress: 45,
    deadline: '2024-11-30',
    documents: {
      transcript: 'received',
      recommendation_letter: 'pending',
      statement_of_purpose: 'received',
      resume: 'received',
      test_scores: 'received'
    }
  },
  {
    id: 'APP003',
    university: 'MIT',
    program: 'Master of Engineering',
    status: 'Under Review',
    progress: 90,
    deadline: '2024-12-01',
    documents: {
      transcript: 'received',
      recommendation_letter: 'received',
      statement_of_purpose: 'received',
      resume: 'received',
      test_scores: 'received'
    }
  }
];

export const upcomingDeadlines = [
  { id: 1, university: 'MIT', task: 'Personal Essay', date: '2025-06-12', priority: 'high', admissionPeriod: '2025-06-01 to 2025-07-15' },
  { id: 2, university: 'Stanford', task: 'Recommendation Follow-up', date: '2025-06-15', priority: 'medium', admissionPeriod: '2025-06-10 to 2025-08-01' },
  { id: 3, university: 'UC Berkeley', task: 'Application Start', date: '2025-06-20', priority: 'low', admissionPeriod: '2025-05-15 to 2025-07-30' },
  { id: 4, university: 'Harvard', task: 'Document Upload', date: '2025-06-25', priority: 'medium', admissionPeriod: '2025-06-20 to 2025-08-10' }
];

export const whyChooseUsData = [
  {
    title: 'Expert Guidance',
    description: 'Get personalized advice from experienced counselors who understand the application process.',
    icon: '🎓'
  },
  {
    title: 'Track Progress',
    description: 'Monitor your application status and deadlines in real-time with our intuitive dashboard.',
    icon: '📊'
  },
  {
    title: 'Document Management',
    description: 'Securely store and manage all your application documents in one place.',
    icon: '📁'
  },
  {
    title: '24/7 Support',
    description: 'Access round-the-clock support to help you with any questions or concerns.',
    icon: '💬'
  }
];

export const studentScores = {
  gmat: { score: 720, date: '2024-11-01' },
  ielts: { score: 7.5, date: '2024-10-15' },
  sgpa: { score: 9.2, session: 'Fall 2024' },
  cgpa: { score: 8.8 }
};

//
// 📄 src/utils/helpers.js
//
import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';

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
    case 'received': return { icon: CheckCircle, color: 'text-green-500', text: 'Received' };
    case 'pending': return { icon: Clock, color: 'text-yellow-500', text: 'Pending' };
    case 'missing': return { icon: AlertTriangle, color: 'text-red-500', text: 'Missing' };
    default: return { icon: AlertTriangle, color: 'text-gray-500', text: 'Unknown' };
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
