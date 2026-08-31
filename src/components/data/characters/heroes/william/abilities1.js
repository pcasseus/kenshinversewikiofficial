const abilities = [
  {
    name: "Human Physiology",
    books: [1],
    description:
      "Humans are the non-powered majority of the global population. While they lack innate abilities or mutations, their adaptability, innovation, and resilience have allowed them to thrive in a world increasingly shaped by Deviants. Human potential is expressed not through enhanced biology, but through technology, intelligence, strategy, and sheer willpower. Many humans pursue mastery in science, combat, or leadership roles—filling vital positions in organizations like S.T.A.T.I.C., military divisions, and political bodies. Though they do not possess elemental powers or physical augmentations, elite human operatives can outmaneuver or even neutralize lower-tier Deviants through skill, planning, and specialized equipment.",
    evolved: [],
    subAbilities: [],
  },
  {
    name: "Omni-Technical Intellect",
    books: [1],
    description:
      "William Hutton possesses an extraordinary, multidimensional intellect centered around engineering, systems design, and technological innovation. Unlike other genius minds that focus purely on theory or scientific discovery, William’s intelligence is practical, intuitive, and highly adaptive. He can deconstruct, comprehend, and rebuild even the most complex machines, infrastructures, or energy systems. His deep understanding of mechanics and circuitry allows him to solve problems in real time, often creating efficient, elegant solutions faster than most teams of experts.",
    evolved: [],
    subAbilities: [],
  },
  {
    name: "Rapid Technical Synthesis",
    books: [1],
    description:
      "William’s intelligence is defined by a hyper-intuitive grasp of mechanical systems, infrastructure, and power-based technology. He does not just understand machines; he perceives their logic instantly. Whether it is human-built hardware, ancient mechanisms, or unfamiliar digital frameworks, William can adapt to almost any form of technology with minimal exposure. His mind rapidly internalizes blueprints, systems, and functions, allowing him to reengineer, optimize, or repair them under pressure. This instinctive synthesis makes him a one-of-a-kind engineer who can turn any tool, vehicle, or system into something he understands and controls.",
    evolved: [],
    subAbilities: [
      {
        name: "Mechanical Engineering Mastery",
        books: [1],
        description:
          "William’s understanding of machines is second nature. He can build, optimize, or repair anything from vehicles and drones to high-performance suits and advanced robotics. His deep knowledge of engineering principles allows him to design systems that are both efficient and durable, often improving upon the original concept. Whether working with raw materials or cutting-edge prototypes, William brings precision, creativity, and reliability to everything he builds.",
      },
      {
        name: "Vehicle & Avionics Specialist",
        books: [1],
        description:
          "As S.T.A.T.I.C.'s leading aerospace engineer, William designed all major team aircraft, including the Javelin, Helldiver, and Avenger. He specializes in propulsion systems, flight dynamics, cloaking architecture, and rapid-response AI integration. His work ensures that every vehicle operates with precision, speed, and adaptability in high-risk environments, often pushing the boundaries of what atmospheric and spaceflight systems can achieve.",
      },
    ],
  },
  {
    name: "Power System Analytics",
    books: [1],
    description:
      "Despite lacking powers himself, William has an uncanny ability to study and decode the unique biology, energy signatures, and behavioral traits of Deviants and extraterrestrial beings. By watching a Deviant in action, even for a short time, he can often infer how their ability functions, what fuels it, and where its limitations lie. His insights allow him to design optimized gear, suggest advanced applications, and help others unlock deeper control over their powers.",
    evolved: [],
    subAbilities: [
      {
        name: "Power Profiling",
        books: [1],
        description:
          "By analyzing a Deviant’s real-time movement, energy output, and neurological response patterns, William can reverse-engineer the fundamental mechanics of their power. He uses this data to theorize improvements.",
      },
      {
        name: "Field Optimization",
        books: [1],
        description:
          "William frequently enhances a Deviant's performance through personalized gear and suit integration. His upgrades amplify strengths, cover tactical blind spots, and in rare cases have catalyzed dormant or unstable powers into fully formed abilities through tech-aided breakthroughs and simulations.",
      },
    ],
  },
  {
    name: "Suit & Equipment Engineering",
    books: [1],
    description:
      "William is responsible for all team suits and specialized combat gear, each custom-built to align with the user’s power set, physiology, and personality. These suits are more than armor. They function as responsive, tech-augmented extensions of the wearer, embedded with environmental defenses, stealth capabilities, sensory interfaces, and real-time diagnostics. William’s designs ensure optimal performance under extreme conditions, while also providing emotional and physical support tailored to each hero’s journey. He has also pioneered advanced mechanical limb replacements for teammates who have experienced limb loss in the line of duty. These prosthetics are not only durable and functional, but are integrated seamlessly with the user’s neural pathways and combat systems. In many cases, they restore and even enhance their combat capabilities.",
    evolved: [],
    subAbilities: [
      {
        name: "Integrated Enhancements",
        books: [1],
        description:
          "Every suit William designs comes equipped with a core suite of cutting-edge systems, refined through constant field testing. These include kinetic dampeners to absorb impact trauma, energy dispersal nodes that redirect hostile blasts, and neural-response circuits that sync suit functions with the user’s reflexes. Sensory overlays enhance perception across multiple spectra, while adaptive camouflage allows real-time environmental blending. In critical moments, emergency containment failsafes activate to shield the wearer from internal surges, external overloads, or total system failure. These enhancements are not just features but are the reason S.T.A.T.I.C. operatives survive the impossible.",
      },
      {
        name: "Limb Reconstruction Engineering",
        books: [1],
        description:
          "William’s prosthetic designs are fully mechanized, featuring precision motor function, modular compatibility with user powers, and sensory feedback systems that allow natural movement. Some are even equipped with combat tools or tech-augmented enhancements beyond normal human limits.",
      },
      {
        name: "Adaptive Design Philosophy",
        books: [1],
        description:
          "William treats every suit and device as a living system that evolves alongside its user. He refines his designs through constant analysis of field performance, power growth, and psychological feedback. Each update is precise and intentional, tailored to amplify the user's abilities while supporting their mental and emotional needs. His gear is never static. It grows, adapts, and transforms with the person who wears it.",
      },
    ],
  },
  {
    name: "Tactical Systems & Software Design",
    books: [1],
    description:
      "William is a highly capable systems developer and digital engineer, able to construct custom OS environments, secure software protocols, and integrate live-data systems across both human and alien interfaces. His real-time tools serve as mission-critical infrastructure for the team’s survival.",
    evolved: [],
    subAbilities: [
      {
        name: "Mission Control Interface",
        books: [1],
        description:
          "William maintains a central link to all team vitals, suit diagnostics, atmospheric conditions, and battlefield telemetry. This system is operated through a custom wrist-mounted or neural-linked device that allows him to issue commands, deploy failsafes, or monitor energy signatures remotely.",
      },
    ],
  },
];

export default abilities;
