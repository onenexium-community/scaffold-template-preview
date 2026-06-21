/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};
module.exports = nextConfig;
