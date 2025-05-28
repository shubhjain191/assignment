const DashboardHeader = ({ candidatesCount }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">Post UX Designer</h1>
        <span className="text-gray-500">{candidatesCount} Candidates</span>
      </div>
    </div>
  )
}

export default DashboardHeader
