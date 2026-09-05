const weaknesses = [
  {
    name: "Limiter Instability",
    domain: "Energy Regulation",
    classification: "Physiological Limitation",
    release: "KVI",
    discovery: "beginning",

    description: `
Gavin is unable to safely operate past his 50% energy threshold due to his nuclear fusion energy spiraling out of control beyond that point. Once this limit is exceeded, his cellular energy regulation becomes unstable, causing severe surges that threaten to damage his body and destabilize his abilities. Even reaching the 50% mark required years of intense training, mental focus, and combat conditioning.
    `.trim(),

    progression: {
      KVII: {
        middle: {
          title: "Enhanced Limiter",

          description: `
After breaking through his 50% limiter, Gavin gained the ability to operate at a full 100% multiplier, but maintaining this state places extreme strain on his muscles, joints, and energy channels. Prolonged use risks severe fatigue, cellular degradation, and destabilization of his fusion core. While his control is vastly improved, 100% remains a high-burn state that he cannot sustain indefinitely without suffering physical and performance drawbacks.
          `.trim(),
        },

        end: {
          title: "Peak Limiter",

          description: `
After mastering his 100% multiplier, Gavin shattered his ceiling once more in his battle with Axel Pierce, reaching an unprecedented 199% output. This peak transformation pushes his physiology beyond its natural tolerance, flooding his body with overwhelming fusion energy. The backlash is brutal, causing rapid-onset exhaustion, cellular strain, and the risk of full collapse. At 199%, Gavin has only minutes, sometimes seconds, before his body begins shutting down, forcing him to end the fight quickly or risk being left completely vulnerable.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Nova Instability",

          description: `
Following his hypernova transformation, Gavin’s nova-infused physiology grants him unparalleled destructive potential but at a brutal cost. The extreme energy output of his nova state floods his body with heat and stress far beyond what even an Alpha Deviant can comfortably withstand. Prolonged or repeated use leads to rapid energy burnout, severe muscular and neural fatigue, and in extreme cases, temporary paralysis as his nervous system overloads.

After pushing his nova abilities to their limit, Gavin can be left barely able to stand, his body trembling under the strain and his reflexes dulled to dangerous levels. In the wrong moment, this exhaustion can turn the tide of battle against him, forcing him to choose between victory and survival.
          `.trim(),
        },
      },
    },

    subWeaknesses: [],
  },
];

export default weaknesses;
