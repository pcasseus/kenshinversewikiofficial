import stats from "./stats.js";
import bio from "./bio.js";
import weaknesses from "./weaknesses.js";
import uniforms from "./gavinuniforms.js";
import relationships from "./relationships.js";
import tools from "./tools.js";
import feats from "./feats.js";

import abilities1 from "./abilities1.js";
import abilities2 from "./abilities2.js";
import abilities3 from "./abilities3.js";
import abilities4 from "./abilities4.js";

import psychProfile from "./psychProfile.js";

const abilities = [...abilities1, ...abilities2, ...abilities3, ...abilities4];

const gavin = {
  id: "#002",
  slug: "gavin",
  name: "Gavin Summers",
  image: "/gavin.jpg",
  class: "Alpha Class Deviant",
  primaryPower: "Nuclear Fusion Energy Absorption",

  aliases: ["Golden Boy", "Rayet"],

  birthDate: "August 10, 1999",

  fancast: {
    actor: "Lucas Till",
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

export default gavin;
