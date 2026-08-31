const wesleyPsychProfile = {
  notes: [
    "Subject exhibits extreme emotional suppression and hyper-control behaviors.",
    "Psychological strain increases proportionally with power output.",
    "If emotional anchors are compromised, catastrophic escalation is likely.",
    "Subject exhibits totalized responsibility, assuming sole culpability for crises with minimal causal linkage.",
  ],

  traits: [
    {
      name: "Hyper-Control",
      description:
        "Wesley maintains extreme regulation over his emotions and power output, treating himself as a volatile variable that must be constantly contained to prevent harm to others, often at the cost of his own well-being.",
    },
    {
      name: "Internalized Monstrosity",
      description:
        "Wesley harbors a persistent belief that his power makes him inherently dangerous. Any loss of control is interpreted as moral failure rather than circumstance, reinforcing his fear of being perceived as reckless or unstable.",
    },
    {
      name: "Self-Instrumentalization",
      description:
        "Wesley subconsciously reduces his own humanity to utility. His self-worth is measured by effectiveness, damage prevented, and suffering absorbed, with personal survival treated as secondary to mission outcomes.",
    },
    {
      name: "Obsessive Strategist",
      description:
        "Wesley plans multiple contingencies instinctively. His mind is constantly running predictive simulations, leading to both tactical brilliance and chronic exhaustion.",
    },
    {
      name: "Identity Suppression",
      description:
        "Due to being raised as Subject X9, Wesley struggles to view himself as human first. He often minimizes personal desires, relationships, and vulnerability in favor of utility.",
    },
    {
      name: "Deferred Identity",
      description:
        "Wesley does not meaningfully plan for a future self. He assumes stability is temporary and treats long-term fulfillment as something meant for others, prioritizing immediate threat containment over personal continuity.",
    },
    {
      name: "Anchor Dependency",
      description:
        "Wesley relies on specific individuals as emotional regulators rather than processing emotions internally. These anchors stabilize his judgment and precision; their compromise leads to rapid degradation of control and increased aggression.",
    },
    {
      name: "Delayed Grief Accumulation",
      description:
        "Rather than processing loss, Wesley archives it. Unresolved grief accumulates as psychological pressure, directly correlating with increased strain and amplified power output during high-stress scenarios.",
    },
    {
      name: "Totalized Responsibility",
      description:
        "Wesley assigns full blame to himself for any crisis in which he has even minimal involvement. Presence, proximity, or power potential are sufficient for him to assume sole culpability, compelling extreme corrective action and refusal to delegate.",
    },
    {
      name: "Overcorrection Compulsion",
      description:
        "Once Wesley believes he is responsible for an outcome, he pursues resolution at any cost. This leads to escalation beyond necessity, excessive self-sacrifice, and prioritization of outcomes over survivability.",
    },
    {
      name: "Moral Absolutism Under Stress",
      description:
        "Under high-pressure conditions, Wesley's ethical framework narrows into binary outcomes: fixed or failed, saved or lost. This results in decisive action but reduced tolerance for nuance or alternative approaches.",
    },
    {
      name: "Psychological Load–Power Feedback Loop",
      description:
        "Wesley’s power output scales with psychological strain. Stress, guilt, and unresolved emotional pressure directly amplify his abilities, creating a reinforcing cycle of increased capability paired with increased instability.",
    },
  ],

  threatMeter: {
    early: {
      value: 32,
      label: "Contained Instability",
    },
    mid: {
      value: 61,
      label: "Escalating Threat",
    },
    end: {
      value: 100,
      label: "Existential-Level Risk",
    },
  },
};

export default wesleyPsychProfile;
