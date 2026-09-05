const weaknesses = [
  {
    name: "Regulator Dependency",
    domain: "Neural Regulation",
    classification: "Technological Dependency",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny’s natural neuroelectric system operates at a rate his body cannot reliably coordinate without technological regulation. His ARC Node keeps his accelerated cognition, motor functions, neuroelectric output, and molecular state synchronized. If the implant is damaged or removed, those systems begin falling out of alignment. Danny may involuntarily accelerate, shift between normal and hyperfast speech, lose precise control of his movements, release unintended neuroelectric energy, or partially phase without meaning to. The longer he remains unregulated, the harder it becomes for him to consciously keep his mind and body operating at the same speed.
    `.trim(),

    subWeaknesses: [],
  },

  {
    name: "ARC Node Thermal Limit",
    domain: "Neural Regulation",
    classification: "Technological Limit",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny’s original ARC-7.9X Node can regulate his natural abilities reliably, but sustained high-output activity can eventually exceed the implant’s processing capacity. Prolonged use of maximum speed, heavy neuroelectric output, or repeated cognitive overclocking causes heat to accumulate within the device. If its temperature rises too far, Danny must reduce his output or risk regulator failure. This limitation belongs to the original ARC Node itself rather than Danny’s physiology and is eliminated by William Hutton’s upgraded Quantum Synaptic Lattice.
    `.trim(),

    subWeaknesses: [],
  },

  {
    name: "Cognitive Saturation",
    domain: "Cognitive Limits",
    classification: "Mental Limit",
    release: "KVI",
    discovery: "beginning",

    description: `
Cognitive Hyperacceleration allows Danny to process enormous amounts of information in moments, but greater processing speed does not guarantee that every problem has an immediate solution. Situations involving insufficient information, rapidly changing variables, psychic interference, or deliberately unpredictable behavior can overwhelm even his ability to calculate ahead. When too many possibilities remain equally viable, Danny can lose the predictive advantage he normally relies upon and be forced to react without a clear answer.
    `.trim(),

    subWeaknesses: [],
  },

  {
    name: "Finite Neuroelectric Reserves",
    domain: "Neuroelectric Limits",
    classification: "Energy Limit",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny can generate tremendous amounts of bioelectric energy through his accelerated physiology, but his body is not an infinite power source. Sustained maximum-speed movement, repeated neuroelectric attacks, regeneration, and Chloro manifestations all draw from the same underlying system. Heavy expenditure eventually leaves his output diminished and his body physically exhausted, forcing Danny to choose how he distributes his remaining energy during prolonged engagements.
    `.trim(),

    subWeaknesses: [],
  },

  {
    name: "Chloro Construct Concentration",
    domain: "Neuroelectric Limits",
    classification: "Concentration Limit",
    release: "KVI",
    discovery: "beginning",

    description: `
Chloro constructs are created by compressing Danny’s neuroelectric energy into stable hardlight forms, making them more cognitively demanding than ordinary neuroelectric attacks. Maintaining multiple or increasingly complex constructs requires continuous precision. Powerful impacts, sudden disruptions to his concentration, or attempting to sustain too many forms simultaneously can destabilize their structure and cause them to break apart.
    `.trim(),

    subWeaknesses: [],
  },

  {
    name: "Accelerated Healing Cost",
    domain: "Neuroelectric Limits",
    classification: "Physiological Cost",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny’s regenerative ability accelerates his natural recovery rather than making him immune to injury. Repairing significant damage consumes substantial biological and neuroelectric resources, reducing the energy available for speed and offensive abilities. Severe injuries can therefore weaken Danny even while they are actively healing, and damage beyond his regenerative capabilities can still incapacitate or kill him.
    `.trim(),

    subWeaknesses: [],
  },

  {
    name: "Speed Differential",
    domain: "Combat Limitations",
    classification: "Combat Limitation",
    release: "KVI",
    discovery: "beginning",

    description: `
Much of Danny’s combat advantage depends on operating faster than his opponent can perceive, process, or respond. Enemies capable of matching his speed, anticipating his movement, restricting his available routes, or reacting within his accelerated perception can dramatically reduce that advantage. Danny remains an extensively trained combatant without a speed advantage, but opponents who can genuinely keep pace force him into a far more conventional fight.
    `.trim(),

    subWeaknesses: [],
  },

  {
    name: "Overextension Risk",
    domain: "Extreme Overload",
    classification: "Critical Limit",
    release: "KVIII",
    discovery: "end",

    description: `
Danny can force Cognitive Hyperacceleration beyond the operating range his physiology was naturally built to sustain. At extreme levels, his cognition, neuroelectric output, physical acceleration, and molecular vibration begin escalating together faster than his body can safely maintain them. Continuing past this threshold risks progressive molecular destabilization, causing portions of his body to lose physical cohesion. If Danny refuses to slow down, the process can become irreversible and ultimately result in complete physical disintegration.
    `.trim(),

    subWeaknesses: [],
  },
];

export default weaknesses;