const abilities = [
  {
    name: "Alien Physiology",
    domain: "Alien Physiology",
    classification: "Physiology",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley’s extraterrestrial lineage grants him a physiology that far exceeds the capabilities of a typical Alpha Deviant.
Currently, Gavin Halden is the only confirmed Alpha Deviant on Earth, but Wesley’s powers rival, and in some cases surpass,
even his. As a being of alien origin, Wesley’s metabolism operates on a uniquely advanced level, granting him enhanced speed,
strength, stamina, and reaction time that set him apart from both Deviants and Terran counterparts.

These attributes place him at the absolute peak of physical performance and resilience among his kind. Despite his staggering
abilities, however, the full scope of Wesley’s alien heritage remains a mystery. Neither he nor those closest to him fully
understand the depth of his genetic legacy or the dormant potential that may still lie undiscovered.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Enhanced Alien Physiology",

          description: `
Following a near-fatal encounter during the invasion of the S.T.A.T.I.C. base, Wesley’s body underwent a radical transformation.
In a last-resort decision, he was administered the classified A.P.E.X. serum, a procedure reserved for only the most extreme
circumstances. The result was a complete amplification of his already-superior alien physiology.

Wesley’s strength, speed, durability, and reaction time were each pushed to staggering new heights, far beyond what even Alpha
Deviants are known to exhibit. This enhancement didn’t just elevate Wesley physically, it recalibrated his baseline. What was
once a peak condition is now merely his starting point. And even so, the A.P.E.X. serum’s full compatibility with his alien DNA
remains uncharted territory.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Peak Alien Physiology",

          description: `
After confronting the darkest and most volatile aspects of his power, Wesley did more than survive his unstable ultimate form. He
mastered it. By accepting the side of himself he once feared, he achieved a transformation unlike anything seen before. In this state,
Wesley’s physiology evolved yet again, pushing his already enhanced body into a realm few can even comprehend.

His attributes like his strength, speed, durability, reaction time, and stamina multiplied nearly fivefold. His very presence now warps
the battlefield around him. Movements that once demanded precision and effort are now executed with effortless grace and overwhelming force.
His strikes can destabilize reinforced alloys. His leaps can rupture concrete beneath his feet. His reflexes allow him to perceive and react
to danger at a near-precognitive pace.

Even Axel Pierce, the synthezoid widely regarded as Earth’s most powerful being, is no longer a relevant comparison. Wesley’s baseline in this
form leaves him in a league of his own. He redefines the upper limit of what a sentient being can physically achieve. The transformation also
marks a visible shift in his appearance. His once-black hair is now streaked with radiant white. His irises, once brown, have turned a brilliant
orange-gold that glows with each spike in energy.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Vibration Manipulation",
    domain: "Vibration Manipulation",
    classification: "Core Ability",
    release: "KVI",
    discovery: "beginning",

    description: `
At age 14, Wesley’s encounter with a mysterious stone from his alien vessel triggered a profound transformation, awakening within him the ability
to manipulate vibrations at a molecular and environmental level. Rooted in an alien genetic predisposition and honed through years of disciplined
training under his father, Ajax, this power allows Wesley to perceive and control the underlying frequency and amplitude of all things that
vibrate, including matter, energy, air, sound, and even light.

His connection to these vibrations is not superficial; it is instinctive, fundamental, and omnipresent. By altering vibrational patterns, he can
influence physical structures, direct force, reshape energy, and interact with the world in ways that defy conventional physics.

This ability serves as the foundation for his entire arsenal, whether he's disrupting the molecular integrity of an object, reinforcing his own
body, or turning the battlefield into a resonant weapon. It is not a single trick but a complete system of control, one that grows more complex
and powerful as Wesley continues to evolve.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Enhanced Manipulation",

          description: `
After years of mastering his powers, Wesley’s abilities were severed by a specialized neurotoxin engineered by Iztahn designed to end him once and
for all. But everything changed the moment he reencountered another fragment of the alien stone from his original vessel. Upon contact, something
inside him reignited, not just restored, but rewritten. The dormant energy within the stone catalyzed a radical mutation in his alien biology,
shattering the former limits of what he could do.

This evolution didn’t just return his powers but remade them. Wesley’s connection to vibrations became deeper, faster, and more adaptive than ever
before. Where he once manipulated molecular oscillations with effort and focus, he could now intuitively tap into multi-frequency spectrums,
overlaying multiple waveforms in real time.

His body began functioning like a living vibrational conduit, able to shift between different modes of force output, modulation, and feedback
manipulation with zero latency. The battlefield became his medium. Walls, bodies, energy blasts, even silence itself could be weaponized
through resonance. This mutation unlocked entirely new avenues.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Peak Manipulation",

          description: `
At the height of his evolution, Wesley no longer wields vibrations. He is vibration. Having remerged with his true alien body and unlocked the
final depths of his potential, the separation between thought and execution has been erased. What once required calculation, calibration, and
restraint now flows through him as effortlessly as breath. Every oscillation, every tremor, every ripple of force bends instinctively to his
will.

The body that once fractured under its own power has been reforged to withstand and amplify the full extent of his abilities. What was once
volatile and dangerous to himself, including massive shockwaves, phasing overloads, and disintegration strikes, can now be unleashed without
hesitation. The biological limiters that once throttled his output to preserve his frame have been dismantled entirely.

With every step, Wesley can shift molecular vibrations across a city block. With every movement, he can reconfigure the air, phase through
existence, or convert raw force into precision-guided kinetic detonations.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Vibration Emission",
    domain: "Vibration Manipulation",
    classification: "Core Ability",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley can generate and release controlled vibrations through his hands, using his palms as the primary conduits for his power. By adjusting
their frequency, intensity, and concentration, he can project these vibrations outward as focused blasts, compact pulses, or other forms of
concussive force.

This ability forms the foundation of Wesley's offensive vibration techniques. While the amount of force behind each emission can vary
considerably, his control allows him to determine whether an attack strikes with concentrated impact, pushes a target away, or distributes
its force across a wider area.
  `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Peak Vibration Emission",

          description: `
After reawakening his powers through renewed contact with the alien stone, Wesley's ability to generate and release vibrations becomes
integrated throughout his body rather than remaining restricted to his hands. His hands and feet serve as his primary emission points,
allowing him to attack, propel himself, and redirect his movement from multiple angles.

This deeper connection also allows Wesley to channel vibrations through his entire body when necessary, greatly expanding the versatility
and precision of his vibrational output.
        `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Vibration Blasts",
        release: "KVI",
        discovery: "beginning",

        description: `
Wesley projects concentrated waves of vibration from his palms, transferring powerful concussive force into whatever they strike. He can
adjust the strength and spread of each blast, ranging from focused attacks against individual targets to broader releases capable of
affecting a larger area.

Because Wesley is naturally left-hand dominant, he has greater control and physical coordination on that side, allowing him to produce
stronger and more precise blasts from his left hand when greater force is required.
      `.trim(),

        progression: {
          KVI: {
            middle: {
              title: "Enhanced Vibration Blasts",

              description: `
Following the evolution of his vibrational control, Wesley gains the ability to release vibration blasts through his feet in addition to
his hands. These additional emission points allow him to attack from unconventional angles while also using the recoil from his blasts
to propel, stabilize, or redirect his body during combat.
            `.trim(),
            },
          },
        },
      },

      {
        name: "Vibration Pulse",
        release: "KVI",
        discovery: "beginning",

        description: `
Wesley releases a short, concentrated pulse of vibration from his palms. Unlike a sustained or high-powered blast, the pulse delivers an
immediate burst of concussive force intended primarily to shove targets away, interrupt incoming attacks, or quickly create distance.

Its compact output gives Wesley greater control over the amount of force released, making it particularly useful when he needs to repel
something without causing unnecessary damage to the surrounding environment.
      `.trim(),

        progression: {
          KVI: {
            middle: {
              title: "Enhanced Vibration Pulse",

              description: `
As Wesley's vibrational control expands beyond his hands, he becomes capable of releasing the same compact pulses through his feet. This
allows him to repel threats from additional angles or use brief bursts of opposing force to alter his movement and positioning.
            `.trim(),
            },
          },
        },
      },

      {
        name: "Vibration Slash",
        release: "KVII",

        description: `
By channeling vibrations along his arm or leg, Wesley creates a shockwave in a slashing motion that can cut through objects or strike with
disruptive force.
      `.trim(),
      },

      {
        name: "Finger Gun Sniper Shot",
        release: "KVII",

        description: `
Focused blasts are generated from his fingertips, where vibrations concentrate into a tightly packed, high-velocity shockwave. By modulating
the frequency, Wesley ensures the blast remains cohesive over long distances, striking targets with pinpoint precision.
      `.trim(),
      },

      {
        name: "Vibration Punch",
        release: "KVI",
        discovery: "beginning",

        description: `
Wesley channels concentrated vibrations through his fist and releases them at the moment of impact, stacking vibrational force onto the
physical strength of his punch. Depending on how he directs the release, the added force can burst outward from the point of contact or
travel directly into whatever he strikes for a more concentrated impact.
      `.trim(),
      },

      {
        name: "Vibration Trajectory Manipulation",
        release: "KVI",
        discovery: "end",

        description: `
Wesley can manipulate the trajectory of his vibration blasts after they have already been released. By maintaining control over the
vibrations within the projectile, he can alter its direction in mid-air, allowing blasts to curve around obstacles, change course toward
moving targets, or approach opponents from unexpected angles.

The greater the change in direction, the more precision Wesley must maintain to keep the blast concentrated and prevent its vibrational
energy from dispersing.
  `.trim(),

        subAbilities: [
          {
            name: "Vibration Ricochet Blast",
            release: "KVI",
            discovery: "end",

            description: `
Wesley redirects a vibration blast against surrounding surfaces, allowing it to rebound through the environment before reaching its target.
By adjusting the blast's trajectory at each impact, he can guide it through complex spaces and attack opponents from angles that would
otherwise be inaccessible.
      `.trim(),
          },
        ],
      },

      {
        name: "Vibration Rapid Fire",
        release: "KVI",
        discovery: "end",

        description: `
Wesley releases a rapid succession of controlled vibration blasts, sacrificing some individual power in exchange for volume and sustained
pressure. The repeated impacts allow him to suppress movement, stagger opponents, pressure defenses, or cover a wider portion of the
battlefield without committing to a single high-powered attack.
      `.trim(),
      },
    ],
  },
];

export default abilities;
