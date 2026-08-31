const torin = {
  id: "#028",
  name: "Torin Rossi",
  slug: "torin",
  image: "/torin.jpg",
  class: "Human",
  status: "Deceased",
  tagline: "",
  primaryPower: "",
  stats: {
    affiliation: "S.T.A.T.I.C.",
    gender: "Male",
    height: "6'0\"",
    weight: "181 lbs",
    eyes: "Blue",
    hair: "Brown",
    "place of birth": "Amstelveen, Netherlands"
  },
    abilities: [
      { name: "Human Physiology", description: "Human Physiology refers to the natural biological structure of unenhanced humans — a race without innate superpowers but defined by extraordinary adaptability, resilience, and intelligence. Though lacking the raw strength or energy manipulation of Deviants, humans possess remarkable physical and cognitive versatility. With training and discipline, they can achieve peak conditioning, master complex skills, and perform at elite levels across combat, science, and strategy. Their brains are highly adaptive, capable of abstract reasoning, emotional regulation, and creative problem-solving — often enabling them to outthink or outmaneuver more powerful beings. Most importantly, humans compensate for their physical limitations through innovation and tool use, crafting weapons, technologies, and tactics that rival supernatural forces. In a world of powers and gods, it is the human will — sharpened by experience and driven by purpose — that continues to shape history.", book: "Book 1" },
      {
        name: "Highly Skilled Combatant",
        description: "Torin Rossi is among the most capable human fighters in operation — a disciplined warrior forged by years of fieldwork, tactical training, and survival in high-risk environments. While not at the apex of combat mastery like a Samuel or Ajax, Torin’s fighting style is honed, efficient, and dependable under pressure. His approach emphasizes control over flair, precision over power.",
        book: "Book 1",
        subAbilities: [
          { name: "Tactical Adaptability", description: "Torin may not analyze opponents with the same surgical speed, but he’s sharp enough to adjust mid-fight. He reads patterns, reacts intelligently to new threats, and counters most standard fighting styles with competence and composure.", book: "Book 1"},
          { name: "Conditioned Endurance", description: "While he lacks the sheer pain tolerance of hardened warriors, Torin has been toughened by training and real-world engagements. He can fight through moderate injuries and endure prolonged combat with grit — though serious wounds will slow him significantly.", book: "Book 1"},
          { name: "Combat Efficiency", description: "Torin relies on practical techniques to end fights fast. He uses joint manipulation, leverage-based takedowns, and low-risk targeting to disable or subdue opponents — focusing on efficiency over flash or brutality.", book: "Book 1"},
        ]
      },
      {
        name: "Field Tactician & Small-Unit Strategist",
        description: "Torin may not be a walking war map, but he’s a proven small-unit tactician who thrives in team-based missions and urban operations. His grasp of battlefield dynamics is solid, especially in contained environments like buildings, ships, and city blocks.",
        book: "Book 1",
        subAbilities: [
          { name: "Situational Awareness", description: "Torin is observant and quick-thinking, able to call out flanks, coordinate breaching plans, and reroute squads around trouble spots. His strength lies in maintaining cohesion and momentum under pressure.", book: "Book 1"},
          { name: "Tactical Judgment", description: "While not the kind of leader who rewrites the rules mid-battle, Torin can improvise effectively when things go sideways. He knows when to fall back, when to push, and how to minimize casualties during chaos.", book: "Book 1"},
          { name: "Mission-Oriented Focus", description: "Torin keeps his head clear under fire, prioritizing objectives and team safety without emotional distraction. He isn’t the most visionary strategist, but he executes orders cleanly and leads from the front.", book: "Book 1"},
        ]
      },
      {
        name: "Weapons Specialist",
        description: "Torin is highly trained in conventional weaponry, with a practical arsenal of skills that make him effective in both ranged and melee engagements. While not a “master of all arms,” he is lethal with the tools he knows best.",
        book: "Book 1",
        subAbilities: [
          { name: "Firearms Proficiency", description: "Torin is a reliable marksman, with expert-level performance using pistols, carbines, and SMGs. He can maintain accuracy under pressure, especially in mid-range encounters and room-clearing scenarios.", book: "Book 1"},
          { name: "Close-Quarters Combat", description: "Skilled with knives, batons, and short blades, Torin is at his best when fights go tight. He uses direct, force-efficient moves that maximize his speed and minimize exposure.", book: "Book 1"},
          { name: "Limited Dual-Wield Capability", description: "Though not fully ambidextrous, Torin can manage dual weapons when needed — typically a firearm in one hand and blade in the other. His technique is serviceable, though not as fluid or deadly as specialists in dual-wield combat.", book: "Book 1"},
        ]
      },
      {
        name: "Espionage-Capable Operative",
        description: "Torin has training in stealth, infiltration, and intelligence-gathering. His spycraft is pragmatic and effective when paired with solid prep and tech support.",
        book: "Book 1",
        subAbilities: [
          { name: "Basic Stealth Ops", description: "Torin can move quietly, disable security systems, and operate unseen in hostile zones — provided the environment isn’t highly monitored or enhanced by Deviant detection tools.", book: "Book 1"},
          { name: "Infiltration Tactics", description: "Torin is capable of short-term undercover work, entry disguise, and simple misdirection. He lacks the deep-cover persona crafting or high-level impersonation skills of true master infiltrators.", book: "Book 1"},
          { name: "Interrogation & Recon", description: "Torin can extract intel through pressure and social manipulation, but his methods are straightforward and often rely on threat displays or bluffing. He is solid at reading tells, though not an expert in behavioral analysis", book: "Book 1"},
        ]
      },
      {
        name: "Team Leader & Ground-Level Commander",
        description: "Torin leads by example. He’s the kind of soldier others trust in the field, not because he inspires fear or awe — but because he’s consistent, brave, and always has their backs.",
        book: "Book 1",
        subAbilities: [
            { name: "Frontline Leadership", description: "Torin commands small units with confidence. His calm demeanor, clarity in chaos, and willingness to take hits for his team foster loyalty. He’s not a legend, but he’s the guy you want beside you in a firefight.", book: "Book 1"},
            { name: "Mentorship Style", description: "Though not a formal instructor, Torin has trained rookies and helped shape new recruits through practical experience. His advice is grounded in real-world survival — and his expectations are high but fair.", book: "Book 1"},
            { name: "Moral Flexibility", description: "Torin believes in the mission — but unlike Samuel, he hesitates at crossing certain lines. He’ll bend the rules if needed, but still draws limits at unnecessary cruelty or civilian harm. His restraint keeps him human, but sometimes costs him the edge in ruthless environments.", book: "Book 1"},
            
        ]
      },
    ],
      weaknesses: [
      {
        name: "Power Limit",
        description: "Wesley can only generate so much vibration before overloading."
      },
      {
        name: "Strain Under Overwhelming Force",
        description: "He cannot absorb impacts above planetary scale."
      }
    ],
    relationships: [

    {
        name: "Ajax Johnson",
        role: "Teammate",
        status: "Deceased",
        link: "/characters/ajax",
        image: "/ajax.jpg"
    },
    {
        name: "Teddy Johnson",
        role: "Teammate",
        status: "Deceased",
        link: "/characters/teddy",
        image: "/teddy.jpg"
    },
    {
        name: "Ivan Dvořák",
        role: "Teammate",
        status: "Deceased",
        link: "/characters/ivan",
        image: "/ivan.jpg"
    },
    {
        name: "Samuel Youssef",
        role: "Leader",
        status: "Deceased",
        link: "/characters/samuel",
        image: "/samuel.jpg"
    },
    ],
    uniforms: [
      {
        name: "",
        description: ""
      }
    ],
    tools: [
      {
        name: "",
        description: ""
      }
    ]
  };

export default torin;