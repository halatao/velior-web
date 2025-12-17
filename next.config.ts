import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/velior-web" : "",
  assetPrefix: isProd ? "/velior-web/" : "",
  reactCompiler: true,
  images: {
    unoptimized: true,
    domains: [
      "upload.wikimedia.org",
      "i.ytimg.com",
      "storage.googleapis.com",
    ],
  },
};

export default nextConfig;
