import stats from "./stats.js";
import bio from "./bio.js";
import weaknesses from "./weaknesses.js";
import uniforms from "./wesleyuniforms.js";
import relationships from "./relationships.js";
import tools from "./tools.js";
import feats from "./feats.js";

import abilities1 from "./abilities1.js";
import abilities2 from "./abilities2.js";
import abilities3 from "./abilities3.js";
import abilities4 from "./abilities4.js";
import abilities5 from "./abilities5.js";
import abilities6 from "./abilities6.js";
import abilities7 from "./abilities7.js";

import psychProfile from "./psychProfile.js";

const abilities = [
  ...abilities1,
  ...abilities2,
  ...abilities3,
  ...abilities4,
  ...abilities5,
  ...abilities6,
  ...abilities7,
];

const wesley = {
  id: "#001",
  slug: "wesley",
  name: "Wesley Johnson",
  image: "/wesley.jpg",
  class: "Alien [Species Unknown]",
  primaryPower: "Vibration Manipulation",

  aliases: ["Subject X9", "Ryctor"],

  birthDate: "Classified",

  fancast: {
    actor: "Keith Powers",
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

export default wesley;
