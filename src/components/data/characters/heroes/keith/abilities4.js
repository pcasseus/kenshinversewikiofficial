const abilities = [
  {
    name: "Flight",
    domain: "Fire Manipulation",
    classification: "Mobility",
    release: "KVI",
    discovery: "beginning",

    description: `
Keith can achieve flight through several unique methods, each reflecting different aspects of his evolving power. Whether through sustained flame, winged constructs, or the thermobaric precision unlocked through Ethan, his aerial mobility is fast, aggressive, and highly adaptable in combat.
    `.trim(),

    subAbilities: [
      {
        name: "Flame Propulsion",
        domain: "Fire Manipulation",
        classification: "Mobility",
        release: "KVI",
        discovery: "beginning",

        description: `
By channeling fire through his hands and feet, Keith can generate sustained blasts that lift him off the ground and propel him through the air. He commonly uses this method for sudden bursts of speed, sharp turns, evasive movements, and rapid acceleration during combat. Before Ethan’s awakening, Keith relied more heavily on his fire wings for sustained flight, using direct flame propulsion primarily to maneuver, dodge, chase, or quickly change direction.
        `.trim(),
      },

      {
        name: "Fire Wing Constructs",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVI",
        discovery: "beginning",

        description: `
Keith can manifest large, burning wings made of concentrated flame. Before Ethan’s awakening, these wings served as his primary method of sustained flight, providing lift, stability, and greater control over long periods in the air. The wings can collapse, expand, or reshape mid-flight and can also be weaponized, used as shields, or release concentrated feathers of fire. After Ethan awakens, the wings become even more versatile, with Ethan capable of contributing his own golden-yellow fire to create layered defenses, additional thrust, or independently controlled extensions.
        `.trim(),
      },

      {
        name: "Explosive Propulsion",
        domain: "Thermobaric Flame",
        classification: "Mobility",
        release: "KVI",
        discovery: "end",

        description: `
Through the thermobaric techniques unlocked after Ethan’s awakening, Keith can propel himself by chaining together precise explosive bursts beneath or behind his body. These rapid-fire detonations create concentrated shockwave pulses that launch him through the air with far greater force than conventional flame propulsion. The resulting movement is aggressive, erratic, and difficult to predict, allowing Keith to zigzag through enemy fire, abruptly alter his trajectory, or accelerate into devastating aerial strikes. When Keith performs the technique himself, the flames retain his natural orange coloration, while Ethan can supplement the movement with his own golden-yellow output when actively assisting.
        `.trim(),
      },
    ],
  },

  {
    name: "Fraternal Flame",
    domain: "Fraternal Flame",
    classification: "Core Ability",
    release: "KVI",
    discovery: "end",

    description: `
After Ethan fully awakens and he and Keith consciously agree to work together, Fraternal Flame becomes Keith’s natural operating state rather than a temporary transformation. Keith remains in primary control of their shared body and generates his signature orange fire, while Ethan exists as a fully conscious second mind connected to the same Deviant power system. Ethan can communicate directly with Keith, observe threats he cannot see, react independently, and manipulate his own golden-yellow fire without requiring Keith to divide his attention.

Ethan can partially emerge from Keith’s body to form additional arms, defensive extensions, shields, or attacks, and can completely project his consciousness outward as a humanoid Flame Entity for limited periods. While projected, Ethan remains tethered to Keith, with the connection weakening as the distance between them increases. Ethan can also assume control of Keith’s physical body if Keith is completely unconscious, but he cannot take control while Keith remains awake.

Their synchronization improves Keith’s control, thermal regulation, reaction speed, and combat efficiency. Ethan’s separate awareness allows their shared fire to respond to threats before Keith consciously registers them, while Keith retains full ownership of his physical movements and fighting style. Their flames remain visually distinct, with orange representing Keith’s output and golden-yellow representing Ethan’s.
    `.trim(),

    progression: {
      KVI: {
        end: {
          title: "Twin Flame",

          description: `
Twin Flame is a high-output synchronization state in which Ethan no longer repeatedly projects from Keith and returns to him between actions. Instead, Ethan fully manifests his golden-yellow Flame Entity around Keith’s body, molding himself over his brother like living armor while remaining permanently attached to him for the duration of the form. Keith continues controlling his physical body and orange fire underneath, while Ethan independently controls the surrounding golden-yellow manifestation.

This allows both brothers to operate at full capacity simultaneously. Keith can attack physically while Ethan defends him, form additional limbs while Keith’s own arms remain occupied, generate constructs from multiple angles, react to threats outside Keith’s line of sight, reinforce their flight, or intercept attacks without interrupting Keith’s movements. Their combined output effectively allows two complete expressions of the same Deviant power to function at once, dramatically increasing the concentration, volume, responsiveness, and destructive potential of their fire.

Twin Flame also allows Keith’s existing psychic protection to extend across Ethan while their consciousnesses are synchronized, shielding both minds as part of the same active system. However, maintaining Ethan’s complete manifestation while both brothers continuously operate at maximum output places severe strain on Keith’s body and their shared Deviant physiology. As the state deteriorates, Ethan’s more complex extensions begin to flicker and fail before the surrounding armor itself collapses, forcing them back into Fraternal Flame. If Ethan completely separates from Keith to project independently while Twin Flame is active, the form immediately ends until Ethan returns and rebuilds the overlay.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Immunity to Fire",
    domain: "Deviant Physiology",
    classification: "Physiology",
    release: "KVI",
    discovery: "beginning",

    description: `
When Keith first developed his powers, his body was not fully adapted to the extreme temperatures they produced. Heavy use could leave him burned, exhausted, and physically strained by his own output. Over time, his chimeric Deviant physiology adapted until ordinary fire and extreme heat could no longer burn or blister his skin. His cells are capable of tolerating and regulating immense thermal loads generated either externally or through his own abilities.

Even when fully engulfed in flame, Keith remains unharmed by the fire itself. His body can conduct, generate, and regulate extreme heat without suffering the injuries that would affect an ordinary person. Ethan’s awakening further improves this thermal regulation by allowing both brothers to consciously manage the same biological fire system, increasing Keith’s ability to sustain hotter and denser output. This does not make him universally immune to every form of energy or indefinitely capable of withstanding limitless temperatures, but conventional fire and heat-based attacks are largely ineffective against him.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Cold Resistance",
    domain: "Deviant Physiology",
    classification: "Defense",
    release: "KVI",
    discovery: "beginning",

    description: `
Keith’s physiology allows him to remain functional in extreme cold by maintaining an unusually high internal temperature and continuously generating thermal energy. This natural heat significantly delays frostbite, hypothermia, muscular slowing, and other effects caused by sub-zero environments while helping keep his fire abilities stable.

He can continue fighting and producing flames in snowstorms, freezing winds, and arctic conditions that would severely impair most people. Ethan’s awakening further improves their ability to regulate Keith’s internal heat, allowing them to counteract extreme cold more efficiently. However, sufficiently powerful cryogenic attacks can still overwhelm that regulation, freeze his body, suppress his flames, or force Keith and Ethan to actively generate additional heat to recover.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Unrelenting Combatant",
    domain: "Training & Expertise",
    classification: "Skill",
    release: "KVI",
    discovery: "beginning",

    description: `
Keith underwent extensive combat training under S.T.A.T.I.C.’s most unforgiving hand-to-hand programs, learning a wide variety of martial arts and close-quarters techniques. What emerged from that training was not a restrained technician but a ruthless, pressure-heavy brawler who uses formal training through an aggressive and instinctive style. Every strike is meant to hurt, every opening is exploited, and Keith constantly pushes forward rather than allowing an opponent time to recover.

He thrives in tight spaces where his enhanced physical abilities, explosive firepower, and unpredictable aggression can overwhelm opponents. Although his fighting style can appear reckless, it is built on years of legitimate combat training beneath the brutality.
    `.trim(),

    progression: {
      KVI: {
        end: {
          title: "Enhanced Unrelenting Combatant",

          description: `
After Ethan awakens and begins consciously working alongside Keith, his already aggressive combat style gains a second layer of awareness. Keith remains the primary physical fighter, but Ethan can independently observe opponents, identify threats outside Keith’s vision, recognize openings, and communicate tactical information directly into his mind. Ethan can also intervene physically through golden-yellow flame extensions without forcing Keith to abandon his own attack.

Keith’s brutality remains intact, but Ethan’s precision makes that aggression considerably harder to counter. Small corrections in timing, positioning, targeting, and defense allow Keith to maintain relentless pressure while Ethan covers weaknesses that would normally leave him exposed. Rather than replacing Keith’s instincts, Ethan complements them.
          `.trim(),
        },
      },

      KVII: {
        middle: {
          title: "Peak Unrelenting Combatant",

          description: `
As Keith and Ethan gain experience fighting together, their coordination becomes increasingly instinctive without compromising their identities as two separate minds. Keith no longer needs lengthy warnings or deliberate instructions from Ethan. A thought, reaction, or shift in attention can be understood almost immediately between them.

Their dual awareness allows them to constantly adapt during combat. Keith can maintain overwhelming physical pressure while Ethan analyzes changing threats, protects exposed angles, and prepares counters before Keith finishes his current attack. Their transitions between offense, defense, projection, constructs, and thermobaric techniques become increasingly fluid, making their fighting style extremely difficult to predict or interrupt.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },
];

export default abilities;