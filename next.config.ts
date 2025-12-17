import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "i.ytimg.com",
      "storage.googleapis.com",
    ],
  },
};

export default nextConfig;
