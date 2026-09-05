const stats = {
  base: {
    gender: "Male",
    placeOfBirth: "Unknown",
  },

  appearance: {
    KVI: {
      beginning: {
        height: "5'9\"",

        build:
          "Naturally lean and light-framed with clear muscle definition. Toned but not bulky.",

        hair: {
          style: "Tight curls with a clean shape-up and modest taper fade.",
          color: "Black",
          facialHair: "None",
        },

        eyes: "Dark brown",

        skinTone: "Medium-deep brown",

        identifyingMarks: {
          summary:
            "Faint experimental and training scars concentrated across both arms, the right shoulder, right forearm, left wrist, and knuckles.",

          scars: [
            {
              id: "scar-inner-elbows",
              location: "Inner elbows (both arms)",
              description:
                "Tiny, pale pockmarks from repeated needle insertions. Most visible when sleeves are rolled up. The left arm has one more pronounced scar that is slightly deeper, suggesting an experimental implant placement or extraction.",
            },
            {
              id: "scar-upper-biceps",
              location: "Upper biceps (outer arms)",
              description:
                "A pair of faint, round scars where skin samples were removed. They resemble very small, faded cigarette burns and are typically covered unless he is wearing a tank top.",
            },
            {
              id: "scar-shoulder-back",
              location: "Back of right shoulder",
              description:
                "A subtle raised line consistent with a fluid draw procedure. Easy to miss unless specifically looked for.",
            },
            {
              id: "scar-micro-fractures",
              location: "Both arms (structural)",
              description:
                "Residual effects from repeated arm fractures sustained three to five years prior to KVI. Injuries occurred during training, capture attempts, or powered accidents. Fully healed but still carry structural stress markers.",
            },
            {
              id: "scar-forearm-ulna",
              location: "Right forearm (ulna)",
              description:
                "A slight deformity visible only at certain angles. A small, non-raised ridge along the bone where a fracture healed incorrectly before being re-broken and realigned. Occasionally aches during high-frequency vibration output.",
            },
            {
              id: "scar-wrist-left",
              location: "Left wrist",
              description:
                "A barely noticeable hairline scar near the base of the wrist, consistent with a surgical screw insertion or external brace following an intense training accident.",
            },
            {
              id: "scar-knuckles",
              location: "Knuckles (both hands)",
              description:
                "Healed-over abrasions and hardened skin from combat training and repeated resistance. Not traditional scarring, but a clear indicator of frequent close-quarters engagement.",
            },
          ],
        },
      },

      /*
       * For when Wesley has a meaningful
       * visual change during KVI.
       *
       * middle: {
       *   hair: {
       *     style: "...",
       *   },
       * },
       *
       * end: {
       *   eyes: "...",
       *   hair: {
       *     style: "...",
       *   },
       * },
       */
    },

    /*
     * Future appearance records stay in the data,
     * but ProfileHeader currently exposes KVI only.
     *
     * KVII: {
     *   beginning: {},
     * },
     *
     * KVIII: {
     *   beginning: {},
     * },
     */
  },
};

export default stats;
