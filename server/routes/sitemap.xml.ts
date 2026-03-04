export default defineEventHandler((event) => {
  const baseUrl = process.env.SITE_URL || "https://jabezstudio.com";
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: `${baseUrl}/`, lang: "zh-TW" },
    { loc: `${baseUrl}/en`, lang: "en-US" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  setHeader(event, "Content-Type", "application/xml");
  return xml;
});
