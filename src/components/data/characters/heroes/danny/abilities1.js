const abilities = [
  {
    name: "Beta Deviant Physiology",
    books: [1],
    description:
      "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later between ages 15 and 16, including a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.",
    evolved: [
      {
        books: [2],
        title: "Enhanced Physiology",
        description: "",
      },
      {
        books: [3],
        title: "Peak Physiology",
        description: "",
      },
    ],
    subAbilities: [],
  },
  {
    name: "Cognitive Hyperacceleration",
    books: [1],
    description:
      "Danny’s powers stem from a rare neurological mutation. What doctors once diagnosed as severe ADHD was actually an evolutionary form of neural divergence later classified by S.T.A.T.I.C. as Neuroelectric Deviance. His mind does not just process information faster; it operates in constant motion. Thoughts, impulses, decisions, and sensory data surge through him like an electric storm.\n\nWhen this mental momentum aligns with physical movement, his body taps into a built-in reservoir of bioelectric energy. The result is a state of hypercharged motion where thought becomes action in a fraction of a second, and every step feeds his power.",
    evolved: [
      {
        books: [2],
        title: "Quantum Augment",
        description:
          "The installation of the ARC Node Mk II elevated Danny’s already supercharged mind into something sharper and faster. His neuroelectric divergence, once balanced by the prototype, became amplified through quantum synaptic integration. His thoughts branched like living circuits, each thread of cognition running in parallel without loss of clarity.\n\nWhen this enhanced mental flow merges with physical acceleration, Danny achieves a state of seamless combat foresight. Every action is supported by pre-calculated simulations, allowing him to strike, adapt, and counter before most opponents even move. His speed is not just physical but predictive, powered by thought streams that run ahead of reality itself.",
      },
      {
        books: [3],
        title: "Living Symbiosis",
        description:
          "With the ARC Node ∞ fused into his biology, Danny’s cognition no longer runs ahead of his body. It is his body. His brain and nervous system operate as a singular current, adapting and expanding in real time. Thought, instinct, and movement coexist as one uninterrupted flow, unrestricted by the barriers of human neurology.\n\nEach step, strike, or decision becomes both instantaneous and inevitable. His hypercharged momentum feeds itself endlessly, drawing from a living regulator that evolves with him. At this stage, Danny does not simply think faster or move faster. He becomes motion itself, a convergence of mind and energy that pushes Neuroelectric Deviance into its perfect form.",
      },
    ],
    subAbilities: [],
  },
  {
    name: "Rapid Cognition",
    books: [1],
    description:
      "Danny’s greatest strength is not in his legs. It is in his mind. What was once misdiagnosed as ADHD is now understood as a rare form of neuroelectric divergence. His brain functions like a high-speed processor, constantly cycling through data, analyzing threats, and generating solutions in real time.\n\nHe reads situations in microseconds, running mental simulations and predicting outcomes before others can react. He processes threats, tactics, and environmental changes all at once, giving him a sharp advantage in both combat and decision-making. This mental acceleration fuels everything he does. His movements and reactions are guided by instant calculations. Even under pressure, his thinking remains clear and adaptive. Danny does not just react quickly. He plans ahead, adjusts instantly, and stays several steps in front of the fight.",
    evolved: [
      {
        books: [2],
        title: "Quantum Parallelism",
        description:
          "The ARC Node Mk II transformed Danny’s rapid cognition into something far more advanced. His thoughts no longer follow a single chain of logic but split into countless parallel streams, each running simulations and filtering outcomes simultaneously. His brain became a living network of possibilities, each one refined to pinpoint precision by the regulator’s quantum lattice.\n\nIn battle, Danny evaluates dozens of potential actions in the time it takes an opponent to blink. His responses are not just fast but pre-calculated, chosen from the most effective paths available. His movements become expressions of foresight, guided by probability rather than guesswork. Under the Mk II, Danny does not just plan ahead. He controls the tempo of every encounter, forcing others to react to a game he has already solved.",
      },
      {
        books: [3],
        title: "Infinite Convergence",
        description:
          "With the ARC Node ∞ fused into his biology, Danny’s cognition evolves beyond simulation. His thoughts, instincts, and awareness no longer run as separate processes. They converge into a single, living flow that adapts to reality in real time. His mind does not predict outcomes. It manifests the one best outcome as naturally as breathing.\n\nEvery calculation is instantaneous. Every reaction is the right one. Every plan adapts the moment conditions change. Danny no longer runs through possibilities. He embodies certainty, his cognition and body unified as a single current of perfect motion. At this stage, his rapid cognition transcends prediction. It becomes inevitability.",
      },
    ],
    subAbilities: [
      {
        books: [1],
        name: "Instant Rapport",
        description:
          "Danny’s mind doesn’t just analyze physical movement. It deciphers people. By reading body language, tone, emotional cues, and context all at once, he can run through thousands of possible verbal responses before choosing the one most likely to land. Whether it's calming someone down, defusing a tense situation, or delivering the perfect comeback, Danny responds with sharp precision.",
      },
      {
        books: [1],
        name: "Accelerated Intake",
        description:
          "Books, blueprints, reports and Danny can consume information at a blistering pace. His eyes track text faster than a normal brain could follow, but his cognition keeps up. He doesn’t just skim but he understands and retains everything.",
      },
      {
        books: [1],
        name: "Split-Second Strategist",
        description:
          "When looked to for a plan, Danny’s mind enters a problem-solving sprint. He runs through dozens of potential outcomes, simulates them mentally, and filters for the most effective option.",
      },
    ],
  },
  {
    name: "Bioelectric Muscle Stimulation",
    books: [1],
    description:
      "Danny’s core ability, Cognitive Hyperacceleration, does more than speed up his mind. It transforms thought into motion and motion into energy. As his brain races, it sends rapid-fire signals to his nervous system, pushing his muscles to act faster than normal biology should allow. This mental overclocking creates a constant buildup of kinetic friction inside his body, converted into bioelectric energy.",
    evolved: [
      {
        books: [2],
        title: "Quantum Reinforcement",
        description:
          "The ARC Node Mk II amplified Danny’s neural firing rate, syncing his nervous system with quantum precision. Every muscle fiber became a live conductor, reinforced by redirected bioelectric currents. His body no longer fought against its natural limits. It bypassed them entirely, drawing strength from the regulator’s constant energy feedback.\n\nEach strike carried layered force, his blows landing with kinetic and electrical weight combined. His stamina extended far beyond human range, and every movement recycled energy back into his system. Under the Mk II, Danny’s muscles did not just follow his mind. They became living extensions of it, reacting with flawless synchronization.",
      },
      {
        books: [3],
        title: "Symbiotic Conduction",
        description:
          "With the ARC Node ∞ fused into his biology, Danny’s nervous system and musculature operate as one seamless circuit. Every neural spark generates kinetic energy, every motion feeds bioelectric output, and every output fuels motion in return. His body has no wasted effort, no resistance, and no separation between thought and strength.\n\nAt this stage, Danny’s physical output is limited only by intent. He can strike with explosive force or feather-light precision, shift instantly between speed and power, and maintain peak performance without fatigue. His muscles no longer require stimulation from the brain. They act as part of the same living current, a perfect loop of thought, motion, and energy.",
      },
    ],
    subAbilities: [
      {
        books: [1],
        name: "Heightened Reflexes",
        description:
          "Danny’s nervous system operates like an overclocked circuit, reacting to stimuli as quickly as he can think. When he perceives danger, he has already moved. His responses are instinctive extensions of cognition, allowing him to dodge attacks, counter ambushes, or shift position with almost preemptive timing.",
      },
      {
        books: [1],
        name: "Enduring Stamina",
        description:
          "The fusion of motion and neuroelectric energy keeps Danny’s muscles at peak efficiency. His restless mental oscillations fuel a body that never idles, recycling energy back into itself and maintaining continuous output. He does not simply endure long battles. He thrives in them, his performance sharpening the longer he moves.",
      },
      {
        books: [1],
        name: "Refined Agility",
        description:
          "Danny’s spatial awareness, guided by rapid cognition, grants him perfect control over his body in motion. He anticipates and corrects mid-action, adjusting his trajectory with instinctive precision. Tight corners, shifting terrain, and obstacles become second nature, turning any environment into an extension of his battlefield.",
      },
      {
        books: [1],
        name: "Kinetic Strength",
        description:
          "Every step Danny takes generates force, but his physiology lets him weaponize it. Electrical surges produced by rapid motion feed directly into his musculature, reinforcing his strength beyond natural limits. Each punch carries kinetic and electrical weight, each lift surpasses resistance thresholds, and each strike channels raw motion into focused impact. His strength is not just physical. It is the embodiment of thought made tangible through energy.",
      },
    ],
  },
  {
    name: "Neural Regulator Implant – ARC-7.9X Prototype (Ivan Dvořák / S.T.A.T.I.C. Build)",
    books: [1],
    description:
      "Embedded at the base of Danny’s neck is the ARC Node, a classified neural implant developed by Ivan Dvořák using S.T.A.T.I.C. technology. Officially labeled the ARC-7.9X Prototype, this implant was designed specifically for Danny. His neuroelectric divergence was too unstable to sustain safely without outside regulation, and no one else could use the device without catastrophic failure.\n\nBefore implantation, Danny’s cognitive acceleration was running simulations faster than his body could handle. He was showing early signs of microseizures, motor control loss, and risk of complete neural burnout. The ARC Node was created not to suppress his powers, but to stabilize and sharpen them.\n\nIt functions as a bioelectric router, cognitive processor, and neuromuscular stabilizer in one. The device monitors Danny’s synaptic load in real time, redistributes strain across his nervous system, and regulates energy flow with sub-millisecond precision. It also filters and stabilizes his chlorozene levels, the compound responsible for his distinct green bioelectric energy.",
    evolved: [
      {
        books: [2],
        title: "ARC Node Mk II (William Hutton / Frasier Industries Build)",
        description:
          "After Axel Pierce destroyed Danny’s original neural regulator in combat, his powers spiraled into dangerous instability. William Hutton constructed a perfected replacement using experimental Frasier Industries technology, decades ahead of anything S.T.A.T.I.C. could produce.\n\nThe ARC Node Mk II is not only a stabilizer. It is an amplifier. Built on a quantum synaptic lattice rather than standard biochip architecture, the Mk II integrates with Danny’s brain at a sub-molecular level. It enhances every aspect of his physiology, raising his speed, electrical output, and cognitive acceleration to levels beyond anything previously possible.\n\nUnlike the prototype, the Mk II functions as a true co-processor. It is not hardware supporting biology, but a living fusion of Deviant physiology and post-quantum Frasier engineering. For the first time, Danny’s power and his regulator are not separate systems, but a symbiotic evolution of both.",
      },
      {
        books: [3],
        title: "ARC Node ∞ (Mathew Salazar & Jose Rivera / Aetherian Build)",
        description:
          "After the New York battle with Axel Pierce, the ARC Node Mk II was damaged beyond repair. During that fight Danny had taken Velozene, Valeria Adair-Taylor’s experimental speed-enhancing serum, in a desperate attempt to hold off Axel for Wesley. The drug destabilized his neuroelectric field and nearly destroyed what was left of the Mk II.\n\nMathew Salazar and Jose Rivera collaborated on a replacement. Mathew’s Reality Drafting and Jose’s Supernatural Intelligence produced something entirely new: not an implant, but a living regulator made from pure Deviant biological matter. Designed at the genetic and quantum level, it fused with Danny’s physiology instead of sitting as hardware in his body.\n\nThe ARC Node ∞ merged with the base of Danny’s neck internally, becoming a permanent part of his nervous system. It adapts with him in real time, recalibrates to his evolving power set, and repairs itself from within. Because it is grown rather than built, it cannot be destroyed by normal means. It would have to be surgically and violently cut out of Danny’s spine to be removed.",
      },
    ],
    subAbilities: [
      {
        books: [1],
        name: "Cognitive Load Balancing",
        description:
          "The ARC Node monitors Danny’s brainwave patterns and redistributes strain in real time, preventing his accelerated cognition from overwhelming his nervous system. It filters sensory input, smooths out spikes in activity, and stops mental crashes caused by multitasking at impossible speeds. What began as a crude safety net evolved into a seamless extension of his thought process.\n\nWith each new iteration of the regulator, Danny’s cognition sharpened. The system not only reacted to overload but predicted it before it occurred, letting his thoughts flow with clean precision. At its peak, the node no longer functioned like external hardware but as part of Danny’s own mind. Instead of juggling tasks, his brain ran parallel streams effortlessly, each one stabilized by the living regulator. His cognition adapts fluidly to his intent, expanding without ceiling and allowing him to process, plan, and execute with flawless clarity in any situation.",
      },
      {
        books: [1],
        name: "Electro-Neural Stabilization",
        description:
          "The ARC Node routes Danny’s bioelectric output safely through his nervous system, preventing overload and loss of control. As his motion and cognition generate surplus energy, the system converts and channels it with precision, recycling excess current into his muscles, reflexes, or stored reserves. This stabilization allows him to form hardlight constructs, project blasts, and direct chlorozene surges with accuracy instead of wild discharge. Over time, the system adapted more seamlessly to his intent, shaping his energy flow as if it were part of his own biology.",
      },
      {
        books: [1],
        name: "Phase Transition Safeguard",
        description:
          "The ARC Node synchronizes Danny’s bioelectric frequency with his vibration rate during phase-shift states, ensuring that his body transitions cleanly through solid matter. Without this safeguard, phasing would risk misalignment, tissue damage, or catastrophic failure. The system automatically calibrates his molecular state, balancing neurological timing with metabolic focus so each transition remains stable. What began as a protective failsafe evolved into a natural extension of his abilities, allowing Danny to phase with consistency and confidence.",
      },
    ],
  },
  {
    name: "Velocity Field",
    books: [1],
    description:
      "As Danny’s hyperactive brain drives his body into motion, his neural activity generates not only kinetic and electrical energy but also a unique electromagnetic signature. This signature manifests as a Velocity Field, an adaptive, semi-conscious barrier that shields him from the hazards of high-speed movement. The field regulates airflow, reduces friction, and cushions impacts, ensuring Danny can breathe, see, and maneuver without tearing himself apart. It is managed subconsciously, an automatic safeguard produced by the same bioelectric loop that powers every move he makes.",
    evolved: [
      {
        books: [2],
        title: "Quantum Envelope",
        description:
          "The ARC Node Mk II refined the Velocity Field into a quantum-layered envelope that anticipated environmental stress before it reached Danny’s body. Rather than just shielding him, the field became predictive, shifting its density and polarity based on projected trajectories and collisions. This let Danny carry passengers without harm, deflect incoming projectiles with precise field tension, and maintain clarity of perception even at hypersonic speeds. The field was no longer a passive safeguard. It became an active extension of his intent, flexing in response to both motion and combat needs.",
      },
      {
        books: [3],
        title: "Living Conduction",
        description:
          "With the ARC Node ∞ fused into his biology, Danny’s Velocity Field evolved into a living extension of his nervous system. It adapts with him in real time, weaving electromagnetic, kinetic, and chlorozene signatures into a seamless current. The field is no longer limited to protection. It actively interacts with the environment, bending airflow, distorting sound, and dispersing force with perfect precision. Danny can extend it to shield allies, disrupt enemy weapons, or shape his battlefield on the fly. At this stage, the Velocity Field is not a barrier around Danny. It is a natural aura of motion and energy, inseparable from his Deviant identity.",
      },
    ],
    subAbilities: [
      {
        books: [1],
        name: "Clean Airflow",
        description:
          "The Velocity Field stabilizes atmospheric pressure and airflow around Danny, allowing him to breathe and see clearly at speeds that would normally choke or blind him. It smooths turbulence into a steady stream, ensuring his senses remain sharp. For a mind that demands constant clarity, this function is essential.",
      },
      {
        books: [1],
        name: "Sound Clarity",
        description:
          "The field modulates sonic frequencies in real time, preventing distortion or deafening noise as Danny moves at extreme velocity. It filters and balances sound so he can track voices, threats, and environmental cues without interference. This ensures his rapid cognition always has the data it needs to process the battlefield.",
      },
      {
        books: [1],
        name: "Friction Guard",
        description:
          "Thermal energy builds rapidly when Danny accelerates, but the field diffuses the heat before it can harm him. This protection extends to whatever or whoever he carries, preventing burns or abrasion from transferred friction. It is an automatic safeguard generated by the accelerated loop of his nervous system.",
      },
      {
        books: [1],
        name: "Impact Cushion",
        description:
          "When Danny collides or shifts direction at high speeds, the field disperses kinetic force across an electrokinetic buffer. The adjustment happens preemptively, guided by his brain’s ability to predict motion paths before they occur. This reduces damage from impacts and allows him to hit the ground running without losing momentum.",
      },
    ],
  },
  {
    name: "Neuroelectric Rapid Regeneration",
    books: [1],
    description:
      "Danny’s healing factor is an extension of the same cognitive overdrive that powers his speed. His brain processes injury the way it processes everything else aka instantly, triggering immediate biological responses. As his nervous system floods with bioelectric energy, it jumpstarts tissue repair, accelerates cellular activity, and drastically reduces recovery time. Cuts clot and close within minutes, bruises fade almost as fast as they appear, and fractures mend in hours, not days.",
    evolved: [
      {
        books: [2],
        title: "Quantum Recovery",
        description:
          "The ARC Node Mk II pushed Danny’s regenerative process beyond natural limits. His bioelectric field no longer just accelerated healing. It restructured cellular repair at the molecular level, weaving tissue together with quantum precision. Internal injuries that would normally cripple him for weeks could resolve in a single day, and fractures could realign themselves within minutes of forming. While highly effective, the constant rewiring of his biology placed strain on his nervous system, one reason the Mk II was never stable enough for long-term use.",
      },
      {
        books: [3],
        title: "Living Renewal",
        description:
          "With the ARC Node ∞ fused into his biology, Danny’s regeneration evolved into a living system that adapts with him in real time. His nervous system and the node operate as a single current, distributing chlorozene-charged energy directly into damaged tissue and rewriting recovery instructions at the genetic level. He can recover from near-fatal wounds in minutes, purge toxins instantly, and maintain peak performance through injuries that would disable anyone else. At this stage his healing is not only rapid but self-perfecting, evolving with each use and ensuring that damage is absorbed into growth rather than decline.",
      },
    ],
    subAbilities: [],
  },
  {
    name: "Neurocharged Lightning Manipulation",
    books: [1],
    description:
      "Danny’s hypercognitive motion does more than build speed. It generates electricity through kinetic friction and neuroelectric acceleration, producing a constant surplus of raw energy. Unlike typical electrical powers, Danny’s current is filtered through his overclocked nervous system, which subconsciously shapes its intensity and direction. This control was not always stable. After his abilities first emerged, S.T.A.T.I.C. implanted a neural regulator chip in his brainstem to manage his overwhelming cognitive speed and prevent overload. The device interacted with a rare neurotransmitter in Danny’s system, creating chlorozene, a unique compound that altered the nature of his bioelectric surges and gave them their distinct emerald signature.",
    evolved: [
      {
        books: [2],
        title: "Quantum Discharge",
        description:
          "With the ARC Node Mk II integrated, Danny’s electrical control expanded to surgical levels. His nervous system no longer just contained his surges. It rerouted and recycled them through a quantum-synaptic lattice, allowing him to modulate output with near-perfect accuracy. Blasts could be shaped for concussive impact, piercing penetration, or wide-area disruption. Hardlight constructs stabilized more consistently, and chlorozene energy infused them with lasting integrity. The Mk II made Danny’s power versatile and combat-ready.",
      },
      {
        books: [3],
        title: "Living Conduction",
        description:
          "With the ARC Node ∞ fused into his biology, Danny’s electricity became an inseparable extension of his identity. The node adapted to his intent in real time, letting him manifest energy in any form he could imagine. His chlorozene surges no longer behaved like generated current but as living conduits, bending seamlessly into blasts, constructs, or wide-reaching fields. He could layer effects within each strike, from stunning to disruptive to destructive, all calibrated without conscious delay. At this stage, Danny’s neuroelectric output operated as a living force of nature, impossible to destabilize, evolving in harmony with every step he took.",
      },
    ],
    subAbilities: [],
  },
];

export default abilities;
