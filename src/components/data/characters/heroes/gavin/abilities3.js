const abilities = [
  {
    name: "Nuclear Fusion Flight",
    domain: "Nuclear Fusion Energy Manipulation",
    classification: "Mobility",
    release: "KVI",
    discovery: "beginning",

    description: `
By channeling his stored nuclear fusion energy into a continuous, radiant aura, Gavin achieves propulsion without the need for focused bursts or mechanical thrust. This energy envelope generates constant lift and forward momentum, allowing him to fly seamlessly at high speeds while maintaining full maneuverability.

The aura’s output can be adjusted in real time, intensified for rapid acceleration or tapered for hovering and slower movement. In the atmosphere, his speed can approach Mach-level ranges, with the surrounding air shimmering from the intense heat and glowing with the distinctive fusion color associated with his current energy tier.

This method of flight integrates directly with his combat style, allowing Gavin to maneuver through the air, evade attacks with precision, and maintain sustained aerial control without interrupting his energy output.
    `.trim(),

    progression: {
      KVIII: {
        end: {
          title: "Nova Flight",

          description: `
Following Gavin’s hypernova transformation, his flight evolves alongside the rest of his energy system. Now fueled by his nova-infused physiology, propulsion manifests as a brilliant blue, gold, and white energy aura radiating from his entire body, generating lift and forward momentum in a seamless continuous flow.

This evolved state grants dramatically greater aerial speed and control. In atmosphere, Gavin can accelerate well beyond his former Mach-level limits and reach hypersonic bursts during high-output maneuvers. The surrounding air distorts beneath the heat and force of his movement, leaving luminous trails along his flight path.

Nova Flight also allows Gavin to maintain stable movement through extreme environments, including high-altitude and near-space combat, without losing control or propulsion efficiency.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Heat & Radiation Immunity",
    domain: "Alpha Deviant Physiology",
    classification: "Physiology",
    release: "KVI",
    discovery: "beginning",

    description: `
Gavin’s fusion-based physiology renders him completely immune to extreme heat, radiation, and similar environmental hazards. Rather than damaging him, these forms of energy can be absorbed by his body and converted into usable power, reinforcing his internal reserves and further fueling his abilities.
    `.trim(),

    progression: {
      KVIII: {
        end: {
          title: "Cosmic Immunity",

          description: `
Following the evolution of Gavin’s physiology, his environmental resistance expands to a cosmic scale. He can survive and operate under conditions that would be immediately lethal to conventional life, including intense stellar radiation, solar flares, neutron-star proximity, deep-space vacuum, and the energetic fallout surrounding catastrophic stellar events.

His nova-infused cells remain stable under extreme heat and radiation levels far beyond what his original fusion physiology could tolerate, allowing him to operate in hostile cosmic environments without sustaining conventional environmental damage.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Energy Levels",
    domain: "Energy Amplification",
    classification: "Physiology",
    release: "KVI",
    discovery: "beginning",

    description: `
Gavin’s stored fusion energy is visually expressed through changes in the color, intensity, and pressure of the aura surrounding his body. These visual shifts correspond with measurable increases in his internal energy capacity and provide an observable indication of how much power he is currently channeling.

At 25%, his energy appears Electric Blue. At 35%, the same Electric Blue becomes noticeably brighter and more intense as the amount of fusion energy circulating through his body increases. At 50%, his aura deepens into Cerulean Blue and becomes significantly tighter and denser around his body.

Fifty percent represents the highest output Gavin can reliably sustain during KVI without exceeding the limits of his current physiological control.
    `.trim(),

    progression: {
      KVII: {
        middle: {
          title: "Enhanced Energy Levels",

          description: `
As Gavin gains greater control over his fusion energy, previously inaccessible energy thresholds begin producing their own distinct visual states.

At 75%, his aura shifts into Ultramarine Blue, representing a dramatic increase in stored energy and a much more volatile level of output. At 100%, Gavin enters his fully charged Energy Form and his aura deepens into Prussian Blue, becoming exceptionally dense as heat, pressure, and fusion energy radiate continuously from his body.

These colors function as visible indicators of his expanding energy capacity, making his current output increasingly identifiable simply by observing the aura surrounding him.
          `.trim(),
        },

        end: {
          title: "Peak Energy Levels",

          description: `
When Gavin exceeds his normal 100% ceiling and enters his Overload State, the stable color progression breaks down entirely. His aura begins cycling through Electric Blue, Cerulean Blue, Ultramarine Blue, and Prussian Blue in unstable, wave-like fluctuations.

Rather than representing a single controlled threshold, the shifting spectrum reflects the competing energy states surging through his body as his multiplier pushes beyond its natural operating range. The constantly changing aura serves as an immediate visual warning that Gavin has exceeded his established limiter and is operating at an unsustainable level.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Nova Energy Levels",

          description: `
Following Gavin’s hypernova evolution, the original tier-based color spectrum becomes obsolete. His energy no longer progresses through distinct percentage colors as his output rises.

Instead, Gavin consistently radiates a combined white, gold, and blue nova aura generated by his permanently elevated energy state. Changes in output are expressed through the aura’s intensity, heat distortion, environmental pressure, and overall scale rather than through separate color stages.

His power is no longer visually measured by which color he has reached, but by how strongly his nova energy affects the space surrounding him.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },
];

export default abilities;
