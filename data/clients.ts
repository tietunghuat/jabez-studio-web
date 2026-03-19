export interface Client {
  id: string;
  name: string;
  logo: string; // public/images/clients/ 底下，留空字串則顯示縮寫
  industry: string;
  dur: string;
  delay: string;
  lift: string;
}

export const clients: Client[] = [
  {
    id: "c01",
    name: "知昕物理治療內部管理系統",
    logo: "/images/zhixin-logo-white.png",
    industry: "Physical Treatment",
    dur: "6.0s",
    delay: "0s",
    lift: "-10px",
  },
  {
    id: "c02",
    name: "Agri 天氣即時系統",
    logo: "/images/agri-weather.png",
    industry: "Weather Forecasting",
    dur: "7.2s",
    delay: "-1.4s",
    lift: "-8px",
  },
  {
    id: "c03",
    name: "客家美食節宣傳投票網",
    logo: "/images/hakka-illustration.png",
    industry: "Local Festival Promotion",
    dur: "5.6s",
    delay: "-2.8s",
    lift: "-12px",
  },
  {
    id: "c04",
    name: "待合作品牌",
    logo: "",
    industry: "E-Commerce",
    dur: "8.0s",
    delay: "-0.6s",
    lift: "-9px",
  },
  {
    id: "c05",
    name: "待合作品牌",
    logo: "",
    industry: "Logistics",
    dur: "6.8s",
    delay: "-3.5s",
    lift: "-11px",
  },
  // 繼續新增...
];
