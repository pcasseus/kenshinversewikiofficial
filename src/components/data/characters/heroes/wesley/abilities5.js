const abilities = [
  {
    name: "Levitation",
    domain: "Vibration Manipulation",
    classification: "Mobility",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley achieves controlled aerial movement by emitting concussive vibration blasts from his hands. These bursts act like directional thrusters, propelling him upward, forward, or laterally depending on how he channels them. By adjusting the force, angle, and rhythm of each blast, he can hover in place, launch into the air, or perform evasive maneuvers in midair. While not a form of true passive flight, this method gives him agile and responsive short-to-mid-range levitation, with each burst producing an opposing recoil that Wesley uses to control his movement.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Peak Levitation",

          description: `
After reencountering the alien stone that reignited and mutated his abilities, Wesley’s vibrational output expanded to his feet, revolutionizing his movement style. With this new enhancement, he began relying primarily on his feet to maintain lift and directional control. This evolution gave him a more stable, balanced, and natural flight pattern, as his hands were now free for combat while his lower body handled propulsion. By independently adjusting the output from either foot, Wesley can accelerate, brake, turn, and reposition himself in midair with much greater precision. The addition of foot-based propulsion allows for smoother transitions between aerial maneuvers and ground combat, making his movement more fluid, powerful, and instinctive.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "True Flight",
        release: "future",

        description: `
Through advanced vibrational stabilization and refined energy output, Wesley can achieve uninterrupted flight without relying on constant propulsion bursts. By synchronizing vibrational output with gravitational resistance, he creates a stabilized lift field around his body, allowing for smooth, fluid aerial movement. This form of flight is quieter, more energy-efficient, and allows him to maintain altitude and maneuver with far greater precision over long distances. It also grants the freedom to combine airborne movement with offensive and defensive techniques without compromising trajectory or control.
        `.trim(),
      },
    ],
  },

  {
    name: "Vibration Detection",
    domain: "Vibration Manipulation",
    classification: "Sensory",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley emits controlled pulses of vibrational energy through surfaces and interprets the returning disturbances as sensory information. By striking his palm against the ground or another connected surface, he generates a vibrational wave that travels outward through the surrounding material. As the wave encounters structures, objects, bodies, and changes in terrain, portions of it return or shift in ways Wesley can interpret in real time. Through this technique, he can determine physical layouts, locate individuals in contact with the surrounding environment, and detect movement even when darkness, smoke, or physical obstructions prevent him from relying on sight.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Enhanced Vibration Detection",

          description: `
After reawakening his powers through contact with the alien stone, Wesley’s vibrational sensitivity deepened significantly, especially through his lower body. Now able to emit refined pulses directly from his feet, he no longer needs to rely solely on palm strikes for environmental insight. A simple, deliberate tap of his foot against the ground sends a calibrated vibrational wave through the surrounding terrain, returning detailed information about nearby structures, movement, and physical obstacles. This evolution allows Wesley to remain upright, mobile, and hands-free while scanning his surroundings, making the technique considerably faster and more practical during combat.
          `.trim(),
        },
      },

      future: {
        end: {
          title: "Peak Vibration Detection",

          description: `
Through intense refinement and mastery of his powers, Wesley reaches a state where active effort is no longer required to perceive his environment. As long as his feet are in contact with the ground, he maintains a continuous stream of passive vibrational awareness. This constant, subconscious feedback loop allows him to register shifts in terrain, footsteps, movements, and even breathing patterns within his radius without needing to initiate a pulse. The world around him becomes a living sonar map, feeding him real-time data with no delay. Even in chaotic combat, obstructed environments, or total darkness, Wesley maintains perfect spatial awareness, making it nearly impossible to catch him off-guard.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Vibration Sense",
        release: "KVI",
        discovery: "end",

        description: `
By remaining passively attuned to vibrations traveling through the air, ground, and surrounding structures, Wesley can perceive physical disturbances within his immediate vicinity without deliberately emitting a detection pulse. Sudden movement, displaced air, approaching footsteps, impacts, shifting weapons, and other disturbances register against his vibrational awareness as they occur. This gives Wesley an additional layer of environmental perception beyond ordinary sight and hearing, allowing him to react quickly to attacks originating outside his direct line of sight. The ability does not predict danger or reveal an action before it physically begins. Wesley must have an actual vibrational disturbance to detect and interpret.
        `.trim(),

        progression: {
          future: {
            middle: {
              title: "Enhanced Vibration Sense",

              description: `
With refined focus and enhanced vibrational tuning, Wesley expands his awareness well beyond his immediate surroundings. By directing concentration outward, he can perceive disturbances several dozen feet away in all directions. This expanded range gives him battlefield-level awareness, allowing him to track rapid movements, coordinate responses to multi-angle threats, and even sense concealed or invisible enemies. His ability to read emotional cues through micro-vibrations becomes stronger as well, detecting heart rate spikes, nervous tension, or aggression before it's acted upon. In moments of intense concentration, he can essentially “feel” a room’s intent before anyone speaks.
              `.trim(),
            },

            end: {
              title: "Peak Vibration Sense",

              description: `
After fully merging with his ultimate form and reaching the pinnacle of his abilities, Wesley’s vibration sense transcends personal or environmental range. His connection to the Earth's vibrational field becomes so intimate that he can sense disturbances on a planetary scale. Whether it's tectonic shifts, the ignition of large-scale battles, or the detonation of energy across vast distances, Wesley experiences these events as if they occur in front of him. This omnidirectional sensitivity allows him to perceive global-scale anomalies with stunning clarity, granting him the closest thing to omniscient awareness through vibrations alone. It’s no longer just a sense. It’s a planetary nervous system, and he’s the mind behind it.
              `.trim(),
            },
          },
        },
      },
    ],
  },

  {
    name: "Pressure Manipulation",
    domain: "Vibration Manipulation",
    classification: "Core Ability",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley can manipulate localized air pressure by controlling the movement and compression of the surrounding air through vibration. By concentrating this effect within a specific area, he can create zones of increased or decreased pressure capable of constricting, pinning, disorienting, or destabilizing an opponent. More precise applications can target areas such as the chest, throat, or limbs, making breathing and movement increasingly difficult without requiring direct physical contact.
    `.trim(),
  },

  {
    name: "Localized Weather Manipulation",
    domain: "Vibration Manipulation",
    classification: "Core Ability",
    release: "future",

    description: `
Wesley can temporarily disrupt atmospheric conditions by altering the vibrational patterns of the surrounding air. By modulating these frequencies, he creates “calm zones”, stable bubbles of neutralized pressure that redirect or suppress environmental effects such as wind, rain, fog, or snow. These fields don’t stop weather globally, but within their radius, they force the atmosphere into stillness, providing a controlled space for visibility, movement, or concentration.
    `.trim(),
  },

  {
    name: "Memory Alteration",
    domain: "Vibration Manipulation",
    classification: "Restricted",
    release: "KVI",
    discovery: "end",

    description: `
Through extraordinarily precise vibrational manipulation of the brain, Wesley can interfere with the neural activity responsible for storing and retrieving memories. Rather than directly controlling thoughts, he disrupts the physical processes associated with specific memories, allowing him to suppress, distort, or potentially erase them. The precision required makes this one of his most dangerous abilities. Even a minor mistake could interfere with unrelated neural activity, resulting in fragmented memories, emotional instability, neurological damage, or other permanent consequences. Wesley has only performed this ability once, and it happened by accident. Although the attempt was successful, the implications of what he had done unsettled him deeply, leading him to consider the technique off-limits.
    `.trim(),
  },

  {
    name: "Voice Manipulation",
    domain: "Vibration Manipulation",
    classification: "Technique",
    release: "future",

    description: `
By controlling the vibrations in his vocal cords, Wesley can alter the pitch, tone, cadence, and volume of his voice with exceptional precision. This allows him to mimic other voices, mask his own, or project sound in unconventional ways for stealth communication or deception. The ability is frequently used to shroud his identity. However, due to its link with his emotional and physiological state, Wesley can sometimes trigger this effect unintentionally, especially during moments of intense stress, rage, or grief.
    `.trim(),
  },
];

export default abilities;
