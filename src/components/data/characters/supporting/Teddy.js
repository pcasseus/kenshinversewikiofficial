const teddy = {
  id: "#027",
  name: "Teddy Johnson",
  slug: "teddy",
  image: "/teddy.jpg",
  class: "Human",
  status: "Alive",
  tagline: "",
  primaryPower: "",
  stats: {
    affiliation: "S.T.A.T.I.C.",
    gender: "Male",
    height: "5'10\"",
    weight: "176 lbs",
    eyes: "Dark Brown",
    hair: "Black",
    "place of birth": "Leuven, Belgium"
  },
    abilities: [
      { name: "Human Physiology", description: "Human Physiology refers to the natural biological structure of unenhanced humans — a race without innate superpowers but defined by extraordinary adaptability, resilience, and intelligence. Though lacking the raw strength or energy manipulation of Deviants, humans possess remarkable physical and cognitive versatility. With training and discipline, they can achieve peak conditioning, master complex skills, and perform at elite levels across combat, science, and strategy. Their brains are highly adaptive, capable of abstract reasoning, emotional regulation, and creative problem-solving — often enabling them to outthink or outmaneuver more powerful beings. Most importantly, humans compensate for their physical limitations through innovation and tool use, crafting weapons, technologies, and tactics that rival supernatural forces. In a world of powers and gods, it is the human will — sharpened by experience and driven by purpose — that continues to shape history.", book: "Book 1" },
      {
        name: "Master Combatant",
        description: "Teddy Johnson is one of the most lethal human fighters alive — a disciplined, hyper-trained operator whose mastery of hand-to-hand combat has been forged in warzones, black ops missions, and personal loss. With no superhuman powers to rely on, Teddy has pushed his body and mind to peak human potential. His fighting style is fluid, deliberate, and brutally efficient — every move rooted in real-world application and refined through countless confrontations.",
        book: "Book 1",
        subAbilities: [
          { name: "Sensory Combat Adaptation", description: "Teddy’s deafness sharpens his visual acuity and kinetic awareness. He reads micro-movements, muscle tension, and footwork with uncanny accuracy — often predicting an attack before it happens. His ability to “feel” the rhythm of a fight, rather than hear it, gives him an edge in close-quarters where distractions and noise would hinder others.", book: "Book 1"},
          { name: "Silent Flow Style", description: "Because Teddy doesn't rely on verbal cues or auditory feedback, his combat rhythm is uninterrupted by chaos. He strikes and moves with total internal focus, maintaining composure even in the loudest or most disorienting scenarios. This internal rhythm translates to ruthless execution — all signal, no noise.", book: "Book 1"},
          { name: "Pain Desensitization", description: "Years of harsh training, injury, and brutal environments have conditioned Teddy’s body to operate under extreme pain. ", book: "Book 1"},
        ]
      },
      {
        name: "Tactical Genius",
        description: "Teddy isn’t just a weapon — he’s a mind built for war. Trained in urban warfare, silent entry, hostage retrieval, and kill-box strategy, Teddy maps battles in his head with exacting precision. His deafness never limits him; instead, it forces him to rely on logic, pre-planned contingencies, and enhanced environmental scanning.",
        book: "Book 1",
        subAbilities: [
          { name: "Visual-Based Battlefield Awareness", description: "Rather than relying on sound, Teddy processes visual input at a rapid pace. He notices details others overlook — slight changes in posture, reflected movement in glass, muzzle flashes, even shadows. This gives him an intuitive grasp of battlefield flow, allowing him to adjust tactics on the fly.", book: "Book 1"},
          { name: "Hand-Signal Command Structure", description: "Teddy uses custom-developed sign language, gesture code, and visual signaling to coordinate teams. His squads operate with precision even in radio blackout zones or sound-dampened environments, often moving faster and more silently than their adversaries can react.", book: "Book 1"},
          { name: "Instant Risk Assessment", description: "With no auditory input, Teddy processes risk through line-of-sight, spatial mapping, and kinetic cues. He doesn’t hesitate. His brain files every possible threat route and opportunity like a machine — a learned instinct honed by experience and necessity.", book: "Book 1"},
        ]
      },
      {
        name: "Weapons Expertise",
        description: "Teddy Johnson is a walking arsenal of knowledge. He’s trained with nearly every type of weapon imaginable and can improvise deadly tools from scraps if needed. Every motion is muscle memory — every reload, draw, or throw is surgical.",
        book: "Book 1",
        subAbilities: [
          { name: "Precision Firearms Use", description: "Teddy compensates for the lack of auditory cues with exceptional visual targeting. He uses visual recoil tracking and scope calibration for pinpoint accuracy, even during suppressive fire or while moving. He’s known for landing sniper shots in high-pressure windows and clearing rooms with ruthless efficiency.", book: "Book 1"},
          { name: "Melee Combat Mastery", description: "From combat knives and batons to machetes and tomahawks, Teddy flows between weapons with absolute control. His style emphasizes redirecting momentum, counter-pressure, and lethal close-range strikes — particularly joint breaks, throat shots, and artery cuts.", book: "Book 1"},
          { name: "Improvised Weapons Training", description: "In situations without standard weaponry, Teddy excels at turning found objects — pipes, tools, debris — into lethal extensions of his body. He’s studied how to kill with anything, anywhere.", book: "Book 1"},
        ]
      },
      {
        name: "Stealth & Espionage Operative",
        description: "Teddy operates best in silence — not because he has to, but because he was built for it. He is the quiet that enters a room before the storm. Trained in infiltration, evasion, and high-risk intel recovery, Teddy turns his hearing loss into a tactical asset.",
        book: "Book 1",
        subAbilities: [
          { name: "Total Silence Execution", description: "Unlike others who have to try to be quiet, Teddy naturally moves with zero noise awareness — because he lives in it. He is impossible to detect audibly, making him ideal for infiltration or assassination missions behind enemy lines.", book: "Book 1"},
          { name: "Infiltration and Disguise", description: "Trained in behavioral mimicry and deep-cover tactics, Teddy can pass for civilians, military, or even hostile operatives with the right setup. He relies on keen observation and mimics visual behaviors, posture, and routines to pass undetected — no fake accent or overheard conversation needed.", book: "Book 1"},
          { name: "Counter-Surveillance Expert", description: "Without the distractions of auditory overload, Teddy is highly attuned to unusual visuals — camera movement, shifting shadows, lens reflections. He’s a nightmare for enemy surveillance teams.", book: "Book 1"},
        ]
      },
      {
        name: "Leadership Without Words",
        description: "Teddy commands through presence, not volume. His leadership style is direct, disciplined, and trust-based — the kind of man people follow not because he speaks well, but because he never fails them.",
        book: "Book 1",
        subAbilities: [
            { name: "Non-Verbal Command", description: "Using refined hand signals and unwavering eye contact, Teddy can coordinate entire strike teams without saying a word. He instills communication discipline in every soldier he trains — forcing clarity, precision, and trust in shared tactics.", book: "Book 1"},
            { name: "Mentorship Through Action", description: "Teddy leads by example. He trains others in how to move, fight, think, and survive — especially those overlooked or underestimated. His resilience becomes a model; his silence, a language of strength.", book: "Book 1"},
            { name: "Moral Code", description: "Teddy doesn’t speak about why he fights — but his actions reveal a man of iron principles. He protects because he knows what it’s like to be overlooked. He fights because he knows the cost of silence. And he leads because if he doesn’t, someone else will die.", book: "Book 1"},
            
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
        name: "Lucinda Johnson",
        role: "Sister-inlaw",
        status: "Dead",
        link: "/characters/lucinda",
        image: "/lucinda.jpg"
      },
      {
        name: "Wesley Johnson",
        role: "Adopted Nephew",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
      },
      {
        name: "Roman Johnson",
        role: "Nephew",
        status: "Alive",
        link: "/characters/roman",
        image: "/roman.jpg"
      },
      {
        name: "Ajax Johnson",
        role: "Brother",
        status: "Alive",
        link: "/characters/ajax",
        image: "/ajax.jpg"
      },
      {
        name: "Gavin Summers",
        role: "Honorary Nephew",
        status: "Alive",
        link: "/characters/gavin",
        image: "/gavin.jpg"
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

export default teddy;