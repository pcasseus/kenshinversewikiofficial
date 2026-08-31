const williamPsychProfile = {
  notes: [
    "Subject exhibits compulsive engagement with mechanical and technical problems.",
    "Demonstrates identity reinforcement through competence and usefulness.",
    "Redirects emotional stress into sustained productivity.",
    "Assumes responsibility for failures regardless of direct fault.",
    "Displays quiet fear of inadequacy masked by overpreparation.",
  ],

  traits: [
    {
      name: "Compulsive Problem Solver",
      description:
        "William experiences an almost constant need to fix, improve, or optimize systems around him. Problems feel personal rather than abstract, prompting immediate engagement as a means of regaining control and stability.",
    },
    {
      name: "Identity Through Competence",
      description:
        "William’s sense of self is closely tied to his technical ability. Being capable and prepared provides emotional stability, while moments of failure or inability generate quiet internal doubt even if it is not outwardly expressed.",
    },
    {
      name: "Emotional Deflection via Work",
      description:
        "William avoids sitting with difficult emotions by immersing himself in projects. Grief, fear, and uncertainty are redirected into productivity, delaying emotional processing and allowing stress to accumulate over time.",
    },
    {
      name: "Responsibility Without Recognition Seeking",
      description:
        "William does not seek acknowledgment for his work. Success is treated as expected, while failure is internalized as personal responsibility, contributing to sustained mental and physical strain.",
    },
    {
      name: "Improvisational Intelligence",
      description:
        "William excels at adaptive problem-solving under pressure, rapidly modifying plans and repurposing materials in hostile or limited environments. This flexibility increases mission success but can encourage risk-taking over safer delays.",
    },
    {
      name: "Protective Through Preparation",
      description:
        "William expresses care by anticipating danger and preventing failure through planning, reinforcement, and redundancy. When someone is harmed despite his preparation, he experiences it as a personal failure.",
    },
    {
      name: "Suppressed Fear of Inadequacy",
      description:
        "Beneath William’s competence lies a persistent fear of not being enough when it matters most. This fear drives overpreparation and relentless self-demand rather than hesitation or withdrawal.",
    },
  ],

  threatMeter: {
    book1: {
      value: 10,
      label: "Low External Risk",
    },
    book2: {
      value: 10,
      label: "Sustained Operational Strain",
    },
    book3: {
      value: 10,
      label: "Cumulative Burnout Risk",
    },
  },
};

export default williamPsychProfile;
