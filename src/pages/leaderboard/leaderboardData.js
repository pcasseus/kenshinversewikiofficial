export const PHASES = ["start", "mid", "end"];

export const CHARACTERS = {
  axel: { name: "Axel Pierce", image: "/axel.jpg" },
  azazel: { name: "Azazel Pierce", image: "/azazel.jpg" },
  aiden: { name: "Aiden Summers", image: "/aiden.jpg" },
  celeste: { name: "Celeste Masters", image: "/celeste.jpg" },
  gavin: { name: "Gavin Summers", image: "/gavin.jpg" },
  wesley: { name: "Wesley Johnson", image: "/wesley.jpg" },
  keith: { name: "Keith Powers", image: "/keith.jpg" },
  danny: { name: "Danny Foster", image: "/danny.jpg" },
  jade: { name: "Jade Stone", image: "/jade.jpg" },
  nolan: { name: "Nolan Khan", image: "/nolan.jpg" },
  shi: { name: "Shi", image: "/stephen.jpg" },
  enzo: { name: "Enzo Antonov", image: "/enzo.jpg" },
  talia: { name: "Talia Yasin", image: "/talia.jpg" },
  ajax: { name: "Ajax Johnson", image: "/ajax.jpg" },
  zoey: { name: "Zoey Pierce-Harris", image: "/zoey.jpg" },
  brianna: {name: "Brianna Gutiérrez", image: "/brianna.jpg"},
  andrew: {name: "Andrew Torres", image: "/andrew.jpg"},
  robert: {name: "Robert Garcia", image: "/robert.jpg"},
};

function buildPhase(pointsMap) {
  return Object.entries(pointsMap).map(([slug, points]) => {
    const character = CHARACTERS[slug];

    return {
      slug,
      name: character.name, 
      image: character.image,
      points,
    };
  });
}

export const leaderboardPhases = {
  start: buildPhase({
    aiden: 900,
    celeste: 900,
    gavin: 800,
    wesley: 725,
    keith: 700,
    nolan: 700,
    enzo: 700,
    danny: 695,
    shi: 690,
    jade: 650,
    talia: 650,
    ajax: 450,
  }),

  mid: buildPhase({
    axel: 5000,
    gavin: 1000,
    wesley: 925,
    shi: 850,
    aiden: 900,
    celeste: 900,
    keith: 700,
    nolan: 700,
    enzo: 700,
    danny: 695,
    jade: 750,
    talia: 650,
    robert: 650,
    ajax: 450,
    andrew: 100,
    zoey: 150,
  }),

  end: buildPhase({
    axel: 6000,
    gavin: 2258,
    wesley: 2003,
    keith: 2120,
    danny: 1956,
    jade: 1907,
    aiden: 1516,
    celeste: 1505,
    nolan: 1403,
    shi: 1402,
    enzo: 1402,
    talia: 1393,
    azazel: 1304,
    ajax: 1252,
    brianna: 1528,
    robert: 1256,
    andrew: 200,
    zoey: 150,
  }),
};
