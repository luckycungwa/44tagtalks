const fs = require("fs");
const axios = require("axios");

// Define static routes
const staticRoutes = ["/", "/home", "/blog", "/about", "/contacts", "/faq"];

// Fetch dynamic routes
async function fetchDynamicRoutes() {
  const allPosts = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await axios.get(`${process.env.API_URL}/api/posts`, { params: { page } });
      allPosts.push(...response.data.posts); //`posts` is an array in the response
      hasMore = response.data.hasMore; // Update based on API's pagination
      page++;
    } catch (error) {
      console.error("Error fetching posts for page", page, ":", error.message);
      hasMore = false;
    }
  }
  return allPosts.map((post) => `/post/${post.id}/${post.slug}`);
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
    <loc>https://44tagtalks.vercel.app${route}</loc>
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
