const allCharacters = [
  {
    name: "Wesley Johnson",
    slug: "wesley",
    image: "/wesley.jpg",
    book: "Book 1",

    galleryStyle: {
      accent: "#facc15",
      secondary: "#eab308",
      glow: "rgba(250, 204, 21, 0.20)",
      motif: "vibration",
      signature: "Unknown Signature",
    },
  },

  {
    name: "Gavin Halden",
    slug: "gavin",
    image: "/gavin.jpg",
    book: "Book 1",

    galleryStyle: {
      accent: "#3b82f6",
      secondary: "#67e8f9",
      glow: "rgba(59, 130, 246, 0.2)",
      motif: "fusion",
      signature: "Fusion Signature",
    },
  },

  {
    name: "Jade Stone",
    slug: "jade",
    image: "/jade.jpg",
    book: "Book 1",

    galleryStyle: {
      accent: "#7dd3fc",
      secondary: "#e0f2fe",
      glow: "rgba(125, 211, 252, 0.18)",
      motif: "frost",
      signature: "Cryogenic Signature",
    },
  },

  {
    name: "Keith Powers",
    slug: "keith",
    image: "/keith.jpg",
    book: "Book 1",

    galleryStyle: {
      accent: "#f97316",
      secondary: "#fde047",
      glow: "rgba(249, 115, 22, 0.24)",
      motif: "thermal",
      signature: "Thermal Signature",
    },
  },

  {
    name: "Danny Foster",
    slug: "danny",
    image: "/danny.jpg",
    book: "Book 1",

    galleryStyle: {
      accent: "#84cc16",
      secondary: "#39ff14",
      glow: "rgba(132, 204, 22, 0.18)",
      motif: "neural",
      signature: "Neural Signature",
    },
  },

  {
    name: "Zoey Pierce-Harris",
    slug: "zoey",
    image: "/zoey.jpg",
    book: "Book 1",

    galleryStyle: {
      accent: "#ffffff",
      secondary: "#ffffff",
      glow: "rgba(255, 255, 255, 0.16)",
      motif: "energySpectrum",
      signature: "Energy Signature",
      spectrum: [
        "#ef4444",
        "#f97316",
        "#facc15",
        "#22c55e",
        "#06b6d4",
        "#3b82f6",
        "#8b5cf6",
        "#d946ef",
      ],
    },
  },

  {
    name: "Valeria Adair-Taylor",
    slug: "valeria",
    image: "/valeria.jpg",
    book: "Book 1",

    galleryStyle: {
      accent: "#ec4899",
      secondary: "#f9a8d4",
      glow: "rgba(236, 72, 153, 0.2)",
      motif: "analysis",
      signature: "Analysis Record",
    },
  },

  {
    name: "William Hutton",
    slug: "william",
    image: "/william.jpg",
    book: "Book 1",

    galleryStyle: {
      accent: "#21468B",
      secondary: "#AE1C28",
      glow: "rgba(33, 70, 139, 0.22)",
      motif: "engineering",
      signature: "Engineering Record",
    },
  },

  /**
  {
    name: "Shi",
    slug: "shi",
    image: "/stephen.jpg",
    book: "Book 1",
  },
  {
    name: "Aiden Halden",
    slug: "aiden",
    image: "/aiden.jpg",
    book: "Book 1",
  },
  {
    name: "Nolan Khan",
    slug: "nolan",
    image: "/nolan.jpg",
    book: "Book 1",
  },
  {
    name: "Enzo Antonov",
    slug: "enzo",
    image: "/enzo.jpg",
    book: "Book 1",
  },
  {
    name: "Talia Yassin",
    slug: "talia",
    image: "/talia.jpg",
    book: "Book 1",
  },
  {
    name: "Celeste Masters",
    slug: "celeste",
    image: "/celeste.jpg",
    book: "Book 1",
  },
  {
    name: "Azazel Pierce",
    slug: "azazel",
    image: "/azazel.jpg",
    book: "Book 1",
  },
  {
    name: "Axel Pierce",
    slug: "axel",
    image: "/axel.jpg",
    book: "Book 1",
  },
  {
    name: "Emely Cortez",
    slug: "emely",
    image: null,
    book: "Book 1",
  },
  {
    name: "Alexa Peña",
    slug: "alexa",
    image: null,
    book: "Book 1",
  },
  {
    name: "Ciara Jackson",
    slug: "ciara",
    image: "/ciara.jpg",
    book: "Book 1",
  },
  {
    name: "Ezequiel Figueroa",
    slug: "ezequiel",
    image: "/ezequiel.jpg",
    book: "Book 1",
  },
  {
    name: "Elena Santiago",
    slug: "elena",
    image: "/elena.jpg",
    book: "Book 1",
  },
  {
    name: "Kiely Robinson",
    slug: "kiely",
    image: "/kiely.jpg",
    book: "Book 1",
  },
  {
    name: "Jesús Torres",
    slug: "jesús",
    image: "/jesús.jpg",
    book: "Book 1",
  },
  {
    name: "Robert Garcia",
    slug: "robert",
    image: "/robert.jpg",
    book: "Book 1",
  },
  {
    name: "Justin Frasier",
    slug: "justin",
    image: "/justin.jpg",
    book: "Book 1",
  },
  {
    name: "Ajax Johnson",
    slug: "ajax",
    image: "/ajax.jpg",
    book: "Book 1",
  },
  {
    name: "Samuel Youssef",
    slug: "samuel",
    image: "/samuel.jpg",
    book: "Book 1",
  },
  {
    name: "Teddy Johnson",
    slug: "teddy",
    image: "/teddy.jpg",
    book: "Book 1",
  },
  {
    name: "Torin Rossi",
    slug: "torin",
    image: "/torin.jpg",
    book: "Book 1",
  },
  {
    name: "Ivan Dvořák",
    slug: "ivan",
    image: "/ivan.jpg",
    book: "Book 1",
  },
  {
    name: "Logan Halden",
    slug: "logan",
    image: "/logan.jpg",
    book: "Book 1",
  },
  {
    name: "Stephen Reyes",
    slug: "stephen",
    image: "/stephen.jpg",
    book: "Book 1",
  },
  {
    name: "Brianna Gutiérrez",
    slug: "brianna",
    image: "/brianna.jpg",
    book: "Book 1",
  },
  {
    name: "Maximus Stryker",
    slug: "maximus",
    image: "/maximus.jpg",
    book: "Book 1",
  },
  {
    name: "Charles McCreary",
    slug: "charles",
    image: "/charles.jpg",
    book: "Book 1",
  },
  {
    name: "Jackson McCafferty",
    slug: "jackson",
    image: "/jackson.jpg",
    book: "Book 1",
  },
  {
    name: "Dominic Grill",
    slug: "dominic",
    image: "/dominic.jpg",
    book: "Book 1",
  },
  {
    name: "Amara Shaw",
    slug: "amara",
    image: "/amara.jpg",
    book: "Book 1",
  },
  {
    name: "Damien Darkwood",
    slug: "damien",
    image: "/damien.jpg",
    book: "Book 1",
  },
  {
    name: "Lola Wilde",
    slug: "lola",
    image: "/lola.jpg",
    book: "Book 1",
  },
  {
    name: "Warren Halden",
    slug: "warren",
    image: "/warren.jpg",
    book: "Book 1",
  },
  */
];

export { allCharacters };
