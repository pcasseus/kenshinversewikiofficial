const abilities = [
  {
    name: "Beta Deviant Physiology",
    books: [1],
    description:
      "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later between ages 15 and 16, including a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.",
    evolved: [
      {
        books: [2],
        title: "Alpha Deviant Physiology",
        description:
          "After her near-death at the hands of her brother Axel, who forced her to absorb more energy than her body could contain, Zoey's physical form exploded from the overload. With Gavin’s help, her body was reconstructed just enough for her to pull herself back together. Upon her return, she was no longer the same. Her body regenerated not only to its pre-explosion state but returned far stronger and fully capable of sustaining the immense levels of energy she had once barely controlled. This reconstruction marked her transition to Alpha Deviant Physiology, placing her on par with Gavin Summers. While there is still a threshold beyond which her human form cannot operate, she can now access the full depth of her energy output up to that line without fear of collapse.",
      },
      {
        books: [3],
        title: "Enhanced Alpha Deviant Physiology",
        description:
          "Zoey’s body is now built to endure and regenerate on a level no other Deviant has ever reached. Her cellular systems, reinforced by the influence of her energy-based composition, push her endurance, strength, and adaptability beyond any known threshold. If her physical form sustains catastrophic damage, her body instinctively begins to reconstitute itself from within. The energy that defines her does not simply power her. It heals her, reinforces her, and ensures that even critical injuries cannot keep her down for long. As long as her essence and energy remain intact, she cannot be erased or killed. Like energy itself, she is a constant, a permanent, unyielding, and impossible to destroy completely.",
      },
    ],
    subAbilities: [],
  },
  {
    name: "Unlimited Energy Generation",
    books: [1],
    description:
      "Zoey Harris is a rare energy generator whose cells naturally produce a limitless stream of internal power. This output is not confined to a single form but manifests as a dynamic fusion of energy types, making her body a self-sustaining and adaptive reactor. She generates energy continuously, even under extreme stress, and never requires recharging or external input. For most of her life, this ability remained dormant, deeply embedded within her biology and inaccessible under normal conditions. It took exposure to extreme duress that pushed her body and mind to the brink. A brief but pivotal encounter with Gavin Summers, whose body radiates nuclear fusion energy, acted as the first catalyst. His energy served as a biological ignition that stirred the dormant systems within her. Shortly after, a separate interaction with Danny Foster and his neurocharged lightning accelerated the process. The combined exposure to both energy signatures, paired with the intensity of her circumstances, pulled her core ability out of dormancy and activated the full potential of her cells. From that moment forward, Zoey’s body began producing, regulating, and adapting energy in real time.",
    subAbilities: [],
  },
  {
    name: "Universal Energy Absorption",
    books: [2],
    description:
      "Zoey’s body is more than just a generator. It is a fully adaptive energy system. Once her cellular engine was activated, her biology began to absorb and integrate external energy sources to enhance and evolve her core output. Whether exposed to ambient electricity, solar radiation, or more exotic energy fields, Zoey’s body does not simply store what it absorbs. It learns from it. This process boosts her cellular performance, broadens her energy capabilities, and unlocks entirely new applications. Each new energy encounter becomes a catalyst for biological evolution, feeding directly into her self-sustaining loop and accelerating her growth.",
    subAbilities: [
      {
        books: [2],
        name: "Free Energy Usage",
        description:
          "Zoey’s cells are engineered to adapt to any energy she absorbs, eventually allowing her to manipulate those forms directly. What begins as passive absorption gradually evolves into active control. Each new energy source, whether natural, artificial, or alien in origin, expands her range of abilities. As she encounters increasingly rare and complex energy types, her mastery grows, pushing her closer to true energy versatility and near-limitless potential.",
      },
    ],
  },
  {
    name: "Photonic Energy Manipulation",
    books: [1],
    description:
      "Zoey’s ability to control light energy originates from specialized organelles within her cells known as light vacuoles. These microscopic reactors remained dormant for most of her life until Gavin Summers exposed her to his nuclear fusion output. The intense burst of energy acted as a biological ignition, jumpstarting her core systems and activating the vacuoles. Once awakened, they began functioning as natural photonic generators, drawing from her mitochondrial energy to excite targeted molecules. This reaction produces controlled streams of photons, which are released through finely tuned photonic resonance chambers. Through this process, Zoey can manipulate light with exceptional precision, shaping it into beams, pulses, or radiant flares for offense, utility, or suppression.",
    evolved: [
      {
        books: [2],
        title: "Enhanced Photonic Energy Manipulation",
        description:
          "When Zoey returned from the dead and evolved into an Alpha Deviant, her photonic capabilities surged to new heights. The core systems that once flickered with raw output now thrived with stability and control. In the days leading up to her collapse, Zoey had already refined her abilities, learning to focus and direct light more efficiently. This refinement became a foundation upon which her amplified physiology could build. Her blasts became brighter, denser, and more reactive, capable of stunning or damaging even powerful foes.",
      },
      {
        books: [3],
        title: "Peak Photonic Energy Manipulation",
        description:
          "After a long period of concentrated training and combat experience, Zoey reaches complete command over her photonic abilities. Light no longer requires effort to summon or control, it responds to her intent as naturally as breathing. She can bend photonic energy into pinpoint-accurate strikes, cascading fields of radiant pressure, or wide-area suppression pulses. Her mastery allows her to regulate intensity, temperature, frequency, and flow, giving her near-limitless flexibility in the field. At this stage, light is not just a weapon in her arsenal. It is an extension of her will.",
      },
    ],
    subAbilities: [],
  },
  {
    name: "Photonic Energy Projection",
    books: [1],
    description:
      "Zoey’s control over light energy extends beyond raw manipulation into high-level projection for both offense and tactical support. By channeling her internal photonic output through specialized resonance chambers within her cells, she can emit light in concentrated or dispersed forms. These emissions range from high-intensity blasts to precision beams, each capable of overwhelming targets, disrupting electronics, or disorienting enemies through sensory overload. Whether used to pierce armor, create visual suppression, or clear a path through the battlefield, her projections are as versatile as they are powerful.",
    evolved: [
      {
        books: [2],
        title: "Enhanced Photonic Energy Projection",
        description:
          "Following her resurrection and elevation to Alpha Deviant status, Zoey’s photonic projections became significantly more potent. With her newly stabilized body and refined focus, she gained sharper control over the density, shape, and delivery of her light attacks. Her blasts became faster to charge, harder to block, and more efficient in energy use. She could now adjust the wavelength and spread on command, shifting between blinding flashes, armor-penetrating rays, or wide-area concussive waves. This level of control allowed her to transition from reactive firepower to precision strike capability in the middle of battle.",
      },
      {
        books: [3],
        title: "Peak Photonic Energy Projection",
        description:
          "At her peak, Zoey’s mastery over photonic projection becomes absolute. Her blasts are no longer just energy outputs—they are surgical tools of destruction and control. She can weave beams through tight spaces, bend light around obstacles, or delay detonation for timed impact. She effortlessly tunes each emission to environmental factors, balancing power with purpose. Whether blinding a sniper with pinpoint flash or vaporizing enemy defenses with sustained radiation, her light-based offense becomes a flawless extension of thought. Each projection is calculated, adaptive, and devastating.",
      },
    ],
    subAbilities: [
      {
        books: [2],
        name: "Photon Burst",
        description:
          "A short-range, wide-angle light explosion designed for crowd control and concussive force. These bursts knock enemies back and can stagger even reinforced opponents, disrupting formations and creating space in close-quarters engagements.",
      },
      {
        books: [2],
        name: "Photon Stream",
        description:
          "A continuous, high-density blast of photonic energy that pierces armor, melts through barriers, and cuts across long distances. This is Zoey’s go-to precision weapon for ranged combat and neutralizing high-priority threats.",
      },
      {
        books: [2],
        name: "Photon Flashing",
        description:
          "Zoey can release an instant burst of blinding light from her hands, eyes, or any part of her body. This flash overwhelms visual receptors, disorienting enemies and giving her a critical opening to escape, counterattack, or shift momentum mid-battle.",
      },
    ],
  },
  {
    name: "Electrical Energy Manipulation",
    books: [1],
    description:
      "Zoey’s electrokinesis originates from a secondary system of specialized cellular structures that evolved alongside her energy core. These structures remained dormant until a brief but powerful encounter with Danny Foster exposed her to his neurocharged lightning, a form of electricity shaped by his hyper-accelerated nervous system. Danny’s surge did not simply energize her cells. It activated a latent network of ion-regulating organelles designed to manage high-voltage electrical flow. Once triggered, this system began functioning independently of her light-based abilities, enabling her to generate, channel, and control electrical currents at will. Electricity now courses through her system as a raw, responsive force. She directs it with precision, using it for offense, propulsion, shielding, and even delicate neural synchronization.",
    evolved: [
      {
        books: [2],
        title: "Enhanced Electrical Energy Manipulation",
        description:
          "After returning from death and ascending to Alpha Deviant status, Zoey’s control over electricity became significantly more potent. Her ion-regulating organelles expanded in capacity, allowing her to handle greater voltage without strain. Her attacks became sharper and more variable, shifting instantly between wide-area bursts, pinpoint streams, or armor-cracking bolts. She gained the ability to charge her environment with residual currents, destabilize technology with minimal effort, and synchronize multiple electrical outputs simultaneously. Her electrokinesis evolved from a powerful weapon into a finely tuned tactical instrument.",
      },
      {
        books: [3],
        title: "Peak Electrical Energy Manipulation",
        description:
          "With prolonged training and experience, Zoey achieves complete mastery over her electrical abilities. Voltage, frequency, and current density respond to her intent with perfect fidelity. She can weave lightning through confined spaces, shape currents into complex patterns, or overload entire systems without collateral damage. Her electricity becomes a living extension of her will, capable of blinding speed, overwhelming force, or surgical precision. At this stage, she no longer merely wields electricity. She embodies it, commanding storms of power with effortless control.",
      },
    ],
    subAbilities: [],
  },
];

export default abilities;
