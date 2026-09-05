const abilities = [
  {
    name: "Omni-Technical Intellect",
    domain: "Engineering & Systems Expertise",
    classification: "Expertise",
    release: "KVI",
    discovery: "beginning",

    description: `
William Hutton possesses an extraordinary, multidimensional intellect centered around engineering, systems design, and technological innovation. Unlike other genius minds that focus primarily on theory or scientific discovery, William's intelligence is practical, intuitive, and highly adaptive. He can deconstruct, comprehend, and rebuild even the most complex machines, infrastructures, or energy systems.

His deep understanding of mechanics, circuitry, software, propulsion, and integrated systems allows him to solve technical problems in real time, often producing efficient and elegant solutions faster than entire teams of specialists.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Rapid Technical Synthesis",
    domain: "Engineering & Systems Expertise",
    classification: "Expertise",
    release: "KVI",
    discovery: "beginning",

    description: `
William's intelligence is defined by a highly intuitive grasp of mechanical systems, infrastructure, and advanced technology. He does not simply understand machines after studying them. He rapidly identifies the logic governing how their components interact.

Whether working with human-built hardware, ancient mechanisms, experimental prototypes, or unfamiliar digital frameworks, William can adapt to new technology with minimal exposure. His mind quickly internalizes blueprints, functions, and system relationships, allowing him to reengineer, optimize, repair, or repurpose complex machinery under pressure.
    `.trim(),

    subAbilities: [
      {
        name: "Mechanical Engineering Mastery",
        release: "KVI",
        discovery: "beginning",

        description: `
William possesses expert command of mechanical engineering and can design, construct, repair, or improve systems ranging from vehicles and drones to robotics, weapons platforms, and specialized machinery. His understanding of engineering principles allows him to balance performance, durability, efficiency, and maintainability without sacrificing the intended function of the design.
        `.trim(),
      },

      {
        name: "Vehicle & Avionics Specialist",
        release: "KVI",
        discovery: "beginning",

        description: `
As one of S.T.A.T.I.C.'s foremost aerospace engineers, William specializes in propulsion systems, flight dynamics, avionics, cloaking architecture, navigation, and integrated artificial intelligence. He is responsible for the design and maintenance of several major S.T.A.T.I.C. aircraft, including the Javelin, Helldiver, and Avenger.

His work allows these vehicles to operate reliably in hostile environments while supporting rapid deployment, atmospheric flight, and advanced mission requirements.
        `.trim(),
      },
    ],
  },

  {
    name: "Suit & Equipment Engineering",
    domain: "Engineering & Systems Expertise",
    classification: "Expertise",
    release: "KVI",
    discovery: "beginning",

    description: `
William is responsible for designing and maintaining many of S.T.A.T.I.C.'s specialized suits, combat systems, and field technologies. Rather than treating equipment as generic armor or hardware, he builds each system around the physiology, abilities, movement patterns, and operational needs of its intended user.

His suits often incorporate environmental protection, impact management, sensory systems, diagnostics, power-regulation technology, and specialized interfaces designed to complement the wearer rather than interfere with them.

William has also developed advanced mechanical replacements for operatives who have suffered severe limb loss. These systems are designed to restore natural movement while integrating directly with the user's nervous system and existing combat equipment.
    `.trim(),

    subAbilities: [
      {
        name: "Integrated Enhancements",
        release: "KVI",
        discovery: "beginning",

        description: `
William equips specialized suits with systems tailored to the individual operative. Depending on the design, these may include kinetic dampeners, energy-dispersal systems, neural-response interfaces, environmental protection, diagnostic monitoring, enhanced sensory systems, adaptive camouflage, or emergency failsafes.

Rather than applying every technology universally, William selects and modifies each system according to the user's physiology, abilities, and mission requirements.
        `.trim(),
      },

      {
        name: "Limb Reconstruction Engineering",
        release: "KVI",
        discovery: "beginning",

        description: `
William can design advanced mechanical prosthetics capable of restoring precise motor function after catastrophic limb loss. These replacements incorporate responsive actuators, sensory-feedback systems, neural interfaces, and modular architecture that allows them to integrate naturally with the user's movement and equipment.

Certain designs can also support specialized combat systems or technological enhancements when the operative's role requires them.
        `.trim(),
      },

      {
        name: "Adaptive Design Philosophy",
        release: "KVI",
        discovery: "beginning",

        description: `
William rarely considers a piece of equipment permanently finished. He continually evaluates field performance, damage patterns, user feedback, changing mission requirements, and the development of an operative's abilities.

That information is used to refine later versions of suits, weapons, prosthetics, and support systems. His equipment evolves alongside the people using it rather than remaining locked to its original specifications.
        `.trim(),
      },
    ],
  },

  {
    name: "Tactical Systems & Software Design",
    domain: "Engineering & Systems Expertise",
    classification: "Expertise",
    release: "KVI",
    discovery: "beginning",

    description: `
William is highly skilled in systems development and digital engineering, allowing him to create custom operating environments, secure communication architecture, diagnostic software, automated control systems, and live-data infrastructure.

His software frequently connects S.T.A.T.I.C. personnel, vehicles, suits, facilities, and mission systems into unified operational networks, allowing information to move between field teams and command personnel in real time.
    `.trim(),

    subAbilities: [
      {
        name: "Mission Control Interface",
        release: "KVI",
        discovery: "beginning",

        description: `
William can build and maintain integrated mission-control systems capable of monitoring operative vitals, suit diagnostics, environmental conditions, vehicle status, battlefield telemetry, and energy signatures simultaneously.

These systems allow him to identify equipment failures, monitor rapidly changing conditions, activate remote safeguards, and provide technical support to deployed operatives while remaining connected to the broader mission network.
        `.trim(),
      },
    ],
  },

  {
    name: "Power System Analytics",
    domain: "Deviant Systems Analysis",
    classification: "Expertise",
    release: "KVI",
    discovery: "beginning",

    description: `
Despite possessing no Deviant abilities himself, William has developed extensive expertise in studying powered physiology, energy behavior, and the technological requirements associated with unusual abilities. By examining a Deviant's movement, output, biological responses, and environmental effects, he can often determine the underlying mechanics governing their abilities.

This understanding allows William to identify technical limitations, design specialized equipment, improve containment or safety systems, and develop technology capable of helping operatives use their abilities more effectively.
    `.trim(),

    subAbilities: [
      {
        name: "Power Profiling",
        release: "KVI",
        discovery: "beginning",

        description: `
By studying a Deviant's movement, energy output, physiological responses, and interactions with the surrounding environment, William can construct a working technical model of how their abilities function.

These profiles help him identify recurring patterns, operational limitations, energy requirements, and potential areas where specialized technology could improve control or safety.
        `.trim(),
      },

      {
        name: "Field Optimization",
        release: "KVI",
        discovery: "beginning",

        description: `
William uses power-profile data to design equipment specifically around an operative's capabilities. His modifications can improve stability, reduce dangerous feedback, compensate for physical limitations, or provide technological support for techniques the user would otherwise struggle to perform safely.

Rather than increasing a Deviant's biological power directly, William's systems help them use what they already possess with greater efficiency, precision, and reliability.
        `.trim(),
      },
    ],
  },
];

export default abilities;