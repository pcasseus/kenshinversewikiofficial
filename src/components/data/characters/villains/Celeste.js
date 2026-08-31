const celeste = {
  id: "#014",
  name: "Celeste Masters",
  slug: "celeste",
  image: "/celeste.jpg",
  class: "Unnatural",
  status: "Active",
  tagline: "",
  primaryPower: "Entropikinesis",
  stats: {
    affiliation: "Iztan",
    gender: "Female",
    height: "5'4\"",
    weight: "117 lbs",
    eyes: "Dark Brown",
    hair: "Dark Brown",
    "place of birth": "Calgary, Canada"
    },
    abilities: [
      { name: "Unnatural Physiology", description: "Unnatural Deviants are a rare class of genetically or chemically altered beings whose physiology approaches, mimics, or even surpasses Alpha-level benchmarks under certain conditions. Unlike Alphas—who are born with their gifts—Unnaturals are forged through experimentation, trauma, or invasive modification. While they may lack the innate purity of Alpha Deviants, their results can be just as lethal. Unnaturals exhibit extreme enhancements across strength, speed, durability, and perception, often rivaling or even exceeding Alpha-class thresholds when paired with specialized powers, augmentations, or training. These individuals are living anomalies—hybrids of science and power—unbound by the limitations of natural evolution. Unnatural Deviants are immune to many traditional forms of damage, operate at a combat-ready state indefinitely, and often display unique mutations or capabilities tailored to their purpose. Their potential is not defined by nature, but by necessity—and in the right hands, that makes them more dangerous than anything born.", book: "Book 1" },
      { name: "Entropikinesis", description: "Celeste wields Entropikinesis—the power to absorb, store, and repurpose Deviant energy from living beings. Her body functions as a siphon and conduit, allowing her to extract Deviant energy through touch or proximity and rechannel it with deadly precision. She doesn’t generate energy on her own; instead, she steals it—ripping it from the systems of others and bending it to her will. Once absorbed, this energy can be reshaped into attacks, shields, or enhancements to her own physical abilities. The more she drains, the stronger and more versatile she becomes, effectively turning her enemies’ power into her weapon. Her presence is a threat to any Deviant—because every action they take only fuels her next strike", book: "Book 1" },
      { name: "Entropikinetic Absorption", description: "Celeste can absorb Deviant energy from any living source without limit. This isn’t a temporary suppression or a shared siphon—her absorption is total and predatory. Once she establishes a connection, she can continue draining until the target is fully depleted, rendered powerless, unconscious, or even dead. The process becomes increasingly difficult to interrupt as it progresses, locking her into a direct energy transfer that grows more intense with each passing second. The more energy she steals, the more empowered she becomes—enhancing her speed, durability, and the potency of her redirected attacks. To Deviants, her touch is more than dangerous—it’s fatal.", book: "Book 1" },
      { name: "Entropikinetic Combat", description: "Celeste seamlessly integrates her energy absorption into every strike, block, and movement. Through physical contact—whether from a punch, parry, or grapple—she instinctively draws Deviant energy from her opponent with each exchange. This absorption happens in real time, allowing her to weaken her enemies while simultaneously empowering herself mid-fight. The longer the battle drags on, the more the balance tips in her favor. Every hit she lands doesn’t just cause damage—it drains vitality, disrupts power flow, and feeds her next move. Against Deviants, fighting her isn't just dangerous—it’s self-destructive.", book: "Book 1" },
      {
        name: "Entropikinesis Projection",
        description: "Once Celeste has absorbed Deviant energy, she can unleash it in powerful offensive bursts tailored to the situation. Her projections don’t mimic the energy she absorbs—they convert it into raw, destabilized force under her command, refined into either concussive or continuous forms. These projections are volatile, disruptive, and uniquely difficult to block, as they carry residual traces of the stolen Deviant’s energy signature, making them destabilizing even to shielded opponents.",
        book: "Book 1",
        subAbilities: [
          { name: "Entropikinetic Blast", description: "A short-range, high-impact burst of compressed energy discharged from her palms or body. The blast detonates on impact, delivering a concussive shockwave strong enough to launch targets, rupture terrain, or fracture energy constructs. It’s ideal for crowd control, close-range knockback, or breaking defensive formations.", book: "Book 1"},
          { name: "Entropikinetic Stream", description: "A sustained, concentrated stream of reclaimed Deviant energy. This beam is precision-focused and capable of drilling through obstacles, disarming enemies, or overwhelming energy-based defenses. The longer she maintains the beam, the more energy it consumes—but also the more destructive it becomes.", book: "Book 1"},
        ]
      },
      {
        name: "Entropikinetic Shield",
        description: "Celeste can reshape stolen Deviant energy into protective forms, forming shields and barriers that function as both defense and deterrent. These constructs are highly reactive and attuned to the type of energy absorbed—adapting to resist, deflect, or neutralize incoming attacks. Unlike typical force fields, her shields are disruptive by nature; striking them can cause feedback shocks or drain energy from the attacker depending on how much power she’s currently holding.",
        book: "Book 1",
        subAbilities: [
          { name: "Entropikinetic Barrier", description: "Shi’s body temperature, heartbeat, and sound signature are suppressed to near-undetectable levels. He bypasses biometric sensors, infrared scans, and motion detectors with the ease of breathing.", book: "Book 1"},
        ]
      },
      { name: "Entropikinetic Constructs", description: "Celeste can shape absorbed Deviant energy into solid, purple-colored constructs—temporary but durable manifestations of her will. These constructs are not permanent objects but energized structures stabilized through sheer force of control. Each construct retains a subtle hum and glow, radiating the volatile charge of the energy she stole to form them.", book: "Book 1" },
      { name: "Deviant Energy Sensing", description: "Celeste possesses the innate ability to detect and perceive Deviant energy signatures within a certain radius. Every Deviant emits a unique energetic frequency—like a fingerprint—and Celeste can sense these signatures with remarkable precision. The closer a Deviant is, the clearer and more defined their presence becomes, allowing her to locate individuals even through walls or terrain. This sensory awareness enables her to detect hidden enemies, anticipate ambushes, and monitor fluctuations in an opponent’s power level, such as sudden energy spikes or weakening reserves. With training, she’s learned to distinguish between familiar and unfamiliar signatures, allowing her to prioritize threats mid-battle or track specific targets across complex environments. In close quarters, her awareness becomes almost reflexive, making her exceedingly difficult to surprise.", book: "Book 1" },
      { name: "Entropikinetic Blink", description: "Celeste has the ability to instantaneously teleport short distances by collapsing and reconstituting herself through stolen Deviant energy. This technique, known as Entropikinetic Blink, doesn’t rely on traditional space-warping—it’s more like a rapid destabilization and reassembly of her molecular structure, fueled entirely by the energy she’s absorbed. Each teleport leaves behind a faint burst of violet static and a brief echo of her energy signature, making her movements difficult to trace but not entirely undetectable. The distance she can blink is determined by her current energy reserves: minimal jumps when low, rapid multi-blinks when charged. In combat, she uses this to evade attacks, reposition instantly, or close the gap on vulnerable targets mid-draw. Unlike standard teleportation, her version is aggressive and fluid—built for hunting, flanking, and striking with devastating precision.", book: "Book 1" },
      { 
        name: "Neural Dominion", 
        description: "Beyond her control over energy, Celeste possesses Neural Dominion—the ability to psychically access, influence, and manipulate the minds of others, whether human or Deviant. Her telepathy is invasive and precise, allowing her to pierce through mental defenses and read surface thoughts, emotional states, or deeply buried memories with unsettling clarity. Unlike empathic telepaths who passively observe, Celeste enters the mind like a surgeon or a scalpel—cutting, peeling, and reshaping as she sees fit. Proximity enhances her accuracy, but even at range, a concentrated effort allows her to establish a link if her target’s mind is exposed or unfocused. Once inside, she can do far more than observe.", 
        book: "Book 1",
        subAbilities: [
            { name: "Mind Control", description: "Celeste can seize control of another person’s will, bending their actions to her command for a limited time. While full domination requires focus and effort, momentary control—forcing someone to shoot, freeze, or turn—is swift and efficient.", book: "Book 1"},
            { name: "Memory Restoration", description: "She can restore repressed, damaged, or forgotten memories with surgical precision, unearthing buried trauma or long-lost truths in vivid detail.", book: "Book 1"},
            { name: "Memory Overwrite", description: "Celeste can replace a subject’s memories with false ones, altering their sense of history, identity, or allegiance. The implanted memory feels authentic and is nearly impossible to distinguish from the truth without external proof.", book: "Book 1"},
            { name: "False Memory Implantation", description: "Beyond overwriting, she can implant entirely fabricated events—creating believable dreams, encounters, or life experiences that never occurred. These can be used to manipulate emotions, beliefs, or behaviors long-term.", book: "Book 1"},
        ]
    },
      { name: "Hyper Intellect", description: "Before leading Iztan, Celeste was one of the most brilliant scientific minds of her generation—her intellect honed through years of cutting-edge research in advanced biology, energy manipulation, neural engineering, and Deviant physiology. Her mind operates on multiple levels simultaneously, processing data, predicting behavior, and solving complex problems faster than most supercomputers. This intelligence isn’t just academic—it’s weaponized.Celeste has personally engineered most of Iztan’s advanced technology and infrastructure. Her greatest achievement lies in her perfection of a procedure that allows ordinary humans to survive and wield powers on par with high-tier Deviants. This breakthrough—based on a synthesis of harvested Deviant DNA, neuroadaptive interfaces, and Entropikinetic conditioning—represents a monumental leap in post-human warfare. She is not just a tactician; she is the architect of Iztan’s power base.", book: "Book 1" },      
      { 
        name: "Master Hand-to-Hand Combatant", 
        description: "Driven by a deep vendetta against Deviants, Celeste has refined her close-quarters combat abilities to a lethal art. Her mastery is not born from raw power alone, but from relentless training, tactical precision, and an unbreakable will. She is capable of dismantling multiple opponents—even highly trained S.T.A.T.I.C. operatives—with ruthless efficiency. Every strike she delivers is calculated, every movement honed to exploit weakness. Her combat style blends multiple martial disciplines with her energy manipulation, making her a brutally effective force in melee confrontations.", 
        book: "Book 1",
        subAbilities: [
            { name: "Adaptive Combat Strategy", description: "Celeste possesses the rare ability to analyze her opponent’s fighting style in real time, identify flaws in their technique, and adjust her tactics accordingly. Whether she’s facing a brute-force brawler or an evasive speedster, she instinctively shifts her approach—balancing aggression, defense, and psychological manipulation. Her combat adaptability makes her not just a skilled fighter, but a tactician in motion—always five moves ahead.", book: "Book 1"},
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
        name: "Ajax Johnson",
        role: "Team Leader",
        status: "Deceased",
        link: "/characters/ajax",
        image: "/ajax.jpg"
      },
      {
        name: "Zoey Pierce-Harris",
        role: "Bestfriend",
        status: "Alive",
        link: "/characters/zoey",
        image: "/zoey.jpg"
      },
      {
        name: "Nathaniel Foster",
        role: "Father",
        status: "Alive",
        link: "/characters/nathaniel",
        image: "/nathaniel.jpg"
      },
      {
        name: "Emily Foster",
        role: "Mother",
        status: "Alive",
        link: "/characters/emily",
        image: "/emily.jpg"
      },
      {
        name: "Wesley Johnson",
        role: "Friend",
        status: "Alive",
        link: "/characters/Wesley",
        image: "/wesley.jpg"
      }
    ],
    uniforms: [
      {
        name: "Danny’s War Suit",
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

export default celeste;
