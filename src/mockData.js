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

export const studentScores = {
  gmat: { score: 720, date: '2024-11-01' },
  ielts: { score: 7.5, date: '2024-10-15' },
  sgpa: { score: 9.2, session: 'Fall 2024' },
  cgpa: { score: 8.8 }
}; 