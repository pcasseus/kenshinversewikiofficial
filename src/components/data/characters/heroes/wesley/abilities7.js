const abilities = [
  {
    name: "Vibrational Discrepancy Awareness",
    domain: "Vibration Manipulation",
    classification: "Sensory",
    release: "future",

    description: `
Wesley can detect inconsistencies in the vibrational patterns of his environment, allowing him to sense, and often visually perceive, when something is an illusion, projection, or reality distortion. Because every object and entity emits a subtle vibrational signature, any artificial construct or manipulated image typically carries slight inconsistencies in frequency, resonance, or delay.

By constantly attuning to these micro-vibrations, Wesley can feel when something is out of phase with the world around it. This awareness often presents as a distortion, shimmer, or absence of expected feedback in his senses, making illusions harder to fool him with and enabling him to “see through” them even when others can’t. While not infallible against all types of illusions, especially those that manipulate vibration directly, his ability gives him a significant edge against deceptive abilities and reality-altering foes.
    `.trim(),
  },

  {
    name: "Vibration Echo Barrage",
    domain: "Vibration Manipulation",
    classification: "Technique",
    release: "future",

    description: `
Wesley delivers a single punch laced with staggered vibrational frequencies, causing it to detonate in a cascade of overlapping concussive impacts. Instead of one strike, the vibrations ripple forward in rapid succession, layering dozens, sometimes hundreds, of micro-shockwaves along the same path. The result is a barrage of phantom hits all focused on a single impact zone, overwhelming even the most durable targets with relentless internal pressure and kinetic trauma.
    `.trim(),
  },

  {
    name: "Mass Distortion Strikes",
    domain: "Vibration Manipulation",
    classification: "Technique",
    release: "future",

    description: `
Wesley manipulates the vibrational frequency and momentum of his limbs to simulate the kinetic mass of far heavier objects. By momentarily syncing his strikes with the resonant signature of something massive, like a boulder, a vehicle, or even a meteor, he tricks the laws of motion into amplifying the weight behind each blow.

This doesn’t make him physically heavier, but rather makes his strike land with the force of something that is. The result is a punch or kick that carries catastrophic inertia, capable of blowing through reinforced barriers, launching foes across vast distances, or shattering defensive constructs in a single hit. At full output, the backlash from these strikes can cause shockwaves or fracture the terrain underfoot, making them risky to use in unstable environments.
    `.trim(),
  },

  {
    name: "Vibration Force Multiplier",
    domain: "Vibration Manipulation",
    classification: "Technique",
    release: "future",

    description: `
Wesley unleashes a series of vibration-based attacks that compound in strength with each successive strike. By syncing the frequency of each blast to the residual vibrations left by the previous one, he amplifies the kinetic feedback loop, causing every hit to grow stronger, faster, and more destabilizing than the last. This buildup continues until the final strike delivers exponentially enhanced concussive force, often overwhelming even the most resilient defenses.

The multiplier effect only works when attacks are executed in rapid succession, making this technique a high-reward combat rhythm that punishes hesitation or interruption. At full potential, the last strike in the sequence can trigger area-wide shockwaves, shatter reinforced constructs, or rupture internal systems in vibration-sensitive targets.
    `.trim(),
  },

  {
    name: "Vibration Armor",
    domain: "Vibration Manipulation",
    classification: "Defense",
    release: "future",

    description: `
Wesley can rapidly form makeshift armor by gathering debris, rubble, or nearby environmental materials and binding them together using controlled vibrational fields. These oscillating frequencies stabilize loose fragments into a cohesive, flexible shell that absorbs impact and redistributes kinetic force across the surface.

The armor is not a solid plate. It’s a reactive layer held together by continuous micro-vibrations, allowing it to flex, shift, and adapt with Wesley’s movements. It can be formed mid-combat, often while he's using concussive blasts from a single arm or leg to stay upright. This makes the technique especially effective when Wesley is injured and needs quick reinforcement, such as after sustaining major limb damage.

Depending on available materials, the armor may appear jagged, layered, or rough, but its vibrational cohesion renders it surprisingly resilient. The more stable Wesley’s aura, the longer it holds together. Too much disruption or external destabilization may cause it to break apart.
    `.trim(),
  },

  {
    name: "Vibro-Inertial Displacement Surge",
    domain: "Vibration Manipulation",
    classification: "Mobility",
    release: "future",

    description: `
In the vacuum of space, where traditional movement systems fail, Wesley weaponizes vibration itself. By generating a focused internal recoil, originating from a synchronized pulse of vibrational energy across his muscular and skeletal structure, he launches himself at extreme speeds without relying on external propulsion. This sudden surge propels him like a human railgun, converting zero-gravity into a combat advantage.

The move distorts light and local debris as he breaks forward, becoming a streak of vibrational force capable of blitzing across starship fields or tearing through fleets. Because it bypasses conventional thruster drag, the technique allows for tight maneuvering, precision bursts, or devastating strike entries from unexpected vectors.
    `.trim(),
  },

  {
    name: "Zero-State Vibration Control",
    domain: "Vibration Manipulation",
    classification: "Mobility",
    release: "future",

    description: `
Wesley enters a hyper-refined state where his body’s vibrations are perfectly stabilized at a harmonic equilibrium, severing his connection to conventional inertia. In this zero-state, he effectively removes all internal resistance to motion, allowing him to move using only the recoil of his own vibrational emissions, with no drag, slowdown, or external friction acting on him.

This state enables silent, instantaneous redirection in zero-G, extreme-speed bursts without traditional acceleration, and even temporary “suspension” from the normal laws of motion. It’s particularly effective in space or high-pressure atmospheres, where traditional movement would falter.
    `.trim(),
  },

  {
    name: "Master Hacker",
    domain: "Training & Expertise",
    classification: "Skill",
    release: "KVI",
    discovery: "beginning",

    description: `
Everything Wesley knows about hacking and cyber-infiltration can be traced back to his uncle Teddy Johnson, who trained him extensively from a young age. Through Teddy’s hands-on tutelage, Wesley learned to breach firewalls, override encrypted systems, disrupt live surveillance networks, manipulate AI protocols, and navigate even heavily protected digital infrastructure with precision.

As his abilities developed, Wesley eventually surpassed his uncle by a considerable margin, becoming one of the most dangerous and untraceable hackers on the planet. He is capable of outmaneuvering government security systems, compromising advanced technology, disabling alien systems, and disrupting military infrastructure within seconds. Although Wesley has taken Teddy’s teachings far beyond their original limits, the foundation of everything he knows comes directly from his uncle.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Master Martial Artist",
    domain: "Training & Expertise",
    classification: "Skill",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley’s combat training comes primarily from his father, Ajax Johnson, who personally trained him from a young age and built the foundation of his fighting style. Under Ajax, Wesley became highly proficient in multiple martial arts disciplines, including Krav Maga, Brazilian Jiu-Jitsu, boxing, kickboxing, and jujutsu, learning how to adapt his technique to different opponents, environments, and combat situations.

His later training with S.T.A.T.I.C. and years of real field experience further refined those skills, exposing him to a wider variety of opponents and forcing him to continuously adapt under pressure. His fighting style has since evolved into a seamless synthesis of striking, grappling, throws, counters, and close-quarters tactics rooted in Ajax’s teachings.

What sets Wesley apart is his ability to combine that combat foundation with his vibration manipulation, using precise timing, movement, and controlled bursts of force to strengthen otherwise conventional techniques.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Expert Spy",
    domain: "Training & Expertise",
    classification: "Skill",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley is highly trained in the art of espionage, surveillance, and infiltration, skills passed down by both Ajax and Teddy Johnson. He is adept at executing black ops missions, blending into hostile environments, extracting intelligence, and navigating enemy facilities undetected. His talents cover a range of field techniques: lockpicking, silent takedowns, remote surveillance setup, disguise, psychological profiling, and asset handling.
    `.trim(),

    subAbilities: [],
  },

  {
    name: "Expert Tactician",
    domain: "Training & Expertise",
    classification: "Skill",
    release: "KVI",
    discovery: "beginning",

    description: `
Wesley’s tactical foundation was built primarily by his father, Ajax Johnson, whose experience as a soldier, field commander, and combat tactician shaped the way Wesley approaches conflict. Ajax taught him to analyze opponents, control positioning, anticipate reactions, exploit weaknesses, and treat every battlefield as a constantly changing problem rather than a simple exchange of force.

Training with S.T.A.T.I.C. and years of field experience further sharpened those lessons, giving Wesley practical experience against unpredictable opponents and situations that could never be fully recreated through training alone. He has become analytically sharp, quick to adapt, and capable of recalculating strategies in the middle of combat when circumstances change.

Wesley reads patterns, anticipates enemy movements, and adjusts his approach in real time, whether operating alone or alongside a team. His anxiety also contributes to his tendency to constantly examine possible outcomes and dangers, something he has gradually learned to channel into heightened battlefield awareness rather than allow it to overwhelm him.

Even when a plan collapses, the lessons Ajax drilled into him remain the core of Wesley’s approach: assess, adapt, and keep moving.
    `.trim(),

    subAbilities: [],
  },
];

export default abilities;
