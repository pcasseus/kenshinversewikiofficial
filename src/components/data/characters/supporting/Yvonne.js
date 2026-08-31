const yvonne = {
  id: "#036",
  name: "Yvonne Ramirez",
  slug: "yvonne",
  image: "/yvonne.jpg",
  class: "Beta",
  status: "Active",
  tagline: "",
  primaryPower: "Hemokinesis & Clinical Precision",
  stats: {
    affiliation: "Travel Nurse",
    gender: "Female",
    height: "5'4\"",
    weight: "120 lbs",
    eyes: "Black",
    hair: "Brown",
    "place of birth": "Houston, Texas"
    },
    abilities: [
      { name: "Beta Deviant Physiology", description: "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later—usually between ages 15 and 16—and include a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.", book: "Book 2" },
      { name: "Hemokinesis", description: "Yvonne possesses a rare and refined form of hemokinesis — the conscious control and manipulation of blood within living organisms. Unlike more aggressive variants, her abilities are inherently restorative, granting her precise influence over circulatory systems for the purpose of healing, stabilization, and internal regulation.", book: "Book 2" },
      
      {
        name: "Clinical Precision",
        description: "Yvonne’s years of frontline medical experience as a travel nurse have honed her into a field medic of exceptional skill. She possesses encyclopedic knowledge of emergency care, triage protocols, anatomy, and pharmaceuticals — enabling her to diagnose and treat conditions rapidly, even in chaotic or resource-limited environments. Her powers complement, but never replace, her training. In hospitals or clinics, she uses her abilities discreetly — slowing a patient’s bleeding under the guise of pressure, jumpstarting a stalled heart with a hidden pulse of blood flow, or removing toxins so subtly it seems like the medication just kicked in faster.",
        book: "Book 2",
        subAbilities: [
          { name: "Discreet Intervention", description: "Yvonne can subtly use her powers during routine procedures — stopping internal bleeding before scans even detect it, flushing infections while administering IVs, or regulating a patient’s pressure during surgery without raising alarms. Her actions appear like miraculous instinct, earning praise while keeping her Deviance concealed.", book: "Book 2"},
          { name: "Rapid Assessment", description: "Trained to walk into unfamiliar environments and make snap evaluations, Yvonne can identify critical patients, spot hidden symptoms, and deploy treatment with almost preternatural accuracy. Her blood sense further enhances this ability, giving her an edge even over seasoned physicians.", book: "Book 2"},
          { name: "Cross-Specialty Adaptation", description: "Whether she’s in a trauma ward, pediatric clinic, psychiatric unit, or makeshift emergency shelter, Yvonne adjusts seamlessly — using her power to elevate every assignment. She can even detect when equipment is failing or medication is interacting poorly, and quietly correct course.", book: "Book 2"},
          { name: "Field Medic Reflex", description: "When no supplies are available, Yvonne can stabilize a patient using only her hands and her power — sealing wounds, easing pain, and keeping someone alive long enough to reach proper care. Her skillset allows her to bridge the gap between battlefield chaos and clinical order.", book: "Book 2"},
        ]
      },

      {
        name: "Blood Sense",
        description: "Yvonne can perceive and interpret the presence, flow, and composition of blood in her surroundings with extraordinary precision. This extrasensory awareness functions as a biological radar, allowing her to track heart rates, detect internal injuries, and assess the physical condition of nearby individuals — even through walls or obstructions. To her, every person is a vascular fingerprint: unique, rhythmic, and readable. The closer her proximity, the more detailed the insight she can gain.",
        book: "Book 2",
        subAbilities: [
          { name: "Hemodynamic Mapping", description: "Yvonne can generate a mental map of the circulatory layout within living bodies in her vicinity. This gives her real-time awareness of heart rate fluctuations, arterial blockages, or hemorrhaging. In triage or combat scenarios, she can prioritize patients without visible wounds by detecting who is internally at risk.", book: "Book 2"},
          { name: "Chemical Resonance", description: "Yvonne can detect and analyze foreign substances within a person’s bloodstream — from toxins and drugs to hormones and trace chemicals. She can determine not only the type of substance, but also its concentration, how long it’s been present, and whether the body is metabolizing it properly. This is invaluable for diagnosing overdoses, infections, or hormonal imbalances.", book: "Book 2"},
          { name: "Bloodline Signature", description: "With focused attention, Yvonne can recognize an individual's unique blood composition — enabling her to identify people she’s encountered before, or to track someone over distance by “tuning in” to their distinct vascular frequency. This also grants her a defensive edge against impersonators, clones, or shapeshifters.", book: "Book 2"},
          { name: "Pulse Echo", description: "By attuning her sense to the subtlest changes in rhythm and flow, Yvonne can detect lies, fear, or emotional shifts based on alterations in pulse rate and blood pressure. While not true mind-reading, this ability gives her a powerful diagnostic window into someone’s psychological or physiological state.", book: "Book 2"},
        ]
      },

      {
        name: "Blood Stopping",
        description: "Yvonne can selectively pause or restrict the flow of blood within specific regions of a living body. With pinpoint precision, she can slow or completely halt circulation in localized areas — whether to prevent someone from bleeding out, manage swelling, or neutralize a threat without causing permanent harm. Her ability to control vascular constriction and dilation is both a medical tool and a passive defense mechanism.",
        book: "Book 2",
        subAbilities: [
          { name: "Localized Flow Arrest", description: "Yvonne can temporarily stop the circulation of blood to a limb or organ to prevent blood loss, suppress pain, or stabilize trauma. This is especially useful in emergency situations where she needs to “freeze” a medical crisis until more extensive treatment can be applied.", book: "Book 2"},
          { name: "Pressure Isolation", description: "By manipulating blood pressure within a confined area, Yvonne can prevent a ruptured vessel from spreading damage or delay a stroke by minimizing circulation to a vulnerable brain region. She can also relieve internal pressure in hemorrhaging zones by strategically diverting blood.", book: "Book 2"},
          { name: "Neural Paralysis", description: "As a last resort, Yvonne can induce momentary paralysis by stopping blood flow to critical motor areas in an opponent’s body — causing limbs to go numb or lock up. This subdue-first, non-lethal method allows her to defend herself or protect others without inflicting direct harm.", book: "Book 2"},
          { name: "Anti-Coagulant Override", description: "In patients whose blood won’t clot due to disease or medication, Yvonne can manually slow flow long enough for her healing techniques or the body’s natural processes to catch up — effectively buying time during uncontrollable bleeding events.", book: "Book 2"},
        ]
      },

      {
        name: "Blood Removal",
        description: "Yvonne can draw blood out of a living body without the need for incisions or physical contact, guiding it telekinetically with surgical precision. Though capable of draining large quantities, she primarily uses this ability to extract small, targeted samples or remove harmful agents from the bloodstream. Her control allows her to isolate specific compounds at the molecular level, making this one of her most versatile healing techniques.",
        book: "Book 2",
        subAbilities: [
          { name: "Toxin Purge", description: "Yvonne can isolate and extract poisons, venoms, drugs, or synthetic chemicals directly from the bloodstream. Whether it’s a venomous bite, a chemical weapon, or a narcotic overdose, she can draw out the offending substance without harming the rest of the blood volume.", book: "Book 2"},
          { name: "Pathogen Filtration", description: "By attuning to the bio-signatures of viruses, bacteria, or parasites, Yvonne can remove infected or compromised blood cells while leaving healthy ones intact. This enables her to treat certain infections, prevent septic shock, or halt the spread of illness in its earliest stages.", book: "Book 2"},
          { name: "Clot Extraction", description: "In cases of stroke risk or cardiovascular blockage, Yvonne can remove clots from arteries and veins with absolute precision, restoring healthy circulation in moments that would otherwise require invasive surgery.", book: "Book 2"},
          { name: "Bloodborne Tracker", description: "When drawing blood from someone, Yvonne can analyze its energetic signature or foreign contaminants and use it to trace the origin — whether it’s a unique poison, rare disease, or synthetic enhancer. In some cases, this lets her identify the lab, species, or person responsible for creating the substance.", book: "Book 2"},
          { name: "Plasma Separation", description: "Yvonne can split blood into its component parts mid-air — isolating plasma, white cells, platelets, or red cells for use in specialized healing or scientific analysis. This turns her into a walking diagnostic lab.", book: "Book 2"},
        ]
      },

      {
        name: "Cross-Species Hemokinesis",
        description: "Yvonne possesses the rare ability to interpret and manipulate non-human blood — including alien, mutated, or chemically-altered circulatory systems. Unlike standard hemokinetics who are restricted to familiar biologies, she can attune to foreign blood signatures by rapidly analyzing their structure and adapting her manipulation in real time. Whether it's plasma-based, silicon-rich, or infused with exotic elements, Yvonne can recalibrate her control on a molecular level to interact with the lifeform’s unique physiology.",
        book: "Book 2",
        subAbilities: [
            { name: "Xeno-Blood Acclimation", description: "Yvonne can briefly study an unfamiliar blood type (alien or otherwise) and enter a rapid learning state, allowing her to safely manipulate it without causing cellular rejection, clotting errors, or metabolic shock. The more complex the blood, the more focus it requires — but once learned, she retains a baseline signature.", book: "Book 2"},
            { name: "Hybrid Compatibility", description: "In mixed-species individuals or genetically enhanced beings, Yvonne can navigate the overlapping systems without error, adjusting her interventions to stabilize them without overwhelming their unique biology.", book: "Book 2"},
            { name: "Exotic Pathogen Resistance", description: "Because of her understanding of non-terrestrial blood, Yvonne has developed a passive resilience to alien toxins, viral strains, and mutagens. Her immune system, aided by micro-blood manipulations, can “train” itself rapidly by breaking down the foreign compounds.", book: "Book 2"},
            { name: "Bio-Sync Override", description: "In rare emergencies, Yvonne can force compatibility between mismatched blood systems — temporarily stabilizing a transfusion, hybrid birth, or medical crisis where no compatible donor exists. This is extremely risky and taxing, but can save lives in desperate situations.", book: "Book 2"},
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
        name: "Wesley Johnson",
        role: "Friend",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
      },
      {
        name: "Kasen Malik Jr",
        role: "Friend",
        status: "Alive",
        link: "/characters/kasen",
        image: "/kasen.jpg"
      },
      {
        name: "Yvonne Montoya",
        role: "Friend",
        status: "Alive",
        link: "/characters/yvonne",
        image: "/yvonne.jpg"
      },
      {
        name: "Jade Stone",
        role: "Friend",
        status: "Alive",
        link: "/characters/jade",
        image: "/jade.jpg"
      },
      {
        name: "Stephen Reyes",
        role: "Friend",
        status: "Alive",
        link: "/characters/stephen",
        image: "/stephen.jpg"
      }
    ],
    uniforms: [
      
    ],
    tools: [
      {
        name: "",
        description: ""
      }
    ]
  };

export default yvonne;
