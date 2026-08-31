const michael = {
  id: "#033",
  name: "Michael Caruso",
  slug: "michael",
  image: "/michael.jpg",
  class: "Beta",
  status: "Alive",
  tagline: "",
  primaryPower: "Adrenalytic Kinesis",
  stats: {
    affiliation: "Unaffiliated",
    gender: "Male",
    height: "5'9\"",
    weight: "147 lbs",
    eyes: "Blue",
    hair: "Brown",
    "place of birth": "Queens, New York"
  },
    abilities: [
      { name: "Beta Deviant Physiology", description: "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later—usually between ages 15 and 16—and include a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.", book: "Book 2" },
      { name: "Adrenalytic Kinesis", description: "Michael Caruso possesses Adrenalytic Kinesis — a dangerously unstable form of kinetic energy generation rooted not in willpower or external physics, but in emotional volatility at the neurological level. Unlike most Deviants, Michael’s ability doesn’t activate by choice. It reacts to him — or more accurately, to everything he feels. His power is triggered by micro-emotional disturbances: irritation, anxiety, shame, jealousy, fear — anything outside of calm neutrality or pure joy begins to spark a low-grade kinetic charge within his body. Even minor emotional friction — a social slight, an intrusive thought, a memory — feeds the system. These reactions are involuntary, continuous, and deeply embedded in his neurology. The result: Michael’s body interprets emotion as motion. His nervous system translates psychological discomfort into kinetic energy buildup, layering force over time like a stress fracture waiting to split. He is a walking pressure chamber, with no true off switch. This makes normal life impossible. Every social interaction, every surge of emotion, every moment of overstimulation causes his system to flicker, hum, or crackle beneath the surface. At rest, he’s a ticking engine. When pushed, it’s an unstoppable escalation. The more unstable his emotions become, the more violently his power responds — turning psychological distress into physical momentum.", book: "Book 2"},
      { name: "Kinetic Feedback Loop", description: "Michael’s body functions as a living amplifier of momentum. Every hit he takes — whether it’s a punch, a bullet, a fall, or even a shove — doesn’t just damage him. It charges him. Each impact, no matter the source, is absorbed and converted into internal kinetic pressure, which then reroutes directly into his next physical action. A blow to the chest fuels a harder swing. A fall enhances his next leap. Even minor hits stack into the system. This creates a loop of exponential force escalation — the more he’s hit, the more power he builds, and the more devastating each of his counterattacks becomes.", book: "Book 2"},
      { name: "Kinetic Siege", description: "Michael doesn’t run — he builds. Every step forward compounds like a hammer cocking back. The faster he moves, the harder he hits, and the more impossible he becomes to stop. Once he gains traction, his motion becomes a siege engine of kinetic force, with each stride stacking mass, inertia, and raw pressure into an unstoppable trajectory. Trying to stop him mid-charge is worse than doing nothing — every blow, every obstacle, every attempted restraint only adds fuel to the oncoming force.", book: "Book 2" },
      
      { 
        name: "Kinetic Detonation", 
        description: "Michael can channel his stored kinetic charge into a single point of explosive contact, turning basic strikes into localized eruptions of raw force. Unlike traditional shockwaves, these detonations don’t radiate outward — they concentrate everything into the impact zone, creating ruptures in terrain, armor, or bone. It’s not about wide-area destruction — it’s about overkill at point-blank range. Each detonation is instinctive and brutal, triggered mid-motion without delay or buildup. They’re extensions of his fury, not tactical choices — and each one comes harder if he’s already taken hits.", 
        book: "Book 2",
        subAbilities: [
            { name: "Fist Detonation", description: "A straight punch that lands like a kinetic warhead, capable of cratering walls or blasting enemies across rooms.", book: "Book 2"},
            { name: "Feet Detonation", description: "A downward or forward kick that explodes on contact, pulverizing armor, shielding, or terrain beneath.", book: "Book 2"},
            { name: "Clap Detonation", description: "A thunderclap-like burst between both hands, creating a concussive dome at close range — useful for clearing crowds or blowing back projectiles.", book: "Book 2"},
            { name: "Stomp Detonation", description: "A downward stomp that causes a focused, seismic pulse through the ground — ideal for cracking floors, tripping groups, or rupturing structures.", book: "Book 2"},
            { name: "Shoulder Check Detonation", description: "A full-body slam that releases kinetic force on contact, useful during rushes or tackles.", book: "Book 2"},
            { name: "Headbutt Detonation", description: "A savage, no-warning burst from his skull into a target’s face or chest — unpredictable and devastating.", book: "Book 2"},
            { name: "Knee Detonation", description: "A rising burst strike aimed at gut or jaw level, commonly used in grapples or sudden close-quarters.", book: "Book 2"},
        ] 
      },
      
      { name: "Kinetic Overdrive", description: "As Michael’s emotional disturbances intensify — even before full rage takes hold — his body begins to react at the skeletal level. His bones excrete reactive kinetic minerals that rapidly calcify along muscle fibers and nerve clusters, forming a dense subdermal exostructure. It doesn’t manifest as armor — there’s no plating, no shell — just a terrifying transformation beneath the skin. Veins glow molten red, pulsing under muscle like pressure lines in a reactor. His body becomes unnaturally dense, his weight increasing with each emotional spike, and his pain receptors dull under the mineralized reinforcement. Strikes that would tear through steel bounce off him like wind. Blades snap. Bullets ricochet. Even concussive force dissipates across his body like it hit a grounded monolith.", book: "Book 2" },
      { name: "Kinetic Release", description: "When Michael’s body absorbs too much kinetic energy without a proper outlet, the pressure becomes unstable. If he doesn’t strike, move, or detonate soon enough, the energy surges to the surface in a violent, involuntary discharge known as Kinetic Release. This takes the form of a radial concussive blast, erupting outward from his core and knocking back anything in range — enemies, vehicles, debris, even reinforced structures. The force doesn’t explode like fire or lightning; it expands like a brutal ripple of pure motion, throwing everything away from him in a moment of raw rejection.", book: "Book 2" },
      { name: "Neural Combat Instinct", description: "When Michael enters his heightened state, his higher brain function begins to shut down — logic, language, empathy, restraint. In their place, his motor cortex and primal survival centers overclock, granting him a terrifying level of reflexive combat efficiency. He doesn’t think. He reacts — faster than trained fighters, more adaptive than machines. Every movement, every threat, every pattern is subconsciously logged, analyzed, and countered in real time. Even without formal combat training, he fights with predatory fluency, as if instinct alone has mastered a hundred styles.", book: "Book 2" },
      { name: "Kinetic Energy Reversal", description: "At peak overload — when his body is saturated with rage and momentum — Michael’s power begins to break the rules of energy interaction. No longer limited to kinetic force, he enters a state where his system can absorb incoming non-kinetic energy (like fire, plasma, electricity, or even light-based attacks) and forcibly translate it into kinetic output. His body treats foreign energy not as damage, but as fuel — metabolizing it through his rage-born feedback system and weaponizing it through motion. The more exotic or intense the energy, the more violently it converts.", book: "Book 2" },
      { name: "Brute-Phase Strength", description: "Even at rest, Michael’s body operates on a superhuman power scale. His muscles are in a constant state of low-grade tension, primed by the unstable energy flowing through him. This gives him immense raw strength by default — not from adrenaline, not from rage — but simply because his physiology is built to rupture things.", book: "Book 2" },

    ],
      weaknesses: [
      {
        name: "Power Limit",
        description: "Wesley can only generate so much vibration before overloading."
      },
      {
        name: "Strain Under Overwhelming Force",
        description: "He cannot absorb impacts above planetary scale."
      }
    ],
    relationships: [
      {
        name: "Andrew Torres",
        role: "Friend",
        status: "Dead",
        link: "/characters/andrew",
        image: "/andrew.jpg"
      },
      {
        name: "Justin Frasier",
        role: "Friend",
        status: "Alive",
        link: "/characters/justin",
        image: "/justin.jpg"
      },
      {
        name: "Anthony Delgado",
        role: "Friend",
        status: "Alive",
        link: "/characters/anthony",
        image: "/anthony.jpg"
      },
      {
        name: "Wesley Johnson",
        role: "Friend",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
      },
    ],
    uniforms: [
      {
        name: "Zoey’s War Suit",
        description: ""
      }
    ],
    tools: [
      {
        name: "",
        description: ""
      }
    ]
  };

export default michael;
