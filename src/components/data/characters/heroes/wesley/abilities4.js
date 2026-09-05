const abilities = [
  {
    name: "Phasing",
    domain: "Vibration Manipulation",
    classification: "Mobility",
    release: "future",

    description: `
By synchronizing his body’s vibrational frequency with that of a solid object, Wesley can pass through it without resistance. This process avoids molecular collisions by aligning his atomic oscillations with the space between the atoms of the target matter, allowing him to move seamlessly through walls, structures, or other obstructions. The technique requires precise frequency matching and continuous control. Any lapse in concentration could result in partial materialization or internal trauma. While effective for infiltration, evasion, or sudden repositioning in battle, extended phasing can become disorienting and is used strategically rather than constantly.
    `.trim(),

    subAbilities: [
      {
        name: "Phase Link",
        release: "future",

        description: `
By maintaining direct contact, Wesley can extend his vibrational frequency into another person or object, allowing them to phase with him. This process requires immense focus, especially with larger masses or unwilling targets, and becomes more unstable the longer it’s sustained. Phase Link is typically used to pull allies through solid barriers, bypass obstacles, or save others from entrapment in high-risk situations.
        `.trim(),
      },

      {
        name: "Dimensional Phase-Out",
        release: "future",

        description: `
Wesley can push his phasing ability beyond the physical realm, briefly shifting his body out of the current dimensional plane entirely. Unlike standard phasing, which synchronizes his vibrations with matter to bypass it, this technique involves desynchronizing from the natural frequency of the universe itself, temporarily removing him from the fabric of space-time. While phased out, Wesley is untouchable and undetectable, immune to all forms of physical, energy, or psychic interference. He cannot interact with his surroundings while in this state, and remaining disconnected for too long risks vibrational dissonance or dimensional echo feedback upon return. It's an extreme evasive maneuver, often used as a last resort.
        `.trim(),
      },
    ],
  },

  {
    name: "Vibration Absorption",
    domain: "Vibration Manipulation",
    classification: "Defense",
    release: "KVI",
    discovery: "end",

    description: `
Wesley can absorb vibrations carried through physical impacts, explosions, shockwaves, and other sources of kinetic disturbance before redirecting that energy through his own body. By matching and drawing in the incoming vibrations, he can reduce the mechanical force transferred into him, allowing his body to withstand attacks that would otherwise cause significantly greater damage.

The absorbed energy does not simply disappear. Wesley can temporarily retain it and feed it back into his own vibrational output, strengthening subsequent blasts, physical strikes, or defensive techniques. How much he can absorb depends on the intensity of the incoming force and his ability to properly synchronize with it. Particularly powerful or sudden impacts can still overwhelm his control and injure him before he can absorb enough of their energy.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Vibro-Titanium Body",
    domain: "Vibration Manipulation",
    classification: "Defense",
    release: "future",

    description: `
Wesley can manipulate the vibrational frequency of his own body to enter a hyper-stabilized state, drastically increasing his physical density and durability. By locking his molecular vibrations into a rigid, unified resonance, his body becomes nearly unbreakable, capable of withstanding extreme impacts, high-caliber weaponry, and even certain energy-based assaults.

This transformation dramatically enhances his resistance to physical harm, allowing him to fight through conditions that would otherwise incapacitate or destroy most beings. While in this state, Wesley moves with deliberate weight and power, sacrificing some speed for overwhelming force and near-impervious resilience.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Vibration Constructs",
    domain: "Vibration Manipulation",
    classification: "Application",
    release: "KVI",
    discovery: "end",

    description: `
Wesley can shape concentrated vibrations into stable, semi-solid constructs by maintaining precisely controlled patterns of force within the surrounding air. Rather than physically turning air into solid matter, Wesley continuously confines the vibrations to a defined shape, creating a tangible field capable of resisting pressure, supporting weight, or transferring concussive force.

These constructs are naturally transparent, appearing primarily through subtle distortions in the air around their edges. Their strength and stability depend on Wesley's concentration, the complexity of the shape, and the amount of vibrational force sustaining them. This allows him to create temporary weapons, platforms, and other structures without producing physical matter.
    `.trim(),

    subAbilities: [
      {
        name: "Platforms",
        release: "future",

        description: `
Short-burst pulses from Wesley’s feet form transparent, floating vibrational surfaces beneath him. These platforms allow for aerial suspension, rapid elevation, or precise repositioning in mid-air.
        `.trim(),
      },

      {
        name: "Vibration Staircase",
        release: "future",

        description: `
Sequential foot pulses generate ascending or descending steps made of stabilized vibrational fields. This technique enables Wesley to climb across vertical terrain or build literal steps into the air for others to follow.
        `.trim(),
      },

      {
        name: "Vibration Weapons",
        release: "future",

        description: `
Using focused hand pulses, Wesley forms semi-solid weapons, such as swords, composed of hardened vibration. These tools hit with concussive force and can be reshaped or dispersed mid-combat.
        `.trim(),
      },

      {
        name: "Vibration Fist Construct",
        release: "KVI",
        discovery: "end",

        description: `
Wesley concentrates vibrations around his clenched fist and shapes them into a larger, semi-solid fist construct surrounding his hand. The construct moves directly with his punch, extending the reach and impact area of the strike while adding a powerful layer of concussive force.

Upon impact, the construct transfers both Wesley's physical momentum and the vibrations maintaining its shape into the target, producing an amplified strike capable of breaking defenses, launching opponents, or damaging reinforced structures. The surrounding air visibly distorts around the construct, outlining its otherwise transparent form as Wesley moves.
        `.trim(),
      },

      {
        name: "Vibration Slide",
        release: "future",

        description: `
By guiding pulses from his hands, Wesley generates a smooth, angled surface made of flowing vibrational fields. Designed for vertical descents or emergency escapes, the slide cushions and stabilizes riders, ensuring safe and rapid travel down deep tunnels or shafts.
        `.trim(),
      },
    ],
  },
];

export default abilities;
