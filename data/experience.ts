export interface Industry {
  id: string;
  icon: string;
  nameZh: string;
  nameEn: string;
  descriptionZh: string;
  descriptionEn: string;
  years: string;
  highlights: string[];
}

export const industries: Industry[] = [
  {
    id: "fintech",
    icon: "💳",
    nameZh: "金融科技",
    nameEn: "FinTech",
    descriptionZh:
      "參與支付系統、數位銀行與風險管理平台的開發，深入理解金融法規與高可用架構需求。",
    descriptionEn:
      "Worked on payment systems, digital banking, and risk management platforms, gaining deep understanding of financial regulations and high-availability architecture.",
    years: "3+ yrs",
    highlights: ["Payment Gateway", "KYC/AML", "High Availability", "PCI DSS"],
  },
  {
    id: "ecommerce",
    icon: "🛍️",
    nameZh: "電商零售",
    nameEn: "E-Commerce",
    descriptionZh:
      "建構高流量電商平台，包含商品管理、購物車、訂單系統與促銷引擎，並優化轉換率。",
    descriptionEn:
      "Built high-traffic e-commerce platforms with product management, cart, order systems, and promotional engines, optimizing conversion rates.",
    years: "2+ yrs",
    highlights: [
      "High Traffic",
      "Order Management",
      "Promotion Engine",
      "Analytics",
    ],
  },
  {
    id: "saas",
    icon: "☁️",
    nameZh: "SaaS 平台",
    nameEn: "SaaS Platform",
    descriptionZh:
      "設計多租戶 SaaS 架構，實作 RBAC 權限系統、訂閱計費與使用量監控。",
    descriptionEn:
      "Designed multi-tenant SaaS architecture with RBAC permission systems, subscription billing, and usage monitoring.",
    years: "2+ yrs",
    highlights: ["Multi-tenancy", "RBAC", "Billing", "Monitoring"],
  },
  {
    id: "healthcare",
    icon: "🏥",
    nameZh: "醫療健康",
    nameEn: "Healthcare",
    descriptionZh:
      "開發符合 HIPAA 規範的醫療資訊系統，處理敏感病患資料與醫療影像整合。",
    descriptionEn:
      "Developed HIPAA-compliant healthcare information systems, handling sensitive patient data and medical imaging integration.",
    years: "1+ yr",
    highlights: [
      "HIPAA Compliance",
      "HL7/FHIR",
      "Data Security",
      "EHR Integration",
    ],
  },
  {
    id: "logistics",
    icon: "🚚",
    nameZh: "物流供應鏈",
    nameEn: "Logistics & Supply Chain",
    descriptionZh: "打造即時追蹤、倉儲管理與路線優化系統，大幅提升物流效率。",
    descriptionEn:
      "Built real-time tracking, warehouse management, and route optimization systems, significantly improving logistics efficiency.",
    years: "1+ yr",
    highlights: [
      "Real-time Tracking",
      "WMS",
      "Route Optimization",
      "IoT Integration",
    ],
  },
];
