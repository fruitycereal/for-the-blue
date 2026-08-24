export type ChoiceOption = { text: string; correct: boolean; consequence: string };
export type Stage =
  | { type: "info"; kicker: string; title: string; body: string }
  | { type: "choice"; kicker: string; title: string; options: ChoiceOption[] };

export const stages: Stage[] = [
  {
    type: "info",
    kicker: "The problem",
    title: "Every year, plastic pours into the ocean",
    body: "An estimated 8–11 million tonnes of plastic enter the ocean annually, roughly a garbage truck's worth every minute. Most of it never fully disappears; it just breaks into smaller pieces.",
  },
  {
    type: "info",
    kicker: "Where it comes from",
    title: "Not just litter on the beach",
    body: 'The biggest sources are often invisible: single-use packaging swept in by rivers and storm drains, abandoned fishing gear ("ghost nets"), and microfibers washed out of synthetic clothing.',
  },
  {
    type: "choice",
    kicker: "Quick check",
    title: "You find a plastic bottle on the sand. What actually helps most?",
    options: [
      { text: "Leave it, one bottle won't matter", correct: false, consequence: "One bottle seems small, but plastic breaks down into microplastics that enter the food chain, and \"someone else will pick it up\" is how beaches stay littered." },
      { text: "Pick it up and dispose of or recycle it properly", correct: true, consequence: "Exactly. Individual pickups matter less for volume than for breaking the cycle before it becomes microplastic, and it's the first habit that leads to bigger organized action." },
      { text: "Bury it so it's out of sight", correct: false, consequence: "Burying it doesn't stop it from leaching into sand and groundwater, and tides often re-expose buried debris anyway." },
    ],
  },
  {
    type: "info",
    kicker: "The hidden scale",
    title: "It gets smaller, not smaller in impact",
    body: "Sunlight and waves break plastic into microplastics, fragments under 5mm. These are now found in fish, sea salt, drinking water, and human blood. Marine animals ingest them mistaking them for food.",
  },
  {
    type: "choice",
    kicker: "Quick check",
    title: "Which single action removes the most plastic from ever entering the ocean?",
    options: [
      { text: "Recycling more at home", correct: false, consequence: "Recycling helps, but global recycling rates for plastic remain low (under 10% historically), it doesn't stop the upstream flow." },
      { text: "Reducing single-use plastic before you buy it", correct: true, consequence: "Right. Preventing plastic from being produced or purchased in the first place avoids the waste problem entirely, rather than managing it after the fact." },
      { text: "Using biodegradable plastic bags", correct: false, consequence: "Most \"biodegradable\" plastics still need industrial composting facilities to break down, in the ocean, many behave almost identically to regular plastic." },
    ],
  },
  {
    type: "info",
    kicker: "From screen to shore",
    title: "You've learned the problem. Want to take it beyond the screen?",
    body: "Understanding the issue is step one. The next step is one real action, something you actually do, that FTB can record as part of a growing, documented community impact.",
  },
];

export const actionTiers: Record<string, { name: string; desc: string }[]> = {
  Easy: [
    { name: "Learn about an issue", desc: "Spend 20 minutes learning about a specific local marine or Arctic issue from a reliable source." },
    { name: "Share a reliable resource", desc: "Share one credible article, video, or report about ocean/Arctic conservation with your network." },
    { name: "Educate a friend", desc: "Explain one thing you learned here to a friend or family member, in person." },
  ],
  Medium: [
    { name: "Household or school waste audit", desc: "Track and categorize waste produced over a few days at home or school." },
    { name: "Create an educational activity", desc: "Build a short lesson, poster, or presentation on marine pollution for others." },
    { name: "Join an organized conservation activity", desc: "Take part in an existing local environmental event or club activity." },
  ],
  Bigger: [
    { name: "Beach or waterway cleanup", desc: "Organize or join a cleanup of a local beach, river, or shoreline." },
    { name: "Organize a community activity", desc: "Lead a group event, a cleanup, workshop, or awareness day in your area." },
    { name: "Volunteer with a conservation organization", desc: "Contribute time to a local or international marine/Arctic conservation group." },
    { name: "Fundraise for conservation", desc: "Run a small fundraiser and direct proceeds to a conservation organization." },
  ],
};

export const tiers = [
  { n: 1, icon: "🌱", label: "Digital badge" },
  { n: 3, icon: "🌊", label: "Digital recognition" },
  { n: 5, icon: "🐋", label: "Exclusive digital merch" },
  { n: 10, icon: "👕", label: "FTB physical merch" },
  { n: 25, icon: "🌎", label: "Higher-level recognition" },
];
