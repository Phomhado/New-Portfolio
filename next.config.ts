import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES_BASE_PATH || "", 
  trailingSlash: true, 
};

export default nextConfig;
