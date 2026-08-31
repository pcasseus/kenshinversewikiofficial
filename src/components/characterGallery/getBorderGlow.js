const getBorderGlow = (division) => {
  if (division === "S.T.A.T.I.C.") return "border-yellow-400 shadow-yellow-500/40";
  if (division === "Aetherian") return "border-cyan-400 shadow-cyan-500/40";
  if (division === "Unaffiliated") return "border-purple-400 shadow-purple-500/40";
  if (division === "Iztan") return "border-red-500 shadow-red-500/40";
  if (division === "Alien") return "border-green-500 shadow-green-500/40";
  return "border-gray-500 shadow-gray-400/30";
};

export default getBorderGlow;
