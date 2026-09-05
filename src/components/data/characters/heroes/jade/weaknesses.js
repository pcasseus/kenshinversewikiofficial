const weaknesses = [
  {
    name: "Genefrost Lockout",
    domain: "Cryogenic Physiology",
    classification: "Vulnerability",
    release: "KVI",
    discovery: "beginning",

    description: `
While Jade is highly durable on the outside, the cryogenic core near her heart remains a critical vulnerability. A direct, concentrated strike to that region can destabilize her ability to regulate genefrost entirely. When this happens, she enters a feedback loop where her frost output surges unpredictably, locking her muscles and clouding her senses in a spreading freeze that begins internally and rapidly consumes outward motion. Though temporary, this shutdown leaves her momentarily helpless.
    `.trim(),

    progression: {
      KVII: {
        end: {
          title: "Peak Genefrost Lockout",

          description: `
At this level, the core becomes more efficient and better protected by surrounding genefrost-reinforced tissue. While it is harder to strike and more resistant to sudden overload, the consequence of core disruption becomes more severe. A successful hit can trigger a much stronger reaction, often resulting in visible crystallization across her torso and temporary loss of voluntary motor function until her core stabilizes.
          `.trim(),
        },
      },

      KVIII: {
        end: {
          title: "Absolute Genefrost Lockout",

          description: `
Even in her most refined form, the cryogenic core remains the one point she cannot fully armor. Though incredibly stable under pressure, if breached, the resulting backlash becomes exponentially more dangerous. Rather than a localized freeze, her entire cryogenic system could seize at once, suspending her in a semi-conscious frozen state. This is not simply a weakness. It is the one scenario capable of silencing her power entirely.
          `.trim(),
        },
      },
    },
  },

  {
    name: "Genefrost Intangibility Limitation",
    domain: "Genefrost Intangibility",
    classification: "Ability Limitation",
    release: "KVI",
    discovery: "beginning",

    description: `
While it offers excellent utility in ice-covered environments, this ability is limited to matter that has been frozen or infused with genefrost and cannot be used to pass through non-frozen surfaces.
    `.trim(),
  },

  {
    name: "Deviant Dampening Technology",
    domain: "Deviant Physiology",
    classification: "External Vulnerability",
    release: "KVI",
    discovery: "beginning",

    description: `
Like all Deviants, Jade remains susceptible to suppression technology designed to neutralize enhanced abilities. Whether in the form of reinforced cuffs, magnetic dampening fields, or proximity-based disruptors, these tools can temporarily sever her link to her cryogenic output. The effect is immediate and indiscriminate, often leaving her unable to summon or control genefrost until the suppression field is disabled. No evolution in her power grants immunity to this, as it is a universal vulnerability across her kind.
    `.trim(),
  },
];

export default weaknesses;
