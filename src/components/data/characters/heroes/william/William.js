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
  id: "#008",
  slug: "william",
  name: "William Hutton",
  image: "/william.jpg",
  class: "Human Class",
  primaryPower: "Omni-Technical Intellect",

  aliases: [],

  birthDate: "November 9, 1999",

  fancast: {
    actor: "Charlie Rowe",
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

export default william;
