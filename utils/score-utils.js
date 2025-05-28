// Color mapping for skill scores
export const getScoreColor = (score) => {
    const colors = {
      0: "bg-gray-100",
      1: "bg-green-100",
      2: "bg-green-200",
      3: "bg-green-400",
      4: "bg-green-600",
    }
    return colors[score] || "bg-gray-100"
  }
  