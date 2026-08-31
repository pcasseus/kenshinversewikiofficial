const abilities = [
  {
    name: "Electrical Energy Projection",
    books: [1],
    description:
      "Zoey’s refined electrokinesis allows her to convert excess ionic energy and electric potential into direct, high-voltage attacks. These emissions are generated through the same bioenergetic system that powers her photonic abilities, with her body functioning as both conductor and capacitor. By regulating charge density and field intensity, she can release electricity in a wide range of forms from concussive barrages to focused, precision strikes. This power grants her exceptional versatility in ranged combat, allowing her to overwhelm, immobilize, or eliminate threats depending on the situation.",
    evolved: [
      {
        books: [2],
        title: "Enhanced Electrical Energy Projection",
        description:
          "After becoming an Alpha Deviant, Zoey’s electric emissions became faster, denser, and more responsive. She gained the ability to shift voltage output on the fly, allowing her to scale intensity for suppression, containment, or destruction. Her bolts carried deeper penetration and her bursts expanded with greater reach and disruption radius. Electrical blasts could now arc between targets, disable power grids, or fry entire banks of enemy tech. Her ability to discharge and recover energy between attacks also improved, making her a relentless force in prolonged encounters.",
      },
      {
        books: [3],
        title: "Peak Electrical Energy Projection",
        description:
          "At her peak, Zoey’s mastery over photonic projection becomes absolute. Her blasts are no longer just energy outputs—they are surgical tools of destruction and control. She can weave beams through tight spaces, bend light around obstacles, or delay detonation for timed impact. She effortlessly tunes each emission to environmental factors, balancing power with purpose. Whether blinding a sniper with pinpoint flash or vaporizing enemy defenses with sustained radiation, her light-based offense becomes a flawless extension of thought. Each projection is calculated, adaptive, and devastating.",
      },
    ],
    subAbilities: [
      {
        books: [2],
        name: "Electro Chain Arc",
        description:
          "Zoey releases a targeted bolt of electricity that leaps from one enemy or conductive surface to another. Each jump increases the voltage but reduces precision, making it ideal for clearing out tightly clustered opponents or overloading electronic systems in succession.",
      },
      {
        books: [2],
        name: "Electro Spike",
        description:
          "A compact, needle-like surge of electrical energy designed for pinpoint strikes. Zoey uses it to disable joints in powered armor, strike pressure points, or deliver neural shocks through exposed or vulnerable areas.",
      },
      {
        books: [2],
        name: "Electro Current Field",
        description:
          "Zoey charges the space around her or a selected target with a static field of electricity. This field lingers for several seconds, draining energy from nearby foes, disrupting balance, and interfering with mechanical or technological functions.",
      },
      {
        books: [2],
        name: "Electro Bursts",
        description:
          "A short-range, radial eruption of high-voltage energy that explodes outward from Zoey’s body. These bursts can fry electronics, knock back enemies, and create breathing room in close-quarters combat.",
      },
      {
        books: [2],
        name: "Electro Balls",
        description:
          "Zoey compresses volatile electrical energy into throwable spheres that detonate on contact or when triggered by proximity. These orbs release explosive charges capable of destabilizing enemy formations, disrupting machinery, or setting ambushes across the battlefield.",
      },
    ],
  },
  {
    name: "Electro Shields",
    books: [2],
    description:
      "By concentrating high-frequency electrical currents into a tightly woven field, Zoey can generate a protective dome or disc of electricity. The shield deflects incoming projectiles, energy blasts, and melee strikes while delivering reactive shocks to anything that makes contact.",
    evolved: [],
    subAbilities: [
      {
        books: [2],
        name: "Electro Barrier",
        description:
          "A reinforced arc of electrical energy that forms a curved, semi-solid wall in front of Zoey or her allies. The barrier absorbs kinetic and energy-based attacks while emitting jolts of electricity upon impact. It’s ideal for halting advances, blocking narrow passageways, or shielding vulnerable allies under heavy fire.",
      },
    ],
  },
  {
    name: "Electrokinetic Constructs",
    books: [2],
    description:
      "Zoey can shape raw electricity into semi-solid forms by manipulating electromagnetic fields into stable, programmable patterns. These constructs are powered by her internal energy generator and reinforced through precise ionic regulation, allowing them to maintain structural integrity for short periods. Though they shimmer with volatile energy, each one is fully under her control. She can manifest them as weapons, tools, or restraining devices, adapting their shape and function to the needs of the moment.",
    evolved: [
      {
        books: [2],
        title: "Peak Electrokinetic Constructs",
        description:
          "After ascending to Alpha Deviant status, Zoey’s constructs became more durable, versatile, and reactive. She gained the ability to chain constructs together, remotely redirect them mid-use, or modify their shape on the fly. Her control extended to multi-point deployment, allowing her to project several constructs at once across a combat zone. Whether forming electrified barriers, extending whips, or locking down targets with ionized clamps, her constructs evolved into tools of strategic precision and layered defense.",
      },
    ],
    subAbilities: [
      {
        books: [2],
        name: "Electro Whip",
        description:
          "A long, crackling filament of high-tension electricity that Zoey can snap outward with precise control. The whip slices through metal, disarms opponents, or wraps around targets at range. Its length can extend or retract on command, and every strike delivers a searing electric jolt powerful enough to disable or incapacitate.",
      },
      {
        books: [2],
        name: "Electro Rope",
        description:
          "A flexible tether made of stabilized electricity, used for grappling, restraint, or traversal. Zoey can lasso enemies, anchor onto surfaces, or climb across gaps with ease. The rope stays malleable until she commands it to lock in place, allowing it to function as a reactive tool or weapon depending on the situation.",
      },
      {
        books: [2],
        name: "Electro Bolt",
        description:
          "A concentrated spear of electric energy formed for precision strikes. Denser than her standard blasts, the bolt delivers high-speed, high-voltage impact capable of piercing reinforced armor and penetrating barriers. On contact, it inflicts both kinetic damage and an explosive electric surge, ideal for breaching defenses or disabling heavy targets.",
      },
      {
        books: [2],
        name: "Electro Lance",
        description:
          "A long, javelin-like construct of concentrated electricity used for ranged piercing strikes or melee combat. It overloads shields and creates a shockwave on impact. She can also hurl it like a lightning-charged spear that detonates on contact.",
      },
      {
        books: [2],
        name: "Electro Prison",
        description:
          "A containment field of high-frequency electricity that forms a sphere or cube around a target. The structure is built from tightly controlled ionic streams, layered with oscillating voltage that destabilizes escape attempts. Teleportation, phasing, and most tech-based breaches are neutralized inside the prison. Within the field, periodic voltage spikes disorient and weaken the captive over time. Duration depends on Zoey’s focus and energy reserve, making it ideal for isolating high-priority threats or capturing enemies alive.",
      },
    ],
  },
  {
    name: "Electrical Sight",
    books: [1],
    description:
      "Zoey’s specialized vision allows her to perceive electrical currents and bioelectric signals with pinpoint clarity. This advanced sensory ability evolved from her adaptive energy system and enables her to read power flow as easily as others read motion or light. She can instantly analyze machines and living beings, identifying short circuits, electrical malfunctions, or failing components in tech, as well as detecting irregular neural activity, muscle contractions, or heartbeat patterns in people. Whether diagnosing battlefield injuries or pinpointing vulnerabilities in enemy gear, her electrical sight enhances both her combat precision and her utility as a tactical support asset.",
  },
];

export default abilities;
