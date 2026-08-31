const warren = {
  id: "#050",
  name: "Warren Summers",
  slug: "warren",
  image: "/warren.jpg",
  class: "Human",
  status: "Alive",
  tagline: "",
  primaryPower: "",
  stats: {
    affiliation: "S.T.A.T.I.C.",
    gender: "Male",
    height: "5'10\"",
    weight: "160 lbs",
    eyes: "Hazel",
    hair: "Blonde",
    "place of birth": "San Antonio, Texas"
  },
    abilities: [
      { name: "Peak Human Physiology", description: "Warren Summers stands as a living testament to the pinnacle of natural human potential. Though not enhanced by Deviant genetics or experimental augmentation (beyond his cybernetic arm), his body operates at the highest level a human can achieve. Years of relentless training, battlefield experience, and elite-level conditioning have refined his strength, speed, reflexes, and endurance to their absolute peak. Every movement is optimized, every strike efficient, and every reaction measured. His pain tolerance is extraordinarily high — the result of decades surviving wounds, burns, and trauma that would incapacitate most. Warren has learned not just how to fight, but how to survive, adapt, and recover in the harshest environments. His physical durability is matched by a near-flawless command of his body, allowing him to function under extreme stress and injury without losing effectiveness.", book: "Book 3" },
      
      {
        name: "Master Combatant",
        description: "Warren is a highly trained S.T.A.T.I.C. field agent specializing in efficient, mission-oriented close-quarters combat. While not a martial arts prodigy, his experience across multiple combat environments and operations has forged him into a dependable and dangerous opponent in the field. His style is less about flair and more about control, adaptability, and outcome — neutralizing threats with fast, calculated precision.",
        book: "Book 1",
        subAbilities: [
          { name: "Situational Combat Analysis", description: "Warren has been trained to read an opponent’s posture, movement, and intent in real time. He quickly adapts to the combat style of street-level threats, rogue Deviants, or paramilitary fighters by modifying his footwork, stance, and timing. His approach favors stability and efficiency over complexity, exploiting predictable patterns or emotional tells to control engagements.", book: "Book 3"},
          { name: "Operational Durability", description: "Though not a superhuman, Warren's pain tolerance and conditioning are well above average. His training prepares him to keep functioning through minor injuries, environmental stressors, or sensory impairment. This mental resilience allows him to complete missions even while wounded or outnumbered.", book: "Book 3"},
          { name: "Neutralization Specialist", description: "Warren excels in fast incapacitation techniques designed for use in tight, high-risk situations — stairwells, corridors, elevators, etc. He uses joint locks, pressure strikes, disarms, and controlled takedowns to end fights within seconds, prioritizing non-lethal methods when necessary. These skills are critical for detaining Deviants alive, controlling panic in urban zones, or preventing escalation in hostage or crowd-control scenarios.", book: "Book 3"},
        ]
      },
      
      {
        name: "Tactical Operative & Field Strategist",
        description: "Warren is a mission-first thinker with a strong tactical mind and years of real-world experience in high-risk, high-stakes environments. He’s not a general shouting orders — he’s the one embedded on the ground, reading the situation in real time and adjusting the playbook as the situation evolves. Whether leading a two-man extraction team or coordinating with S.T.A.T.I.C. support units, Warren turns unpredictability into opportunity.",
        book: "Book 3",
        subAbilities: [
          { name: "Tactical Foresight", description: "Warren has a strong grasp of threat assessment and environmental flow. He reads terrain, behavior, and timing patterns to anticipate hostile movement, detect ambush setups, and identify exploitable blind spots. His field intuition lets him position allies for advantage and cut off enemy momentum before it builds.", book: "Book 3"},
          { name: "Mission Fluidity", description: "In high-pressure moments where seconds matter, Warren excels at adapting the mission plan without losing control. He makes decisive calls on the fly — changing ingress points, switching objectives, or calling audible extractions — all while keeping the team aligned. His composure under fire makes him a reliable pivot point during chaos.", book: "Book 3"},
        ]
      },

      {
        name: "Weapons Proficiency",
        description: "Warren is a tactical weapons specialist with comprehensive training in firearms and melee weapons relevant to field ops. His skillset is focused, efficient, and grounded in real-world combat applications. He’s not flashy — he’s effective. Every weapon in his hands is a tool, and he uses the right tool for the job.",
        book: "Book 3",
        subAbilities: [
          { name: "Firearms Competence", description: "Warren is highly trained in the use of handguns, SMGs, carbines, and precision rifles. He excels at close-quarters marksmanship and dynamic threat neutralization, often engaging moving targets in tight spaces or high-stress scenarios. His trigger discipline, reflexes, and controlled firing patterns make him reliable in both solo ops and coordinated team breaches.", book: "Book 3"},
          { name: "Practical Melee Training", description: "While not a master of exotic weapons, Warren is trained in baton use, knife defense/offense, and blunt-force tools. His melee combat focuses on disabling over killing — targeting joints, nerves, or pressure points to end a fight fast and decisively. These skills come into play when ammo runs low or silence is a necessity.", book: "Book 3"},
          { name: "Tactical Dual-Wielding", description: "Though not a common tactic, Warren is capable of wielding two compact weapons (like twin knives or a pistol and blade) when a mission calls for ambidextrous flexibility. He uses this style to cover narrow angles, control confined spaces, or maintain offense and defense simultaneously in chaotic environments.", book: "Book 3"},
        ]
      },

      {
        name: "Covert Operations Specialist",
        description: "Warren is trained in surveillance, infiltration, and low-profile extraction. He doesn’t need the spotlight — in fact, his greatest asset is staying out of it. With a calm demeanor and an expert’s understanding of human behavior and movement, Warren navigates hostile territory with silence, precision, and intent. When he’s embedded, no one sees him coming — or going.",
        book: "Book 3",
        subAbilities: [
            { name: "Stealth Operative", description: "Warren is trained to operate silently across a range of environments — from dense urban terrain to sensor-heavy facilities. He knows how to avoid cameras, patrol routes, motion triggers, and even some Deviant-based detection systems. His goal isn’t to win fights — it’s to avoid them entirely unless absolutely necessary.", book: "Book 3"},
            { name: "Deception & Cover Protocols", description: "Warren can adopt false personas, forge credentials, and use basic vocal profiling to pass through checkpoints or interact with targets during short ops. His approach relies on timing, detail, and behavioral mirroring to get in, extract, and get out clean.", book: "Book 1"},
            { name: "Counterintel & Extraction Tactics", description: "Warren is proficient in recognizing tells, reading body language under pressure, and dismantling surface-level deception. While not a master interrogator, he can sniff out disinformation and identify behavioral inconsistencies. He excels at clean data retrieval — files, tech, comms — and minimizing trail exposure during exfil.", book: "Book 1"},
            
        ]
      },
      
      {
        name: "Team Presence & Leadership Under Fire",
        description: "Warren may not lead with rank, but his consistency, composure, and dependability give him weight in the field. Teammates listen when he speaks — not because he demands it, but because they know he’s not guessing. His presence steadies the line when things go sideways.",
        book: "Book 3",
        subAbilities: [
            { name: "Ground-Level Leadership", description: "Warren keeps his team focused under pressure, offering calm, clear directives when plans break down. He doesn’t micromanage — he adapts, redirects, and reinforces without hesitation. His field decisions often strike the right balance between risk and reward.", book: "Book 3"},
            { name: "Mentorship & Training", description: "Warren doesn’t train squads in classrooms. He teaches through action — on ops, during crises, and in moments that test character. Younger agents respect him not just for what he knows, but how he carries himself when it matters most.", book: "Book 3"},
            { name: "Steady Code", description: "Warren doesn’t chase glory or revenge. He operates by a personal code rooted in protection, precision, and people over ego. That focus keeps him grounded when others spiral — and makes him someone others trust to watch their six.", book: "Book 1"},
            
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
        name: "Katherine Summers",
        role: "Wife",
        status: "Alive",
        link: "/characters/katherine",
        image: "/katherine.jpg"
      },
      {
        name: "Gavin Summers",
        role: "Son",
        status: "Alive",
        link: "/characters/warren",
        image: "/warren.jpg"
      },
      {
        name: "Aiden Summers",
        role: "Son",
        status: "Alive",
        link: "/characters/aiden",
        image: "/aiden.jpg"
      },
      {
        name: "Logan Summers",
        role: "Son",
        status: "Alive",
        link: "/characters/logan",
        image: "/logan.jpg"
      },
      {
        name: "Wesley Johnson",
        role: "Honorary Nephew",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
      }
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

export default warren;