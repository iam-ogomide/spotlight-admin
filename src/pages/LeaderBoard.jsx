import React, { useState } from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

const LeaderBoard = () => {

    const [timeFilter, setTimeFilter] = useState('all');
    const [candidates, setCandidates] = useState([
      {
        id: 1,
        name: "John Doe",
        projectsCompleted: 5,
        averageScore: 92.5,
        totalScore: 462,
        highestScore: 98,
        rank: 1
      },
      {
        id: 2,
        name: "Jane Smith",
        projectsCompleted: 4,
        averageScore: 90.2,
        totalScore: 361,
        highestScore: 95,
        rank: 2
      },
      {
        id: 3,
        name: "Mike Johnson",
        projectsCompleted: 5,
        averageScore: 88.7,
        totalScore: 443,
        highestScore: 94,
        rank: 3
      },
      // Add more candidates here
    ]);
  
    const getRankIcon = (rank) => {
      switch(rank) {
        case 1:
          return <Trophy className="h-6 w-6 text-yellow-500" />;
        case 2:
          return <Medal className="h-6 w-6 text-gray-400" />;
        case 3:
          return <Award className="h-6 w-6 text-amber-700" />;
        default:
          return <span className="text-gray-500 font-bold">{rank}</span>;
      }
    };


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <div className="flex space-x-2">
          <select
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="all">All Time</option>
            <option value="month">This Month</option>
            <option value="week">This Week</option>
          </select>
        </div>
      </div>

      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {candidates.slice(0, 3).map((candidate) => (
          <div 
            key={candidate.id}
            className={`bg-white rounded-lg shadow p-6 ${
              candidate.rank === 1 ? 'ring-2 ring-yellow-500' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getRankIcon(candidate.rank)}
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
              </div>
              <span className="text-2xl font-bold text-blue-600">{candidate.averageScore}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Projects Completed</span>
                <span className="font-medium">{candidate.projectsCompleted}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Highest Score</span>
                <span className="font-medium">{candidate.highestScore}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Score</span>
                <span className="font-medium">{candidate.totalScore}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Projects Completed
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Average Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Highest Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Score
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getRankIcon(candidate.rank)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{candidate.projectsCompleted}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{candidate.averageScore}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{candidate.highestScore}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{candidate.totalScore}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaderBoard