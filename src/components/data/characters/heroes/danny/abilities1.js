const abilities = [
  {
    name: "Beta Deviant Physiology",
    domain: "Deviant Physiology",
    classification: "Physiology",
    release: "KVI",
    discovery: "beginning",

    description: `
As a Beta-class Deviant, Danny possesses physical capabilities beyond normal human limits, including enhanced speed, agility, strength, durability, recovery, and neurological efficiency. His physiology is uniquely adapted around Neuroelectric Deviance, allowing his body to withstand the extreme demands created by Cognitive Hyperacceleration and sustained high-speed movement. While Beta-class Deviants are not as naturally powerful as Alphas, Danny's training, specialized physiology, and technological support allow him to develop far beyond the standard expectations of his classification.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Enhanced Physiology",
          description: `
Following his recovery from Axel Pierce's attack and the installation of William Hutton's upgraded regulator, Danny's physiology operates with significantly greater efficiency. His nervous system, musculature, and neuroelectric pathways remain synchronized under stresses that previously pushed the original ARC Node toward its limits. His speed, reflexes, physical output, and recovery all sharpen as a result, not because his biology is replaced, but because far less of his natural potential is lost to instability or technological restriction.
          `.trim(),
        },
      },

      KVIII: {
        beginning: {
          title: "Peak Physiology",
          description: `
With the ARC Node ∞ fully integrated into his nervous system, Danny's Deviant physiology reaches its most refined state. His muscles, nerves, regenerative processes, and neuroelectric pathways continuously adapt to the demands placed upon them, allowing his body to support increasingly extreme levels of speed and power without the separation that once existed between his mutation and its regulator. His physical systems function as a unified whole, making him faster, stronger, more durable, and more efficient than at any previous stage.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Cognitive Hyperacceleration",
    domain: "Neuroelectric Deviance",
    classification: "Core Ability",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny's powers stem from a rare neurological mutation that developed alongside his pre-existing ADHD. Rather than replacing or invalidating the condition, his Deviant mutation intensified the speed, activity, and neurological responsiveness already present within his brain. S.T.A.T.I.C. later classified this evolved neurological state as Neuroelectric Deviance. His mind doesn't simply process information faster. It operates in near-constant motion, with thoughts, impulses, decisions, and sensory data moving through him at extraordinary speed.

When this mental momentum aligns with physical movement, Danny's accelerated nervous system generates and circulates increasing amounts of neuroelectric energy throughout his body. Thought becomes action in a fraction of a second, while continued movement further amplifies the neuroelectric processes powering his speed and physical performance.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Quantum Augment",
          description: `
The installation of the ARC Node Mk II sharpens Danny's Cognitive Hyperacceleration without fundamentally changing what the ability is. Its quantum synaptic architecture processes neurological activity fast enough to keep pace with Danny without developing the same bottlenecks as the original ARC Node. His thoughts transition more cleanly into movement, his sensory processing becomes more precise, and his ability to maintain several active lines of thought improves considerably.

The greatest change is efficiency. Danny can sustain higher levels of cognitive and physical acceleration without his regulator becoming the limiting factor. His mind, body, and neuroelectric system remain synchronized even during demanding combat, allowing him to make faster adjustments and act on his calculations with significantly less delay.
          `.trim(),
        },
      },

      KVII: {
        beginning: {
          title: "Living Symbiosis",
          description: `
With the ARC Node ∞ fused directly into his biology, the separation between Danny's Cognitive Hyperacceleration and its regulator effectively disappears. The living node responds alongside his nervous system, continuously adapting to changes in thought speed, sensory demand, physical acceleration, and neuroelectric output.

Thought, instinct, and movement flow together with far less internal delay than before. Danny can transition between analysis and action almost immediately while the living regulator adjusts around his evolving capabilities in real time. His cognition still depends on information he can perceive and understand, but the speed at which he processes and responds to that information reaches its most advanced state.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Rapid Cognition",
    domain: "Neuroelectric Deviance",
    classification: "Cognitive",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny's greatest strength is not in his legs. It is in his mind. His ADHD remains a genuine part of his neurology, but his Deviant mutation amplified its underlying neurological activity into an extraordinary form of accelerated cognition. His brain functions like a high-speed processor, constantly cycling through information, analyzing threats, and generating possible solutions in real time.

He reads situations in microseconds, running mental simulations and comparing potential outcomes before most people can react. He processes threats, tactics, environmental changes, and behavioral cues simultaneously, giving him a sharp advantage in combat, strategy, problem-solving, and conversation. This mental acceleration influences everything he does. Danny does not simply react quickly. He analyzes ahead, adjusts almost immediately, and frequently reaches a solution while everyone else is still processing the problem.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Quantum Parallelism",
          description: `
The ARC Node Mk II allows Danny to manage far more simultaneous thought processes without sacrificing clarity. Rather than forcing every calculation through a single sequence, the quantum synaptic lattice supports multiple parallel lines of analysis, allowing Danny to compare routes, tactics, responses, and probabilities at the same time.

In battle, he can evaluate numerous potential actions during moments that feel instantaneous to everyone else, filtering them until he finds the most effective response available from the information he possesses. The upgrade does not grant precognition or guarantee success. It simply allows Danny to consider far more possibilities, far faster, while maintaining the clarity needed to act on them.
          `.trim(),
        },
      },

      KVII: {
        beginning: {
          title: "Infinite Convergence",
          description: `
With the ARC Node ∞ functioning as a living part of his nervous system, Danny no longer needs to consciously separate every individual stream of accelerated thought. Tactical analysis, spatial awareness, instinct, memory, and sensory processing converge into a continuous cognitive flow that adapts as circumstances change.

He can discard failed possibilities and generate new responses almost immediately, allowing plans to evolve while they are being executed. Danny still cannot know information he has never perceived or account perfectly for truly unpredictable variables, but once relevant information enters his awareness, his ability to process and respond to it becomes extraordinarily difficult to outpace.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Instant Rapport",
        release: "KVI",
        discovery: "beginning",

        description: `
Danny's mind does not only analyze physical movement. It rapidly interprets people. By processing body language, tone, wording, emotional cues, and surrounding context at once, he can consider thousands of potential responses before selecting the one he believes will work best. Whether calming someone down, defusing tension, explaining something difficult, or delivering a perfectly timed comeback, Danny can tailor his response with exceptional speed. His conclusions are still dependent on the information available to him, meaning he can misunderstand someone or make the wrong judgment despite how quickly he reaches it.
        `.trim(),
      },

      {
        name: "Accelerated Intake",
        release: "KVI",
        discovery: "beginning",

        description: `
Danny can consume written and visual information at extraordinary speed. Books, schematics, reports, blueprints, mission files, and technical data can be scanned and processed far faster than a normal brain could follow. His accelerated cognition allows him to understand what he is reading rather than simply skimming across it, making large amounts of information immediately useful for problem-solving or field operations.
        `.trim(),
      },

      {
        name: "Split-Second Strategist",
        release: "KVI",
        discovery: "beginning",

        description: `
When Danny is looked to for a plan, his mind can rapidly map the situation, identify available resources, simulate numerous approaches, and filter out weaker options within seconds or less. This allows him to construct effective combat strategies, escape routes, rescue plans, or improvised solutions while a situation is still developing. The quality of the plan remains dependent on what Danny knows, but his ability to reach a workable answer is exceptionally fast.
        `.trim(),
      },
    ],
  },

  {
    name: "Neuroelectric Muscle Stimulation",
    domain: "Neuroelectric Deviance",
    classification: "Physical Enhancement",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny's Cognitive Hyperacceleration does more than increase the speed of his thoughts. His accelerated brain continuously sends unusually rapid and powerful signals through his nervous system, stimulating his muscles beyond normal biological performance. This neurological activity produces elevated neuroelectric output throughout his body, while sustained movement further increases the amount of energy circulating through his system.

The resulting feedback loop allows cognition, movement, and neuroelectric activity to reinforce one another. Danny thinks faster, his nervous system responds faster, his muscles execute those commands faster, and continued motion provides additional energy that can be redirected into physical performance.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Quantum Reinforcement",
          description: `
The ARC Node Mk II synchronizes Danny's neural signals and muscular responses with far greater precision than the original prototype. Neuroelectric current can be distributed through his musculature exactly where it is needed, minimizing wasted movement and reducing the internal strain created by sudden acceleration.

His strikes carry greater kinetic and neuroelectric force, his muscles respond more efficiently to rapid changes in direction, and he can maintain demanding physical output for considerably longer periods. Rather than granting him entirely new strength, the Mk II allows Danny's existing physiology to operate closer to its full potential without the regulator becoming a bottleneck.
          `.trim(),
        },
      },

      KVII: {
        beginning: {
          title: "Symbiotic Conduction",
          description: `
With the ARC Node ∞ integrated directly into his nervous system, Danny's muscles and neuroelectric pathways function as a continuously adapting circuit. Neural activity stimulates movement, movement increases neuroelectric output, and that energy can immediately reinforce subsequent movement.

The living regulator dynamically distributes energy according to Danny's intent, allowing him to transition between acceleration, strength, agility, and precision with almost no wasted output. His endurance and efficiency rise substantially, though extreme exertion can still tax Danny's body if he pushes beyond what his physiology can physically sustain.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Heightened Reflexes",
        release: "KVI",
        discovery: "beginning",

        description: `
Danny's nervous system operates at extraordinary speed, allowing his body to respond almost as quickly as his mind identifies a threat. He can evade attacks, counter sudden movements, reposition himself, or change direction within exceptionally small reaction windows. His reflexes are not precognitive. Their effectiveness comes from how quickly perception can become physical action.
        `.trim(),
      },

      {
        name: "Enduring Stamina",
        release: "KVI",
        discovery: "beginning",

        description: `
Danny's neuroelectric physiology keeps his muscles operating with exceptional efficiency during sustained activity. Energy generated throughout his accelerated nervous system can be redirected into continued muscular performance, reducing ordinary fatigue and allowing him to remain active through prolonged pursuits or battles. He can still exhaust himself through extreme exertion, injury, or sustained maximum output.
        `.trim(),
      },

      {
        name: "Refined Agility",
        release: "KVI",
        discovery: "beginning",

        description: `
Danny's accelerated spatial processing gives him exceptional control over his body while moving. He can evaluate distance, momentum, obstacles, and changing terrain quickly enough to make precise corrections in the middle of an action. Tight corners, unstable surfaces, crowded environments, and sudden directional changes can be navigated without sacrificing much of his speed.
        `.trim(),
      },

      {
        name: "Kinetic Strength",
        release: "KVI",
        discovery: "beginning",

        description: `
Danny can combine enhanced musculature with the momentum generated by his speed, producing strikes far more powerful than his frame would normally allow. Neuroelectric stimulation reinforces his muscles during impact, allowing him to transfer concentrated kinetic force through punches, kicks, tackles, and other movements. His baseline lifting strength is also enhanced, though his greatest physical force is produced when strength and acceleration are used together.
        `.trim(),
      },
    ],
  },

  {
    name: "Velocity Field",
    domain: "Neuroelectric Deviance",
    classification: "Defense",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny's accelerated nervous system and sustained movement generate a unique electromagnetic and neuroelectric field around his body. Known as the Velocity Field, this semi-conscious envelope protects him from environmental forces that would otherwise make extreme speed physically impossible. It stabilizes airflow, reduces friction, moderates acceleration forces, and disperses sudden impacts while remaining closely wrapped around Danny during ordinary high-speed movement.

When Danny carries another person, the field automatically expands around them. Air, debris, pressure, and friction are redirected around the shared envelope, allowing passengers to remain stable even while the surrounding environment races past at extreme speed.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Quantum Envelope",
          description: `
The ARC Node Mk II increases the responsiveness of Danny's Velocity Field, allowing it to adjust to acceleration, directional changes, passenger movement, and environmental hazards with far greater precision. The field can redistribute protective force before Danny completes a maneuver, making abrupt stops, extreme turns, and high-speed rescues significantly safer.

Its expanded stability also allows Danny to maintain the field around passengers with considerably less effort at higher velocities. Rather than becoming a separate offensive ability, the Quantum Envelope represents a more precise and resilient version of the protection already generated by Danny's neuroelectric physiology.
          `.trim(),
        },
      },

      KVIII: {
        beginning: {
          title: "Living Conduction",
          description: `
With the ARC Node ∞ integrated into his nervous system, Danny's Velocity Field becomes an adaptive biological extension of his movement. Its electromagnetic, kinetic, and neuroelectric properties continuously adjust around his speed, surroundings, and anyone within his protection.

The field can expand or contract almost immediately, redistribute pressure across different areas, and respond naturally to abrupt changes in direction or impact. Danny can protect multiple nearby allies more effectively and maintain stability under conditions that would have overwhelmed earlier versions of the field, while its primary purpose remains safeguarding movement rather than functioning as a conventional combat barrier.
          `.trim(),
        },
      },
    },

    subAbilities: [
      {
        name: "Clean Airflow",
        release: "KVI",
        discovery: "beginning",

        description: `
The Velocity Field stabilizes atmospheric pressure and airflow around Danny, allowing him to breathe and see clearly at speeds that would otherwise make both difficult or dangerous. Turbulence is redirected around the field rather than striking him directly, maintaining a stable pocket around his body and anyone he carries.
        `.trim(),
      },

      {
        name: "Sound Clarity",
        release: "KVI",
        discovery: "beginning",

        description: `
The Velocity Field compensates for the severe distortion that extreme movement would normally create in Danny's perception of sound. By moderating the behavior of pressure waves around him, it allows voices, environmental cues, and other important sounds to remain intelligible enough for his accelerated cognition to process them.
        `.trim(),
      },

      {
        name: "Friction Guard",
        release: "KVI",
        discovery: "beginning",

        description: `
The Velocity Field redirects much of the heat and abrasion produced by extreme movement before it can damage Danny. This protection automatically expands to anyone or anything he carries, preventing passengers, clothing, and equipment from being burned or stripped away by sustained high-speed travel.
        `.trim(),
      },

      {
        name: "Impact Cushion",
        release: "KVI",
        discovery: "beginning",

        description: `
During sudden starts, stops, collisions, or directional changes, the Velocity Field distributes kinetic stress across a wider protective envelope rather than allowing the full force to strike Danny's body at once. This greatly reduces the punishment created by his own acceleration and helps protect passengers from otherwise lethal changes in momentum.
        `.trim(),
      },
    ],
  },

  {
    name: "Neuroelectric Rapid Regeneration",
    domain: "Neuroelectric Deviance",
    classification: "Recovery",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny's accelerated nervous system triggers biological repair responses far sooner and more aggressively than normal human physiology. Neuroelectric activity is redirected toward damaged tissue, stimulating circulation, cellular repair, and tissue reconstruction at extraordinary speed. Cuts can clot and close within minutes, bruising fades quickly, and fractures can heal within hours rather than weeks.

His regeneration is powerful but not limitless. Danny cannot naturally replace lost limbs or instantly recover from catastrophic damage, and severe injuries can still overwhelm his body despite the speed of his healing response.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Quantum Recovery",
          description: `
The ARC Node Mk II improves Danny's regeneration by coordinating neuroelectric repair signals with far greater precision. Instead of merely accelerating recovery across an injured area, the regulator directs energy toward damaged nerves, muscle fibers, bone, and connective tissue according to immediate biological need.

Serious injuries that once required extended recovery can heal considerably faster, while fractures and tissue damage stabilize with far greater accuracy. Unlike the original ARC Node, the Mk II does not need to sacrifice regulator stability to sustain the additional neurological activity, allowing Danny's healing system to operate at full efficiency without the chip becoming an overheating bottleneck.
          `.trim(),
        },
      },

      KVII: {
        beginning: {
          title: "Living Renewal",
          description: `
With the ARC Node ∞ fused into his biology, Danny's regenerative system gains a living regulator capable of adapting its repair response to the specific damage affecting him. Neuroelectric energy is routed directly into damaged tissue while the node coordinates recovery across his nervous system, musculature, and internal organs.

Near-fatal injuries can be stabilized and repaired at extraordinary speed, toxins can be processed much more efficiently, and Danny can remain functional through damage that would previously have forced him out of combat. The process still requires sufficient biological material and energy to work with, preventing regeneration from becoming unconditional restoration.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },

  {
    name: "Neuroelectric Manipulation",
    domain: "Neuroelectric Deviance",
    classification: "Energy Manipulation",
    release: "KVI",
    discovery: "beginning",

    description: `
Danny's accelerated nervous system produces immense amounts of neuroelectric energy that increase alongside his Cognitive Hyperacceleration and physical movement. He can consciously channel this internal energy outward, directing it through his body for ranged attacks, defensive applications, physical reinforcement, and other controlled discharges.

During the implantation of the original ARC-7.9X, the regulator interacted with a rare neurotransmitter naturally present in Danny's nervous system and produced chlorozene. The compound altered the behavior of his regulated neuroelectric output and gave it its distinctive emerald coloration. Danny's visible green current is therefore still neuroelectricity. Chlorozene does not represent a separate energy source.

When Danny compresses chlorozene-infused neuroelectricity beyond the density of an ordinary discharge, however, the energy can stabilize into tangible hardlight. These condensed manifestations are classified as Chloro energy. Raw blasts and defensive energy remain neuroelectric, while Chloro Bolts and Chloro Constructs represent the same neuroelectric energy compressed into increasingly solid forms.
    `.trim(),

    progression: {
      KVI: {
        middle: {
          title: "Quantum Discharge",
          description: `
The ARC Node Mk II dramatically increases Danny's control over neuroelectric output by processing changes in intensity, direction, density, and compression with quantum-level precision. His standard neuroelectric blasts can be released with greater force and accuracy while remaining distinct from his condensed Chloro techniques.

More importantly, the Mk II allows Danny to compress chlorozene-infused neuroelectricity far beyond what the original ARC-7.9X could consistently sustain. Basic Chloro Bolts can now be expanded into complex hardlight weapons, defensive structures, projectiles, and mobility constructs. The upgrade does not give Danny a separate form of energy manipulation. It gives him far greater control over how densely his existing neuroelectricity can be shaped.
          `.trim(),
        },
      },

      KVIII: {
        beginning: {
          title: "Living Conduction",
          description: `
With the ARC Node ∞ functioning as part of his nervous system, Danny's neuroelectric control becomes almost instinctive. The living regulator continuously adjusts current, density, direction, and chlorozene compression according to his intent, removing much of the conscious effort once required to transition between raw discharges and solid Chloro manifestations.

Danny can shift naturally between neuroelectric blasts, defensive fields, compressed projectiles, and hardlight constructs while moving at extreme speed. Greater complexity still requires greater energy and concentration, but the process itself becomes as natural to him as directing his own limbs.
          `.trim(),
        },
      },
    },

    subAbilities: [],
  },
];

export default abilities;