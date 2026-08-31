const nolan = {
  id: "#011",
  name: "Nolan Khan",
  slug: "Nolan",
  image: "/nolan.jpg",
  class: "Unnatural",
  status: "Active",
  tagline: "",
  primaryPower: "Hyperkinetic Drive",
  stats: {
    affiliation: "Iztan",
    gender: "Male",
    height: "5'11\"",
    weight: "160 lbs",
    eyes: "Dark Brown",
    hair: "Black",
    "place of birth": "Unknown"
    },
    abilities: [
      { name: "Unnatural Physiology", description: "Unnatural Deviants are a rare class of genetically or chemically altered beings whose physiology approaches, mimics, or even surpasses Alpha-level benchmarks under certain conditions. Unlike Alphas—who are born with their gifts—Unnaturals are forged through experimentation, trauma, or invasive modification. While they may lack the innate purity of Alpha Deviants, their results can be just as lethal. Unnaturals exhibit extreme enhancements across strength, speed, durability, and perception, often rivaling or even exceeding Alpha-class thresholds when paired with specialized powers, augmentations, or training. These individuals are living anomalies—hybrids of science and power—unbound by the limitations of natural evolution. Unnatural Deviants are immune to many traditional forms of damage, operate at a combat-ready state indefinitely, and often display unique mutations or capabilities tailored to their purpose. Their potential is not defined by nature, but by necessity—and in the right hands, that makes them more dangerous than anything born.", book: "Book 1" },
      { name: "Hyperkinetic Drive", description: "Nolan's body has undergone a radical biomechanical evolution, granting him what is best described as a Hyperkinetic Drive System—a fusion of organic tissue and high-efficiency energy dynamics that mirrors the performance architecture of a top-tier racecar or a jet fighter. Instead of simply running fast, Nolan builds, channels, and releases velocity in carefully tuned bursts, with his muscle fibers acting like adaptive pistons and his joints reinforced to rotate and flex with the torque of a precision machine. His circulatory and respiratory systems are overclocked like a performance engine, using a dual-breathing rhythm and specialized arterial valves to rapidly shuttle oxygen and heat. Unlike traditional speedsters, his body doesn’t just move quickly—it performs like a kinetic weapon, designed for acceleration, cornering, braking, and sustained high-velocity output. Every movement is calculated through a visceral “driver’s instinct,” not a sped-up brain, and his entire body is calibrated to balance traction, thrust, and temperature like a finely tuned machine. He's not just fast—he's engineered for speed.", book: "Book 1" },
      { name: "Endurance Drive Regulation", description: "Nolan’s body is built for sustained high-output performance, much like a racecar designed for long-distance endurance tracks or a fighter jet built for extended missions. His hyper-adaptive muscle fibers, dual-vented lungs, and shock-absorbing skeletal structure are optimized to reduce internal strain during repeated high-speed bursts or prolonged motion. This allows him to operate at peak velocity for extended durations before fatigue even begins to set in. Additionally, his body cycles nutrients and oxygen at an accelerated but efficient rate, burning fuel slower than expected for someone moving at such extremes. As a result, Nolan takes considerably longer to tire out, even after using demanding techniques.", book: "Book 1" },
      {
        name: "Velocity-Hardened Frame",
        description: "Nolan’s body is internally engineered to withstand the full consequences of his own velocity. His skin, muscles, tendons, and bones have undergone a hyper-compression layering process unique to his physiology—behaving more like shock-dampening alloys than standard organic tissue. As a result, he suffers zero friction burns, no wind shear damage, no G-force trauma, and no structural fatigue, no matter how fast or violently he moves. His eyes can track through wind blur without tearing, his joints remain stabilized through precision torque absorption, and his organs are cushioned by a secondary lining of dense, kinetic-buffer tissue that protects against internal displacement. This allows him to move at supersonic—and potentially hypersonic—speeds without needing armor or experiencing degradation, essentially making his body its own reinforced frame.",
        book: "Book 1",
        subAbilities: [
          { name: "Kinetic Buffer Field", description: "When Nolan grabs someone and begins running, his body instinctively extends a protective kinetic buffer around them—generated from the turbulent airflow and inertial redirection his physiology constantly manages. This micro-barrier shields the passenger from friction burns, bone-crushing G-forces, and velocity-induced whiplash, allowing him to carry others at full speed without injuring them. The field stabilizes their bodies relative to his movement, giving them a near-weightless sensation while in transit. However, the protection only works while they’re in direct physical contact with Nolan—once released, the shield dissipates instantly.", book: "Book 1"},
        ]
      },
      { name: "Traction Locking", description: "Nolan can manipulate the friction between his body and the surface he's moving on, granting him pinpoint control at extreme speeds. By activating his “traction lock,” Nolan anchors his feet or limbs to the ground momentarily, allowing for sharp pivots, dead stops, and instantaneous redirection—without losing momentum. This ability functions like dynamic grip control, mimicking the tire traction systems in high-performance vehicles. It allows him to run vertically up walls, race across water by micro-locking with surface tension, and even “drift” around corners at full speed by temporarily adjusting friction vectors in his limbs. The system also stabilizes him during explosive takeoffs or impacts, ensuring he never skids or overshoots a target unless he intends to.", book: "Book 1" },
      { name: "Oversteer Recovery", description: "Nolan can instinctively correct for overcompensation or destabilization during high-speed movement, allowing him to maintain perfect trajectory even when cornering too sharply, slipping, or mid-air twisting. When his momentum threatens to spin him out or pull him into a crash trajectory, his body reflexively redistributes kinetic energy across his limbs—like a high-end stability control system. This lets him “snap-correct” and realign his center of gravity on the fly, enabling impossible turns, near-immediate redirection, or regaining control after being launched, tripped, or mid-collision. It’s not just balance—it’s momentum mastery, preventing wipeouts at Mach speeds by automatically tuning the torque and lean of his body in response to external forces.", book: "Book 1" },
      { name: "Kinetic Collision Release", description: "Nolan can channel and weaponize the accumulated momentum of his high-speed movement into a devastating burst of force at the moment of impact. Instead of simply crashing into an object or opponent, his body temporarily stores the kinetic energy generated from his sprint—like a coiled spring under pressure. Upon contact, he releases that built-up energy in a focused, explosive discharge, amplifying the impact far beyond what his physical strength alone could produce. This release manifests as a shockwave or blast radius centered on the collision point, capable of shattering barriers, launching enemies, or cratering terrain. It’s not a passive hit—it’s a deliberate detonation, a controlled wrecking maneuver where he is the projectile and the bomb combined.", book: "Book 1" },
      { 
        name: "Kinetic Pulse Strike", 
        description: "Nolan can channel the compressed air and stored kinetic energy generated by his hyper-accelerated movements into specific limbs or body zones, releasing it in short, explosive bursts. These shockwave pulses strike with blunt concussive force, enough to knock back enemies, destabilize structures, or rupture defenses—without needing full contact. The force is concentrated just ahead of his strike, creating the sensation of being hit before impact lands. Each pulse is mechanically triggered through rapid-torque release and redirection, and doesn’t require a full-speed sprint to charge—just precise movement and body control.", 
        book: "Book 1",
        subAbilities: [
            { name: "Kinetic Pulse Fist", description: "Nolan concentrates kinetic pressure into his arm, then throws a punch that detonates mid-thrust—creating a short-range shockwave that sends enemies flying or crumples lightweight barriers. Excellent for close-range clashes or crowd clearing.", book: "Book 1"},
            { name: "Kinetic Pulse Kick", description: "By rapidly twisting his lower half and stomping or kicking with torque-loaded speed, Nolan unleashes a burst of force from his leg—useful for disrupting ground-based enemies, launching foes upward, or shattering reinforced walls.", book: "Book 1"},
            { name: "Body Slam Burst", description: "Nolan throws his full weight into a shoulder check, slide, or diving maneuver, releasing a shockwave from his chest or back upon contact. Ideal for mid-run takedowns, breaking through barricades, or overwhelming shielded enemies.", book: "Book 1"},
        ]
    },
    { name: "Exhaust Venting", description: "After pushing his Hyperkinetic Drive to high speeds or performing a kinetic burst, Nolan's body releases the extreme internal heat generated by his accelerated metabolic and frictional output. This excess energy vents outward from his skin in the form of shimmering waves, smoke trails, or even flashes of glowing heat radiating off his body. In this state, direct contact with Nolan becomes dangerous—his body temperature can spike to scorching levels, enough to sear flesh, melt through thin materials, or warp metal. This venting phase typically activates when he slows down or comes to a stop after extreme bursts, like a cooling-off protocol. If restrained, the heat builds up rapidly, forcing him to release it or risk internal damage, making this ability both a passive hazard and a strategic purge of excess energy.", book: "Book 1" },
    { 
        name: "Cyclonic Arm Drive", 
        description: "Nolan can rotate his arms at hypersonic velocities, generating powerful localized wind currents through sheer mechanical motion. Acting like twin jet turbines or rotor blades, his arms whip through the air fast enough to disturb atmospheric pressure, creating destructive whirlwinds or defensive barriers. This technique allows Nolan to manipulate airflow with precision and force, using it for offense, defense, and mobility enhancements. The maneuver demands intense energy and requires bracing his stance through Traction Locking, or the recoil could throw him off balance.", 
        book: "Book 1",
        subAbilities: [
            { name: "Cyclone Shield", description: "By spinning both arms in opposite directions in front of him, Nolan creates a temporary shield of rotating air that deflects incoming projectiles, dulls blunt-force attacks, and obscures vision. While not indestructible, it's effective for brief cover or crowd control.", book: "Book 1"},
            { name: "Wind Blasts", description: "Nolan can punch or swing while spinning his arm to release bursts of compressed air. These blasts are strong enough to knock back enemies, destabilize flying targets, or interrupt incoming attacks with sudden force.", book: "Book 1"},
            { name: "Wind Updraft", description: "By sweeping his arms upward in tight, high-speed rotations, Nolan can generate a focused updraft beneath him or others. This can lift lightweight teammates, carry him into a jump-assisted glide, or redirect falling debris.", book: "Book 1"},
            { name: "Reverse Suction", description: "Reversing the spin and positioning his arms outward, Nolan generates an inward vacuum effect—pulling objects, enemies, or even gases toward him. This is useful for disarming foes, drawing in airborne threats, or collapsing unstable structures inward.", book: "Book 1"},
        ]
    },
    { name: "Tornado Drive", description: "Nolan can channel his Hyperkinetic Drive into a full-body rotational state, spinning at such incredible speed that he transforms into a living tornado. Bracing with a low center of gravity and locking into a tightly controlled axis using his advanced equilibrium, Nolan becomes a spiraling cyclone of raw force and wind. This move generates violent air currents, tears through terrain, repels projectiles, and sends enemies flying. Anything caught too close risks blunt-force trauma, slashing wind pressure, or being launched into the air. The tornado's core is a vortex of spiraling kinetic energy, allowing Nolan to travel while spinning—plowing through crowds, demolishing obstacles, or clearing entire battlefields.", book: "Book 1" },
            
      { 
        name: "Velocity Combatant", 
        description: "Nolan utilizes a specialized close-quarters combat style that fuses his Hyperkinetic Drive with high-speed movement and reflex-based precision. Rather than brute strength, this style focuses on using acceleration, redirection, and rapid-body positioning to dominate in battle. Every attack or movement is calculated for momentum control—striking from impossible angles, dodging with zero warning, and retreating before a counterattack can form. It’s not just fast—it’s tactically fast, like fighting a blur that’s always two steps ahead.", 
        book: "Book 1",
        subAbilities: [
            { name: "Speed Dodging", description: "Nolan can shift or dash out of the way of incoming attacks with microsecond precision. Whether slipping past a punch, sidestepping bullets, or vanishing during a clash, his evasions appear as instant blinks or streaks of motion blur. This isn’t teleportation—it’s pure, reactive movement, executed so fast it feels unreal to observers.", book: "Book 1"},
            { name: "Speed Punching", description: "By delivering a rapid series of high-speed jabs, hooks, or uppercuts, Nolan can unleash a flurry of blows that feel like being hit by a hailstorm of sledgehammers. Each punch doesn’t rely on strength but on the compounded impact of velocity, torque, and repetition. He can alternate targets mid-combo or strike multiple points of a single target in less than a second, creating shock damage zones and pressure fractures.", book: "Book 1"},
            { name: "Acceleration Repositioning", description: "Ambidextrous and tactically aware, Shi strikes from multiple vectors at once. Whether it’s gun-and-blade, pistol-pistol, or twin knives, he breaks enemy formations with mirrored lethality.", book: "Book 1"},
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

export default nolan;
