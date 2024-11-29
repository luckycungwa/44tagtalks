const fs = require("fs");
const axios = require("axios");

// Define static routes
const staticRoutes = ["/", "/home", "/blog", "/about", "/contacts", "/faq"];

// Fetch dynamic routes
async function fetchDynamicRoutes() {
  try {
    const response = await axios.get("https://yourapi.com/posts"); // Adjust the endpoint to fetch your blog posts
    const posts = response.data; // Assuming the API returns an array of posts

    // Generate post URLs
    return posts.map((post) => `/post/${post.id}/${post.slug}`);
  } catch (error) {
    console.error("Error fetching dynamic routes:", error.message);
    return [];
  }
}

// Generate XML Sitemap
async function generateSitemap() {
  const dynamicRoutes = await fetchDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // Construct the XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => `
  <url>
    <loc>https://yourwebsite.com${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`)
  .join("")}
</urlset>`;

  // Save to public/sitemap.xml
  fs.writeFileSync("./public/sitemap.xml", sitemap);
  console.log("Sitemap generated successfully!");
}

// Run the script
generateSitemap();
