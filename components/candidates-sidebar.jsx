"use client"

import { User } from 'lucide-react'

const CandidatesSidebar = ({
  candidates,
  selectedCandidates,
  hoverCandidate,
  onCandidateClick,
  onCandidateHover,
  onCandidateLeave,
}) => {
  const isSelected = (candidateId) => selectedCandidates.includes(candidateId)

  return (
    <div className="w-72 bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h3 className="font-medium text-gray-800">Candidates ({candidates.length})</h3>
        <p className="text-xs text-gray-500 mt-1">Select candidates to compare their skills in the heatmap.</p>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            onClick={() => onCandidateClick(candidate.id)}
            onMouseEnter={() => onCandidateHover(candidate.id)}
            onMouseLeave={onCandidateLeave}
            className={`p-3 border-b cursor-pointer transition-colors ${
              isSelected(candidate.id)
                ? "bg-blue-50 border-l-4 border-l-blue-500"
                : hoverCandidate === candidate.id
                  ? "bg-gray-50"
                  : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-gray-800">{candidate.name}</div>
              </div>
              {isSelected(candidate.id) && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CandidatesSidebar
