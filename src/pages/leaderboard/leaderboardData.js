export const PHASES = ["start", "mid", "end"];

export const PHASE_LABELS = {
  start: {
    short: "START",
    code: "PHASE-01",
    title: "Opening Index",
    description:
      "Initial S.T.A.T.I.C. combat assessment compiled from known capabilities and early KVI field data.",
  },

  mid: {
    short: "MID",
    code: "PHASE-02",
    title: "Midpoint Index",
    description:
      "Revised S.T.A.T.I.C. assessment following newly observed abilities, combat performance, and emerging threats.",
  },

  end: {
    short: "END",
    code: "PHASE-03",
    title: "Final Index",
    description:
      "Final KVI assessment compiled from all confirmed combat data available by the conclusion of the incident.",
  },
};

export const CHARACTERS = {
  axel: { name: "Axel Pierce" },
  azazel: { name: "Azazel Pierce" },
  aiden: { name: "Aiden Halden" },
  celeste: { name: "Celeste Masters" },
  gavin: { name: "Gavin Halden" },
  wesley: { name: "Wesley Johnson" },
  keith: { name: "Keith Powers" },
  danny: { name: "Danny Foster" },
  jade: { name: "Jade Stone" },
  nolan: { name: "Nolan Khan" },
  shi: { name: "Shi" },
  enzo: { name: "Enzo Antonov" },
  talia: { name: "Talia Yasin" },
  ajax: { name: "Ajax Johnson" },
  zoey: { name: "Zoey Pierce-Harris" },
  brianna: { name: "Brianna Gutiérrez" },
  jesus: { name: "Jesús Torres" },
  robert: { name: "Robert Garcia" },
};

function projection(label, confidence, basis) {
  return {
    label,
    confidence,
    basis,
  };
}

function record(points, reason, projectedOutput) {
  return {
    points,
    reason,
    projectedOutput,
  };
}

function buildPhase(records) {
  return Object.entries(records).map(([slug, data]) => {
    const character = CHARACTERS[slug];

    if (!character) {
      throw new Error(`Unknown leaderboard character: ${slug}`);
    }

    return {
      slug,
      name: character.name,
      points: data.points,
      reason: data.reason,
      projectedOutput: data.projectedOutput,
    };
  });
}

