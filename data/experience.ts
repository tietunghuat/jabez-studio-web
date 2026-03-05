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
    nameZh: "金融科技與支付整合",
    nameEn: "FinTech & Payment Integration",
    descriptionZh:
      "開發金流與第三方支付整合系統，串接綠界、LINE Pay 等支付服務，並實作高可用架構與交易資料回傳機制。",
    descriptionEn:
      "Developed payment gateway integrations including ECPay and LINE Pay, implementing high-availability architecture and transaction synchronization mechanisms.",
    years: "3+ yrs",
    highlights: [
      "ECPay Integration",
      "LINE Pay",
      "Payment Gateway",
      "Transaction Sync",
      "High Availability",
    ],
  },
  {
    id: "line-ecosystem",
    icon: "✅",
    nameZh: "LINE 生態系整合",
    nameEn: "LINE Ecosystem Integration",
    descriptionZh:
      "整合 LINE Login、LINE Pay、LINE Beacon、官方帳號與 Flex Message，設計 webhook 流程與互動式商業應用。",
    descriptionEn:
      "Integrated LINE Login, LINE Pay, LINE Beacon, Official Account, and Flex Message with webhook-driven business workflows.",
    years: "3+ yrs",
    highlights: [
      "LINE Login",
      "LINE Beacon",
      "Flex Message",
      "Webhook Automation",
      "Official Account API",
    ],
  },
  {
    id: "saas",
    icon: "☁️",
    nameZh: "SaaS 多租戶平台",
    nameEn: "Multi-tenant SaaS Platform",
    descriptionZh:
      "設計多租戶架構與 RBAC 權限系統，包含露營訂房平台與企業內部管理系統，支援訂閱與角色分級管理。",
    descriptionEn:
      "Designed multi-tenant SaaS platforms with RBAC systems, including campground booking systems and enterprise management platforms.",
    years: "1+ yrs",
    highlights: [
      "Multi-tenancy",
      "RBAC",
      "Subscription Model",
      "Booking System",
      "Role-based Access",
    ],
  },
  {
    id: "healthcare",
    icon: "🏥",
    nameZh: "醫療資訊系統",
    nameEn: "Healthcare Information Systems",
    descriptionZh:
      "開發物理治療診療系統，透過 Canvas 視覺化標記舊傷位置，整合病歷、診斷與治療紀錄，加速醫療流程。",
    descriptionEn:
      "Developed physiotherapy systems with canvas-based injury visualization, integrating medical records, diagnosis, and treatment workflows.",
    years: "1+ yrs",
    highlights: [
      "Canvas Drawing System",
      "Medical Records",
      "Diagnosis Workflow",
      "Treatment Tracking",
      "EHR Integration",
    ],
  },
  {
    id: "iot-smart",
    icon: "🏢",
    nameZh: "智慧空間 IoT 自動化整合與預約系統",
    nameEn: "Smart Space & IoT Automation",
    descriptionZh:
      "整合智慧教室與空間管理系統，串接預約平台與 IoT 設備，實現線上預約後自動啟動空調、投影機、燈光等設備，並支援遠端即時控制與狀態同步。",
    descriptionEn:
      "Integrated smart classroom and space management systems with IoT devices, enabling automatic activation of air conditioning, projectors, and lighting upon online booking, along with real-time remote control and device synchronization.",
    years: "1+ yr",
    highlights: [
      "Smart Space Automation",
      "Online Booking System",
      "IoT Integration",
      "Remote Device Control",
      "Real-time Sync",
      "Scheduling System",
    ],
  },
  {
    id: "event-sports",
    icon: "🏅",
    nameZh: "賽事與活動報名系統",
    nameEn: "Event & Sports Registration System",
    descriptionZh:
      "設計完整前後台賽事報名系統，支援成績單產生與電子證明發放，提升活動數位化效率。",
    descriptionEn:
      "Built full-stack sports registration systems with score generation and digital certification issuance.",
    years: "2+ yrs",
    highlights: [
      "Admin Dashboard",
      "Digital Certificate",
      "Score Management",
      "Event Workflow",
      "PDF Generation",
    ],
  },
  {
    id: "enterprise-gov",
    icon: "🏛️",
    nameZh: "政府與企業專案",
    nameEn: "Government & Enterprise Projects",
    descriptionZh:
      "參與多項政府標案與企業專案，包含社員管理系統與跨系統資料整合，重視穩定性與資訊安全。",
    descriptionEn:
      "Collaborated on government and enterprise projects, including membership systems and cross-system integrations with strong focus on stability and security.",
    years: "2+ yrs",
    highlights: [
      "Government Projects",
      "Enterprise Systems",
      "Membership Management",
      "System Integration",
      "Security Compliance",
    ],
  },
  {
    id: "corporate-web",
    icon: "🌐",
    nameZh: "品牌形象與宣傳網站",
    nameEn: "Corporate & Marketing Websites",
    descriptionZh:
      "設計與開發多個品牌形象官網與宣傳型網站，重視 SEO、效能優化與轉換率設計。",
    descriptionEn:
      "Designed and developed multiple corporate and marketing websites with strong focus on SEO, performance, and conversion optimization.",
    years: "4+ yrs",
    highlights: [
      "SEO Optimization",
      "Performance Tuning",
      "Landing Page",
      "Brand Website",
      "Responsive Design",
    ],
  },
  {
    id: "ai-systems",
    icon: "🤖",
    nameZh: "AI 系統導入與智能應用",
    nameEn: "AI Systems & Intelligent Applications",
    descriptionZh:
      "導入圖文辨識 AI 模型，實作影像與文字內容解析，自動萃取關鍵資料並進行結構化處理，提升資料準確率與作業效率。",
    descriptionEn:
      "Implemented image and text recognition AI models to analyze visual and textual content, automatically extracting structured data to improve accuracy and operational efficiency.",
    years: "1+ yr",
    highlights: [
      "OCR Integration",
      "Image Recognition",
      "Data Extraction",
      "Structured Data Processing",
      "AI Model Integration",
    ],
  },
];
