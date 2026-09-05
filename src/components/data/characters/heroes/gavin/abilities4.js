const abilities = [
  {
    name: "Nova Healing",
    domain: "Nova Physiology",
    classification: "Physiology",
    release: "KVIII",
    discovery: "end",

    description: `
After his near-death experience and the mutation triggered by his hypernova transformation, Gavin developed a potent regenerative ability fueled by his nova-infused physiology. Wounds and conditions that would normally require weeks or months to recover from, such as organ failure, nerve damage, catastrophic blood loss, or severe burns, can be reversed in moments by channeling a significant reservoir of nova energy into the affected area.

This regeneration extends beyond physical trauma, allowing him to purge toxins, neutralize radiation exposure, and even temporarily halt the progression of degenerative conditions.
    `.trim(),

    subAbilities: [
      {
        name: "Restorative Projection",
        domain: "Nova Physiology",
        classification: "Application",
        release: "KVIII",
        discovery: "end",

        description: `
No longer limited to healing himself, Gavin can extend his radiant blue-gold nova energy into others through direct contact, stimulating rapid cellular regeneration, stabilizing life-threatening injuries, and repairing critical damage in seconds.

The gold frequency within his nova energy is uniquely attuned to biological restoration, engineered by his own physiology to reconstitute damaged systems at their core. In moments of crisis, Gavin becomes a living recovery engine, capable of saving lives with the same intensity and focus he uses to eliminate threats on the battlefield.
        `.trim(),
      },
    ],
  },
];

export default abilities;
