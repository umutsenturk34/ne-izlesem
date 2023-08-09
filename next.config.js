/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img-puhutv.mncdn.com"], // Add the allowed domain(s) for images
  },
};

module.exports = nextConfig;
