/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.stockx.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
