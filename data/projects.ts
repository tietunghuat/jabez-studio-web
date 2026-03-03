export interface Project {
  id: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "finpay",
    titleZh: "FinPay 支付閘道",
    titleEn: "FinPay Gateway",
    descriptionZh:
      "為中型電商設計的高可用支付閘道系統，支援多種支付方式，日均交易量超過 10 萬筆。採用微服務架構，99.99% 上線率。",
    descriptionEn:
      "A high-availability payment gateway for mid-scale e-commerce. Supports multiple payment methods with 100K+ daily transactions. Microservice architecture with 99.99% uptime.",
    image: "/images/projects/finpay.jpg",
    tags: ["NestJS", "PostgreSQL", "Redis", "AWS", "Docker", "Stripe API"],
    link: "https://example.com",
    featured: true,
    year: "2024",
  },
  {
    id: "cloudops",
    titleZh: "CloudOps 監控平台",
    titleEn: "CloudOps Dashboard",
    descriptionZh:
      "多租戶 SaaS 監控儀表板，整合 AWS CloudWatch、Prometheus 與自定義指標，提供即時告警與歷史趨勢分析。",
    descriptionEn:
      "Multi-tenant SaaS monitoring dashboard integrating AWS CloudWatch, Prometheus, and custom metrics with real-time alerts and historical trend analysis.",
    image: "/images/projects/cloudops.jpg",
    tags: ["Vue 3", "Nuxt 3", "Go", "Prometheus", "AWS", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com",
    featured: true,
    year: "2023",
  },
  {
    id: "medsync",
    titleZh: "MedSync 醫療資訊系統",
    titleEn: "MedSync Healthcare Platform",
    descriptionZh:
      "符合 HIPAA 規範的診所管理系統，包含病患排程、電子病歷、影像存取與保險申報模組。",
    descriptionEn:
      "HIPAA-compliant clinic management system with patient scheduling, electronic health records, imaging access, and insurance claim modules.",
    image: "/images/projects/medsync.jpg",
    tags: ["React", "Node.js", "FHIR", "PostgreSQL", "AWS", "HL7"],
    featured: true,
    year: "2023",
  },
  {
    id: "logistrack",
    titleZh: "LogisTrack 物流追蹤",
    titleEn: "LogisTrack Logistics",
    descriptionZh:
      "即時貨運追蹤平台，整合 IoT 感測器資料，提供路線優化建議與倉儲庫存管理。",
    descriptionEn:
      "Real-time freight tracking platform integrating IoT sensor data with route optimization recommendations and warehouse inventory management.",
    image: "/images/projects/logistrack.jpg",
    tags: ["Vue 3", "Python", "FastAPI", "MongoDB", "MQTT", "Mapbox"],
    github: "https://github.com",
    featured: false,
    year: "2022",
  },
];
