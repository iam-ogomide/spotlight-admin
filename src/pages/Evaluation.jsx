import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Evaluation = () => {
    const [submissions, setSubmissions] = useState([
        {
          id: 1,
          projectTitle: "Full Stack Development Challenge",
          userName: "John Doe",
          submittedDate: "2025-02-18",
          status: "PENDING",
          score: null,
        },
        {
          id: 2,
          projectTitle: "UI/UX Design Competition",
          userName: "Jane Smith",
          submittedDate: "2025-02-17",
          status: "EVALUATED",
          score: 92,
        },
      ]);
    
      const [selectedSubmission, setSelectedSubmission] = useState(null);
      const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState(false);
      const [evaluationForm, setEvaluationForm] = useState({
        score: '',
        feedback: ''
      });
    
      const handleEvaluate = (submission) => {
        setSelectedSubmission(submission);
        setIsEvaluationModalOpen(true);
      };
    
      const handleSubmitEvaluation = (e) => {
        e.preventDefault();
        // Update the submission with new score and status
        const updatedSubmissions = submissions.map(sub => {
          if (sub.id === selectedSubmission.id) {
            return {
              ...sub,
              score: parseFloat(evaluationForm.score),
              status: 'EVALUATED'
            };
          }
          return sub;
        });
    
        setSubmissions(updatedSubmissions);
        setIsEvaluationModalOpen(false);
        setEvaluationForm({ score: '', feedback: '' });
      };
      
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Submission Evaluations</h1>

      {/* Submissions Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submitted Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {submissions.map((submission) => (
              <tr key={submission.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {submission.projectTitle}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{submission.userName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{submission.submittedDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    submission.status === 'EVALUATED' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {submission.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {submission.score ? `${submission.score}%` : '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.status === 'PENDING' && (
                    <button
                      onClick={() => handleEvaluate(submission)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Evaluate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Evaluation Modal */}
      {isEvaluationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              Evaluate Submission
            </h2>
            <form onSubmit={handleSubmitEvaluation} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Score (0-100)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={evaluationForm.score}
                  onChange={(e) => setEvaluationForm({
                    ...evaluationForm,
                    score: e.target.value
                  })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Feedback
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows="3"
                  value={evaluationForm.feedback}
                  onChange={(e) => setEvaluationForm({
                    ...evaluationForm,
                    feedback: e.target.value
                  })}
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit Evaluation
                </button>
                <button
                  type="button"
                  onClick={() => setIsEvaluationModalOpen(false)}
                  className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Evaluation