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
    id: "medical-treatment",
    titleZh: "智慧醫療內部診斷系統",
    titleEn: "Zhixin Physical Therapy Internal System",
    descriptionZh:
      "專為物理治療診所與中型醫療機構打造的內部診斷系統，支援解剖圖標記、電子簽章、權限控管、病例單管理與操作紀錄追蹤。提升內部作業效率，確保資料安全與可追溯性。",
    descriptionEn:
      "An internal diagnostic system for physical therapy clinics and mid-scale healthcare institutions. Features anatomy marking, e-signatures, staff access control, treatment record management, and operation logs. Improves workflow efficiency while ensuring data security and traceability.",
    image: "/images/projects/zhixin-pt.jpg",
    tags: [
      "NestJS",
      "PostgreSQL",
      "Redis",
      "AWS",
      "VueJS",
      "Konva && Canvas JS",
      "Firebase Storage",
    ],
    link: "https://drive.google.com/file/d/1P7IVCxQMJ4grtUMoDEPhVqU-q6R8G4Ob/view?usp=sharing",
    featured: true,
    year: "2026",
  },
  {
    id: "payment-integration",
    titleZh: "線上訂單支付系統",
    titleEn: "Online Order Integration",
    descriptionZh:
      "使用 LINE Login 進行身份驗證，串接第三方廠商 API 取得訂單詳細資訊，客戶可透過系統前往 LINE Pay 或綠界完成付款，支付成功後自動回傳更新訂單狀態。",
    descriptionEn:
      "User authentication via LINE Login with third-party API integration for order details. Customers can pay through LINE Pay or ECPay, and successful payments automatically update the order status in the external system.",
    image: "/images/projects/linepay-integration.jpg",
    tags: ["Vue 3", "Line Login", "Line Pay", "ECPay", "API Integration"],
    link: "",
    github: "", //github url
    featured: true,
    year: "2023",
  },
  {
    id: "weather-analytics",
    titleZh: "即時天氣與銷量預測系統",
    titleEn: "Real-Time Weather & Sales Forecast",
    descriptionZh:
      "串接台灣即時氣象資料，將天氣功能整合至不同系統中，並透過未來氣象預測分析產品銷量與需求趨勢。",
    descriptionEn:
      "Integrates Taiwan's real-time weather data into multiple systems, using weather forecasts to analyze and predict product sales and demand trends.",
    image: "/images/projects/weather-analytics.jpg",
    tags: [
      "Nuxt 3",
      "API Integration",
      "Weather Forecasting",
      "Data Analytics",
      "Vue 3",
    ],
    link: "",
    github: "", //github url
    featured: true,
    year: "2023",
  },
  {
    id: "multi-client-landing",
    titleZh: "多客戶宣傳與管理頁面",
    titleEn: "Multi-Client Landing & Dashboard",
    descriptionZh:
      "整合多個不同管理系統的單頁式宣傳與形象頁面，快速呈現客戶產品資訊，涵蓋智慧醫療、設備、雲端宮廟、民宿及當地文化節等案例。",
    descriptionEn:
      "One-page landing and dashboard pages integrating multiple management systems to quickly showcase client products and services, including smart healthcare, devices, cloud temples, B&Bs, and local cultural festivals.",
    image: "/images/projects/multi-client-landing.jpg",
    tags: ["Vue 3", "Nuxt 3", "Tailwind", "Client Dashboard", "Landing Pages"],
    link: "https://drive.google.com/file/d/1qYEGUky7H3LdDTImHoJYrtAE8fKjM4h5/view?usp=sharing",
    github: "", //github url
    featured: true,
    year: "2023",
  },
  {
    id: "ai-integration",
    titleZh: "AI 圖文辨識系統",
    titleEn: "AI Image & Text Recognition",
    descriptionZh:
      "導入 AI 圖文辨識，使用者上傳照片或名片，系統自動分析內容並歸類保存，便於日後快速找到相關產業或客戶資訊。",
    descriptionEn:
      "Implements AI-based image and text recognition. Uploaded photos or business cards are analyzed and categorized automatically, enabling easy retrieval of related industry or client information.",
    image: "/images/projects/ai-image-recognition.jpg",
    tags: [
      "AI",
      "OCR",
      "Image Recognition",
      "Business Intelligence",
      "Vue 3",
      "Database Integration",
    ],
    link: "", //prod url
    github: "", //github url
    featured: true,
    year: "2023",
  },
  {
    id: "line-multi-integration",
    titleZh: "LINE 多元服務整合平台",
    titleEn: "LINE Multi-Service Integration",
    descriptionZh:
      "整合多個管理系統與 LINE 第三方服務，包括 LINE Login、LINE Pay、LINE Flex Messaging API 及 LINE Beacon，用於快速系統操作及行銷自動化。",
    descriptionEn:
      "Integrates multiple management systems with LINE third-party services, including LINE Login, LINE Pay, LINE Flex Messaging API, and LINE Beacon for efficient system operations and marketing automation.",
    image: "/images/projects/line-multi-integration.jpg",
    tags: [
      "Line Login",
      "Line Pay",
      "Line Messaging API",
      "Line Beacon",
      "Vue 3",
      "Nuxt 3",
    ],
    link: "", //prod url
    github: "", //github url
    featured: true,
    year: "2024",
  },
];
