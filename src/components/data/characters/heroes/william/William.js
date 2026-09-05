import stats from "./stats.js";
import bio from "./bio.js";
import weaknesses from "./weaknesses.js";
import uniforms from "./williamuniforms.js";
import relationships from "./relationships.js";
import tools from "./tools.js";
import feats from "./feats.js";

import abilities1 from "./abilities1.js";

const abilities = [...abilities1];

const william = {
  slug: "william",
  name: "William Hutton",
  image: "/william.jpg",

  race: {
    KVI: {
      beginning: "Human",
      middle: "Human",
      end: "Human",
    },
  },

  profileType: "human",

  role: "Engineering & Technology Specialist",

  specialty: "Omni-Technical Intellect",

  aliases: [],

  birthDate: "November 9, 1999",

  fancast: {
    actor: "Charlie Rowe",

    note:
      "This is a non-commercial fancast reference only. The listed actor is not affiliated with or involved in this project.",
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

export default william;
