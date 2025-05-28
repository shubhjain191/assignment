"use client"

const NavigationTabs = ({ activeView, onViewChange, viewTabs }) => {
  return (
    <div className="flex gap-1 mb-6">
      {viewTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onViewChange(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
            activeView === tab ? "bg-green-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default NavigationTabs
