const joaquin = {
  id: "#030",
  name: "Joaquin Kuan",
  slug: "joaquin",
  image: "/joaquin.jpg",
  class: "Civilian",
  status: "Alive",
  tagline: "",
  primaryPower: "Master Detective",
  stats: {
    affiliation: "New York Police Department (NYPD)",
    gender: "Male",
    height: "5'11\"",
    weight: "157 lbs",
    eyes: "Brown",
    hair: "Black",
    "place of birth": "Manila, Philippines"
  },
  abilities: [
    { name: "Human Physiology", description: "Human Physiology refers to the natural biological structure of unenhanced humans — a race without innate superpowers but defined by extraordinary adaptability, resilience, and intelligence. Though lacking the raw strength or energy manipulation of Deviants, humans possess remarkable physical and cognitive versatility. With training and discipline, they can achieve peak conditioning, master complex skills, and perform at elite levels across combat, science, and strategy. Their brains are highly adaptive, capable of abstract reasoning, emotional regulation, and creative problem-solving — often enabling them to outthink or outmaneuver more powerful beings. Most importantly, humans compensate for their physical limitations through innovation and tool use, crafting weapons, technologies, and tactics that rival supernatural forces. In a world of powers and gods, it is the human will — sharpened by experience and driven by purpose — that continues to shape history.", book: "Book 2" },
    { name: "Master Detective", 
      description: "Joaquin possesses an elite investigative mind honed through years of field experience and specialized Deviant Crimes training. He sees what others miss—small inconsistencies, overlooked evidence, and behavioral tells. He can reconstruct complex crime scenes with precision, even when superhuman abilities obscure the truth. His intuition often puts him a step ahead of both perpetrators and protocol, making him the go-to officer for Deviant-related anomalies across New York.", 
      book: "Book 2",
      subAbilities: [
        { name: "Forensic Pattern Recognition", description: "Joaquin is trained to spot both conventional and power-specific forensics—such as scorch patterns from pyrokinesis, fracturing from seismic blasts, or molecular burns left by teleportation. He can isolate energy signatures, reconstruct power sequences, and match them to known Deviant profiles in real time.", book: "Book 2"},
        { name: "Interrogation Savant", description: "Rather than relying solely on intimidation or authority, Joaquin uses conversational manipulation, pattern disruption, and psychological leverage. He can mirror a suspect's behavior to build rapport or disrupt their emotional baseline, causing slips that lead to confessions or unintentional intel drops.", book: "Book 2"},
        { name: "Psychological Profiling", description: "Given only a power set and a few crime scene photos, Joaquin can reverse-engineer a subject’s personality type, emotional volatility, and likely targets. His threat matrix system classifies Deviants by both power lethality and emotional control—allowing for predictive behavioral mapping.", book: "Book 2"},
      ],
    },
    { name: "Tactical Martial Artist", description: "Though his foundation is from the academy, Joaquin’s fighting style has evolved through countless real-world engagements with powered threats. He trains constantly to ensure he can stand his ground against both Deviants and well-armed humans. His fighting combines tactical discipline with battlefield improvisation.", book: "Book 2" },
    { name: "Urban Combat Conditioning", description: "From stairwells to moving subways, Joaquin adapts his footwork and striking tactics to confined or shifting environments. He uses walls for leverage, elevators for vertical control, and cars for hard cover. Every alley becomes an ambush zone in his hands.", book: "Book 2" },
    { name: "Close Quarters Neutralization", description: "Specializes in disabling enemies in tight spaces using shoulder checks, elbow strikes, kneecap stomps, and armlocks designed to control even superhuman foes. If the Deviant can bleed, spasm, or fall unconscious—Joaquin knows how to make it happen in seconds.", book: "Book 2" },
    { name: "Grapple Control", description: "Joaquin uses modified police judo to manipulate momentum. Whether facing a frenzied mutant or a kinetic-enhanced brawler, he can anchor a limb, off-balance a charge, and flip larger opponents using their own mass. He can ground powered threats long enough for suppression collars to be deployed.", book: "Book 2" },
    { name: "Tactical Rollouts", description: "When overwhelmed, Joaquin executes rolling transitions to reposition or escape. Using joint collapses, forward dives, and weaponized sweeps, he resets control over a losing engagement and regains footing in seconds.", book: "Book 2" },
    {
        name: "Weapon Mastery",
        description: "Joaquin is a marksman and melee specialist with elite proficiency across standard and modified weapons tailored for Deviant containment.",
        book: "Book 2",
        subAbilities: [
          { name: "Sidearm Precision", description: "His marksmanship scores are near-flawless. Joaquin can place a disabling shot through a moving target’s shoulder from 50 yards while compensating for crosswind. He trains with augmented recoil rounds and compensates instantly for power-interfered gravity fields.", book: "Book 2"},
          { name: "Dual-Wield Sidearm Combat", description: "While Joaquin typically favors operating with a single sidearm for mobility and precision, he is fully capable of dual-wielding firearms when the situation demands maximum suppressive output. In high-stakes, close-quarters encounters, he can fire from both hands with remarkable coordination—managing recoil, tracking multiple targets, and creating staggered firing rhythms that overwhelm enemies from multiple angles. His off-hand is nearly as accurate as his dominant, allowing him to pivot, fire, and reposition fluidly under pressure. This technique is especially effective in chaotic environments where threats come from all directions.", book: "Book 2"},
        ]
    },
    {
        name: "Master Marksman",
        description: "Joaquin ranks in the top percentile of NYPD firearms proficiency. When facing powered threats at range, his precision is often the difference between containment and catastrophe.",
        book: "Book 2",
        subAbilities: [
          { name: "Ballistic Adaptation", description: "Joaquin compensates for environmental distortions, like cryokinetic temperature shifts or telekinetic wind interference, by instinctively adjusting his aim path and recoil rhythm. He factors in bullet drop and reflective surfaces to predict indirect lines of fire.", book: "Book 2"},
          { name: "Scoped Tactical Ops", description: "Sniper-trained, he can act as overwatch in rooftop raids, hostage scenarios, or covert stakeouts. Joaquin uses high-magnification, thermal, and Deviant-specific scopes to track targets across entire blocks—even through minor obstructions like fog, smoke, or magical concealment.", book: "Book 2"},
        ]
    },
    {
        name: "Multilingual Proficiency",
        description: "Joaquin’s upbringing and fieldwork in multicultural communities give him the tools to communicate fluidly across cultures and crises.",
        book: "Book 2",
        subAbilities: [
          { name: "Spanish", description: "Fluent in Dominican, Puerto Rican, and Mexican dialects, Joaquin often leads investigations or mediations where other officers struggle to make inroads. His cultural fluency helps him navigate family dynamics, local customs, and street-level slang.", book: "Book 2"},
          { name: "Filipino", description: "Having grown up with strong cultural ties to his heritage, Joaquín is fluent in Filipino, enabling him to communicate with ease across a wide range of Filipino-speaking communities in New York. His fluency proves invaluable in witness interviews, family interventions, and local outreach.", book: "Book 2"},
          { name: "ASL", description: "Having worked cases involving trauma survivors and mute Deviants, Joaquin became fluent in ASL. He can give silent commands to allies during stealth ops and communicate clearly with witnesses who cannot speak.", book: "Book 2"},
        ]
    },
    {
        name: "Deviant Threat Strategist",
        description: "As head of Deviant Crimes for his precinct, Joaquin is not just a detective—he’s a tactician against superhuman threats.",
        book: "Book 2",
        subAbilities: [
          { name: "Power Profiling", description: "By observing the first few seconds of a Deviant's power manifestation—such as the angle of a blast or the physiological reaction—Joaquin can determine energy type, mobility potential, and known vulnerabilities. He then calibrates the engagement plan instantly.", book: "Book 2"},
          { name: "Containment Protocol Expert", description: "Joaquín is an expert in live engagement protocols for high-risk Deviant encounters. He’s trained extensively in assessing power classifications on the fly and applying the safest, most effective response strategy based on the Deviant’s known or observed abilities. Whether facing an energy manipulator, brute-type, or teleporting threat, Joaquín knows the optimal distance, formation, and engagement timing required to minimize civilian casualties and officer injury.", book: "Book 2"},
        ]
    },
  ],
  weaknesses: [],
  relationships: [
    {
        name: "Wesley Johnson",
        role: "Partner - Friend",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
    },
    {
        name: "Roman Johnson",
        role: "Friend",
        status: "Alive",
        link: "/characters/roman",
        image: "/roman.jpg"
    },
  ],
  uniforms: [],
  tools: []
};

export default joaquin;
