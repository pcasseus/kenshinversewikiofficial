const logan = {
  id: "#031",
  name: "Logan Summers",
  slug: "logan",
  image: "/logan.jpg",
  class: "Beta",
  status: "Alive",
  tagline: "",
  primaryPower: "Anolmic Energy Manipulation",
  stats: {
    affiliation: "",
    gender: "Male",
    height: "5'11\"",
    weight: "132 lbs",
    eyes: "Blue",
    hair: "Blonde",
    "place of birth": "Queens, New York"
  },
    abilities: [
      { name: "Beta Deviant Physiology", description: "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later—usually between ages 15 and 16—and include a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.", book: "Book 2" },
      { name: "Anolmic Energy Manipulation", description: "At thirteen, Logan began experiencing what doctors first misdiagnosed as anxiety, depression, or autism — but it was soon confirmed as early-onset schizophrenia. He heard voices that weren’t there, spoke to shadows only he could see, and became untethered from the reality his family fought to ground him in. Treatment offered little relief. But everything changed when his Deviant gene activated during a severe psychotic break. The voices stopped—instantly and completely. In their place emerged something far more dangerous: Anolmic Energy, a volatile and corruptive force that exists outside the known energy spectrum. It doesn’t burn, freeze, or electrocute; it disrupts. Logan’s body now channels this glitch-like radiation, unraveling the laws of matter and perception wherever it strikes. A single blast can leave enemies disoriented, detached, or entirely incapacitated, as if their connection to the world itself has been compromised. What once fractured his mind now fractures reality.", book: "Book 2" },
      {
        name: "Anolmic Energy Projection",
        description: "Logan channels and emits a volatile, reality-warping energy known as Anolmic Energy — a form of radiation that doesn’t exist on the known electromagnetic spectrum. Unlike conventional energy types, Anolmic Energy doesn’t operate within the laws of physics — it corrupts them. When projected, this energy doesn’t simply damage targets; it destabilizes them. Matter hit by it may flicker, vibrate out of sync, or begin breaking down at a molecular level. Living beings exposed to its effects often experience neurological interference — disorientation, paralysis, sensory distortion, or complete loss of equilibrium.",
        book: "Book 2",
        subAbilities: [
          { name: "Anolmic Blasts", description: "Short, concentrated pulses of Anolmic energy launched from the hands or chest. These blasts cause immediate destabilization upon impact, disrupting the target’s equilibrium and neural signals. Ideal for mid-range combat, they leave enemies momentarily dazed or disoriented and can short out energy-based shielding.", book: "Book 2"},
          { name: "Anolmic Blast Streams", description: "Continuous streams of raw Anolmic energy that ripple outward like a digital distortion. These are used for sustained pressure or environmental control, capable of rendering terrain volatile and breaking down physical integrity in structures or armor over time. Prolonged exposure causes severe neurological disruption in living targets.", book: "Book 2"},
          { name: "Anolmic Bursts", description: "Radial shockwaves of unstable energy released from Logan’s body in a sudden pulse. These bursts stagger or disable all entities within a short radius, scrambling balance, vision, and internal systems. Used as a defensive or crowd-control technique, they can forcibly reset an enemy’s footing and awareness mid-fight.", book: "Book 2"},
          { name: "Anolmic Eye Beams", description: "Focused twin beams emitted from the eyes, with pinpoint accuracy. While narrower in diameter, they cause deep neurological interference on contact — overloading a target’s sensory input and severing coordination. Ideal for precision takedowns or targeting weak points through armor or cover.", book: "Book 2"},
          { name: "Anolmic Mouth Beam", description: "A rare, high-output release of Anolmic energy expelled directly from the mouth when internal build-up overwhelms containment. It’s wild, barely controllable, and extremely destructive — often resulting in environmental distortion, spatial fractures, or temporary gravitational irregularities. Used only in moments of emotional or physical overload.", book: "Book 2"},
        ]
      },
      
      { name: "Anolmic Overwrite", description: "Logan has the ability to absorb and transmute external energy sources—such as heat, light, electricity, kinetic force, or plasma—into Anolmic Energy. Unlike traditional energy absorption, he doesn’t store or redirect these forces in their original form. Instead, he rewrites them at the fundamental level, unraveling their structure and converting them into his own volatile, reality-disrupting energy. The process leaves the original energy source corrupted and unrecognizable, making it impossible to reabsorb or reverse-engineer. This allows Logan to weaponize incoming attacks, feeding off enemy fire or environmental energy and transmuting it into destabilizing counterblasts.", book: "Book 2"},
      { name: "Anolmic Phase Scramble", description: "Logan can raise his hand and channel Anolmic energy through his palm to intercept incoming attacks — not by blocking them, but by destabilizing their structure mid-flight. The moment the energy touches his hand, it begins to unravel, warping and flickering as if it’s being corrupted frame by frame. In an instant, the blast dissipates into harmless static or collapses inward as if it was never launched", book: "Book 2" },
      { name: "Anolmic Reality Quake", description: "By slamming his hands or channeling energy into the ground, Logan injects Anolmic energy into the local terrain, causing a violent quake effect. This isn’t a typical earthquake—space itself trembles. Ground may ripple like liquid, structures vibrate out of sync, and gravity briefly distorts in pulses. Enemies caught in the radius are knocked off balance, their perception warped as the environment seems to flicker, bend, or rotate unnaturally. This ability is both an area disruptor and psychological weapon, throwing entire squads into disarray even before a direct attack.", book: "Book 2" },
      { name: "Anolmic Tension Sense", description: "Logan possesses a sixth sense attuned to psychic and emotional disturbance, specifically fear, anxiety, and internal instability. His Anolmic field subtly reacts to fluctuations in others’ mental states, allowing him to detect nearby individuals experiencing heightened emotional distress — even through walls or in total darkness.", book: "Book 2" },
      { name: "Anolmic Entropy Mark", description: "Jade can phase through structures composed of genefrost or natural ice, allowing her to move through walls, barriers, or constructs she or others have frozen — as if gliding through fog. This isn’t true phasing; her molecules are not breaking down. Instead, she temporarily syncs with the molecular vibration of frozen matter, slipping through it like a ghost in slow motion.", book: "Book 2" },
      
      {
        name: "Anolmic Displacement",
        description: "Logan's mutation reached a breaking point during a catastrophic power clash, when he pushed his body beyond its limits and unleashed a devastating surge of Anolmic energy. The blast secured victory—but not without irreversible consequences. The energy rewrote his cellular structure on a fundamental level, severing the natural tether between his body and fixed space. In the days that followed, Logan began to experience disturbing blackouts. At first, he would simply wake up in different rooms of his own house, disoriented and unsure how he got there. But the incidents escalated. The radius widened. Soon, he was waking up in alleyways, rooftops, or empty streets miles from home. Fearing a relapse into the mental health struggles of his past, Logan began investigating the episodes himself. Eventually, it was William Hutton who deduced the truth: Logan was teleporting. But unlike traditional displacement, this was not a controlled ability—it was a side effect of his body slipping in and out of sync with local space, the result of Anolmic energy corrupting his spatial anchoring. Over time, as his physiology adapted to the new state, Logan gained partial and eventually full control over the effect.",
        book: "Book 2",
        subAbilities: [
          { name: "Displacement Step", description: "Logan can momentarily blink out of phase with space, vanishing and reappearing a short distance away in a near-instant. This ability allows him to evade attacks with fluid, unpredictable movements, often dodging blows after they’ve been thrown. Visually, it resembles a glitch in space—his image “skips” like a corrupted frame, reappearing at a new angle, position, or elevation. Displacement Step is most effective in close-range combat, letting Logan phase through enemy swings, redirect momentum, or reposition with surgical precision.", book: "Book 2"},
          { name: "Anolmic Shift", description: "Logan’s stabilized displacement allows him to teleport across space by unraveling his quantum position and reattaching it elsewhere. However, his jumps are limited to locations he’s physically seen or to places where his Anolmic energy has previously lingered—such as a home, battlefield, or structure marked by an Entropy signature. These residual energy traces act like anchors, letting him snap back to familiar points in space. While the process is seamless and silent, long-distance shifts require focus and drain energy rapidly. Logan can bring up to two additional people with him through the jump, though doing so increases strain on his body and risks momentary disorientation for all parties involved.", book: "Book 2"},
          { name: "Glitch Stride", description: "Logan can execute a rapid sequence of short-range Anolmic displacements, blinking in and out of space across a battlefield in bursts. Each step is near-instantaneous, with his body appearing as a broken trail of afterimages and static distortions. This ability allows him to chain multiple blinks in quick succession—dodging fire, weaving through enemy lines, or flanking opponents unpredictably. While Glitchstride gives him unmatched agility, overuse within a short time window can cause spatial drag, temporarily distorting his position or leaving behind unstable energy echoes that briefly reveal his path.", book: "Book 2"},
        ]
      },
      {
        name: "Anolmic Resilience",
        description: "As a result of his body being fundamentally altered by Anolmic energy, Logan possesses a natural resistance to various forms of interference. His mutated physiology grants him partial or full immunity to specific effects that would normally disable or disorient others.",
        book: "Book 2",
        subAbilities: [
          { name:"Neurological Attacks", description:"Telepathic intrusion, paralysis pulses, and mental shocks have reduced impact or backfire due to the unpredictable distortion in his brainwaves and nervous system.", book:"Book 2"},
          { name:"Energy Overload", description:"Logan is capable of absorbing or disrupting most conventional energy attacks before they reach critical levels, making him highly resistant to concussive blasts, electrical surges, or radiation spikes.", book:"Book 2"},
          { name:"Tracking Resistance", description:"Logan's energy signature is chaotic and constantly shifting, making it difficult for most systems (or people) to consistently track or lock onto his presence once he’s in motion or flickering.", book:"Book 2"},
        ]
      },
      {
        name: "Average Fighter",
        description: "Logan isn’t a trained fighter like his brothers Gavin or Aiden, but he’s no pushover. Taught by his father, Warren Summers, he learned a practical, no-frills approach to fighting—focused on efficiency, defense, and survival. While not flashy, his style is adaptable and direct, allowing him to hold his own against standard threats. In close combat, Logan supplements his technique with disruptive energy bursts and displacements, giving him a chaotic edge even against stronger opponents.",
        book: "Book 2",
        subAbilities: [
          { name: "Entropy Touch", description: "Logan’s physical attacks are subtly infused with Anolmic energy, causing minor destabilization on contact. Even a simple punch or shoulder check carries a corruptive signature that disrupts an opponent’s balance, motor coordination, or spatial awareness. Targets struck by Logan may feel briefly off-kilter—like the ground shifted beneath them or their limbs misfired. Additionally, when Logan is actively leaking energy, just being in his proximity can cause opponents to experience disorientation, delayed reflexes, or static in their vision. It's not a knockout effect—but it gives Logan a constant edge in close-quarters combat.", book: "Book 2"},
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
        name: "Warren Summers",
        role: "Dad",
        status: "Alive",
        link: "/characters/warren",
        image: "/warren.jpg"
      },
      {
        name: "Katherine Summers",
        role: "Mom",
        status: "Alive",
        link: "/characters/katherine",
        image: "/katherine.jpg"
      },
      {
        name: "Gavin Summers",
        role: "Brother",
        status: "Alive",
        link: "/characters/gavin",
        image: "/gavin.jpg"
      },
      {
        name: "Aiden Summers",
        role: "Brother",
        status: "Alive",
        link: "/characters/aiden",
        image: "/aiden.jpg"
      }
    ],
    uniforms: [
      {
        name: "Logan’s War Suit",
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

export default logan;
