// unitsMap.ts
export const unitsMap = {
    piece: {
      th: "ชิ้น",
      en: "piece",
      zh: "个",
    },
    bag: {
      th: "ถุง",
      en: "bag",
      zh: "袋",
    },
    sheet: {
      th: "แผ่น",
      en: "sheet",
      zh: "张",
    },
    set: {
      th: "ชุด",
      en: "set",
      zh: "套",
    },
    unit : {  
      th: "หน่วย",
      en: "unit",
      zh: "单位",
    },
  } as const;
  
  export type UnitKey = keyof typeof unitsMap;