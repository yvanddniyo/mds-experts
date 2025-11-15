/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://mdsexpertspro.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  generateIndexSitemap: true,
  outDir: "out", // match `next export` output directory
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

module.exports = config;
