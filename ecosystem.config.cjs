module.exports = {
  apps: [
    {
      name: 'jabez-studio',
      script: '.output/server/index.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        SITE_URL: 'https://jabezstudio.com',
      },
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      log_file: 'logs/combined.log',
    },
  ],
}
```

---

## 📁 Final Project Structure
```
jabez-studio/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── AppNavbar.vue
│   ├── AppFooter.vue
│   ├── AppScrollTop.vue
│   ├── SectionHero.vue
│   ├── SectionAbout.vue
│   ├── SectionExperience.vue
│   ├── SectionStack.vue
│   ├── SectionProjects.vue
│   └── SectionContact.vue
├── composables/
│   ├── useScrollAnimation.ts
│   └── useTheme.ts
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── stack.ts
├── locales/
│   ├── zh-TW.json
│   └── en-US.json
├── pages/
│   └── index.vue
├── public/
│   └── images/
│       └── grid.svg
├── server/
│   └── routes/
│       └── sitemap.xml.ts
├── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
├── ecosystem.config.cjs
├── .env.example
└── package.json