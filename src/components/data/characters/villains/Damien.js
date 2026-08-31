const damien = {
  id: "#046",
  name: "Damien Darkwood",
  slug: "damien",
  image: "/damien.jpg",
  class: "Unnatural",
  status: "Active",
  tagline: "",
  primaryPower: "Darkness Control",
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
      { name: "Human Physiology", description: "Human Physiology refers to the natural biological structure of unenhanced humans — a race without innate superpowers but defined by extraordinary adaptability, resilience, and intelligence. Though lacking the raw strength or energy manipulation of Deviants, humans possess remarkable physical and cognitive versatility. With training and discipline, they can achieve peak conditioning, master complex skills, and perform at elite levels across combat, science, and strategy. Their brains are highly adaptive, capable of abstract reasoning, emotional regulation, and creative problem-solving — often enabling them to outthink or outmaneuver more powerful beings. Most importantly, humans compensate for their physical limitations through innovation and tool use, crafting weapons, technologies, and tactics that rival supernatural forces. In a world of powers and gods, it is the human will — sharpened by experience and driven by purpose — that continues to shape history.", book: "Book 1" },
      { name: "Unnatural Physiology", description: "Unnatural Deviants are a rare class of genetically or chemically altered beings whose physiology approaches, mimics, or even surpasses Alpha-level benchmarks under certain conditions. Unlike Alphas—who are born with their gifts—Unnaturals are forged through experimentation, trauma, or invasive modification. While they may lack the innate purity of Alpha Deviants, their results can be just as lethal. Unnaturals exhibit extreme enhancements across strength, speed, durability, and perception, often rivaling or even exceeding Alpha-class thresholds when paired with specialized powers, augmentations, or training. These individuals are living anomalies—hybrids of science and power—unbound by the limitations of natural evolution. Unnatural Deviants are immune to many traditional forms of damage, operate at a combat-ready state indefinitely, and often display unique mutations or capabilities tailored to their purpose. Their potential is not defined by nature, but by necessity—and in the right hands, that makes them more dangerous than anything born.", book: "Book 2" },
      { name: "Darkness Control", description: "Damien wields the power to manipulate and weaponize existing darkness — specifically drawn from shadows, dim environments, or black surfaces. His ability is not light negation but rather an attunement to ambient darkness already present in the world. Whether it's the shadow cast by a streetlamp or the ink-black paint of a wall, Damien can stretch, shape, and command these dark patches like liquid extensions of himself. He can use them for offense, defense, or stealth. In well-lit areas, he becomes more tactical, relying on nearby dark materials or artificially creating shadow by disrupting light. This restriction forces him to be creative, often turning the environment itself into a weapon. His presence becomes most dangerous at night or indoors, where shadows are abundant and movement becomes ghostlike.", book: "Book 2" },
      
      {
        name: "Darkness Constructs",
        description: "Damien can draw in ambient shadows and mold them into solid, functional shapes — often emerging from floors, walls, or his own silhouette. These constructs possess weight, force, and sharpness depending on his will, allowing him to manifest an array of tools and weapons on the fly. The darkness retains a fluid quality when idle, shifting and curling like smoke, but it hardens instantly when Damien commits it to purpose — whether that be offense, restraint, or manipulation. These constructs are extensions of his body and mind, reacting faster than physical limbs and allowing him to fight at multiple angles at once.",
        book: "Book 2",
        subAbilities: [
          { name: "Shadow Hands", description: "One of Damien’s signature forms is a pair of massive, claw-like shadow hands that erupt from surrounding darkness. They can reach out to seize enemies, crush debris, or slam targets into nearby surfaces with brute force. The hands are semi-autonomous, moving in sync with his thoughts, and can even sprout smaller finger-like tendrils for finer manipulation.", book: "Book 2"},
          { name: "Shadow Tendrils", description: "Damien can unfurl long, whip-like tendrils from patches of darkness, launching them toward opponents to bind, fling, or pierce. These tendrils can snake along surfaces, weave together to form nets or walls, or lash with blinding speed in combat. They’re especially useful for crowd control or striking from unexpected angles, giving him a serpentine reach across the battlefield.", book: "Book 2"},
        ]
      },

      { name: "Darkness Shield", description: "Damien can pull shadows toward him and forge them into a dense, matte-black shield capable of absorbing both kinetic impacts and directed energy attacks. The shield resembles a warped, irregular slab of obsidian mist, often shifting slightly even while stationary — as if alive. When raised, it forms a protective wall in front of his body, anchored to the ground or his limbs depending on the angle of the assault. Stronger lighting conditions force Damien to be more strategic, relying on shadows beneath his feet, behind objects, or from other nearby sources to reinforce the shield. It can stop bullets, blasts, or concussive force, but repeated strain will eventually cause the structure to crack and dissolve, requiring reformation.", book: "Book 2" },

      {
        name: "Shadow Domain",
        description: "The Void is an extradimensional shadow plane Damien can access through any sizable shadow or black surface. This realm exists behind the veil of reality, an infinite expanse of malleable darkness where Damien holds complete dominion. To him, shadows act as doorways — gateways into this formless space where distance and time are subjective. While others see darkness as emptiness, Damien sees structure, terrain, and corridors. Entering the Void allows him to vanish from sight, bypass the physical world, and control the rules within his own domain. It is a power of movement, entrapment, preservation, and godlike control — limited only by the shadows around him and the strength of his will.",
        book: "Book 2",
        subAbilities: [
          { name: "Infinite Plane", description: "Within the Void, Damien is no longer bound by the physical laws of Earth. The space bends to his thoughts — expanding, shrinking, or twisting in impossible ways. He can shape it into sprawling corridors, endless drops, or looping mazes. Time slows inside, giving him clarity or tactical pause during moments of crisis. This control isn’t limited to terrain — he can create temporary constructs or psychological traps to disorient intruders, making the Void as much a mental weapon as a physical one.", book: "Book 2"},
          { name: "Shadow Drift", description: "Damien can traverse the physical world by slipping into the Void and emerging from a separate shadow elsewhere — a form of strategic, line-of-sight teleportation. The larger and deeper the shadow, the easier the transition. He vanishes in a whisper of smoke and ink, reappearing from the darkness under a car, within a hallway corner, or behind an enemy’s silhouette. It allows him to close gaps, evade attacks, or ambush with lethal precision, turning any shadowed environment into his battlefield.", book: "Book 2"},
          { name: "Shadow Storage", description: "Damien can store physical items or unconscious individuals within the Void, preserved indefinitely and untouched by external forces. Weapons, gear, or wounded allies can be pulled into shadow and recalled with a gesture. The space acts as an arsenal, vault, and refuge — invisible to any form of tracking. While inside, living beings remain in a form of stasis, unaware of time’s passage unless Damien chooses to allow them consciousness.", book: "Book 2"},
          { name: "Shadow Prison", description: "Damien can forcibly pull enemies into the Void and trap them within personalized prisons of darkness. Once inside, they face warped illusions, claustrophobic confines, or echoing isolation designed to weaken their mind and spirit. These cages shift based on the target’s fears or guilt, turning the Void into a psychological crucible. Escape is nearly impossible without outside interference or immense power. While taxing, this ability allows Damien to neutralize even superior threats through control and terror rather than brute force.", book: "Book 2"},
        ]
      },

      {
        name: "Trained Operative",
        description: "Damien’s time with S.T.A.T.I.C. shaped him into a precision-based, cerebral combatant. His fighting style is quiet, controlled, and brutally efficient — rooted in stealth, observation, and psychological pressure. Where others rush forward, Damien waits in the dark, turning every environment into a weapon and every shadow into an opening.",
        book: "Book 1",
        subAbilities: [
          { name: "Predatory Awareness", description: "Damien excels at reading tension in a room — subtle movements, shifts in light, nervous habits. He doesn’t just fight people — he hunts them. His ability to analyze combat flow in real time makes him dangerous in close quarters, where he can predict attacks, bait opponents into mistakes, and strike with surgical intent. He rarely wastes movement and never fights fair.", book: "Book 2"},
          { name: "S.T.A.T.I.C. Conditioning", description: "Damien’s training focused on infiltration, psychological warfare, and low-visibility engagement. He’s mastered silent takedowns, disarming techniques, and environment-based tactics, making him lethal in dark or chaotic terrain. He’s not built to overpower — he’s built to dismantle. When the mission calls for it, Damien can disappear into his surroundings, leave no trace, and strike like a phantom.", book: "Book 1"},
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
        name: "",
        role: "",
        status: "Deceased",
        link: "/characters/",
        image: "/.jpg"
      },
      {
        name: "",
        role: "",
        status: "Deceased",
        link: "/characters/",
        image: "/.jpg"
      },
      {
        name: "",
        role: "",
        status: "Deceased",
        link: "/characters/",
        image: "/.jpg"
      },
      {
        name: "",
        role: "",
        status: "Deceased",
        link: "/characters/",
        image: "/.jpg"
      },
      {
        name: "",
        role: "",
        status: "Deceased",
        link: "/characters/",
        image: "/.jpg"
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

export default damien;
