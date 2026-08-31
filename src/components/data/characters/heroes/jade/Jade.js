import stats from "./stats.js";
import bio from "./bio.js";
import weaknesses from "./weaknesses.js";
import uniforms from "./jadeuniforms.js";
import relationships from "./relationships.js";
import tools from "./tools.js";
import feats from "./feats.js";

import abilities1 from "./abilities1.js";
import abilities2 from "./abilities2.js";
import abilities3 from "./abilities3.js";
import psychProfile from "./psychProfile.js";

const abilities = [...abilities1, ...abilities2, ...abilities3];

const jade = {
  id: "#003",
  slug: "jade",
  name: "Jade Stone",
  image: "/jade.jpg",
  class: "Beta Class Deviant",
  primaryPower: "Frost Genesis",

  aliases: [],

  birthDate: "December 5, 2000",

  fancast: {
    actor: "Alyah Chanelle Scott",
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
  psychProfile,
};

export default jade;
