const abilities = [
  {
    name: "Electrical Energy Projection",
    domain: "Electrical Energy",
    classification: "Application",
    release: "KVI",
    discovery: "middle",

    description: `
Zoey can project the electrical energy produced by her awakened internal energy system as high-voltage offensive discharges. Unlike conventional electrical Deviants, she does not rely on ambient electricity or a finite reserve of stored charge. Her core continuously generates the energy she channels, allowing her to repeatedly release golden electrical attacks without exhausting the source itself.

By regulating the amount of charge passing through her body, she can produce anything from controlled strikes to powerful concussive blasts capable of overwhelming or incapacitating targets. At this stage, her greatest limitation is not how much energy she possesses, but how much her still-developing body can safely regulate and release at once.
    `.trim(),

    progression: {
      KVII: {
        middle: {
          title: "Enhanced Electrical Energy Projection",

          description: `
After becoming a Gamma Deviant, Zoey's electric emissions become faster, denser, and more responsive. She gains the ability to shift voltage output on the fly, allowing her to scale intensity for suppression, containment, or destruction. Her bolts carry deeper penetration and her bursts expand with greater reach and disruption radius.

Electrical attacks can now arc between targets, disable power grids, or fry entire banks of enemy technology. Her ability to discharge and recover between attacks also improves, making her a relentless force in prolonged engagements.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Peak Electrical Energy Projection",

          description: `
At her peak, Zoey gains complete control over the delivery of her electrical output. Her attacks can be shaped into narrow piercing bolts, branching arcs, sustained streams, or explosive discharges without sacrificing precision. She can regulate voltage, current, density, and spread instantaneously, allowing each projection to be tailored to its target.

Her electricity can travel through conductive surfaces, bend through complex paths, strike multiple targets in sequence, or be concentrated into devastating single-point attacks. By this stage, electrical projection functions as a direct extension of her intent, allowing her to shift seamlessly between disabling force, battlefield suppression, and overwhelming destructive output.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Electro Chain Arc",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey releases a targeted bolt of electricity that leaps between enemies or conductive surfaces. Each successive jump carries increased voltage at the cost of precision, making the technique effective against clustered opponents, linked machinery, or interconnected electronic systems.
        `.trim(),
      },

      {
        name: "Electro Spike",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey compresses electrical energy into an extremely narrow discharge designed for precision rather than raw force. The spike can target exposed circuitry, powered armor joints, vulnerable equipment, or specific points on an opponent's body, delivering a concentrated neural or electrical shock with minimal spread.
        `.trim(),
      },

      {
        name: "Electro Current Field",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey saturates the space around herself or a selected area with a persistent electrical field. The charged environment interferes with electronics, disrupts muscular coordination, and continuously exposes anything inside the field to fluctuating electrical current. The field can linger briefly after deployment, allowing Zoey to control space without maintaining a direct attack.
        `.trim(),
      },

      {
        name: "Electro Bursts",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey releases electricity outward from her body in a short-range radial discharge. The expanding burst can knock nearby opponents back, overload surrounding electronics, and interrupt attacks from multiple directions, making it especially useful when she is surrounded or needs to immediately create distance.
        `.trim(),
      },

      {
        name: "Electro Balls",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey compresses volatile electrical energy into compact spheres that can be thrown or positioned around an area. The spheres discharge on impact or when triggered by proximity, releasing concentrated electrical explosions capable of destabilizing enemy formations, disabling machinery, or controlling movement across the battlefield.
        `.trim(),
      },
    ],
  },

  {
    name: "Electro Shields",
    domain: "Electrical Energy",
    classification: "Defense",
    release: "KVII",
    discovery: "beginning",

    description: `
Zoey can concentrate high-frequency electrical currents into tightly woven defensive fields. These shields can take the form of discs, domes, or curved surfaces capable of intercepting projectiles, energy attacks, and physical strikes. Contact with the field can also trigger a reactive electrical discharge against whatever impacts it.

Because the shield is sustained through Zoey's continuous energy generation, its primary limitation is not supply but structural stability. Attacks powerful enough to disrupt the electromagnetic pattern maintaining the shield can destabilize or break it.
    `.trim(),

    subAbilities: [
      {
        name: "Electro Barrier",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey expands her defensive field into a broad curved wall capable of protecting multiple people or blocking a larger section of space. The barrier absorbs incoming force while channeling electrical current across its surface, allowing it to halt advances, protect allies under fire, or temporarily seal narrow passages.
        `.trim(),
      },
    ],
  },

  {
    name: "Electrokinetic Constructs",
    domain: "Electrical Energy",
    classification: "Application",
    release: "KVII",
    discovery: "beginning",

    description: `
Zoey can shape electrical energy into stable, semi-solid constructs by using electromagnetic fields to confine and reinforce the current. These constructs are powered directly by her internal energy generation and maintained through precise ionic regulation.

She can form weapons, restraints, traversal tools, and containment structures while adjusting their dimensions and behavior in real time. Although visibly composed of crackling electricity, the constructs possess enough cohesion to apply physical force, support weight, restrain targets, or withstand impact for limited periods.
    `.trim(),

    progression: {
      KVII: {
        middle: {
          title: "Peak Electrokinetic Constructs",

          description: `
After ascending to Gamma Deviant status, Zoey's construct control becomes significantly more advanced. Her constructs gain greater durability, stability, and responsiveness, allowing her to reshape them during use, redirect them remotely, or maintain several independent structures at once.

This multi-point control allows Zoey to treat constructs as an interconnected battlefield system rather than isolated objects. Weapons, barriers, restraints, and traversal tools can be deployed simultaneously and altered in response to changing conditions without requiring her to dismantle and recreate them.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Electro Whip",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey forms a long filament of stabilized electricity capable of extending, retracting, and changing direction while remaining connected to her control. The whip can strike, disarm, ensnare, or pull targets from range while delivering an electrical discharge through anything it contacts.
        `.trim(),
      },

      {
        name: "Electro Rope",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey forms a flexible electrical tether designed primarily for restraint and traversal. She can anchor it to surfaces, pull herself across gaps, secure objects, or bind opponents. The rope remains flexible while moving and can be electrically locked into a rigid hold once positioned.
        `.trim(),
      },

      {
        name: "Electro Bolt",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey compresses electrical energy into a short, dense projectile construct resembling a heavy bolt or dart. Unlike her ordinary electrical projections, the construct maintains a defined shape during flight and delivers both concentrated impact force and a powerful electrical discharge when it strikes.

Its compact size makes it faster and easier to deploy than her larger constructed weapons, allowing Zoey to use it for rapid precision attacks against armored or reinforced targets.
        `.trim(),
      },

      {
        name: "Electro Lance",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey forms a long, rigid lance of concentrated electrical energy designed for both melee and ranged combat. The construct can be wielded directly as a piercing weapon or thrown like a javelin, maintaining its shape until impact.

Because the lance contains a much larger concentration of electrical energy than her smaller constructs, it releases a powerful discharge when it strikes, allowing it to overload shields, penetrate reinforced defenses, or detonate against heavily protected targets.
        `.trim(),
      },

      {
        name: "Electro Prison",
        release: "KVII",
        discovery: "beginning",

        description: `
Zoey creates a containment structure around a target using intersecting walls of stabilized electrical energy. The prison can form as a sphere, cube, or other enclosed shape depending on the available space.

Oscillating electrical currents interfere with movement, technology, and attempts to destabilize the structure from within. Periodic voltage surges can also disorient or weaken the captive. Maintaining the prison requires sustained concentration, particularly against powerful targets actively attempting to escape.
        `.trim(),
      },
    ],
  },

  {
    name: "Electrical Sight",
    domain: "Electrical Energy",
    classification: "Sensory",
    release: "KVII",
    discovery: "beginning",

    description: `
Zoey can visually perceive electrical currents and bioelectric activity as distinct patterns layered over her normal vision. Machines reveal active circuitry, power routes, damaged components, and electrical faults, while living organisms display the subtle bioelectric signals produced by neural activity, muscle movement, and cardiac function.

This perception allows Zoey to identify malfunctioning technology, locate active electrical systems, track living targets through their bioelectric signatures, and recognize abnormalities in neural or muscular activity. In combat, it gives her a precise understanding of both technological vulnerabilities and biological movement that ordinary vision cannot provide.
    `.trim(),

    subAbilities: [],
  },
];

export default abilities;