const SkillsHeatmap = ({ candidates, selectedCandidates, allSkills }) => {
  const isSelected = (candidateId) => selectedCandidates.includes(candidateId)


  const getScoreColor = (score) => {
    const colors = {
      0: "bg-gray-100",
      1: "bg-green-100",
      2: "bg-green-200",
      3: "bg-green-400",
      4: "bg-green-600",
    }
    return colors[score] || "bg-gray-100"
  }

  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-800">Skills Comparison</h3>
          <div className="text-sm text-gray-500">
            {selectedCandidates.length > 0 &&
              `${selectedCandidates.length} candidate${selectedCandidates.length > 1 ? "s" : ""} selected`}
          </div>
        </div>
      </div>

      <div className="overflow-auto relative">
        <div className="min-w-max">
          <div className="flex sticky top-0 bg-white border-b">
            <div className="w-48 p-3 border-r bg-gray-50 font-medium text-sm">Skills</div>
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className={`w-16 p-2 border-r text-center ${isSelected(candidate.id) ? "bg-blue-50" : "bg-gray-50"}`}
              >
                <div className="text-xs font-medium text-gray-700 writing-mode-vertical transform rotate-90 whitespace-nowrap">
                  {candidate.name.split(" ")[0]}
                </div>
              </div>
            ))}
          </div>

          {allSkills.map((skill) => (
            <div key={skill} className="flex border-b">
              <div className="w-48 p-3 border-r bg-gray-50 text-sm">{skill}</div>
              {candidates.map((candidate) => {
                const score = candidate.skills[skill]
                const showData = selectedCandidates.length > 0 && isSelected(candidate.id)
                return (
                  <div
                    key={candidate.id}
                    className={`w-16 p-2 border-r ${showData ? getScoreColor(score) : "bg-gray-100"
                      } ${isSelected(candidate.id) ? "ring-2 ring-blue-300" : ""}`}
                    title={showData ? `${candidate.name}: ${skill} - Score: ${score}` : ""}
                  ></div>
                )
              })}
            </div>
          ))}
        </div>

        {selectedCandidates.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
              <span className="font-medium">Select candidate to compare</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center justify-center gap-6">
          <span className="text-sm text-gray-600">Score:</span>
          {[0, 1, 2, 3, 4].map((score) => (
            <div key={score} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${getScoreColor(score)} border`}></div>
              <span className="text-xs text-gray-600">{score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsHeatmap
