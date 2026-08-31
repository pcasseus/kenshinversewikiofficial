const gabriel = {
  id: "#039",
  name: "Gabriel Walker",
  slug: "gabriel",
  image: "/gabriel.jpg",
  class: "Beta",
  status: "Alive",
  tagline: "",
  primaryPower: "Polarity Manipulation",
  stats: {
    affiliation: "Unaffiliated",
    gender: "Male",
    height: "6'0\"",
    weight: "165 lbs",
    eyes: "Dark Brown",
    hair: "Black",
    "place of birth": "Augusta, Georgia"
  },
    abilities: [
      { name: "Beta Deviant Physiology", description: "Beta-class Deviants form the backbone of the powered population. Their abilities manifest later—usually between ages 15 and 16—and include a wide array of enhancements across physical, elemental, or mental categories. Many Betas possess accelerated healing, increased strength, speed, or environmental adaptation, while some evolve into mid-tier powerhouses capable of manipulating matter, energy, or perception. Though not as innately powerful as Alphas, Betas exhibit consistent growth and high survivability. With sufficient training and field experience, Betas can overwhelm entire squads or neutralize Omega threats with ease. They are valued for their balance of raw ability and trainability, and serve as the standard.", book: "Book 2" },
      { name: "Polarity Manipulation", description: "Gabriel commands the fundamental forces of repulsion and attraction — not as conventional energy, but as raw directional force akin to a stylized manipulation of gravity. His power is the control of spatial relationships: the ability to push, pull, suspend, or collapse momentum itself, all through precise control over the polar dynamics of objects, people, and space. This force is visually expressed through twin lightning phenomena — black for repulsion, white for attraction — each crackling with force-distortion rather than electric charge. These colors aren’t elemental but symbolic: black lightning erupts as a visual echo of force rejection, while white lightning coils with gravitational allure. When Gabriel acts, he's not merely casting bolts — he’s rewriting the physics of motion, dictating whether things collide, scatter, or converge. His battlefield is a plane of shifting vectors, where he controls the tide not with strength, but with the certainty of physical law made manifest through him.", book: "Book 2"},
      
      {
        name: "Repulsion Aura (Black Aura)",
        description: "Gabriel’s Repulsion Aura surrounds him in a constantly shifting field of outward force that instinctively pushes away anything that enters its radius. This black aura repels approaching enemies, throwing or swaying them out of his immediate vicinity with an invisible burst of momentum. It isn’t just defensive — it’s an active manipulation of localized force, bending the space around him into a buffer zone of kinetic resistance.",
        book: "Book 2",
        subAbilities: [
          { name: "Gravity Disruption", description: "Gabriel can briefly distort the gravitational field of an opponent within arm’s reach, using his hands as conductors to deliver a targeted push that sends them flying back. The effect mimics a sudden spike in gravitational rejection, hurling them with force.", book: "Book 2"},
          { name: "Forcefield Reflex", description: "While channeling the black aura, Gabriel is surrounded by a natural force field that deflects incoming projectiles or physical attacks. This shield isn’t absolute — but unless the attack is powerful enough to breach the polarity field, it will be repelled or redirected.", book: "Book 2"},
          { name: "Impact Arrest", description: "Gabriel can raise his hand to halt an oncoming object or opponent, not stopping them entirely, but significantly reducing their forward momentum — often enough to deflect, destabilize, or stagger them before they can land a hit.", book: "Book 2"},
          { name: "Polarity Glide", description: "By focusing the repulsive force downward in controlled bursts, Gabriel can lift off the ground and glide with agile maneuverability. This technique allows him to reposition mid-combat, evade danger, or traverse terrain without ever needing to touch the ground.", book: "Book 2"},
        ]
      },

      {
        name: "Attraction Aura (White Aura)",
        description: "Gabriel’s Attraction Aura allows him to generate concentrated zones of pull — but unlike its repulsive counterpart, this force only activates through deliberate motion. By gesturing with his hands, he can seize physical objects or opponents and draw them toward him with powerful, targeted bursts of force. This aura functions like a precision-controlled gravitational tether, enabling him to manipulate the battlefield by collapsing space between himself and his target.",
        book: "Book 2",
        subAbilities: [
          { name: "Directional Redirect", description: "Gabriel can intercept an object mid-pull and abruptly alter its trajectory, using his aura to swing it around or fling it toward a new target. This allows him to weaponize debris, opponents, or incoming attacks through sheer force manipulation.", book: "Book 2"},
          { name: "Reactive Pull", description: "When foreign forces — like energy blasts, weapons, or high-velocity matter — enter his immediate vicinity, the Attraction Aura instinctively flares to life. Though not consciously activated, it reacts defensively to proximity, subtly bending space in a way that draws in and destabilizes the intruding object, making it easier for Gabriel to catch, redirect, or counter.", book: "Book 2"},
        ]
      },

      {
        name: "Polar Equilibrium",
        description: "In moments of heightened focus and deliberate control, Gabriel can enter a rare and demanding state known as the Merged Polarity Aura. In this form, his body becomes the axis point between opposing forces — attraction and repulsion coexisting in perfect tension. The aura visually splits across his form, with one side radiating a subtle inward pull and the other emitting a continuous outward push. This duality allows Gabriel to simultaneously draw in and repel targets with independent control, amplifying his ability to manipulate the battlefield with surgical precision.",
        book: "Book 2",
        subAbilities: [
          { name: "Dual-Handed Control", description: "Gabriel’s left and right sides function as separate force conduits — one pulling, one pushing — allowing him to catch an object with one hand and launch it with the other in a seamless motion.", book: "Book 2"},
          { name: "Amplified Sub-Ability Access", description: "While in this state, all prior sub-abilities from both auras become stronger and more fluid. His repulsion field grows more resilient to powerful impacts, while his attraction can manipulate heavier masses or faster-moving threats.", book: "Book 2"},
          { name: "Polarity Lock", description: "By channeling both forces at once into a single target — one side pulling while the other pushes — Gabriel can create a momentary suspension effect, freezing the object or enemy in place mid-air as the opposing forces cancel each other out.", book: "Book 2"},
        ]
      },
      
      {
        name: "Master Combatant",
        description: "Gabriel is a self-taught fighter whose combat style is built around an intuitive understanding of his polarity abilities. Rather than overwhelming opponents with brute strength, he relies on control, timing, and the natural ebb and flow of force. His fighting technique flows with his aura — manipulating space, redirecting momentum, and exploiting openings as they appear. Every movement is calculated, every gesture a potential reversal.",
        book: "Book 2",
        subAbilities: [
          { name: "Reactive Guard", description: "Gabriel prefers to let his opponents come to him. By observing their movement and closing distance, he adapts in real-time — responding with deflections, redirects, or sudden force shifts that completely throw off their rhythm.", book: "Book 2"},
          { name: "Evasive Flow", description: "With precise footwork and seamless aura manipulation, Gabriel is exceptionally difficult to land a clean hit on. He slips through tight spaces, leans just out of reach, or subtly adjusts his polarity field to tilt momentum in his favor. Fighting him is like trying to strike something the battlefield itself is protecting.", book: "Book 2"},
        ]
      },

    ],
      weaknesses: [
      {
        name: "Power Limit",
        description: "Wesley can only generate so much vibration before overloading."
      },
      {
        name: "Strain Under Overwhelming Force",
        description: "He cannot absorb impacts above planetary scale."
      }
    ],
    relationships: [
      {
        name: "Anthony Delgado",
        role: "Friend",
        status: "Alive",
        link: "/characters/anthony",
        image: "/anthony.jpg"
      },
      {
        name: "Jose Rivera",
        role: "Friend",
        status: "Alive",
        link: "/characters/jose",
        image: "/jose.jpg"
      },
      {
        name: "Mathew Salazar",
        role: "Friend",
        status: "Alive",
        link: "/characters/mathew",
        image: "/mathew.jpg"
      },
      {
        name: "Wesley Johnson",
        role: "Friend",
        status: "Alive",
        link: "/characters/wesley",
        image: "/wesley.jpg"
      },
    ],
    uniforms: [
      {
        name: "",
        description: ""
      }
    ],
    tools: [
      {
        name: "",
        description: ""
      }
    ]
  };

export default gabriel;