export const leaderboardPhases = {
  start: buildPhase({
    aiden: record(
      900,
      "Initial assessment places Halden among the highest-risk known subjects. High-output energy projection, defensive capability, and sustained combat potential establish an elite baseline.",
      projection(
        "1,500+",
        "MODERATE",
        "Known energy characteristics indicate a substantially higher output ceiling than currently demonstrated. Projection remains limited by incomplete maximum-output data."
      )
    ),

    celeste: record(
      900,
      "Masters combines high-output energy manipulation with teleportation, telepathic capability, and advanced close-quarters training. Her versatility places her at the top of the opening index.",
      projection(
        "1,500+",
        "HIGH",
        "Extensive combat experience and multiple established disciplines indicate significant reserve capability beyond the opening assessment."
      )
    ),

    gavin: record(
      800,
      "Energy absorption and reprojection provide considerable offensive and defensive potential. Existing data indicates substantial output capacity with room for further escalation.",
      projection(
        "2,000+",
        "MODERATE",
        "Absorption-based scaling prevents a fixed ceiling from being established. Available energy tolerance suggests substantially greater output is possible."
      )
    ),

    wesley: record(
      725,
      "Johnson demonstrates unusually broad vibrational applications across offense, defense, mobility, and environmental manipulation. Initial ranking remains conservative due to incomplete performance data.",
      projection(
        "1,800+",
        "LOW",
        "Observed vibrational versatility suggests considerable undeveloped capability. Projection remains uncertain due to limited data regarding maximum frequency and output tolerance."
      )
    ),

    keith: record(
      700,
      "High-temperature flame projection and sustained offensive pressure establish Powers as a significant direct-combat threat, though emotional instability affects consistency.",
      projection(
        "1,600+",
        "LOW",
        "Output appears strongly linked to emotional state. Recorded fluctuations indicate considerably greater destructive potential under extreme conditions."
      )
    ),

    nolan: record(
      700,
      "Extreme movement speed, momentum control, and high-velocity impact potential make Khan exceptionally dangerous in open combat environments.",
      projection(
        "1,200+",
        "MODERATE",
        "Acceleration and kinetic-impact data indicate additional performance capacity, though physiological tolerances remain incompletely documented."
      )
    ),

    enzo: record(
      700,
      "Mass-displacement capabilities provide significant battlefield control and make conventional defensive assumptions unreliable.",
      projection(
        "1,200+",
        "MODERATE",
        "Mass manipulation demonstrates considerable tactical scaling potential. Upper operational limits remain insufficiently tested."
      )
    ),

    danny: record(
      695,
      "Hyperaccelerated cognition, enhanced movement, and neuroelectric output produce a highly adaptive combat profile with substantial growth potential.",
      projection(
        "1,700+",
        "MODERATE",
        "Cognitive acceleration and neuroelectric performance indicate significant additional capacity if neural regulation and physical synchronization improve."
      )
    ),

    shi: record(
      690,
      "Regenerative capability, extensive combat experience, and lethal close-range efficiency place Shi near the upper portion of the initial index.",
      projection(
        "1,200+",
        "HIGH",
        "Established regenerative performance and combat history provide a relatively stable basis for projecting higher sustained engagement capability."
      )
    ),

    jade: record(
      650,
      "Genefrost manipulation provides reliable ranged offense, battlefield control, and defensive construction. Initial data suggests strong versatility with developing output.",
      projection(
        "1,500+",
        "MODERATE",
        "Genefrost production and control continue to develop. Existing observations suggest substantially greater battlefield coverage is achievable."
      )
    ),

    talia: record(
      650,
      "Duplication capability creates significant tactical uncertainty and numerical pressure, particularly during prolonged engagements.",
      projection(
        "1,100+",
        "LOW",
        "Threat potential scales with duplication volume and engagement duration. Maximum sustainable duplication remains unknown."
      )
    ),

    ajax: record(
      450,
      "Johnson possesses no known Deviant ability, but elite combat training, tactical experience, cybernetic augmentation, and advanced equipment maintain a measurable threat rating.",
      projection(
        "750+",
        "HIGH",
        "Projection is based on known equipment capabilities, tactical preparation, and established combat performance rather than biological power growth."
      )
    ),
  }),

  mid: buildPhase({
    axel: record(
      5000,
      "Newly observed multi-power integration exceeds all previous indexing assumptions. Axel demonstrates simultaneous access to several high-level combat systems and can transition between them with minimal delay.",
      projection(
        "10,000+",
        "LOW",
        "Current architecture supports multiple integrated power systems. Maximum chaining capacity and synthetic tolerance remain unknown."
      )
    ),

    gavin: record(
      1000,
      "Observed energy output and absorption performance exceed opening projections. Increased control and sustained projection justify a substantial upward revision.",
      projection(
        "5,000+",
        "MODERATE",
        "Continued increases in absorption tolerance and energy control support a substantially higher projected ceiling."
      )
    ),

    wesley: record(
      1000,
      "Additional vibrational applications and improved combat performance demonstrate greater versatility and destructive potential than the opening assessment recorded.",
      projection(
        "4,400+",
        "MODERATE",
        "New vibrational applications confirm that the opening assessment underestimated both versatility and maximum destructive potential."
      )
    ),

    shi: record(
      850,
      "Repeated field engagements confirm exceptional survivability and combat efficiency. Regeneration allows sustained performance beyond conventional attrition limits.",
      projection(
        "1,400+",
        "HIGH",
        "Repeated survival data provides strong evidence for continued high-output performance during prolonged engagements."
      )
    ),

    aiden: record(
      900,
      "No major revision required. Existing observations remain consistent with Halden's original high-risk assessment.",
      projection(
        "1,600+",
        "MODERATE",
        "Existing energy behavior continues to indicate reserve output beyond demonstrated combat levels."
      )
    ),

    celeste: record(
      900,
      "Masters remains an elite multi-discipline threat. Current observations confirm the opening assessment without requiring a significant numerical revision.",
      projection(
        "1,600+",
        "HIGH",
        "Known mastery across multiple combat disciplines continues to support a significantly higher operational ceiling."
      )
    ),

    keith: record(
      700,
      "Observed capability remains consistent with the opening index. Offensive potential is high, but no confirmed increase in reliable output has yet been recorded.",
      projection(
        "1,800+",
        "LOW",
        "Extreme emotional states continue to produce anomalous output indicators that exceed established baseline performance."
      )
    ),

    nolan: record(
      700,
      "Mobility and kinetic performance remain consistent with initial projections. No major capability expansion has yet been confirmed.",
      projection(
        "1,300+",
        "MODERATE",
        "Known acceleration mechanics indicate additional kinetic performance remains available beyond currently documented field output."
      )
    ),

    enzo: record(
      700,
      "Current data continues to support the opening mass-displacement assessment without sufficient evidence for numerical revision.",
      projection(
        "1,300+",
        "MODERATE",
        "Battlefield applications suggest additional scaling potential, though maximum mass-displacement limits remain unresolved."
      )
    ),

    danny: record(
      695,
      "Cognitive and neuroelectric capabilities remain highly effective, though current field data has not yet demonstrated a major increase beyond the opening baseline.",
      projection(
        "2,000+",
        "MODERATE",
        "Observed neurological processing and bioelectric generation continue to indicate substantial unrealized performance capacity."
      )
    ),

    jade: record(
      750,
      "Improved genefrost control and broader battlefield application demonstrate measurable growth in both offensive flexibility and defensive utility.",
      projection(
        "1,700+",
        "MODERATE",
        "Increasing precision and genefrost volume support a higher projected ceiling than the opening assessment."
      )
    ),

    talia: record(
      650,
      "Duplication performance remains consistent with existing projections. Tactical value remains high while raw individual output is unchanged.",
      projection(
        "1,200+",
        "LOW",
        "Maximum threat remains dependent on sustainable duplication volume, which has not yet been conclusively established."
      )
    ),

    robert: record(
      650,
      "Newly indexed subject. Phasing, extension, and disruption abilities provide strong infiltration and unconventional combat utility.",
      projection(
        "1,300+",
        "LOW",
        "Limited field data prevents precise modeling, but defensive bypass capability suggests considerably greater effective threat potential."
      )
    ),

    ajax: record(
      450,
      "Combat effectiveness remains stable. Johnson continues to compensate for human physiological limitations through technology, experience, and tactical preparation.",
      projection(
        "850+",
        "HIGH",
        "Known technological systems and extensive combat experience provide a stable projection despite fixed human physiological limitations."
      )
    ),

    jesus: record(
      100,
      "Newly indexed subject. Current combat information is limited, producing a provisional low-confidence assessment pending additional observation.",
      projection(
        "UNRESOLVED",
        "LOW",
        "Insufficient confirmed combat data exists to establish a defensible maximum-output estimate."
      )
    ),

    zoey: record(
      150,
      "Newly indexed subject. Existing observations indicate extraordinary latent potential, but demonstrated control and practical combat application remain limited at this stage.",
      projection(
        "UNQUANTIFIABLE",
        "LOW",
        "Available readings indicate an energy-generation ceiling beyond current modeling parameters. Demonstrated capability is insufficient to assign a reliable numerical projection."
      )
    ),
  }),

  end: buildPhase({
    axel: record(
      6000,
      "Final observations confirm Axel as the highest recorded KVI combat threat. Multi-power integration, extreme synthetic durability, and rapid ability chaining exceed every other indexed subject.",
      projection(
        "10,000+",
        "MODERATE",
        "Observed multi-power integration indicates additional performance remains available, though system instability limits confidence in sustained maximum output."
      )
    ),

    gavin: record(
      2258,
      "Large-scale increases in absorbed and projected energy output dramatically exceed earlier measurements. Final performance demonstrates one of the largest raw-power escalations recorded during KVI.",
      projection(
        "5,000+",
        "HIGH",
        "Repeated increases in absorption capacity and energy tolerance establish a strong upward growth pattern with no confirmed operational ceiling."
      )
    ),

    wesley: record(
      2003,
      "Johnson's final assessment rises sharply after demonstrating advanced vibrational versatility, improved durability, and increasingly destructive applications under combat pressure.",
      projection(
        "3,200+",
        "MODERATE",
        "Advanced vibrational applications indicate considerable remaining frequency and output potential beyond demonstrated KVI performance."
      )
    ),

    keith: record(
      2120,
      "Observed flame output and sustained combat performance escalate far beyond the opening baseline. Final engagements demonstrate substantially increased destructive capability.",
      projection(
        "3,000+",
        "MODERATE",
        "Late-stage output confirms that earlier assessments substantially underestimated maximum flame generation and sustained offensive capacity."
      )
    ),

    danny: record(
      1956,
      "Enhanced neuroelectric performance, processing speed, and combat movement produce a major increase over earlier assessments. Adaptability remains one of Foster's strongest advantages.",
      projection(
        "2,900+",
        "HIGH",
        "Improved regulation and synchronization demonstrate a repeatable growth path across cognitive, electrical, and movement systems."
      )
    ),

    jade: record(
      1907,
      "Significant refinement of genefrost control increases both precision and battlefield coverage. Final observations show major growth across offense, defense, and environmental control.",
      projection(
        "2,700+",
        "HIGH",
        "Consistent improvements in genefrost generation, precision, and battlefield control support continued measurable growth."
      )
    ),

    aiden: record(
      1516,
      "Final combat data demonstrates substantially greater output than earlier conservative estimates, resulting in a significant increase despite the emergence of stronger late-stage threats.",
      projection(
        "2,500+",
        "MODERATE",
        "Final output confirms significant reserve capacity. Maximum energy-state performance remains incompletely observed."
      )
    ),

    celeste: record(
      1505,
      "Masters' combined energy manipulation, teleportation, telepathy, and combat expertise remain exceptionally dangerous. Final indexing reflects confirmed battlefield performance.",
      projection(
        "2,100+",
        "HIGH",
        "Established mastery and extensive experience suggest additional output remains available, though her operational profile is comparatively well documented."
      )
    ),

    nolan: record(
      1403,
      "High-speed combat data confirms greater kinetic impact and tactical mobility than earlier projections, resulting in a substantial late-stage increase.",
      projection(
        "2,000+",
        "HIGH",
        "Late-stage movement data provides a reliable basis for projecting further increases in acceleration and kinetic impact."
      )
    ),

    shi: record(
      1402,
      "Regeneration and sustained combat efficiency continue to prove extremely difficult to counter. Final assessment increases after repeated survival of severe engagements.",
      projection(
        "1,800+",
        "HIGH",
        "Extensive field evidence establishes a relatively predictable upper range for sustained regenerative combat performance."
      )
    ),

    enzo: record(
      1402,
      "Expanded field observations demonstrate the strategic value and combat disruption produced by mass displacement, significantly increasing the final threat assessment.",
      projection(
        "2,000+",
        "MODERATE",
        "Expanded applications confirm significant scaling potential, though maximum displacement thresholds remain unverified."
      )
    ),

    talia: record(
      1393,
      "Duplication proves increasingly dangerous in large engagements where numerical multiplication can overwhelm conventional defensive responses.",
      projection(
        "2,000+",
        "MODERATE",
        "Large-engagement performance demonstrates substantially greater effective threat potential as duplication volume increases."
      )
    ),

    azazel: record(
      1304,
      "Newly indexed during the final incident. Available information confirms an extreme threat, but the limited observation window prevents a complete numerical assessment.",
      projection(
        "UNRESOLVED // EXTREME",
        "LOW",
        "Observation time is insufficient for numerical modeling. Recorded capabilities indicate the current index is not representative of maximum threat potential."
      )
    ),

    ajax: record(
      1252,
      "Final field performance significantly exceeds the original human baseline. Advanced equipment, tactical adaptation, and elite combat skill justify a major upward revision.",
      projection(
        "1,400+",
        "HIGH",
        "Observed field performance approaches the expected upper range of the current equipment platform and human operating limits."
      )
    ),

    brianna: record(
      1528,
      "Newly indexed subject. Large-area telepathic capability, mental defense, and sensory manipulation create an unusually high strategic threat profile despite limited direct-combat emphasis.",
      projection(
        "2,400+",
        "LOW",
        "Telepathic range and large-area influence make conventional output comparison unreliable. Strategic capability may substantially exceed the current combat-oriented index."
      )
    ),

    robert: record(
      1256,
      "Additional field data confirms strong unconventional combat capability. Phasing and disruption allow Garcia to bypass defenses that would stop conventionally stronger subjects.",
      projection(
        "1,800+",
        "MODERATE",
        "Continued observation confirms significant effective-threat scaling through defensive bypass and unconventional engagement methods."
      )
    ),

    jesus: record(
      200,
      "Additional information produces a modest increase, though available combat data remains limited and the assessment retains low confidence.",
      projection(
        "UNRESOLVED",
        "LOW",
        "Available information remains insufficient to establish a defensible maximum-output estimate."
      )
    ),

    zoey: record(
      150,
      "Latent potential remains exceptionally difficult to quantify. The index continues to reflect demonstrated and controlled capability rather than theoretical maximum output.",
      projection(
        "UNQUANTIFIABLE // EXTREME",
        "LOW",
        "Energy-generation readings exceed established projection models. Current index reflects controlled performance only and should not be interpreted as an estimated maximum."
      )
    ),
  }),
};

export function getRankedPhase(phaseIndex) {
  const phaseKey = PHASES[phaseIndex];

  if (!phaseKey) {
    return [];
  }

  return leaderboardPhases[phaseKey]
    .slice()
    .sort((a, b) => b.points - a.points)
    .map((character, index) => ({
      ...character,
      rank: index + 1,
    }));
}