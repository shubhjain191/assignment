"use client"

import { useState } from "react"
import { candidatesData, allSkills } from "../data/candidates-data"
import DashboardHeader from "../components/dashboard-header"
import NavigationTabs from "../components/navigation-tabs"
import CandidatesSidebar from "../components/candidates-sidebar"
import SkillsHeatmap from "../components/skills-heatmap"

const UXSkillsDashboard = () => {
  const [activeView, setActiveView] = useState("Compare View")
  const [selectedCandidates, setSelectedCandidates] = useState([])
  const [hoveredCandidate, setHoveredCandidate] = useState(null)

  const handleCandidateClick = (candidateId) => {
    setSelectedCandidates((prev) =>
      prev.includes(candidateId) ? prev.filter((id) => id !== candidateId) : [...prev, candidateId],
    )
  }

  const viewTabs = ["Compare View"]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader candidatesCount={candidatesData.length} />

        <NavigationTabs activeView={activeView} onViewChange={setActiveView} viewTabs={viewTabs} />

        <div className="flex gap-6">
          <CandidatesSidebar
            candidates={candidatesData}
            selectedCandidates={selectedCandidates}
            hoveredCandidate={hoveredCandidate}
            onCandidateClick={handleCandidateClick}
            onCandidateHover={setHoveredCandidate}
            onCandidateLeave={() => setHoveredCandidate(null)}
          />

          <SkillsHeatmap candidates={candidatesData} selectedCandidates={selectedCandidates} allSkills={allSkills} />
        </div>
      </div>
    </div>
  )
}

export default UXSkillsDashboard
