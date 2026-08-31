const anthony = {
  id: "#038",
  name: "Anthony Delgado",
  slug: "anthony",
  image: "/anthony.jpg",
  class: "Beta",
  status: "Alive",
  tagline: "",
  primaryPower: "Jack of All Trades",
  stats: {
    affiliation: "Unaffiliated",
    gender: "Male",
    height: "6'1\"",
    weight: "140 lbs",
    eyes: "Dark Brown",
    hair: "Brown",
    "place of birth": "Harrisburg, Pennsylvania"
  },
    abilities: [
      { name: "Beta Deviant Physiology", description: "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later—usually between ages 15 and 16—and include a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.", book: "Book 2" },
      { name: "Jack of All Trades", description: "Anthony is a genetic anomaly among Deviants — a singular outlier whose biology enables him to manifest a broad and ever-growing range of abilities. Unlike most Deviants, who are confined to one or two powers, Anthony possesses a rare adaptive gene cluster that allows for the spontaneous acquisition, integration, and instinctive mastery of multiple abilities over time. His powers don’t simply coexist; they interact fluidly, enhancing one another in ways that make him versatile and dangerously unpredictable. Every subsequent ability, while still formidable, manifests at a slightly diminished intensity, preventing him from reaching full Alpha Class classification. Yet even with this ceiling, his multi-layered adaptability, strategic improvisation, and seamless power synergies place him in a league of his own — a true Jack of All Trades in both name and nature.", book: "Book 2"},
      
      {
        name: "Portal Creation",
        description: "Anthony’s signature and strongest ability is the power to generate circular, interspatial portals marked by a distinct, shimmering blue hue unique to his genetic signature. His portal system operates through two primary modes. The first is Deviant-Lock, a combat-optimized targeting system that allows him to instantly open a portal to the location of any Deviant he has previously encountered or tracked. As long as the target remains on Earth and isn’t cloaked or dimensionally shielded, he can lock onto their bio-signature with pinpoint accuracy — no matter the distance. The second mode, Geospatial Recall, relies on Anthony’s mental map of Earth’s terrain. This mode is more flexible, allowing him to open portals to non-living locations, but also far more complex. While short-distance jumps (within several miles) are nearly effortless, long-range portals require intense focus, clear spatial memory, and precise environmental familiarity. Though this ability is bound by Earth’s spatial limits, it remains Anthony’s most refined and deadly tool, forming the core of his identity as a high-tier Deviant who turns space itself into a weapon.",
        book: "Book 2",
        subAbilities: [
          { name: "Redirective Portal Absorption", description: "Anthony can intercept incoming projectiles or energy attacks by opening a portal in their path and instantly redirecting the attack through a second portal. This doesn’t nullify the force — it repositions it. He can curve a laser blast into a different angle mid-air, redirect a grenade behind its thrower, or even return an enemy’s attack directly back at them with perfect timing. Mastery of angles and timing makes this a deadly defensive-offensive technique.", book: "Book 2"},
          { name: "Portal Thrust", description: "Anthony can generate a portal in front of him and physically shove it forward through space, propelling the opening toward a target or destination like a moving gateway.", book: "Book 2"},
          { name: "Portal Punch", description: "Anthony opens a small portal in front of his fist mid-punch, causing it to exit from another angle entirely — around, behind, or even above the opponent. It adds an element of spatial misdirection, making his strikes unpredictable and extremely hard to block or counter. Variations include elbow strikes, kicks, and feints into real blows from behind.", book: "Book 2"},
          { name: "Multi-Directional Assault", description: "By rapidly opening and closing portals in a confined area, Anthony can launch a flurry of attacks from multiple angles at once. This overwhelms opponents with strikes they can't track, much less block. It’s particularly effective against single-target threats in small spaces or as a means of disorienting a stronger opponent.", book: "Book 2"},
          { name: "Phase Drop", description: "Anthony opens a portal beneath a falling object — or an enemy mid-air — causing them to vanish into a portal and reappear just above the ground (or an obstacle). This move can negate fall damage for allies or slam opponents into the floor from unexpected heights.", book: "Book 2"},
          { name: "Anchor Rift", description: "Anthony can “lock” a portal in place for a few seconds, allowing allies to use it independently without him actively maintaining it. However, the longer it stays open, the more unstable it becomes — and anchoring long-distance portals drains energy significantly.", book: "Book 2"},
          { name: "Dimensional Strain", description: "In moments of extreme pressure, Anthony can push his portal ability far beyond its safe operating threshold — opening multiple portals at once across different locations. This allows him to extract teammates from multiple danger zones, intercept threats from various fronts, or create large-scale tactical shifts in the middle of chaos. However, the mental and physical toll is immense. Holding multiple rifts open simultaneously destabilizes his spatial awareness, causes severe disorientation, and risks spatial misalignment or collapse. Anthony reserves this move for critical emergencies — when failure means total loss — and uses it with the full knowledge that it could incapacitate him.", book: "Book 2"},
        ]
      },

      {
        name: "Portal Energy Projection",
        description: "Anthony can harness the raw, unstable energy used to create his portals and redirect it as a concussive energy blast. This energy — a warped form of spatial distortion charged with dimensional friction — isn’t meant to exist outside a controlled portal frame. When weaponized, it surges from his fists and knuckles in chaotic, spiraling bursts of blue-white force that tear through solid material and destabilize surrounding energy fields. Each blast carries the impact of compressed space violently unraveling — like a localized implosion detonating at the point of contact. The technique is devastating, but volatile.",
        book: "Book 2",
        subAbilities: [
          { name: "Portal Blast", description: "A concentrated, single-shot eruption of portal energy discharged directly from Anthony’s knuckles. It functions like a short-range, spatial cannon — detonating on impact with a concussive implosion that folds space inward for a split second. The resulting shockwave fractures surfaces, knocks back heavily armored targets, and can destabilize force fields by disrupting their geometric anchors. Precision is key, but the power output makes it one of his deadliest direct attacks.", book: "Book 2"},
          { name: "Portal Blast Stream", description: "Instead of releasing a single blast, Anthony channels portal energy continuously in a streaming arc from his fists. This torrent of spiraling, volatile blue-white energy behaves like a spatial cutting torch, shearing through walls, vehicles, or barriers with prolonged contact. While less explosive than Portal Blast, the stream can sweep across a battlefield, forcing enemies to take cover or suffer disintegration-level damage. The longer he maintains it, the harder it becomes to control, often warping the air around him and straining his body.", book: "Book 2"},
          { name: "Dimensional Purity", description: "Portal energy is a fundamentally unstable construct — a blend of compressed space-time and dimensional shear that resists standard absorption mechanisms. Most energy manipulators, absorbers, or redirectors find it impossible to metabolize or contain, as the energy doesn’t exist on the traditional electromagnetic or elemental spectrum. Attempting to absorb it causes violent internal feedback. The only known exception is Zoey Pierce-Harris, whose universal energy generation ability allows her to safely interface with Anthony’s portal blasts and transmute them into stabilized output.", book: "Book 2"},
        ]
      },

      { name: "Electrokinesis", description: "Anthony possesses the ability to generate and manipulate electricity, projecting powerful bolts from his hands and channeling electrical currents through his body with precision. However, due to a unique energetic overlap with his portal abilities, the natural color and visual behavior of his electricity have been altered. Rather than the typical yellow or white lightning seen in most energy users, Anthony’s electricity crackles in hues of blue-white laced with spiraling distortion effects, resembling the visual shimmer of his portals. While this visual mutation does not impact the actual functionality or raw power of his electrokinesis, it serves as a reminder of how interconnected his abilities have become. Fortunately, Anthony retains strong control and focus over this power, often using it to disrupt electronics, or electrify his strikes. His ability to concentrate and contain the energy tightly ensures that, despite its unstable visual signature, his lightning remains a reliable asset in his arsenal.", book: "Book 2" },
      { name: "Electrical Immunity", description: "Due to his electrokinesis and the energetic overlap with his portal physiology, Anthony’s nervous system is completely insulated from electrical interference. He can absorb high-voltage shocks without disruption, walk through power fields, and engage opponents who wield electricity-based powers without flinching. While he doesn’t absorb electricity like some Deviants, it simply passes through him harmlessly, grounding out without effect. This also protects him from EMPs, tasers, or tech-based paralysis devices.", book: "Book 2" },

      {
        name: "Super Speed",
        description: "Anthony possesses the ability to move at superhuman speeds, granting him enhanced mobility, rapid dodging, and the capacity to execute quick strikes in combat. While not on the same level as elite speedsters like Axel Pierce, Danny Foster, or Nolan Khan, Anthony is still blazingly fast by most standards — more than enough to outmaneuver traditional threats and close gaps in a blink. Due to residual energy crossover from his portal abilities, Anthony’s speed trail doesn’t resemble the typical blurred motion or lightning streaks of other speedsters. Instead, his movements leave behind a faint ripple of warped blue shimmer, like a collapsing afterimage made of residual dimensional energy. This gives his motion a unique, spatially disorienting visual — as if space is briefly folding where he runs. Despite these unusual effects, Anthony maintains perfect control over his speed. His balance, precision, and timing are exceptional, allowing him to use short bursts of acceleration for dodging, repositioning, or enhancing physical attacks. His speed is less about breaking the sound barrier and more about tactical mobility — fast enough to confuse enemies, outpace standard Deviants.",
        book: "Book 2",
        subAbilities: [
          { name: "Chain Speed Strikes", description: "Anthony can combine short bursts of speed with his portal creation to unleash a series of rapid, interconnected attacks from multiple angles. He accelerates into a portal, exits at blinding speed, strikes, and immediately vanishes into the next — chaining together a barrage of hits that seem to come from nowhere. While not as fast as natural speedsters, the teleportation makes his attacks almost impossible to track without advanced sensory perception. It’s not true teleportation-speed fusion — it’s more like spatial blitz warfare.", book: "Book 2"},
          { name: "Speed Mirage", description: "Unlike Danny Foster, whose mirages can carry kinetic force, Anthony’s mirages are pure visual afterimages created by the distortion trails of his dimensional energy and high-speed movement. These shimmering silhouettes linger for a split second after each burst, disorienting enemies and masking his true position. While harmless on their own, these mirages can make it extremely difficult for opponents to read his movement patterns — especially in chaotic environments. When used during portal combat, they create the illusion that he’s everywhere at once, overwhelming less experienced foes.", book: "Book 2"},
        ]
      },
      
      {
        name: "Pyrokinesis",
        description: "Anthony possesses the ability to generate and manipulate fire, but unlike his portal-based powers, this one remains unusually unstable — volatile in its behavior and difficult to control with precision. The flames he conjures burn hotter and wilder than standard pyrokinesis, reacting to his emotions and surrounding energy levels rather than obeying clean commands. As a result, he rarely uses fire as a standalone weapon. Instead, he integrates it tactically with his other powers, using fire to augment his strikes or enhance the chaos of his battlefield movements.",
        book: "Book 2",
        subAbilities: [
          { name: "Portal Flame Blast", description: "By unleashing fire into the mouth of an exit portal, Anthony ensures that a blast of flame erupts at point-blank range the moment a target appears or steps through. Unlike traditional fire attacks, this guarantees precision delivery, making it nearly impossible to dodge. It’s typically used to punish portal chasers, trap enemies, or follow up a redirected strike with a searing surprise.", book: "Book 2"},
          { name: "Portal Flame Punch", description: "Anthony ignites his fist just before launching it through a portal, creating a flaming strike that emerges unexpectedly at his target. The sudden appearance, combined with the burst of fire, ensures that even if the punch doesn't fully connect, the blast of heat and flame still scorches the target. It’s a favorite opener in close-quarters combat when he wants to disorient and injure simultaneously.", book: "Book 2"},
          { name: "Fire Flash Wave", description: "Anthony generates a blazing, forward-projected surge of fire by swiping both arms in front of him at superhuman speed while releasing flame simultaneously. The rapid movement forces a horizontal wave of unstable fire to erupt outward in a powerful arc, sweeping across everything directly ahead of him. It functions like a fast-moving fire wall — capable of incinerating low-level threats, scorching heavier targets, and blasting back anything caught in its immediate path. While it's not a precision move, its raw force and suddenness make it perfect for offensive pushes, crowd clearing, or burning through obstacles in a straight line.", book: "Book 2"},
          { name: "Fire Tornado", description: "By rapidly spinning in place while simultaneously unleashing fire from both hands, Anthony creates a vortex of spiraling flames around his body. The result is a fiery cyclone that incinerates incoming projectiles and scorches anyone caught nearby. It’s difficult for him to control direction while performing this move, but when cornered or surrounded, it becomes a devastating area-clearing technique.", book: "Book 2"},
        ]
      },

      { name: "Fire Immunity", description: "Anthony is completely immune to the effects of heat and flame, including both external fire sources and the unstable flames produced by his own pyrokinesis. His skin, nerves, and internal systems are biologically resistant to combustion and thermal damage. He can walk through burning buildings, withstand direct hits from flamethrowers, and fight while engulfed in fire without any harm. This immunity is a passive, automatic defense — not something he has to activate — and is likely the only reason he can safely utilize his volatile flame techniques without burning himself alive.", book: "Book 2" },

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
        status: "Alive",
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
        name: "Robert Garcia",
        role: "Cousin",
        status: "Alive",
        link: "/characters/robert",
        image: "/robert.jpg"
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
        name: "",
        description: ""
      }
    ]
  };

export default anthony;
