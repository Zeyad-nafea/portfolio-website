/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/portfolio-website" : "",
  assetPrefix: isProd ? "/portfolio-website/" : "",
  images: {
    unoptimized: true, // required for GitHub Pages
  },
};

module.exports = nextConfig;
