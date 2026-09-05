const abilities = [
  {
    name: "Alpha Deviant Physiology",
    domain: "Core Physiology",
    classification: "Physiology",
    release: "KVI",
    discovery: "beginning",

    description: `
Alpha-class Deviants are exceedingly rare and possess extraordinary genetic potential. Gavin's Alpha physiology grants him naturally enhanced strength, speed, agility, reflexes, durability, stamina, and recovery far beyond normal human limits. Injuring an Alpha-class Deviant generally requires a formidable opponent, specialized weaponry, or tremendous force.

His physiology is also highly adaptive. When subjected to extreme stress, Gavin's Deviant biology can heal and evolve around damage that his partially human body would otherwise be unable to withstand.
    `.trim(),

    progression: {
      KVI: {
        end: {
          title: "Enhanced Physiology",

          description: `
During the war with Iztan, Gavin forced his fusion output beyond what his body could safely regulate. The resulting backfire severely damaged his right arm, leaving a permanent branching Lichtenberg-like scar.

While healing, his Alpha physiology adapted to the higher energy state that caused the injury. His nervous system and cellular energy pathways became naturally capable of regulating his full fusion output, removing the biological instability that had previously prevented him from safely reaching 100%.

The scar remains as a permanent marker of the mutation and illuminates whenever significant amounts of fusion energy move through the affected arm.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Peak Physiology",

          description: `
Following Gavin’s hypernova event, an act that should have destroyed him, his body flatlined, but his energy did not. What emerged from the brink of death was not the same being. Reconstructed by the nova energy that now powers him, Gavin's physiology underwent a final and irreversible evolution. His new state is no longer bound by traditional Deviant classifications. Though still technically Alpha-class, his biology now operates ten times stronger than a standard Alpha Deviant, with core attributes just rivaling those of Wesley himself at his peak. His muscles are denser, his neural pathways faster, and his energy storage more expansive, making him a living powerhouse whose strength, durability, and speed now skirt the edge of unfathomable potential.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Nuclear Fusion Energy Absorption",
    domain: "Energy Absorption & Storage",
    classification: "Core Ability",
    release: "KVI",
    discovery: "beginning",

    description: `
First manifesting at the age of four, Gavin can absorb usable energy from his surroundings and convert it into the nuclear fusion energy that fuels his abilities. Compatible sources include sunlight, heat, radiation, electricity, plasma, and other concentrated forms of energy.

Absorption occurs both consciously and passively. Gavin's body is constantly drawing trace amounts of ambient energy from his surroundings, meaning he is rarely completely empty under normal conditions. Stronger sources can be actively absorbed to replenish him much faster.

Once absorbed, the original energy is converted into Gavin's own fusion energy rather than retained in its original form. He can then store and reproject that energy through his attacks, barriers, flight, and physical augmentation.

His reserves are not infinite. Sustained high output can consume energy faster than passive absorption replaces it, eventually forcing Gavin to reduce his power or seek a stronger source.
    `.trim(),

    progression: {
      KVI: {
        end: {
          title: "Enhanced Absorption",

          description: `
Gavin eventually develops greater efficiency when absorbing, converting, and circulating external energy. Concentrated attacks and environmental sources can be stripped of usable energy and converted into fusion fuel with far less waste.

His primary limitation, however, was never how much energy he could absorb. It was how much of that stored power his body could safely regulate at once. Additional absorption could refill his reserves, but it could not overcome the instability created by pushing his fusion output beyond his biological tolerance.

Following the mutation caused by his fusion backfire, Gavin's body becomes capable of processing and regulating much larger quantities of absorbed energy without the same loss of control.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Nova Energy Absorption",

          description: `
Following Gavin’s hypernova event, a final, desperate act to defeat Talora, his fusion-based absorption mutated into a vastly more advanced form. Now classified as Nova Energy Absorption, this ability allows Gavin to absorb not just stable fusion or solar energy, but the raw, chaotic force of exploding stars, solar storms, and cosmic plasma rifts. His body can withstand and internalize energy that would obliterate most matter, and more incredibly, he can now generate and simulate these destructive events within Earth’s atmosphere without destabilizing the environment.

This transformation marks a permanent and irreversible elevation in his energy baseline. Gavin no longer builds toward power, he exists in a state of constant saturation, with nova-level energy flowing through every cell in his body. The amount he can absorb now has no measurable upper limit. His body evolves in real time to match the scale of energy he encounters, making him capable of absorbing energy from planetary weapons, star-core surges, or anomalous dimensional leaks. What once pushed him toward destruction has become the source of his ultimate strength.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Energy Multiplier",
    domain: "Energy Amplification",
    classification: "Amplification",
    release: "KVI",
    discovery: "beginning",

    description: `
Gavin can regulate how much of his stored fusion energy is actively circulated through his body, creating a percentage-based multiplier that increases his physical abilities and projected energy output.

For years, Gavin trained himself to safely operate at a maximum of 25%. He had never needed to progress beyond that level and possessed little practical experience with higher outputs. Under extreme duress, he could force himself toward 50%, but doing so pushed him into territory his body had never been properly conditioned to regulate.

At 25%, his energy appears electric blue and remains tightly contained, with his eyes primarily glowing while actively channeling or projecting power. At 50%, it shifts to cerulean blue and produces a persistent aura around his body.

Attempting to progress beyond 50% originally caused his fusion energy to spiral out of control as his Deviant energy systems overwhelmed the regulatory limits of his partially human physiology.
    `.trim(),

    progression: {
      KVII: {
        middle: {
          title: "Enhanced Energy Multiplier",

          description: `
After exhaustive training and relentless discipline, Gavin gained mastery over the instability that once plagued him beyond the 50% threshold. This control allowed him to push his output to 100% capacity without succumbing to energy loss or bodily strain. At 75%, his energy output becomes dangerously volatile, releasing waves. At 100%, Gavin enters his Energy Form, a fully charged state granting immense strength, subsonic movement speeds, and near-impenetrable durability. The transformation is both visual and physical: his aura intensifies, his body radiates pressure, and the surrounding air distorts from raw fusion energy output. This stage marked his first step toward bridging the gap between his human biology and his full Deviant potential.
          `.trim(),
        },

        end: {
          title: "Peak Energy Multiplier",

          description: `
In his battle against Axel in New York, Gavin reached a breaking point. Faced with the unstoppable synthezoid whose power dwarfed nearly every opponent he’d fought, Gavin tore through his 100% ceiling, initiating a secondary multiplier layer that drove his output to an unprecedented 199%. This stacking effect pushed his body into a state of near self-destruction, with each strike producing city-level shockwaves and every blast carrying catastrophic heat and force. The air around him shimmered with nuclear-level distortion, and his aura shifted through hypnotic waves of blue as his body struggled to contain the overload. Though unsustainable, this state allowed him to go toe-to-toe with an otherwise unstoppable force, cementing him as one of the most dangerous combatants alive.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Nova Energy Multiplier",

          description: `
Following his hypernova event, Gavin’s physiology transcended staged thresholds entirely. His fusion-based systems evolved into a constant, passive amplification state, eliminating the need for charge-up phases or visible progression markers. Every watt of absorbed energy, whether from solar radiation, cosmic bursts, or artificial power sources, is instantly converted into real-time output, fueling his performance without delay. His strength, speed, and durability operate far beyond both human and Deviant norms at all times, making him a living apex weapon from the moment he engages. The multiplier is now scalable and fluid, automatically adapting to environmental energy availability, allowing him to ramp from devastating force to extinction-level potential seamlessly.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },
];

export default abilities;
