import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // required for GitHub Pages
  basePath: "/velior-web",        // repo name
  assetPrefix: "/velior-web/",    // repo name
  reactCompiler: true,
  images: {
    unoptimized: true,            // GitHub Pages requirement
    domains: [
      "upload.wikimedia.org",
      "i.ytimg.com",
      "storage.googleapis.com",
    ],
  },
};

export default nextConfig;
