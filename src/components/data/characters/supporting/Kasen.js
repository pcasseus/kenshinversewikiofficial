const kasen = {
  id: "#034",
  name: "Kasen Malik Jr.",
  slug: "Kasen",
  image: "/kasen.jpg",
  class: "Beta",
  status: "Alive",
  tagline: "",
  primaryPower: "Sonic Perception Distortion",
  stats: {
    affiliation: "Unaffiliated",
    gender: "Male",
    height: "5'10\"",
    weight: "147 lbs",
    eyes: "Brown",
    hair: "Black",
    "place of birth": "Long Island, New York"
  },
    abilities: [
      { name: "Omega Deviant Physiology", description: "Omega-class Deviants represent the most common and least combat-capable subset of the Deviant population. Their abilities typically manifest around the age of 18, and are generally passive, support-oriented, or limited in scope. These powers may include minor telepathy, light sensitivity control, biological resistance, enhanced memory, or short-range sensory enhancements. While rarely suited for frontline combat, Omega Deviants often serve critical roles in logistics, healing, scouting, or intelligence. Some may eventually evolve into Beta-tier capabilities with extreme stress or prolonged exposure to training, but most remain grounded in subtle, situational utility. Despite their low threat rating, Omegas are foundational to Deviant society — adaptable, low-risk, and essential for non-combative support across both civilian and resistance operations.", book: "Book 2" },
      { name: "Sonic Perception Distortion", description: "Kasen possesses an unusually sensitive and irregular auditory system. His inner ear and auditory cortex are mutated in such a way that he doesn’t just hear sound — he experiences it multidimensionally. Instead of filtering and processing noise like a normal brain, his senses absorb overlapping frequencies, reverberations, and ambient acoustics all at once, creating a chaotic soundscape of everything in his environment, all the time.", book: "Book 2"},
      
      { 
        name: "Super Hearing", 
        description: "Kasen’s hyper-evolved auditory system grants him a powerful but unstable form of super hearing. Unlike traditional enhanced listeners who can focus with precision, Kasen hears everything — all at once. Every footstep, every heartbeat, every flicker of motion bouncing off a surface registers in his mind as overlapping sensory input. In calm environments, this allows him to pick up whispers through walls, identify people by the rhythm of their breathing, or hear lies in the tightening of vocal cords", 
        book: "Book 2",
        subAbilities: [
            { name: "Echo Discrimination", description: "While Kasen’s brain offers no natural filtering mechanism for the overwhelming flood of audio data he receives, he has slowly trained himself to interpret the chaos through experience. Echo Discrimination is his ability to analyze and differentiate between layers of reflected sound in his environment. By mentally tracking how sounds bounce, fold, or decay in space, he can distinguish between moving bodies, hollow structures, and even emotional states — all from the way sound wraps around them. It’s not a passive skill; it requires intense mental focus and cognitive effort. In noisy spaces, Kasen doesn’t “hear less” — he hears everything, but he’s learned to prioritize what matters and mute what doesn’t through willpower and practiced recognition.", book: "Book 2"},
        ] 
      },
      
      { name: "Auditory Lie Detection", description: "Years of listening to voices from every possible angle — even through layered noise — has made Kasen uncannily good at reading the tension in someone’s speech. Micro tremors, breath patterns, involuntary throat tightness — he picks up on them all. While not foolproof, he can often sense when someone is lying, nervous, or about to lash out, based solely on auditory cues. It works best when he’s emotionally grounded; stress can cause him to misread or overinterpret the signals.", book: "Book 2" },

      { 
        name: "Frequency Sensitivity", 
        description: "Kasen’s hearing isn’t just broad in scope — it extends into ranges most humans can’t perceive. High-frequency electronics, ultrasonic emitters, even the low hum of an old generator — he can hear all of it. This sometimes lets him detect surveillance devices, active drones, or malfunctioning tech before anyone else notices. ", 
        book: "Book 2",
        subAbilities: [
            { name: "Frequency Tap", description: "Kasen’s hearing extends into radio, ultrasonic, and subsonic frequency ranges far beyond normal human perception. As a result, he can occasionally intercept analog communications — like walkie-talkies, unsecured radio chatter, or old wireless intercoms — simply by being in proximity. He doesn’t control or tune into them intentionally; instead, they bleed into his consciousness like faint voices or pulses layered over the natural soundscape. With focus, he can mentally isolate and decipher them, effectively listening in on short-range comms without any equipment.", book: "Book 2"},
        ] 
      },

      { name: "Sound Pinpoint Accuracy", description: "Despite the constant overload of auditory input, Kasen has developed an uncanny ability to localize the exact origin of sounds with near-perfect accuracy. He doesn’t just hear that someone is moving — he knows exactly where they are, how fast they’re going, and what surface they’re stepping on, even if he can’t see them. His brain instinctively triangulates position using microsecond differences in arrival time and resonance from surrounding surfaces. In close quarters, this allows him to track enemies through walls, identify how many people are in a room by their breathing patterns, or sense when someone’s creeping up behind him.", book: "Book 2" },
      { name: "Heightened Reflexes", description: "Kasen’s ultra-sensitive hearing gives him a reflexive edge in combat and close encounters. Because he perceives the subtlest audio cues — the shift of a foot, the intake of breath before a punch, the whistle of air displaced by movement — his body often reacts before his brain fully processes the threat. This results in split-second dodges, flinches, or parries that seem instinctive rather than trained. His nervous system has adapted to treat sound as a threat detection grid, responding to danger even from behind or outside his field of view.", book: "Book 2" },

      { 
        name: "Sonic Projection", 
        description: "With the help of his Echo Rods — custom-built by Jose Rivera — Kasen can translate the sounds he hears into tangible, directional force. The rods are equipped with specialized projection nodes at their tips, capable of capturing acoustic input from Kasen’s auditory system and converting it into concussive energy. This allows him to weaponize environmental noise on the fly, turning combat into a chaotic but rhythmic interplay of sound and motion.", 
        book: "Book 2",
        subAbilities: [
            { name: "Sonic Blasts", description: "Using his Echo Rods, Kasen can weaponize specific sounds he’s actively hearing by converting them into short-range kinetic blasts. Once he locks onto a target sound — whether it’s a door slamming, a scream, a gunshot, or even his own heartbeat — he channels the acoustic energy through the rods, where it’s processed and compressed by a specialized projection node located at each tip. These nodes are tuned to translate sonic input into directional concussive force. When Kasen strikes or aims with the rods, the energy is released from the tip in a tightly focused pulse. The nature of the blast depends on the characteristics of the captured sound — sharp, explosive noises generate fast, high-pressure bursts, while deeper or drawn-out sounds produce broader, wave-like impacts. The effect isn’t a replication of the sound itself, but a reshaped version of its energetic profile, transformed into raw force. This makes every blast feel unique and situational.", book: "Book 2"},
            { name: "Sonic Blast Stream", description: "An advanced form of his standard blast technique, Kasen can sustain a continuous series of Sonic Blasts by rapidly cycling through incoming sounds and redirecting them through the Echo Rods. As one sound ends, he instinctively latches onto the next viable one — a clash of metal, a distant yell, a weapon discharge — creating a seamless stream of kinetic pulses projected from the tip-mounted nodes of his rods. Each segment of the stream is shaped by the unique properties of the source sound, allowing Kasen to vary the intensity, density, and cadence of the blasts in real time. He can scale from quick, precise pulses to sweeping, forceful waves depending on the sounds he threads together.", book: "Book 2"},
            { name: "Sonic Explosion", description: "Embedded within the inner cores of the Echo Rods are specialized resonance nodes — compact, high-density sound chambers designed by Jose Rivera to interface directly with Kasen’s auditory signature. These nodes are capable of storing and amplifying intense acoustic energy, either by charging up from the environment or drawing from an internal reserve of raw sonic pressure as a failsafe. When Kasen needs to unleash a powerful area-of-effect attack, he can funnel a strong sound — such as an explosion, thunderclap, or amplified feedback loop — directly into both rods. The nodes compress this energy and hold it briefly until he slams the rods together in a precise sequence, triggering a detonation. The result is a wide-area Sonic Explosion — a burst of compressed sound that erupts outward in all directions, knocking back enemies, destabilizing inner-ear balance, and scrambling electronics within range. If no sound is available, the rods can default to their internal backup reservoir — a pre-charged, limited-use acoustic core tuned to Kasen’s nervous system. Regardless of the source, the blast is nearly silent in pitch but violent in pressure — designed to hit before anyone hears it coming.", book: "Book 2"},
        ] 
      },

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
        name: "",
        description: ""
      }
    ],
    tools: [
      {
        name: "Jose Rivera's Custom Resonant Drumsticks — Echo Rods",
        description: "Designed by Aetherian genius Jose Rivera specifically for Kasen, the Echo Rods are a pair of lightweight, sound-reactive drumsticks made from a carbon-dense polyfiber alloy fused with micro-resonance nodes. The rods are calibrated to interface directly with the acoustic input from Kasen’s auditory cortex using low-level neuro-harmonic syncing. In simpler terms — when Kasen hears a sound, these sticks can project, reflect, or distort it physically through controlled kinetic bursts."
      },

      {
        name: "Resonant Recall Gloves",
        description: "To prevent disarmament or mid-combat loss of his Echo Rods, Kasen wears a pair of reinforced tactical gloves embedded with low-frequency magnetic actuators and haptic signalers. Designed by Jose Rivera and synced directly to the rods’ internal circuitry, the gloves allow Kasen to recall the drumsticks with a simple hand gesture or mental ping, even if they’ve been knocked from his grip or thrown intentionally. The connection relies on short-range sonic pairing — a low-frequency that keeps the rods attuned to the unique acoustic signature of Kasen’s touch. Once activated, the rods pulse faintly with feedback and magnetically redirect themselves toward his palms with guided precision. While not instant, the recall is fast enough to retrieve a rod mid-fall or from several meters away — even through minor interference like smoke, shallow water, or debris."
      }
    ]
  };

export default kasen;
