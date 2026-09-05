const abilities = [
  {
    name: "Beta Deviant Physiology",
    domain: "Deviant Physiology",
    classification: "Physiology",
    release: "KVI",
    discovery: "beginning",

    description: `
Beta-class Deviants form the backbone of the powered population. Their abilities manifest later between ages 15 and 16, including a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Enhanced Physiology",

          description: `
Following Ethan's emergence as an active second consciousness, Keith's Beta-class physiology undergoes a subtle internal evolution. His raw strength, speed, and durability do not suddenly increase by a dramatic degree. Instead, his chimeric biology begins actively accommodating both brothers at once. His nervous system becomes capable of processing Ethan's awareness alongside his own, improving reaction speed, threat response, and coordination without making Keith physically appear different.
His thermoregulation also becomes more efficient, allowing his body to sustain greater concentrations of heat with less wasted output and improved resistance to the strain created by his own fire. Once Keith and Ethan consciously agree to work together, Keith's hazel irises permanently mutate into a fiery golden-orange, becoming the clearest outward sign that both sides of his chimeric biology are now actively expressed.
          `.trim(),
        },

        end: {
          title: "Peak Physiology",

          description: `
Once Keith and Ethan establish complete synchronization, Keith's body becomes capable of supporting both brothers as simultaneously active participants within the same Deviant system. Their minds remain completely separate, but Keith's nervous system, thermoregulation, and fire-producing biology can temporarily accommodate both consciousnesses operating at full capacity.

This allows Keith to move and attack while Ethan independently reacts, defends, manipulates fire, and controls his own projected extensions without disrupting Keith's actions. The body remains physically Keith's, but both brothers can now draw upon and regulate their shared biological power system at the same time.

This synchronization reaches its most extreme expression during Twin Flame, though maintaining that state places severe strain on Keith's body and cannot be sustained indefinitely.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Fire Manipulation",
    domain: "Fire Manipulation",
    classification: "Core Ability",
    release: "KVI",
    discovery: "beginning",

    description: `
Keith has the ability to create, shape, and control fire. His flames are directly influenced by his emotional state. Rage, fear, adrenaline, and stress all act as fuel. Early on, this connection makes his powers volatile and difficult to control. The more emotionally unstable he becomes, the hotter and more destructive his flames grow.
While his raw potential is immense, Keith initially reaches his greatest output through intense negative emotion. His natural fire burns orange at every level, with changes in brightness, density, temperature, and intensity reflecting how much power he is producing rather than changing the flame into a different color.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Fraternal Flame",

          description: `
Following Axel's psychic attack, the barrier preventing Ethan from reaching beyond Keith's subconscious is torn open. Ethan had already been conscious since the day Keith's powers first manifested, silently watching the outside world through his brother's senses, but he had never been capable of directly interacting with it. Gavin Summers becomes the first person to witness this change when a radiant humanoid figure of golden-yellow fire projects from Keith's body while Keith lies unconscious before collapsing back inside him.
Concerned by the unexplained manifestation, Valeria Adair-Taylor performs a deeper examination of Keith's DNA and discovers two distinct but biologically integrated genetic profiles. Keith had absorbed his fraternal twin, Ethan, during fetal development. Ethan had carried the Deviant gene responsible for their fire abilities, and portions of his genetic material became permanently incorporated into Keith's developing body. Although Ethan's physical body never developed independently, his consciousness survived within the anomalous Deviant system they now share.
After Keith and Ethan consciously agree to work together, Fraternal Flame becomes Keith's natural operating state. Keith remains in physical control of their body and generates his signature orange fire, while Ethan remains fully conscious within him and produces golden-yellow fire of his own. Ethan can communicate with Keith, react to threats Keith cannot see, partially emerge from his body, or temporarily project his entire Flame Entity into the physical world.
Their fire becomes more precise, responsive, and tactically versatile because two independent minds can now interact with the same power system at once. Keith's hazel eyes permanently mutate into a fiery golden-orange following their synchronization.
          `.trim(),
        },

        end: {
          title: "Twin Flame",

          description: `
Twin Flame is the most powerful synchronized state Keith and Ethan can achieve. Rather than Ethan repeatedly projecting from Keith's body and returning after each intervention, Ethan manifests his entire golden-yellow Flame Entity directly over Keith, molding himself around his brother like living armor.
Keith remains physically in control of his body while Ethan stays continuously active around him as a second combat form. Their consciousnesses remain completely separate. They do not merge into a new person or lose their individual identities.
While Twin Flame is active, Keith and Ethan can operate simultaneously at full capacity. Keith controls his physical movements and orange fire while Ethan independently manipulates his golden-yellow form, allowing him to defend blind spots, create additional limbs, intercept attacks, control constructs, reinforce movement, restrain enemies, and launch secondary attacks without forcing Keith to interrupt his own offense.
Their combined operation effectively allows both brothers to express their respective sides of the shared fire ability at the same time, dramatically increasing their total output, heat concentration, construct speed, reaction capability, and battlefield coverage.
Keith's existing psychic protection also extends across Ethan while their consciousnesses are synchronized inside Twin Flame, shielding both brothers as part of the same protected system. Their flames remain visually distinct throughout the state. Keith's fire burns orange, while every flame directly generated or controlled by Ethan burns golden-yellow.
The power comes at a severe cost. Keith's body must sustain two fully active expressions of the same Deviant system simultaneously, placing intense strain on his nervous system, thermoregulation, and physical endurance. As the state begins to fail, Ethan's more complex extensions and additional limbs destabilize first, followed by the golden-yellow overlay itself.
Once Ethan's surrounding form collapses, Keith is forced back into Fraternal Flame until their bodies and minds recover enough to attempt Twin Flame again.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Flame Projection",
    domain: "Fire Manipulation",
    classification: "Application",
    release: "KVI",
    discovery: "beginning",

    description: `
Keith can emit and manipulate fire through a variety of projectile forms, each generated through a mix of internal heat regulation and controlled ignition of surrounding oxygen. These attacks vary in speed, temperature, and kinetic force depending on his focus, physical condition, and emotional intensity.

Common forms include fireballs, concentrated flame streams, arcing bursts, and high-speed flame darts. While destructive, these projectiles are as versatile as they are reactive, capable of mid-flight redirection and variable impact force.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Fraternal Flame Projection",

          description: `
With Ethan capable of actively participating in combat, Keith's ranged fire control gains an entirely new layer of versatility. Keith continues generating orange projectiles while Ethan can independently produce golden-yellow attacks, allowing the brothers to strike from multiple angles or respond to different threats simultaneously.

Ethan can partially emerge from Keith's body to fire around his blind spots or fully project his Flame Entity for short periods, creating a second mobile source of fire on the battlefield. Their independent reactions allow attacks to overlap, redirect, or counter incoming threats with timing Keith could never reproduce alone.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Fire Blasts",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVI",
        discovery: "beginning",

        description: `
Short-range bursts of superheated flame expelled from the palms, forearms, feet, or even his hair. These serve as Keith's primary offensive tool, ideal for suppressing opponents or creating concussive shockfire in close quarters. The blasts vary in intensity depending on Keith's emotional state and can be used for both crowd control and focused damage.
        `.trim(),
      },

      {
        name: "Flame Jet Stream",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVI",
        discovery: "beginning",

        description: `
A concentrated, high-pressure stream of fire used to blast through barriers, suppress enemy movement, or sweep through wide areas. It can also be redirected beneath Keith for brief propulsion bursts.
        `.trim(),
      },

      {
        name: "Thermal Orbs",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVI",
        discovery: "beginning",

        description: `
Spherical fire projectiles launched by hand. These concentrated orbs can explode immediately on impact or be held together briefly before detonating, allowing Keith to vary their timing and destructive force.
        `.trim(),
      },

      {
        name: "Pyrorespiratory Discharge",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVI",
        discovery: "beginning",

        description: `
A raw, primal release of concentrated fire exhaled directly from Keith's mouth.
        `.trim(),
      },
    ],
  },

  {
    name: "Controlled Burn",
    domain: "Fire Manipulation",
    classification: "Technique",
    release: "KVI",
    discovery: "beginning",

    description: `
At higher levels of focus, Keith can maintain flames in a suspended, non-lethal state. He can will his fire to remain present but harmless, surrounding enemies, illuminating dark areas, or heating objects without destroying them.

This degree of fire control gives him flexibility in both combat and utility, allowing him to use his flames for intimidation, interrogation, environmental control, or protection without automatically causing collateral damage.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Heat Vision",
    domain: "Fire Manipulation",
    classification: "Application",
    release: "KVI",
    discovery: "beginning",

    description: `
Keith can channel intense heat through his gaze, rapidly heating whatever he focuses on. Sustained attention can ignite combustible material, weaken structural surfaces, or melt sufficiently vulnerable substances. The longer Keith maintains his focus, the greater the concentration of heat becomes.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Pyrokinetic Grip",
    domain: "Fire Manipulation",
    classification: "Technique",
    release: "KVII",

    description: `
Keith's connection to fire becomes refined enough that physical contact can serve as a direct point of concentrated thermal transfer. When he chooses to activate it, he can channel extreme heat through his hands with precise control, causing metal, concrete, or organic material to ignite, melt, or structurally fail from the point of contact.

Rather than merely coating a target in external flame, Pyrokinetic Grip forces intense heat directly into whatever Keith is touching. This allows him to melt weapons, breach reinforced surfaces, destroy restraints, or inflict devastating close-range damage while controlling exactly where the thermal breakdown occurs.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Pyrokinetic Constructs",
    domain: "Fire Manipulation",
    classification: "Application",
    release: "KVI",
    discovery: "beginning",

    description: `
Keith's flames are not limited to uncontrolled destruction. Through concentration and instinct, he can shape his orange fire into temporary constructs used for combat, movement, defense, restraint, or intimidation.

Many of his constructs are influenced by muscle memory and immediate need rather than careful artistic design, allowing him to create functional shapes in the middle of combat without sacrificing momentum.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Fraternal Pyrokinetic Constructs",

          description: `
Once Ethan becomes an active participant, the brothers can manipulate constructs independently of one another. Keith can create and control orange constructs while Ethan produces golden-yellow extensions or takes direct control of existing fire to support Keith from another angle.

Ethan can create limbs, barriers, weapons, or other shapes from his projected Flame Entity without requiring Keith to physically perform the corresponding motion. This allows one brother to maintain a construct while the other continues fighting, dramatically expanding their ability to multitask in combat.
          `.trim(),
        },

        end: {
          title: "Twin Pyrokinetic Constructs",

          description: `
During Twin Flame, Ethan's full golden-yellow form remains continuously manifested around Keith, giving both brothers simultaneous access to construct creation. Keith can attack or move while Ethan instantly forms additional arms, shields, wings, restraints, weapons, or supporting structures directly from the surrounding overlay.

Either brother can alter the shape or purpose of active fire in real time, allowing constructs to transition between offensive, defensive, and movement functions without being dismissed and recreated. Their greatest advantage is not complete autonomy from the twins, but the ability for two independent minds to manipulate different constructs or different parts of the same construct at the exact same time.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Flame Lassos",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVI",
        discovery: "beginning",

        description: `
Dense, rope-like strands of concentrated fire that Keith can extend or throw toward a target. They can wrap around limbs, drag enemies, restrain movement, or tether Keith to surrounding structures. Their temperature can be deliberately reduced when capture rather than injury is the goal.
        `.trim(),
      },

      {
        name: "Dragon Construct",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVI",
        discovery: "beginning",

        description: `
A long, serpentine dragon formed from Keith's orange fire. It can coil around enemies, strike with its jaws, redirect through the air, or constrict around targets to restrict movement while applying intense heat.
        `.trim(),
      },

      {
        name: "Lion Construct",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVII",

        description: `
A large lion formed from concentrated fire that charges targets with heavy forward momentum. Its claws and body can deliver powerful directional bursts of heat and concussive force, allowing the construct to break through barriers, knock enemies from their footing, or pin them beneath sustained pressure.
        `.trim(),
      },

      {
        name: "Gorilla Construct",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVII",

        description: `
A hulking fire construct built around raw strength and structural support. Its oversized arms can catch falling debris, hold open collapsing structures, restrain large opponents, or brace against incoming force. While less mobile than Keith's other constructs, it is one of his most useful defensive and rescue-oriented creations.
        `.trim(),
      },

      {
        name: "Humvee Construct",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVIII",

        description: `
A heavy-duty fire construct modeled after an armored Humvee. Keith can send it crashing through obstacles or hostile forces as a mobile battering ram while its dense structure absorbs incoming attacks. Ethan can independently guide or reinforce the construct when the brothers are operating together.
        `.trim(),
      },

      {
        name: "Phoenix Construct",
        domain: "Fire Manipulation",
        classification: "Application",
        release: "KVI",
        discovery: "beginning",

        description: `
Keith's most advanced and iconic animal construct. He shapes a massive phoenix from concentrated orange fire and sends it soaring toward a target before detonating it in a controlled burst of extreme heat.

Its size, flight path, and explosive output can be adjusted depending on the situation, allowing it to function as a precision strike, area-denial attack, or large-scale offensive technique.

Ethan can independently guide or augment the construct after awakening, but Ethan's own ability to reshape his projected golden-yellow Flame Entity into a phoenix is a separate application and should not be confused with Keith's Phoenix Construct.
        `.trim(),
      },
    ],
  },
];

export default abilities;