/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fedskillstest.ct.digital",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
