import stats from "./stats.js";
import bio from "./bio.js";
import weaknesses from "./weaknesses.js";
import uniforms from "./valeriauniforms.js";
import relationships from "./relationships.js";
import tools from "./tools.js";
import feats from "./feats.js";

import abilities1 from "./abilities1.js";

const abilities = [...abilities1];

const valeria = {
  slug: "valeria",
  name: "Valeria Adair-Taylor",
  image: "/valeria.jpg",

  race: {
    KVI: {
      beginning: "Human",
      middle: "Human",
      end: "Human",
    },
  },

  profileType: "human",
  role: "Medical & Scientific Specialist",
  specialty: "Genius-Level Intellect",

  aliases: [],

  birthDate: "July 3, 1999",

  fancast: {
    actor: "Naomi Scott",
    note: "This is a non-commercial fancast reference only. The listed actor is not affiliated with or involved in this project.",
  },

  stats,
  bio,
  abilities,
  weaknesses,
  relationships,
  uniforms,
  tools,
  feats,
};

export default valeria;
