const andrew = {
  id: "#022",
  name: "Andrew Torres",
  slug: "andrew",
  image: "/andrew.jpg",
  class: "Civilian",
  status: "Alive",
  tagline: "Somebody has to keep your secrets safe.",
  primaryPower: "Federal Agent Training Protocol",
  stats: {
    affiliation: "Federal Agent",
    gender: "Male",
    height: "5'7\"",
    weight: "165 lbs",
    eyes: "Brown",
    hair: "Black",
    "place of birth": "Queens, New York"
  },
  abilities: [
    { name: "Human Physiology", description: "Human Physiology refers to the natural biological structure of unenhanced humans — a race without innate superpowers but defined by extraordinary adaptability, resilience, and intelligence. Though lacking the raw strength or energy manipulation of Deviants, humans possess remarkable physical and cognitive versatility. With training and discipline, they can achieve peak conditioning, master complex skills, and perform at elite levels across combat, science, and strategy. Their brains are highly adaptive, capable of abstract reasoning, emotional regulation, and creative problem-solving — often enabling them to outthink or outmaneuver more powerful beings. Most importantly, humans compensate for their physical limitations through innovation and tool use, crafting weapons, technologies, and tactics that rival supernatural forces. In a world of powers and gods, it is the human will — sharpened by experience and driven by purpose — that continues to shape history.", book: "Book 1" },
    { name: "Federal Agent Training Protocol", description: "Andrew is a standard field agent trained by the FBI in accordance with federal law enforcement guidelines. His capabilities stem from rigorous instruction in investigation, situational awareness, firearms handling, defensive tactics, and threat de-escalation — forming a well-rounded, grounded foundation.", book: "Book 1" },
    {
        name: "Behavioral Analysis & Predictive Profiling",
        description: "Andrew is a graduate of the FBI’s Behavioral Science Unit and a pioneer in profiling Deviant and Unnatural behavior. He combines forensic psychology, social engineering, and combat intuition to anticipate threats before they happen.",
        book: "Book 1",
        subAbilities: [
          { name: "Profiling Mastermind", description: "Reads a subject’s psychological state in seconds — fear tells, aggression triggers, or confidence shifts — allowing him to predict intent with chilling accuracy.", book: "Book 1"},
          { name: "Microexpression Reading", description: "Identifies hidden emotions or deceit through involuntary facial cues and body language shifts. Gives him an edge in interrogation, negotiation, or even combat.", book: "Book 1"},
          { name: "Combat Pattern Recognition", description: "Breaks down opponents' rhythm and style mid-fight, allowing him to spot flaws, counters, and repetitive patterns with deadly precision.", book: "Book 1"},
          { name: "High-Pressure Interrogator", description: "Uses empathy, misdirection, or cold pressure to break suspects — especially those with something to hide.", book: "Book 1"},
        ]
    },
    {
        name: "Tactical Firearms & Marksmanship Mastery",
        description: "Andrew's skillset goes far beyond basic firearms training into combat-tested, field-specific weapons mastery.",
        book: "Book 1",
        subAbilities: [
          { name: "Pistol Combat (CQB)", description: "Can double-tap center mass before most opponents draw. Capable of non-lethal disabling shots with surgical precision.", book: "Book 1"},
          { name: "Long-Range Shooting", description: "Trained in sniper support tactics; windage, bullet drop, and target movement are second nature at long distances.", book: "Book 1"},
          { name: "Combat Reload Techniques", description: "Mag swaps, failure drills, and offhand transitions executed under duress without breaking tactical posture.", book: "Book 1"},
          { name: "Dual Wield & Ambidexterity", description: "Has full functionality in both hands — crucial in situations involving injury or off-angle threats.", book: "Book 1"},
          { name: "Tactical Suppression & Control", description: "Knows how to use sound, muzzle flash, and controlled chaos to dominate the battlefield.", book: "Book 1"},
        ]
    },
    {
        name: "Mental Conditioning & Resilience",
        description: "Andrew’s mind is his sharpest weapon. Years of exposure to horrors have hardened him into a cold strategist with unwavering discipline.",
        book: "Book 1",
        subAbilities: [
          { name: "Combat-Ready Mindset", description: "Fear, adrenaline, and emotional noise are compartmentalized in real-time.", book: "Book 1"},
          { name: "Stress Isolation Technique", description: "Can remain calm even in hostage situations, biohazard zones, or during personal loss.", book: "Book 1"},
          { name: "Noir-Level Intuition", description: "Senses traps, betrayal, or lies like a sixth sense — often reading between words that were never said.", book: "Book 1"},
          { name: "Psych Shielding", description: "Resists telepathic or memory-based influence due to compartmentalized thought patterns and trauma-induced neural resistance.", book: "Book 1"},
        ]
    },
  ],
  weaknesses: [],
  relationships: [
    {
        name: "Robert Garcia",
        role: "Bestfriend",
        status: "Alive",
        link: "/characters/robert",
        image: "/robert.jpg"
    },
    {
        name: "Justin Frasier",
        role: "Friend",
        status: "Alive",
        link: "/characters/justin",
        image: "/justin.jpg"
    },
    {
        name: "Anthony Delgado",
        role: "Friend",
        status: "Alive",
        link: "/characters/anthony",
        image: "/anthony.jpg"
    },
    {
        name: "Wesley Johnson",
        role: "Ex-Friend",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
    },
  ],
  uniforms: [],
  tools: []
};

export default andrew;
