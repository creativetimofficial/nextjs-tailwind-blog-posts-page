/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  assetPrefix: "/nextjs-tailwind-blog-posts-page/",
  basePath: "/nextjs-tailwind-blog-posts-page",
};

module.exports = nextConfig;
