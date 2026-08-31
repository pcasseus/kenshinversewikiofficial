/**
 * UI-ONLY Ability Domain Resolver
 * No character data schemas are touched.
 * This file strictly maps ability names → display domains.
 */

const BASE_DOMAINS = {
  /* =========================
     CORE PHYSIOLOGY
  ========================== */
  "Alien Physiology": "Core Physiology",
  "Alpha Deviant Physiology": "Core Physiology",
  "Beta Deviant Physiology": "Core Physiology",
  "Enhanced Physiology": "Core Physiology",
  "Peak Physiology": "Core Physiology",
  "Human Physiology": "Core Physiology",

  /* =========================
     VIBRATION CONTROL (WESLEY)
  ========================== */
  "Vibration Manipulation": "Vibration Control",
  "Vibration Emission": "Vibration Control",
  "Shockwave Creation": "Vibration Control",
  "Pressure Manipulation": "Vibration Control",
  "Disintegration": "Vibration Control",
  "Resonant Reversal": "Vibration Control",

  /* =========================
     DEFENSIVE SYSTEMS
  ========================== */
  "Vibro-Shield": "Defensive Systems",
  "Vibration Absorption": "Defensive Systems",
  "Vibro-kinetic Absorption Combat": "Defensive Systems",
  "Vibro-Titanium Body": "Defensive Systems",
  "Vibration Armor": "Defensive Systems",

  "Nuclear Fusion Energy Shield": "Defensive Systems",
  "Nuclear Fusion Energy Dome": "Defensive Systems",
  "Nova Energy Shield": "Defensive Systems",
  "Nova Energy Dome": "Defensive Systems",
  "Nova Mass Shielding": "Defensive Systems",

  "Genefrost Shield": "Defensive Systems",
  "Genefrost Projectile Deflection": "Defensive Systems",
  "Enhanced Genefrost Deflection": "Defensive Systems",
  "Peak Genefrost Deflection": "Defensive Systems",
  "Absolute Genefrost Deflection": "Defensive Systems",

  /* =========================
     MOBILITY & MOVEMENT
  ========================== */
  "Levitation": "Mobility & Movement",
  "Phasing": "Mobility & Movement",
  "Vibration Jet Propulsion": "Mobility & Movement",
  "Vibrational Speed Field": "Mobility & Movement",
  "Afterimage Creation": "Mobility & Movement",

  "Nuclear Fusion Flight": "Mobility & Movement",
  "Nova Flight": "Mobility & Movement",

  "Genefrost Flow": "Mobility & Movement",
  "Glacial Skating": "Mobility & Movement",
  "Glacial Surfing": "Mobility & Movement",
  "Genefrost Teleportation": "Mobility & Movement",
  "Genefrost Intangibility": "Mobility & Movement",

  /* =========================
     PERCEPTION & AWARENESS
  ========================== */
  "Vibration Detection": "Perception & Awareness",
  "Vibrational Discrepancy Awareness": "Perception & Awareness",

  /* =========================
     ENERGY ABSORPTION & OUTPUT
  ========================== */
  "Nuclear Fusion Energy Absorption": "Energy Absorption & Storage",
  "Enhanced Absorption": "Energy Absorption & Storage",
  "Peak Absorption": "Energy Absorption & Storage",
  "Nova Energy Absorption": "Energy Absorption & Storage",

  "Energy Multiplier": "Energy Amplification",
  "Enhanced Energy Multiplier": "Energy Amplification",
  "Peak Energy Multiplier": "Energy Amplification",
  "Nova Energy Multiplier": "Energy Amplification",

  "Nuclear Fusion Energy Projection": "Energy Projection",
  "Nuclear Fusion Energy Blasts": "Energy Projection",
  "Nuclear Fusion Energy Bursts": "Energy Projection",
  "Nuclear Fusion Energy Spheres": "Energy Projection",
  "Nuclear Fusion Omni-Channel Projection": "Energy Projection",

  "Nova Energy Projection": "Energy Projection",
  "Nova Energy Blasts": "Energy Projection",
  "Nova Energy Bursts": "Energy Projection",
  "Nova Energy Spheres": "Energy Projection",
  "Nova Omni-Channel Projection": "Energy Projection",

  /* =========================
     CRYOGENIC (JADE)
  ========================== */
  "Genefrost Projection": "Cryogenic Projection",
  "Genefrost Blasts": "Cryogenic Projection",
  "Genefrost Blast Stream": "Cryogenic Projection",
  "Absolute Frost Genesis Projection": "Cryogenic Projection",

  "Frost Genesis": "Cryogenic Control",
  "Enhanced Frost Genesis": "Cryogenic Control",
  "Peak Frost Genesis": "Cryogenic Control",
  "Absolute Frost Genesis": "Cryogenic Control",

  "Genefrost Constructs": "Cryogenic Constructs",
  "Enhanced Genefrost Constructs": "Cryogenic Constructs",
  "Peak Genefrost Constructs": "Cryogenic Constructs",
  "Absolute Genefrost Constructs": "Cryogenic Constructs",

  "Genefrost Discharge": "Cryogenic Shock Control",
  "Enhanced Genefrost Discharge": "Cryogenic Shock Control",
  "Peak Genefrost Discharge": "Cryogenic Shock Control",
  "Absolute Genefrost Discharge": "Cryogenic Shock Control",

  "Genefrost Telekinesis": "Remote Manipulation",
  "Genefrost Avatars": "Remote Manipulation",

  /* =========================
     REGENERATION & RECOVERY
  ========================== */
  "Nova Healing": "Regeneration & Recovery",
  "Restorative Projection": "Regeneration & Recovery",

  "Genefrost Regeneration": "Regeneration & Recovery",
  "Enhanced Genefrost Regeneration": "Regeneration & Recovery",
  "Peak Genefrost Regeneration": "Regeneration & Recovery",
  "Absolute Genefrost Regeneration": "Regeneration & Recovery",

  "Genefrost Absorption": "Energy Recycling",
  "Enhanced Genefrost Absorption": "Energy Recycling",
  "Peak Genefrost Absorption": "Energy Recycling",
  "Absolute Genefrost Absorption": "Energy Recycling",

  /* =========================
     VISUAL / AURA STATES
  ========================== */
  "Energy Levels (Color Spectrum)": "Power States & Indicators",
  "Enhanced Energy Levels": "Power States & Indicators",
  "Peak Energy Levels": "Power States & Indicators",
  "Nova Energy Levels": "Power States & Indicators",

  /* =========================
     SKILLS & TRAINING
  ========================== */
  "Master Hacker": "Skills & Training",
  "Master Martial Artist": "Skills & Training",
  "Expert Spy": "Skills & Training",
  "Expert Tactician": "Skills & Training",

  "Genius-Level Intellect": "Advanced Intellect",
  "Rapid Scientific Comprehension": "Advanced Intellect",
  "Multidisciplinary Mastery": "Advanced Intellect",
  "Predictive Modeling": "Advanced Intellect",
  "Analytical Mind": "Advanced Intellect",
  "Crisis Problem-Solving": "Advanced Intellect",
  "Behavioral Analysis": "Advanced Intellect",
  "Real-Time Hypothesis Testing": "Advanced Intellect",
  "Enhanced Memory & Recall": "Advanced Intellect",

  /* =========================
     SCIENCE / MEDICAL
  ========================== */
  "Applied Scientist & Engineer": "Scientific Expertise",
  "On-the-Fly Cure Creation": "Scientific Expertise",
  "Toxin & Disease Resistance Knowledge": "Scientific Expertise",

  "Master Physician & Surgeon": "Medical & Support",
  "Surgical Precision": "Medical & Support",
  "Cross-Species Medical Knowledge": "Medical & Support",
  "Neural Repair and Stabilization": "Medical & Support",

  /* =========================
     RESTRICTED / HIGH-RISK
  ========================== */
  "Memory Alteration": "Restricted / High-Risk",
  "Voice Manipulation": "Restricted / High-Risk",

  /* =========================
     =========================
     KEITH POWERS (APPENDED)
     =========================
  ========================== */

  "Fire Manipulation": "Pyrokinetic Control",
  "Controlled Burn": "Pyrokinetic Control",
  "Heat Vision": "Pyrokinetic Control",

  "Pyrokinesis Projection": "Pyrokinetic Projection",
  "Fraternal Pyrokinesis Projection": "Pyrokinetic Projection",
  "Fire Blasts": "Pyrokinetic Projection",
  "Flame Jet Stream": "Pyrokinetic Projection",
  "Thermal Orbs": "Pyrokinetic Projection",
  "Pyrorespiratory Discharge": "Pyrokinetic Projection",

  "Pyrokinetic Constructs": "Pyrokinetic Constructs",
  "Fraternal Pyrokinetic Constructs": "Pyrokinetic Constructs",
  "Twin Pyrokinetic Constructs": "Pyrokinetic Constructs",
  "Flame Lassos": "Pyrokinetic Constructs",
  "Dragon Construct": "Pyrokinetic Constructs",
  "Lion Construct": "Pyrokinetic Constructs",
  "Gorilla Construct": "Pyrokinetic Constructs",
  "Humvee Construct": "Pyrokinetic Constructs",
  "Phoenix Construct": "Pyrokinetic Constructs",

  "Thermobaric Combustion Manipulation": "Thermobaric Combustion",
  "Thermobaric Combustion Output": "Thermobaric Combustion",
  "Peak Thermobaric Combustion Output": "Thermobaric Combustion",
  "Thermobaric Kinetic Combat": "Thermobaric Combat",
  "Thermal Latency Imprinting": "Thermobaric Combat",
  "Adiabatic Combustion Acceleration": "Thermobaric Combat",

  "Self-Detonation Burst": "High-Risk Detonation",
  "Twin Detonation Burst": "High-Risk Detonation",

  "Flight": "Mobility & Movement",
  "Flame Propulsion": "Mobility & Movement",
  "Fire Wings Constructs": "Mobility & Movement",
  "Explosive Propulsion": "Mobility & Movement",

  "Immunity to Fire": "Environmental Immunities",
  "Cold Resistance": "Environmental Immunities",

  "Unrelenting Combatant": "Combat Training",
  "Enhanced Unrelenting Combatant": "Combat Training",
  "Peak Unrelenting Combatant": "Combat Training",

  "Flameborne Twin": "Dual-Consciousness Abilities",
  "Backseat Driver": "Dual-Consciousness Abilities",
  "Flame Entity": "Dual-Consciousness Abilities",
  "Flame Possession": "Dual-Consciousness Abilities",
  "Subconscious Ascendance": "Dual-Consciousness Abilities",

  "Pyrokinesis Output": "Power States & Indicators",
  "Fraternal Flame Output": "Power States & Indicators",
  "Fraternal Inferno": "Transformation States",
  "Twin Inferno": "Transformation States",

  "Post-Burn Nerve Desensitization": "Restricted / High-Risk",

  /* =========================
     =========================
     DANNY POWERS (APPENDED)
     =========================
  ========================== */

  "Cognitive Hyperacceleration": "Neurocognitive Acceleration",
  "Rapid Cognition": "Neurocognitive Acceleration",
  "Quantum Parallelism": "Neurocognitive Acceleration",
  "Infinite Convergence": "Neurocognitive Acceleration",

  "Bioelectric Muscle Stimulation": "Neuroelectric Physiology",
  "Quantum Reinforcement": "Neuroelectric Physiology",
  "Symbiotic Conduction": "Neuroelectric Physiology",

  "Neuroelectric Rapid Regeneration": "Regeneration & Recovery",
  "Quantum Recovery": "Regeneration & Recovery",
  "Living Renewal": "Regeneration & Recovery",

  "Neuroelectric Lightning Manipulation": "Neuroelectric Control",
  "Quantum Discharge": "Neuroelectric Control",
  "Living Conduction": "Neuroelectric Control",

  "Neuroelectric Projection": "Energy Projection",
  "Neuroelectric Blast": "Energy Projection",
  "Neuroelectric Blast Streams": "Energy Projection",
  "Neuroelectric Wave": "Energy Projection",

  "Neuroelectric Hardlight Constructs": "Energy Constructs",
  "Dual Hardlight Axes": "Energy Constructs",
  "Bioelectric Shield": "Energy Constructs",
  "Stepping Pads": "Energy Constructs",
  "Hardlight Shurikens": "Energy Constructs",

  "Velocity Field": "Defensive Systems",
  "Quantum Envelope": "Defensive Systems",

  "Neurocardiac Revivification": "Medical & Support",

  "Cognitive-Molecular Phase Modulation": "Phase Manipulation",
  "Phase Shift": "Phase Manipulation",

  "Expert Neurokinetic Combatant": "Combat Training",

  /* =========================
     ZOEY POWERS (APPENDED)
  ========================== */

  "Unlimited Energy Generation": "Core Energy Generation",
  "Universal Energy Absorption": "Energy Absorption & Storage",
  "Free Energy Usage": "Energy Adaptation",

  "Photonic Energy Manipulation": "Photonic Control",
  "Enhanced Photonic Energy Manipulation": "Photonic Control",
  "Peak Photonic Energy Manipulation": "Photonic Control",

  "Photonic Energy Projection": "Energy Projection",
  "Enhanced Photonic Energy Projection": "Energy Projection",
  "Peak Photonic Energy Projection": "Energy Projection",

  "Photon Burst": "Energy Projection",
  "Photon Stream": "Energy Projection",
  "Photon Flashing": "Energy Projection",

  "Electrical Energy Manipulation": "Electrokinesis",
  "Enhanced Electrical Energy Manipulation": "Electrokinesis",
  "Peak Electrical Energy Manipulation": "Electrokinesis",

  "Electrical Energy Projection": "Energy Projection",
  "Enhanced Electrical Energy Projection": "Energy Projection",
  "Peak Electrical Energy Projection": "Energy Projection",

  "Electro Chain Arc": "Electrokinesis",
  "Electro Spike": "Electrokinesis",
  "Electro Current Field": "Electrokinesis",
  "Electro Bursts": "Electrokinesis",
  "Electro Balls": "Electrokinesis",

  "Electro Shields": "Defensive Systems",
  "Electro Barrier": "Defensive Systems",

  "Electrokinetic Constructs": "Energy Constructs",
  "Peak Electrokinetic Constructs": "Energy Constructs",
  "Electro Whip": "Energy Constructs",
  "Electro Rope": "Energy Constructs",
  "Electro Bolt": "Energy Constructs",
  "Electro Lance": "Energy Constructs",
  "Electro Prison": "Energy Constructs",

  "Electrical Sight": "Perception & Awareness",
  "Electromagnetic Perception": "Perception & Awareness",

  "Technopathy": "Technological Control",
  "Enhanced Technopathy": "Technological Control",
  "Peak Technopathy": "Technological Control",

  "Digital Manipulation": "Technological Control",
  "Technological Communication": "Technological Control",
  "Techno-Sensory Perception": "Technological Control",
  "Cybersecurity Expertise": "Technological Control",
  "Remote Hacking": "Technological Control",
  "Xeno-Tech Integration": "Technological Control",

  "Healing Factor": "Regeneration & Recovery",
  "Enhanced Healing Factor": "Regeneration & Recovery",
  "Peak Healing Factor": "Regeneration & Recovery",

  "Pure Energy Form": "Transformation States",
  "Enhanced Pure Energy Form": "Transformation States",

  "Immense Damage Output": "Transformation States",
  "Limitless Core": "Transformation States",
  "Intangible Vessel": "Transformation States",
  "Post-Mortal Resilience": "Transformation States",
  "Infinite Construct Creation": "Transformation States",

  /* =========================
     =========================
     WILLIAM HUTTON (TECH DOMAINS)
     =========================
  ========================== */

  "Omni-Technical Intellect": "Technological Mastery",
  "Rapid Technical Synthesis": "Technological Mastery",

  "Mechanical Engineering Mastery": "Engineering Systems",
  "Vehicle & Avionics Specialist": "Engineering Systems",

  "Power System Analytics": "Power Analysis & Optimization",
  "Power Profiling": "Power Analysis & Optimization",
  "Field Optimization": "Power Analysis & Optimization",

  "Suit & Equipment Engineering": "Combat Engineering",
  "Integrated Enhancements": "Combat Engineering",
  "Limb Reconstruction Engineering": "Combat Engineering",
  "Adaptive Design Philosophy": "Combat Engineering",

  "Tactical Systems & Software Design": "Tactical Technology",
  "Mission Control Interface": "Tactical Technology",
};

const CHARACTER_OVERRIDES = {
  wesley: {},
  zoey: {},
  gavin: {},
  jade: {},
  keith: {},
  danny: {},
  valeria: {},
};

export function getAbilityDomain(characterSlug, abilityName) {
  if (CHARACTER_OVERRIDES?.[characterSlug]?.[abilityName]) {
    return CHARACTER_OVERRIDES[characterSlug][abilityName];
  }

  return BASE_DOMAINS[abilityName] || "Unclassified Applications";
}
