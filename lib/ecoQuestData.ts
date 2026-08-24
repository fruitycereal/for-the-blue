export type EcoOption = {
  letter: "A" | "B" | "C";
  text: string;
  ecosystem: number;
  community: number;
  economy: number;
  explanation: string;
};

export type EcoQuestion = {
  id: number;
  title: string;
  prompt: string;
  focus: string;
  options: EcoOption[];
};

// Suggested scoring — every choice trades off Ecosystem Health, Community
// Wellbeing, and Economy against each other, so there's no single "correct"
// option. Tune these numbers anytime, nothing else depends on the exact values.
export const ecoQuestions: EcoQuestion[] = [
  {
    id: 1,
    title: "Coastal Resort",
    prompt: "A company wants to build a resort near a mangrove forest. What would you do?",
    focus: "Mangroves, coastal habitats & sustainable tourism",
    options: [
      { letter: "A", text: "Approve it", ecosystem: -20, community: -5, economy: 20, explanation: "The resort is built without limits — mangroves are cleared, but jobs and tourism revenue increase quickly." },
      { letter: "B", text: "Approve it with environmental restrictions", ecosystem: 5, community: 10, economy: 10, explanation: "Habitats are protected, jobs and tourism grow sustainably, and safeguards limit the damage." },
      { letter: "C", text: "Reject it and protect the area", ecosystem: 15, community: 5, economy: -5, explanation: "The mangrove forest stays intact, though the community loses out on potential tourism income." },
    ],
  },
  {
    id: 2,
    title: "Overfishing",
    prompt: "Fish populations are declining because of overfishing. What would you do?",
    focus: "Marine biodiversity & sustainable fishing",
    options: [
      { letter: "A", text: "Allow fishing to continue normally", ecosystem: -15, community: 10, economy: 15, explanation: "Fishing communities keep their income short-term, but fish populations keep declining." },
      { letter: "B", text: "Introduce sustainable fishing limits", ecosystem: 10, community: 10, economy: 10, explanation: "A balanced limit protects fish stocks while keeping the fishing industry stable." },
      { letter: "C", text: "Temporarily restrict fishing in the affected area", ecosystem: 15, community: -10, economy: -15, explanation: "Fish populations recover fastest, but fishers lose income while the restriction is in place." },
    ],
  },
  {
    id: 3,
    title: "Ocean Plastic",
    prompt: "Large amounts of plastic are entering the ocean and harming marine animals. What would you do?",
    focus: "Ocean pollution & marine life",
    options: [
      { letter: "A", text: "Organize coastal cleanup campaigns", ecosystem: 10, community: 10, economy: 5, explanation: "Beaches get cleaner and communities rally together, giving a small boost to tourism too." },
      { letter: "B", text: "Reduce plastic entering the ocean through new restrictions", ecosystem: 20, community: -5, economy: -10, explanation: "Less plastic reaches the ocean long-term, though businesses face new compliance costs." },
      { letter: "C", text: "Take no action", ecosystem: -20, community: -10, economy: 0, explanation: "Plastic keeps entering the ocean, harming marine life and eroding public trust." },
    ],
  },
  {
    id: 4,
    title: "Coral Reef Protection",
    prompt: "Tourism is increasing, but visitors are damaging a nearby coral reef. What would you do?",
    focus: "Coral reefs & responsible tourism",
    options: [
      { letter: "A", text: "Allow tourism without restrictions", ecosystem: -20, community: 5, economy: 20, explanation: "Tourism revenue booms, but the reef takes serious damage from unrestricted visitors." },
      { letter: "B", text: "Introduce visitor limits and reef-protection rules", ecosystem: 10, community: 5, economy: 5, explanation: "The reef stays healthier while tourism continues at a more sustainable pace." },
      { letter: "C", text: "Close the reef completely", ecosystem: 20, community: -15, economy: -20, explanation: "The reef fully recovers, but local tourism businesses lose a major source of income." },
    ],
  },
  {
    id: 5,
    title: "Arctic Marine Life",
    prompt: "Arctic sea ice is decreasing, creating challenges for marine animals. Your conservation program has limited funding. What should you prioritize?",
    focus: "Arctic ecosystems, climate impacts & marine wildlife",
    options: [
      { letter: "A", text: "Invest in research and monitoring", ecosystem: 5, community: 0, economy: -5, explanation: "You learn more about the crisis, but limited direct protection happens with this funding round." },
      { letter: "B", text: "Support projects protecting Arctic marine habitats", ecosystem: 15, community: 5, economy: -10, explanation: "Arctic marine habitats get real protection, at a meaningful cost to the budget." },
      { letter: "C", text: "Use the funding for another conservation project", ecosystem: -15, community: 0, economy: 10, explanation: "The budget stretches further elsewhere, but Arctic marine life loses a critical funding round." },
    ],
  },
  {
    id: 6,
    title: "Marine Protected Area",
    prompt: "You have enough funding to establish one major marine protected area. Which approach would you choose?",
    focus: "Marine conservation & sustainable management",
    options: [
      { letter: "A", text: "Protect a small area with minimal restrictions", ecosystem: 5, community: 10, economy: 15, explanation: "Almost no disruption to existing activity, but protection is fairly limited." },
      { letter: "B", text: "Create a managed protected area while allowing sustainable activities", ecosystem: 10, community: 10, economy: 10, explanation: "A balanced approach protects key habitats while still allowing sustainable use." },
      { letter: "C", text: "Create a large protected area with strict restrictions", ecosystem: 20, community: -10, economy: -15, explanation: "The strongest protection for marine life, at real cost to existing activities in the area." },
    ],
  },
];

export function getResultTier(avg: number) {
  if (avg >= 70) {
    return {
      title: "Conservation Champion",
      description: "You made thoughtful decisions and worked towards a balanced and sustainable future for our oceans and Arctic.",
    };
  }
  if (avg >= 50) {
    return {
      title: "Sustainable Balancer",
      description: "You made several positive choices but still have areas to improve.",
    };
  }
  return {
    title: "Ecosystem at Risk",
    description: "Some decisions created significant pressure on marine ecosystems.",
  };
}
