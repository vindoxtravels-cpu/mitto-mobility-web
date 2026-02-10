/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Allow dev requests from theopenbuilder.com app host (and any subdomain)
  // This silences the warning and keeps HMR working across that origin.
  allowedDevOrigins: [
    "app-*.theopenbuilder.com",
    "*.theopenbuilder.com",
  ],
};

export default nextConfig;
