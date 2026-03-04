export interface TechItem {
  name: string;
  icon: string;
  level: "expert" | "proficient" | "familiar";
}

export interface TechCategory {
  id: string;
  nameZh: string;
  nameEn: string;
  icon: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    nameZh: "前端開發",
    nameEn: "Frontend",
    icon: "🎨",
    items: [
      { name: "Vue 3 / Nuxt 3", icon: "💚", level: "expert" },
      { name: "React / Next.js", icon: "⚛️", level: "proficient" },
      { name: "TypeScript", icon: "🔷", level: "expert" },
      { name: "Tailwind CSS", icon: "🎯", level: "expert" },
      { name: "Vite", icon: "⚡", level: "expert" },
    ],
  },
  {
    id: "backend",
    nameZh: "後端開發",
    nameEn: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js / Express", icon: "🟢", level: "expert" },
      { name: "NestJS", icon: "🔴", level: "expert" },
      { name: "Go", icon: "🐹", level: "proficient" },
      { name: "Python / FastAPI", icon: "🐍", level: "proficient" },
      { name: "GraphQL", icon: "🔗", level: "proficient" },
    ],
  },
  {
    id: "cloud",
    nameZh: "雲端基礎設施",
    nameEn: "Cloud & DevOps",
    icon: "☁️",
    items: [
      { name: "AWS (EC2, RDS, S3, Lambda)", icon: "🟠", level: "expert" },
      { name: "Docker / Kubernetes", icon: "🐳", level: "expert" },
      { name: "Terraform", icon: "🏗️", level: "proficient" },
      { name: "GitHub Actions / CI/CD", icon: "🔄", level: "expert" },
      { name: "Nginx", icon: "🌐", level: "expert" },
    ],
  },
  {
    id: "database",
    nameZh: "資料庫",
    nameEn: "Databases",
    icon: "🗄️",
    items: [
      { name: "PostgreSQL", icon: "🐘", level: "expert" },
      { name: "MySQL", icon: "🐬", level: "expert" },
      { name: "Redis", icon: "🔴", level: "expert" },
      { name: "MongoDB", icon: "🍃", level: "proficient" },
      { name: "Elasticsearch", icon: "🔍", level: "proficient" },
    ],
  },
];
