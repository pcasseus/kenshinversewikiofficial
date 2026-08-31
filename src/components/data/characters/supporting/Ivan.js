const ivan = {
  id: "#029",
  name: "Ivan Dvořák",
  slug: "ivan",
  image: "/ivan.jpg",
  class: "Human",
  status: "Deceased",
  tagline: "",
  primaryPower: "Hyper-Experimental Intellect",
  stats: {
    affiliation: "S.T.A.T.I.C.",
    gender: "Male",
    height: "6'0\"",
    weight: "175 lbs",
    eyes: "Blue",
    hair: "Brown",
    "place of birth": "Copenhagen, Denmark"
  },
    abilities: [
      { name: "Human Physiology", description: "Human Physiology refers to the natural biological structure of unenhanced humans — a race without innate superpowers but defined by extraordinary adaptability, resilience, and intelligence. Though lacking the raw strength or energy manipulation of Deviants, humans possess remarkable physical and cognitive versatility. With training and discipline, they can achieve peak conditioning, master complex skills, and perform at elite levels across combat, science, and strategy. Their brains are highly adaptive, capable of abstract reasoning, emotional regulation, and creative problem-solving — often enabling them to outthink or outmaneuver more powerful beings. Most importantly, humans compensate for their physical limitations through innovation and tool use, crafting weapons, technologies, and tactics that rival supernatural forces. In a world of powers and gods, it is the human will — sharpened by experience and driven by purpose — that continues to shape history.", book: "Book 1" },
      {
        name: "Hyper-Experimental Intellect",
        description: "Ivan is a human scientist whose brilliance transcends traditional disciplines. His mind operates on a volatile blend of logic, obsession, and unrelenting curiosity. Where others seek ethical boundaries, Ivan sees inefficiencies. Every law of science is a challenge to be rewritten, every alien lifeform a puzzle to be dissected. While his knowledge spans across engineering, biotechnology, theoretical physics, and xenoscience, it’s his experimental mindset that sets him apart. He doesn't work within systems—he breaks them and rebuilds better ones from the wreckage.",
        book: "Book 1",
        subAbilities: [
          { name: "Multidisciplinary Supremacy", description: "Ivan isn’t just well-versed in engineering or biology—he is frighteningly proficient in almost all applied sciences, often innovating in areas before other experts realize breakthroughs are even possible.", book: "Book 1"},
          { name: "No-Safety Science", description: "Ivan rarely tests in controlled environments. His “prototypes” are often field-ready in their first iteration, sometimes dangerously so. Results matter more than precautions.", book: "Book 1"},
        ]
      },
      {
        name: "Volatile Systems Architect",
        description: "Ivan's creations are as brilliant as they are unpredictable—machines that pulse with synthetic life, implants that interface with thought, and devices that evolve alongside their users. He doesn’t build for safety. He builds for potential. His designs are modular, unstable, and frequently borderline sentient. Unlike William’s meticulously engineered systems, Ivan’s tech bends rules—and sometimes reality. Ivan was the mind behind the neural regulator chip embedded in Danny Foster’s brainstem. Originally commissioned by S.T.A.T.I.C. to suppress Danny’s overwhelming cognitive speed and prevent neuroelectric overload, the chip was intended to stabilize synaptic misfires through regulated pulse discharges. But Ivan, suspecting Danny’s brain housed untapped biochemical anomalies, left the chip open to adaptive evolution. His gamble paid off—though not in the way anyone expected. The implant interacted with a rare, naturally occurring neurotransmitter unique to Danny’s neurology. The resulting compound, chlorozene, drastically altered the behavior of Danny’s bioelectric surges, unlocking control mechanisms no one predicted.",
        book: "Book 1",
      },
      {
        name: "Aggressive Power Research",
        description: "Ivan has no powers of his own, but his ability to decode Deviant and alien physiology far outpaces William or Valeria. His field methodology is invasive, fast, and sometimes traumatic to the subject. He believes powers should be mapped, reproduced, and—if needed—weaponized.",
        book: "Book 1",
        subAbilities: [
          { name: "Deviant Strain Catalog", description: "Ivan maintains a private, encrypted database of Deviant power archetypes, mutations, and anomalies. Some of these are the result of his own unauthorized experiments.", book: "Book 1"},
        ]
      },
      {
        name: "Radical Biotechnologist",
        description: "Ivan doesn’t see the body as something to be preserved, he sees it as scaffolding—raw material to be reengineered. He views the human form not as sacred, but as outdated, inefficient, and ripe for enhancement. His work replaces organs with power-reactive composites, hardwires immune systems to resist foreign mutations, and rewrites genetic frameworks to suit the demands of evolution. His surgeries push the limits of survivability—precision-guided but agonizing, transformative but irreversible. Ivan was the one who administered the A.P.E.X. serum to Ajax—an untested, high-risk biochemical formula originally designed by a younger Sammy Montoya. After Ajax was nearly killed in the field, traditional medicine proved useless. The serum, which was theoretical at best, offered one final shot at saving his life. While others hesitated, Ivan took command. He refined the compound mid-operation, restructured its delivery mechanism on the fly, and rewrote the injection protocol to account for Ajax’s Deviant physiology. The result: not only did Ajax survive—he emerged stronger, faster, and more biologically resilient than before.",
        book: "Book 1",
      },
      {
        name: "Mad Strategist",
        description: "Though not a soldier, Ivan is a terrifying tactical mind when given time and data. His field simulations are ruthless, modeling scenarios that assume betrayal, death, or asset loss.",
        book: "Book 1",
        subAbilities: [
            { name: "Antagonistic Redundancy", description: "Every system he designs includes backup protocols—often lethal to unauthorized users. He assumes sabotage is inevitable and plans accordingly.", book: "Book 1"},
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
        role: "Teammate",
        status: "Deceased",
        link: "/characters/ajax",
        image: "/ajax.jpg"
    },
    {
        name: "Teddy Johnson",
        role: "Teammate",
        status: "Deceased",
        link: "/characters/teddy",
        image: "/teddy.jpg"
    },
    {
        name: "Torin Rossi",
        role: "Teammate",
        status: "Deceased",
        link: "/characters/torin",
        image: "/torin.jpg"
    },
    {
        name: "Samuel Youssef",
        role: "Leader",
        status: "Deceased",
        link: "/characters/samuel",
        image: "/samuel.jpg"
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

export default ivan;