// categoriesMap.ts
export const categoriesMap = {
  steel: {
    th: "เหล็ก",
    en: "Steel",
    zh: "钢材",
  },
  cement: {
    th: "ปูนถุง",
    en: "Cement",
    zh: "水泥",
  },
  wood: {
    th: "ไม้แบบ",
    en: "Formwork Wood",
    zh: "模板木材",
  },
  hardware: {
    th: "ฮาร์ดแวร์",
    en: "Hardware",
    zh: "五金",
  },
  misc: {
    th: "เบ็ดเตล็ด",
    en: "Miscellaneous",
    zh: "杂项",
  },
} as const;

export type CategoryKey = keyof typeof categoriesMap;