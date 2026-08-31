const mathew = {
  id: "#040",
  name: "Mathew Salazar",
  slug: "mathew",
  image: "/mathew.jpg",
  class: "Omega",
  status: "Alive",
  tagline: "",
  primaryPower: "Enhanced Muscular Density",
  stats: {
    affiliation: "Unaffiliated",
    gender: "Male",
    height: "6'0\"",
    weight: "170 lbs",
    eyes: "Brown",
    hair: "Black",
    "place of birth": "Queens, New York"
  },
  abilities: [
    { name: "Omega Deviant Physiology", description: "Omega-class Deviants represent the most common and least combat-capable subset of the Deviant population. Their abilities typically manifest around the age of 18, and are generally passive, support-oriented, or limited in scope. These powers may include minor telepathy, light sensitivity control, biological resistance, enhanced memory, or short-range sensory enhancements. While rarely suited for frontline combat, Omega Deviants often serve critical roles in logistics, healing, scouting, or intelligence. Some may eventually evolve into Beta-tier capabilities with extreme stress or prolonged exposure to training, but most remain grounded in subtle, situational utility. Despite their low threat rating, Omegas are foundational to Deviant society — adaptable, low-risk, and essential for non-combative support across both civilian and resistance operations.", book: "Book 2" },
    { name: "Reality Drafting ", description: "Mathew possesses a rare cognitive phenomenon known as Reality Drafting—a low-level spontaneous matter-generation ability governed by neural blueprinting. His mind functions like a living CAD engine fused with a quantum-scale fabricator, capable of conceptualizing and manifesting physical constructs directly from thought. By interfacing with a theoretical substructure of reality—dubbed the Creation Lattice—he draws unbound particles into form, shaping them into coherent matter with structural and functional integrity. He doesn’t require raw materials or external tools; instead, he builds from pure mental architecture. Once he’s seen or comprehended something—be it mechanical, architectural, or technological—he can recreate or reconfigure it with startling precision. From small, precise tools to fully realized structures, his power adapts to scale, complexity, and innovation, making reality itself a canvas for his design.", book: "Book 2" },
    
    { 
        name: "Kinematic Assembly", 
        description: "To channel his Reality Drafting ability, Mathew uses a unique form of spatial-constructional interface known as Kinematic Assembly. When activating this state, his perception overlays the world with invisible schematics—nodes, vectors, anchor points—allowing him to “feel” the structure of what he’s building before it physically exists. Through deliberate, fluid gestures—ranging from simple hand movements to elaborate, multi-limb motions—he traces these invisible designs in the air, each motion linking the lattice of an idea to the fabric of reality. These kinetic gestures act as a bridge between thought and form, with constructs emerging dynamically in sync with his movements, as though he's sculpting with space itself. The more detailed the object, the more intricate the choreography—making every creation a seamless fusion of intuition, motion, and precision.", 
        book: "Book 2",
        subAbilities: [
            { name: "Reflexive Sync", description: "To keep pace with the mental and physical demands of rapid creation, Mathew possesses a passive enhancement known as Reflexive Sync. This sub-ability accelerates his neuromuscular responses and fine-motor coordination exclusively during Kinematic Assembly, allowing his gestures to flow with precision, speed, and rhythm far beyond normal human capability. In this heightened state, he can draft, construct, and finalize complex schematics in mere seconds, as if performing a perfectly choreographed sequence in real time. The result is an almost hypnotic display—movements so fluid and fast they blur, while fully-formed creations emerge mid-motion with near-instantaneous efficiency.", book: "Book 2"},
            { name: "Reactive Reconfiguration", description: "Through Reactive Reconfiguration, Mathew maintains a live neural connection to anything he has built using Kinematic Assembly. This allows him to alter, resize, or restructure his constructs on the fly—whether it’s reworking a wall into a doorway, updating a tool for a new purpose, or dynamically shifting an environment in response to new demands. Changes can be made mid-motion using the same gestural system, or by direct contact for fine-tuned edits. Nothing he creates is fixed; everything remains fluid, adaptable, and responsive to his evolving intent.", book: "Book 2"},
            { name: "Deconstruction Field", description: "Mathew can unravel or “dissolve” parts of his own creations back into raw particles. The process is clean, targeted, and non-explosive—allowing him to break down large sections of a build, recycle parts, or erase mistakes mid-construction without consequence.", book: "Book 2"},
        ] 
    },

    { 
        name: "Blueprint Echo", 
        description: "Mathew can store and mentally archive any design he’s either seen or created—down to the smallest detail. These “echoes” exist in a mental database, allowing him to call up complex schematics days, weeks, or even years later and build them without needing to see them again. He can also mentally compare multiple designs and hybridize them into new ones on the fly.", 
        book: "Book 2",
        subAbilities: [
            { name: "Construct Cloning", description: "Mathew’s mastery over his creations extends into large-scale replication through an advanced technique known as Construct Cloning. Once he has fully completed and mentally committed a structure—be it a tool, machine, vehicle, or entire architectural layout—he can imprint that design into his internal blueprint archive. From that point on, he can summon and deploy identical versions of the construct at will, manifesting them instantly into the physical world without having to reassemble them gesture by gesture.", book: "Book 2"},
        ] 
    },
    
    
  ],
  weaknesses: [],
  relationships: [
    {
        name: "Robert Garcia",
        role: "Friend",
        status: "Alive",
        link: "/characters/robert",
        image: "/robert.jpg"
    },
    {
        name: "Andrew Torres",
        role: "Acquaintance",
        status: "Alive",
        link: "/characters/andrew",
        image: "/andrew.jpg"
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
        role: "Allies",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
    },
  ],
  uniforms: [],
  tools: []
};

export default mathew;
