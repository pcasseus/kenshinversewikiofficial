const WEAKNESS_DOMAINS = {
  // ─────────────────────────────
  // Physiological Limits
  // ─────────────────────────────
  "Recoil Threshold": "Physiological Limits",
  "Vibration Overload": "Physiological Limits",
  "Limiter Instability": "Physiological Limits",
  "Nova Instability": "Physiological Limits",
  "Cryogenic Core Strain": "Physiological Limits",
  "Genefrost Lockout": "Physiological Limits",
  "Pain Tolerance Backfire": "Physiological Limits",
  "Energy Burnout": "Physiological Limits",
  "Strain from Healing": "Physiological Limits",
  "Overextension Risk": "Physiological Limits",
  "Physical Containment Threshold": "Physiological Limits",
  "Human Limitation": "Physiological Limits",

  // ─────────────────────────────
  // Power Instability
  // ─────────────────────────────
  "Frequency Collapse": "Power Instability",
  "Risk Amplification": "Power Instability",
  "Construct Fragility": "Power Instability",
  "Power Nullification Sensitivity": "Power Instability",

  // ─────────────────────────────
  // Psychological Vulnerabilities
  // ─────────────────────────────
  "Emotional Destabilization": "Psychological Vulnerabilities",
  "Mental Overextension": "Psychological Vulnerabilities",
  "Split-Focus Breakdown": "Psychological Vulnerabilities",
  "Emotional Volatility": "Psychological Vulnerabilities",
  "Twin Bond Instability": "Psychological Vulnerabilities",
  "Mental Vulnerability": "Psychological Vulnerabilities",
  "Mental Overload": "Psychological Vulnerabilities",
  "Emotional and Psychological Strain": "Psychological Vulnerabilities",
  "Threshold Anxiety": "Psychological Vulnerabilities",
  "Invincibility Complex": "Psychological Vulnerabilities",
  Impulsiveness: "Psychological Vulnerabilities",
  "Unyielding Protector Mentality": "Psychological Vulnerabilities",

  // ─────────────────────────────
  // Operational Dependencies
  // ─────────────────────────────
  "Chip Dependency": "Operational Dependencies",
  "Dependency on Tech": "Operational Dependencies",
};

export function getWeaknessDomain(name) {
  return WEAKNESS_DOMAINS[name] || "Operational Risks";
}

export default WEAKNESS_DOMAINS;
