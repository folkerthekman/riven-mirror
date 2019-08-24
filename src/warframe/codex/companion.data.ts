import { CompanionData } from "./companion.i";

export const _companionData: CompanionData[] = [
  // 守护
  { id: "Carrier", health: 200, shield: 100, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyyd" },
  { id: "Carrier Prime", className: "Carrier", health: 400, shield: 100, armor: 150, tags: ["Robotic", "Sentinel"], polarities: "yyyydr" },
  { id: "Dethcube", health: 200, shield: 100, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyy" },
  { id: "Diriga", health: 350, shield: 50, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyy" },
  { id: "Djinn", health: 200, shield: 100, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyy-" },
  { id: "Helios", health: 200, shield: 100, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyyd" },
  { id: "Helios Prime", className: "Helios", health: 250, shield: 100, armor: 100, tags: ["Robotic", "Sentinel"], polarities: "yyyyd" },
  { id: "Oxylus", health: 200, shield: 100, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyyd" },
  { id: "Prisma Shade", className: "Shade", health: 350, shield: 100, armor: 75, tags: ["Robotic", "Sentinel"], polarities: "yyyy-" },
  { id: "Shade", health: 350, shield: 50, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyy" },
  { id: "Taxon", health: 200, shield: 100, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyy" },
  { id: "Wyrm", health: 200, shield: 100, armor: 50, tags: ["Robotic", "Sentinel"], polarities: "yyyy" },
  { id: "Wyrm Prime", className: "Wyrm", health: 225, shield: 300, armor: 150, tags: ["Robotic", "Sentinel"], polarities: "yyyy" },

  // 野兽
  {
    id: "Adarza Kavat", health: 40, shield: 70, armor: 50, tags: ["Animal", "Beast", "Kavat"], polarities: "yy",
    damage: [["Slash", 80]],
    critChance: 20,
    critMul: 2,
    procChance: 7.5
  },
  {
    id: "Smeeta Kavat", health: 50, shield: 60, armor: 50, tags: ["Animal", "Beast", "Kavat"], polarities: "yy",
    damage: [["Slash", 80]],
    critChance: 20,
    critMul: 2,
    procChance: 7.5
  },
  {
    id: "Helminth Charger", health: 95, shield: 85, armor: 50, tags: ["Animal", "Beast"], polarities: "yyr",
    damage: [["Slash", 304], ["Toxin", 45.6]],
    critChance: 10,
    critMul: 3,
    procChance: 5
  },
  {
    id: "Chesa Kubrow", health: 125, shield: 75, armor: 50, tags: ["Animal", "Beast", "Kubrow"], polarities: "yyd",
    damage: [["Slash", 304]],
    critChance: 10,
    critMul: 3,
    procChance: 5
  },
  {
    id: "Huras Kubrow", health: 75, shield: 125, armor: 50, tags: ["Animal", "Beast", "Kubrow"], polarities: "yyr",
    damage: [["Slash", 304]],
    critChance: 10,
    critMul: 3,
    procChance: 5
  },
  {
    id: "Raksa Kubrow", health: 100, shield: 100, armor: 50, tags: ["Animal", "Beast", "Kubrow"], polarities: "yyd",
    damage: [["Slash", 304]],
    critChance: 10,
    critMul: 3,
    procChance: 5
  },
  {
    id: "Sahasa Kubrow", health: 125, shield: 75, armor: 50, tags: ["Animal", "Beast", "Kubrow"], polarities: "yyd",
    damage: [["Slash", 304]],
    critChance: 10,
    critMul: 3,
    procChance: 5
  },
  {
    id: "Sunika Kubrow", health: 110, shield: 90, armor: 50, tags: ["Animal", "Beast", "Kubrow"], polarities: "yyr",
    damage: [["Slash", 304]],
    critChance: 10,
    critMul: 3,
    procChance: 5
  },
];
