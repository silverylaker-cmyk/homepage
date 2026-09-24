import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  devIndicators: false,
  basePath: process.env.GITHUB_PAGES === "true" ? "/homepage" : undefined,
};

export default nextConfig;
