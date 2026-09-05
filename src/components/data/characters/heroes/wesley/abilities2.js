const abilities = [
  {
    name: "Shockwave Creation",
    domain: "Vibration Manipulation",
    classification: "Core Ability",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley can generate powerful shockwaves by releasing sudden, controlled vibrations through the surrounding air, ground, or other physical mediums. These shockwaves can disorient, repel, destabilize, or overwhelm targets depending on the amount of force he applies. While Wesley can generate them directly, he frequently pairs the release with simple physical gestures that help him direct and shape the resulting force.
    `.trim(),

    subAbilities: [
      {
        name: "Vibration Stomp",
        release: "KVI",
        discovery: "end",

        description: `
By driving vibrations through his leg and into the ground, Wesley can generate a radial shockwave that spreads outward through the surrounding terrain. The resulting force can destabilize footing, fracture the surface beneath him, and repel multiple enemies within its range.
        `.trim(),
      },

      {
        name: "Vibration Snap Burst",
        release: "future",

        description: `
A short-range, omnidirectional shockwave generated through a finger snap. Often used to clear space around him or disrupt incoming attacks in close quarters.
        `.trim(),
      },

      {
        name: "Shockwave Clap",
        release: "KVI",
        discovery: "beginning",

        description: `
By clapping his hands together, Wesley releases a broad shockwave through the air in front of him. The resulting concussive force expands across a wide area, allowing him to disorient, repel, or knock back multiple targets at once.
        `.trim(),
      },

      {
        name: "Core Drop Shockwave",
        release: "KVI",
        discovery: "beginning",

        description: `
Wesley crosses his arms over his chest before sharply driving them downward and outward, using the motion to release a massive shockwave from his upper body. Rather than concentrating the force through his hands, the technique distributes the release across his chest and core, creating a much broader wave of concussive force. Its wide coverage makes it particularly effective for clearing several opponents from his immediate path or creating space when he is being overwhelmed.
        `.trim(),
      },
    ],
  },

  {
    name: "Disintegration",
    domain: "Vibration Manipulation",
    classification: "Restricted",
    release: "KVI",
    discovery: "beginning",

    description: `
Through extreme vibrational precision, Wesley can force matter into a destructive state of resonance, destabilizing the bonds holding its structure together until the affected material begins to break apart. Unlike his ordinary concussive attacks, this technique requires Wesley to maintain an exceptionally dangerous frequency with very little room for error. Because that destructive resonance must first be generated and stabilized through his own body, repeated use places severe strain on his nervous system, muscles, and internal vibrational balance.
    `.trim(),

    subAbilities: [
      {
        name: "Disintegration Punch",
        release: "future",

        description: `
Wesley channels the destructive frequency through his arm, concentrating it in his fist. Upon impact, the target’s molecules are forced into catastrophic resonance, causing matter to rapidly destabilize and collapse. This move is highly condensed and directional, making it ideal for punching through armor, shielding, or high-durability targets at close range.
        `.trim(),
      },

      {
        name: "Disintegration Orb",
        release: "future",

        description: `
Wesley forms a compact, unstable orb of vibrational energy in his hand, an externalized version of the disintegration frequency. The orb floats or is hurled toward its target, unraveling whatever it touches with overwhelming molecular force. More powerful and volatile than the punch, the orb is harder to control and far more taxing. If it fails to land or is aborted mid-charge, the vibrational recoil can cause severe internal backlash, including muscular spasms, nervous system failure, or partial energy collapse.
        `.trim(),
      },
    ],
  },

  {
    name: "Resonant Reversal",
    domain: "Vibration Manipulation",
    classification: "Technique",
    release: "future",

    description: `
Wesley creates a vibrational field tuned to the frequency of an incoming attack, be it kinetic, elemental, or energy-based. Once captured, the energy is harmonized within his vibrational field, its structure broken down just enough to be manipulated. Wesley can then reverse the force, launching it back toward its origin with amplified momentum and destructive potential. The technique demands exact vibrational calibration, especially with unstable or unknown forms of energy, but it allows Wesley to weaponize virtually any offensive force used against him.
    `.trim(),

    subAbilities: [
      {
        name: "Construct Overload",
        release: "future",

        description: `
Wesley doesn’t always send attacks back in their original form. Sometimes, he repurposes the absorbed energy or matter, fusing it with his own concussive power to create volatile, reinforced constructs. For example, incoming fire, ice, or metal shards can be captured, infused into a vibrational matrix, and compressed into a blade, orb, or projectile that hits with exponentially more force. These constructs not only carry his signature concussive payload but also the elemental or physical properties of the original attack, resulting in unpredictable and devastating combinations. This form of retaliatory creation is taxing and usually reserved for high-stakes moments when he needs to turn the tide in one decisive blow.
        `.trim(),
      },
    ],
  },
];

export default abilities;
