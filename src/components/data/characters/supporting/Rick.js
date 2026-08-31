const rick = {
  id: "#032",
  name: "Rick Hudson",
  slug: "rick",
  image: "/rick.jpg",
  class: "Civilian",
  status: "Alive",
  tagline: "",
  primaryPower: "Base Commander – Fort Hamilton",
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
    { name: "Base Commander – Fort Hamilton", description: "Commander Rick oversees one of the most strategically important Army installations in New York City. Tasked with both regional military readiness and emergency Deviant protocol execution, he blends old-school discipline with evolving warfare doctrine.", book: "Book 2" },
    { name: "Operational Command Expertise", 
      description: "Rick is responsible for the oversight, training, and safety of all personnel stationed at Fort Hamilton. His command decisions affect not just his base but potentially the entire NYC metro military response grid.", 
      book: "Book 2",
      subAbilities: [
        { name: "Urban Warfare Preparedness", description: "Rick trains his units for metropolitan conflict—handling tight-quarters navigation, civilian evacuation, and coordination with city infrastructure in real-time.", book: "Book 2"},
        { name: "Deviant Threat Coordination", description: "Rick serves as a regional liaison during Deviant-level emergencies, ensuring his base can act as a secure staging area or fallback zone if needed.", book: "Book 2"},
      ],
    },
    { name: "Military Tactical Authority", 
      description: "With years of combat experience in global deployments and joint task force operations, Rick brings battle-hardened precision to the homefront.", 
      book: "Book 2",
      subAbilities: [
        { name: "Field-to-Command Versatility", description: "Whether managing drills from the war room or leading breach response squads during a blackout scenario, Rick remains adaptable and tactically lethal.", book: "Book 2"},
        { name: "Containment Readiness", description: "Oversees training in use of power-dampening equipment, military suppression tactics, and crowd control strategies tailored to powered or enhanced threats.", book: "Book 2"},
      ],
    },
    { name: "Combat Veteran & Close Quarters Specialist", 
      description: "Though now a commander, Rick is no stranger to conflict zones. His fighting style is practical and unrelenting—built on survival, not ceremony.", 
      book: "Book 2",
      subAbilities: [
        { name: "Joint Combat Discipline", description: "Trained in Army Combatives and Close Quarters Battle, Rick teaches soldiers how to handle confined, high-pressure threats—including superhuman ones.", book: "Book 2"},
        { name: "Momentum Disruption Tactics", description: "Uses modified throws, control locks, and weighted strikes to neutralize even larger or faster enemies, then calls in rapid team support.", book: "Book 2"},
      ],
    },
    { name: "Logistical and Infrastructure Control", 
      description: "Rick doesn’t just run troops—he manages the entire operational structure of Fort Hamilton, from housing to emergency drills.", 
      book: "Book 2",
      subAbilities: [
        { name: "Infrastructure Security", description: "Personally developed fallback protocols for cyberattack scenarios, facility lockdown, and inter-agency breach containment.", book: "Book 2"},
        { name: "Housing & Veteran Support Oversight", description: "Works closely with regional VA contacts to coordinate veteran access, security clearances, and emergency sheltering for medically vulnerable populations.", book: "Book 2"},
      ],
    },
    { name: "Weapons & Engagement Systems Expert", 
      description: "Rick curates the armory himself, ensuring all soldiers are prepared for modern threats—from urban guerrilla tactics to meta-human combatants.", 
      book: "Book 2",
      subAbilities: [
        { name: "Ballistic Oversight", description: "Specializes in hard-surface penetration rounds, rubberized crowd dispersal kits, and power-surge shield mods for field use.", book: "Book 2"},
        { name: "Suppressive Engagement Strategist", description: "Coordinates layered engagement models, with contingency plans for snipers, riot suppression, and EMP-deployment units", book: "Book 2"},
      ],
    },
    { name: "Cultural & Community Liaison", 
      description: "Located in the heart of Brooklyn, Rick leads outreach with diverse civilian populations while managing the public-facing side of the base.", 
      book: "Book 2",
      subAbilities: [
        { name: "Civil-Military Coordination", description: "Coordinates with NYPD, FDNY, and city emergency agencies during parades, disasters, and Deviant threat surges to ensure smooth chain-of-command transfer. ", book: "Book 2"},
      ],
    },
  ],
  weaknesses: [],
  relationships: [
    {
        name: "Wesley Johnson",
        role: "Enemy",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
    },
    {
        name: "Zoey Pierce-Harris",
        role: "Enemy",
        status: "Alive",
        link: "/characters/zoey",
        image: "/zoey.jpg"
    },
  ],
  uniforms: [],
  tools: []
};

export default rick;
