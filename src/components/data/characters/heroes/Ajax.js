const ajax = {
  id: "#025",
  name: "Ajax Johnson",
  slug: "ajax",
  image: "/ajax.jpg",
  class: "Human",
  status: "Alive",
  tagline: "",
  primaryPower: "",
  stats: {
    affiliation: "S.T.A.T.I.C.",
    gender: "Male",
    height: "6'0\"",
    weight: "170 lbs",
    eyes: "Hazel",
    hair: "Bald",
    "place of birth": "Leuven, Belgium"
  },
    abilities: [
      { name: "Peak Human Physiology", description: "Ajax Johnson stands as a living testament to the pinnacle of natural human potential. Though not enhanced by Deviant genetics or experimental augmentation (beyond his cybernetic arm), his body operates at the highest level a human can achieve. Years of relentless training, battlefield experience, and elite-level conditioning have refined his strength, speed, reflexes, and endurance to their absolute peak. Every movement is optimized, every strike efficient, and every reaction measured. His pain tolerance is extraordinarily high — the result of decades surviving wounds, burns, and trauma that would incapacitate most. Ajax has learned not just how to fight, but how to survive, adapt, and recover in the harshest environments. His physical durability is matched by a near-flawless command of his body, allowing him to function under extreme stress and injury without losing effectiveness. ", book: "Book 1" },
      {
        name: "Master Combatant",
        description: "Ajax is one of the most skilled fighters in the entire verse — a battle-hardened veteran whose mastery of hand-to-hand combat is matched only by a handful of beings alive. Having trained in over two dozen martial arts styles and field-tested every one of them in the harshest conditions imaginable, Ajax blends power, technique, and instinct into an unrelenting combat style. Every movement is deliberate, every strike a potential finisher, and every counter executed with surgical precision.",
        book: "Book 1",
        subAbilities: [
          { name: "Adaptive Combat Style", description: "Ajax can instantly analyze and counter an opponent’s fighting technique in real time. Whether facing unpredictable street brawlers or disciplined martial artists, he adjusts his stance, tempo, and attack vectors fluidly — often turning his enemies’ strengths into weaknesses within moments.", book: "Book 1"},
          { name: "Pain Conditioning", description: "Years of frontline combat, torture survival, and rigorous training have conditioned Ajax’s nervous system to withstand immense physical trauma. He can push through dislocated joints, broken bones, and concussive impacts without hesitation — often fighting more fiercely the more wounded he becomes.", book: "Book 1"},
          { name: "Disarm and Disable", description: "Ajax excels in precision-targeted moves designed to end fights quickly without lethal force. Using joint locks, pressure point strikes, and lightning-fast parries, he can neutralize armed opponents, disable limbs, or render enemies unconscious in seconds. These techniques make him ideal for covert operations and hostage scenarios where lethal force is not an option.", book: "Book 1"},
        ]
      },
      {
        name: "Master Tactician & Field Strategist",
        description: "Ajax is a war-tested commander whose mind is as sharp as his blade. With decades of experience in battlefield logistics, infiltration planning, squad tactics, and large-scale warfare, Ajax has become a walking war map. He can assess threats within seconds, identify patterns others miss, and outmaneuver enemies with calculated precision. He doesn’t just play the game — he rewrites the board mid-battle.",
        book: "Book 1",
        subAbilities: [
          { name: "Battlefield Prediction", description: "Ajax views combat like a living chessboard. Through acute observation and experience, he can anticipate enemy movements, shifts in formation, and strategic feints before they unfold. His predictions often allow him to intercept ambushes, expose flanks, or redirect allies to capitalize on enemy errors in real time.", book: "Book 1"},
          { name: "Split-Second Decision Making", description: "In high-stress environments where hesitation means death, Ajax thrives. He can make complex tactical calls within moments — whether it’s sacrificing a position to win the greater objective or reordering an entire mission plan mid-op. His calm under fire ensures that even in total chaos, there’s always order in his mind.", book: "Book 1"},
        ]
      },
      {
        name: "Weapons Mastery",
        description: "From ancient blades to next-gen energy rifles, Ajax is a living weapons manual. His proficiency with virtually every known class of weapon — and several classified ones — makes him one of the most dangerous combatants in the field. Whether he's disarming a foe in close quarters or sniping from a mile out, Ajax brings surgical precision and ruthless efficiency to every strike.",
        book: "Book 1",
        subAbilities: [
          { name: "Firearms Expert", description: "Ajax possesses expert-level aim across all categories of firearms, including handguns, shotguns, assault rifles, SMGs, sniper rifles, and heavy ordnance. He can compensate for wind, distance, recoil, and moving targets in milliseconds — often landing headshots in the middle of chaotic fire zones.", book: "Book 1"},
          { name: "Melee Weapons Specialist", description: "Trained in a vast arsenal of melee weaponry — from knives and swords to tonfa, batons, axes, and staff weapons — Ajax can seamlessly transition between styles depending on the enemy and environment. His combat rhythm blends brute force with surgical strikes, making him a nightmare in close-quarters combat.", book: "Book 1"},
          { name: "Ambidextrous Execution", description: "Ajax can dual-wield a variety of weapons — blades, guns, or a mix of both — with complete coordination and accuracy. His ambidexterity gives him unpredictable combat angles, allowing for seamless parries, simultaneous offense/defense, and improvised combo kills.", book: "Book 1"},
        ]
      },
      {
        name: "Cybernetic Arm (Right Arm)",
        description: "Crafted by William Hutton, this state-of-the-art prosthetic isn’t just a replacement — it’s an integrated combat system. Built from hyper-dense alloys and powered by a micro fusion reactor, Ajax’s cybernetic arm enhances his physical might and equips him with adaptable tech for any battlefield scenario. It’s more than metal — it’s a war machine in disguise.",
        book: "Book 1",
        subAbilities: [
          { name: "Enhanced Strength", description: "Grants Ajax superhuman strength in his dominant arm. He can lift vehicles, tear through reinforced barriers, or overpower enhanced enemies with sheer force. A single punch can collapse walls or stagger even powered combatants.", book: "Book 1"},
          { name: "Weapon Integration Suite", description: "The arm can morph into a range of energy-based weaponry, custom-built to meet varying combat demands.", book: "Book 1"},
          { name: "Energy Shield", description: "Projects a high-durability, kinetic-resistant energy barrier capable of absorbing ballistic fire, plasma strikes, and concussive impacts. Can be deployed as a full frontal shield or retracted into a bracer for quick defense.", book: "Book 1"},
          { name: "Energy Sword", description: "A compact, plasma-edged blade that extends from the forearm. The sword can slice through steel, alien armor, and other energy constructs — ideal for close-quarters combat and breaching.", book: "Book 1"},
          { name: "Energy Cannon", description: "Converts the arm into a high-powered cannon that fires condensed energy bursts. The output can be tuned from a narrow precision shot to a wide-area blast, useful for crowd control or destructive assaults.", book: "Book 1"},
          { name: "Tactical Override", description: "Equipped with an encrypted neural uplink, the arm allows Ajax to interface directly with digital systems — from bypassing electronic locks and jamming comms to hijacking enemy surveillance networks.", book: "Book 1"},
        ]
      },
      {
        name: "Master of Espionage",
        description: "Ajax is more than a warrior — he’s a shadow. Trained in infiltration, surveillance, and high-stakes extraction, Ajax is one of the most capable spies in operation. His calm presence, adaptive mind, and encyclopedic understanding of covert tactics make him nearly impossible to trace, track, or trap. When he doesn’t want to be found, he won’t be.",
        book: "Book 1",
        subAbilities: [
            { name: "Stealth Operative", description: "Ajax can move with near-complete silence, navigating hostile zones undetected. Whether traversing tight corridors, enemy compounds, or open terrain under surveillance, he instinctively finds the quiet path. He’s been known to slip past motion sensors, guard patrols, and even superpowered detection abilities.", book: "Book 1"},
            { name: "Deception & Infiltration", description: "A master of disguise, Ajax can create and maintain false identities under pressure, infiltrating enemy organizations for weeks or months at a time without detection. He uses forged credentials, vocal mimicry, and behavioral profiling to blend in flawlessly — often extracting key intel before anyone suspects a breach.", book: "Book 1"},
            { name: "Interrogation & Counterintelligence", description: "Ajax excels at psychological profiling. He can read micro-expressions, stress responses, and body language with uncanny precision, making him a natural interrogator and lie detector. Beyond extracting truth, he can also dismantle enemy spy rings, decrypt coded intel, and flip enemy agents into assets.", book: "Book 1"},
            
        ]
      },
      {
        name: "Leadership and Command Presence",
        description: "Ajax isn’t just a soldier — he’s the one others follow into fire and don’t question why. Decades of commanding elite units through some of the darkest wars in human (and non-human) history have forged him into a leader of unshakable resolve. His presence alone steadies troops. His words carry weight. His legacy shapes legends.",
        book: "Book 1",
        subAbilities: [
            { name: "Command Instinct", description: "Ajax naturally inspires unity, courage, and discipline — even when morale is at its lowest. He commands attention not through fear, but through trust, respect, and the unwavering calm he brings to the chaos. His instincts in crisis situations make him the anchor every team needs.", book: "Book 1"},
            { name: "Mentorship & Training", description: "A lifelong instructor and field mentor, Ajax has personally trained dozens of elite operatives and Deviants — shaping them into warriors, tacticians, and survivors. His teachings emphasize practical skill, mental discipline, and the strength to endure what others can’t.", book: "Book 1"},
            { name: "Moral Compass", description: "No matter how violent the war, Ajax never strays from his core values. He believes in purpose — in fighting not just to win, but to protect something greater. His code is what holds fractured teams together, what turns fear into fight, and what gives people hope when the light runs out.", book: "Book 1"},
            
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
        role: "Wife",
        status: "Dead",
        link: "/characters/lucinda",
        image: "/lucinda.jpg"
      },
      {
        name: "Wesley Johnson",
        role: "Adopted Son",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
      },
      {
        name: "Roman Johnson",
        role: "Son",
        status: "Alive",
        link: "/characters/roman",
        image: "/roman.jpg"
      },
      {
        name: "Teddy Johnson",
        role: "Brother",
        status: "Alive",
        link: "/characters/teddy",
        image: "/teddy.jpg"
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

export default ajax;