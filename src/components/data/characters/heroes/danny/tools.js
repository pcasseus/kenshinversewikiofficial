const tools = [
  {
    name: "ARC-7.9X Prototype",
    type: "Neural Regulator",
    classification: "Integrated Technology",
    release: "KVI",
    discovery: "beginning",

    description: `
The first version of Danny’s neural regulator is the ARC-7.9X Prototype, a classified implant designed by Ivan Dvořák using S.T.A.T.I.C. technology. Roughly coin-sized, its titanium shell is etched with fine circuit grooves, and at its center pulses a crystalline chlorozene core that gives off a faint emerald glow. Exposed wiring threads betray its experimental design, emphasizing function over polish.

Surgically implanted at the base of Danny’s neck, the ARC-7.9X regulates the unstable neurological activity produced by his Neuroelectric Deviance. Rather than granting Danny his abilities, the implant stabilizes and sharpens the processes already occurring within his brain and nervous system, allowing him to maintain greater control over his accelerated cognition and neuroelectric output.
    `.trim(),

    image: "/tools/dannyschip.png",

    progression: {
      KVII: {
        beginning: {
          title: "Quantum Synaptic Lattice",
          designation: "ARC Node Mk II",
          developer:
            "William Hutton / Frasier Industries",

          description: `
Following the destruction of the ARC-7.9X Prototype, William Hutton develops a substantially more advanced replacement using experimental Frasier Industries technology. Designated the ARC Node Mk II and built around a Quantum Synaptic Lattice, the new regulator is smaller, faster, and far more deeply integrated with Danny’s nervous system than its predecessor.

The device is approximately the size of a thumbnail, with a translucent shell exposing an internal lattice of emerald-green chlorozene pathways interwoven with silver quantum circuitry. Its symmetrical microstructure appears almost grown rather than conventionally manufactured, emitting a soft glow and faint hum while active.

Unlike the original prototype, the Quantum Synaptic Lattice does more than suppress neurological instability. Its Cognitive Load Balancing system distributes the immense processing demands created by Danny’s accelerated cognition, while Electro-Neural Stabilization regulates the bioelectric activity moving through his nervous system. A dedicated Phase Transition Safeguard maintains neurological and molecular synchronization during phasing events.

This allows the regulator to stabilize Danny without imposing the same restrictions as the original ARC-7.9X, giving his natural abilities significantly greater room to develop.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "ARC Node ∞",
          designation: "Aetherian Regulator",
          developer:
            "Mathew Salazar & Jose Rivera / Aetherian Build",

          description: `
The final evolution of Danny’s neural regulator abandons conventional engineering entirely. Created through the combined abilities of Mathew Salazar and Jose Rivera, the ARC Node ∞ is grown from Deviant biological matter rather than assembled from mechanical components.

The regulator resembles a smooth shard of living emerald glass threaded with flowing chlorozene energy. Its crystalline-organic structure subtly shifts as though breathing, continuously adapting to the neurological and bioelectric activity passing through it. There are no conventional wires, ports, or mechanical interfaces.

Once fused permanently into the base of Danny’s neck, the ARC Node ∞ becomes a living extension of his nervous system rather than an external device regulating it. Its structure responds dynamically to changes in Danny’s cognition, physiology, and neuroelectric output, allowing the regulator to evolve alongside the very power it was created to stabilize.
          `.trim(),
        },
      },
    },
  },
];

export default tools;