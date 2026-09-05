const abilities = [
  {
    name: "Invisibility",
    domain: "Vibration Manipulation",
    classification: "Technique",
    release: "future",

    description: `
Wesley can render himself invisible by manipulating the vibrational frequencies of both light and sound waves around his body. By bending light to avoid reflection and altering sound wave patterns to dampen noise, he effectively erases his visual and auditory presence from the surrounding environment.
    `.trim(),

    subAbilities: [
      {
        name: "Dual Cloak",
        release: "future",

        description: `
By maintaining physical contact with both hands, Wesley can extend his invisibility to cloak up to two additional people. This is achieved by syncing their outer vibrational fields with his own, though the effort divides his focus and shortens the duration of the cloak. Movement must remain coordinated, or the link destabilizes.
        `.trim(),
      },

      {
        name: "Vibration Cloak Field",
        release: "future",

        description: `
At higher energy output, Wesley can generate a localized invisibility field, a temporary dome of altered vibration frequencies that conceals multiple people or objects within a confined area. The field distorts light and sound passing through it, creating a bubble of total sensory nullification. It is difficult to sustain for more than a minute and is vulnerable to high-impact attacks or environmental disruption.
        `.trim(),
      },
    ],
  },

  {
    name: "Vibration Confinement",
    domain: "Vibration Manipulation",
    classification: "Technique",
    release: "future",

    description: `
Wesley creates imperceptible vibrational barriers designed to trap targets within a fixed area. These barriers are forged from oscillating vibrational fields calibrated to specific resonant frequencies, allowing them to remain completely invisible and undetectable to the naked eye or standard sensors. Once formed, the field holds its shape with remarkable stability, adapting its frequency to resist physical escape or energy disruption.

Targets trapped inside may not even realize they’re confined until they attempt to move, only to find themselves repelled or redirected by a seemingly invisible wall. The confinement zone can be shaped with precision, forming cages, spheres, or wall traps depending on Wesley’s intent. Maintaining the barrier requires mental focus and continuous resonance adjustment, especially against volatile powers or teleportation.
    `.trim(),
  },

  {
    name: "Vibrational Speed Field",
    domain: "Vibration Manipulation",
    classification: "Mobility",
    release: "future",

    description: `
Wesley generates a high-frequency vibrational aura around his body that dramatically reduces air resistance, ground friction, and inertial drag. By surrounding himself with this field, he minimizes the natural forces that slow movement, enabling him to reach superhuman speeds with fluid precision. The aura dynamically adjusts in real-time, allowing him to shift direction, stop, or accelerate with perfect control, even in chaotic terrain or mid-combat.

This ability allows Wesley to move with blinding agility, often appearing as a blur or a flicker to the naked eye. When fully activated, it becomes difficult for enemies to track his position, let alone react. The speed field is a core component of his close-quarters movement, allowing him to seamlessly chain dashes, counters, and precision strikes at velocities that defy conventional combat logic.
    `.trim(),
  },

  {
    name: "Vibration Jet Propulsion",
    domain: "Vibration Manipulation",
    classification: "Mobility",
    release: "future",

    description: `
By emitting continuous, high-powered bursts of vibrational energy from his back, Wesley generates explosive thrust that propels him forward at extreme speeds. These focused shockwave streams function like an organic jetpack, allowing for rapid ground dashes, powerful vertical leaps, and brief periods of midair maneuvering. The propulsion is controlled through fine-tuned modulations in his vibration aura, giving Wesley precise control over direction, altitude, and velocity. While not a true substitute for long-duration flight, this ability excels in close-quarters combat, gap-closing maneuvers, or evasive retreats, allowing Wesley to launch into or away from battle with brutal speed.
    `.trim(),
  },

  {
    name: "Afterimage Creation",
    domain: "Vibration Manipulation",
    classification: "Technique",
    release: "future",

    description: `
By vibrating his body at extremely high frequencies, Wesley creates visual and auditory echoes of himself that linger momentarily in space. These afterimages appear as flickering silhouettes or overlapping “ghosts” that mimic his movement in delayed intervals, trailing behind or darting to the side with misleading intent. Accompanied by displaced footfalls, motion blur, or duplicated sound signatures, the effect makes it appear as though multiple versions of Wesley are moving simultaneously.
    `.trim(),
  },

  {
    name: "Vibration Regeneration",
    domain: "Alien Physiology",
    classification: "Physiology",
    release: "future",

    description: `
Wesley accelerates his natural healing by manipulating the microscopic vibrations within his cells and tissues. By amplifying these internal frequencies, he stimulates rapid cell repair, improved circulation, and accelerated tissue regeneration. Minor injuries like cuts, bruises, and surface abrasions heal within seconds, while more serious wounds such as broken bones may take several minutes to realign and mend. Burns can be repaired but often leave residual scarring due to the complexity of tissue reconstruction.
    `.trim(),
  },

  {
    name: "Hunter's Instinct",
    domain: "Alien Physiology",
    classification: "Technique",
    release: "KVI",
    discovery: "end",

    description: `
Hunter's Instinct is an unstable state first displayed by Wesley during a training incident with Jade. After numerous emotional pressures accumulated over time, Wesley quickly reached his breaking point and lashed out, triggering a dramatic change in both his behavior and physical capabilities.

While active, Wesley becomes substantially stronger, faster, more durable, and more reactive than normal, but the increase comes at the expense of his usual discipline and emotional control. His attention narrows almost entirely toward whatever he perceives as a threat, causing him to fight with a far more aggressive and instinctive approach.

The exact nature of Hunter's Instinct remains unknown. Keith Powers theorizes that the state may be connected to Wesley's extraterrestrial biology and the largely unexplored history of his species, though there is currently insufficient information to determine its true origin or purpose.
  `.trim(),

    subAbilities: [
      {
        name: "Physical Augmentation",
        release: "KVI",
        discovery: "end",

        description: `
Hunter's Instinct dramatically amplifies Wesley’s already exceptional physical capabilities. His strength, speed, durability, stamina, reflexes, and reaction time rise far beyond their normal levels, allowing him to produce and withstand forces that would ordinarily place tremendous strain on his body.

Despite this increase, Wesley's unstable mental state prevents him from taking full advantage of the additional power. His movements become increasingly instinctive and aggressive, sacrificing much of his normal coordination and tactical discipline for overwhelming physical force.
      `.trim(),
      },

      {
        name: "Instinctive Vibration Output",
        release: "KVI",
        discovery: "end",

        description: `
The physical amplification produced by Hunter's Instinct allows Wesley to withstand considerably greater strain from his own vibration manipulation. As a result, he can release his vibrational abilities with substantially greater force than he normally would without immediately overwhelming his body.

This does not represent an increase in Wesley's technical mastery. His emotional instability instead causes his vibration manipulation to become less restrained, producing greater raw output while sacrificing much of the precision and measured control he normally applies to his abilities.
      `.trim(),
      },

      {
        name: "Predatory Focus",
        release: "KVI",
        discovery: "end",

        description: `
While Hunter's Instinct is active, Wesley's awareness becomes intensely focused on immediate threats. Hesitation and many surrounding distractions are suppressed as his heightened senses and reflexes prioritize rapid responses to danger.

This narrowed focus greatly improves his immediate reactions in combat but severely compromises his judgment. Wesley becomes increasingly driven by instinct and emotion, making his behavior considerably less predictable and controlled than normal.
      `.trim(),
      },

      {
        name: "Ocular Membrane",
        release: "KVI",
        discovery: "end",

        description: `
Hunter's Instinct produces a noticeable change in Wesley's eyes. A pale, translucent biological layer moves across their exposed surface, partially obscuring their normal appearance and creating a distinct glazed look.

The purpose of the membrane is not fully understood, though it appears to protect Wesley's eyes and preserve his visual focus during extreme movement and combat. Its appearance serves as one of the clearest physical indicators that Hunter's Instinct has been activated.
      `.trim(),
      },
    ],
  },
];

export default abilities;
