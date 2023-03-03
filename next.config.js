/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/legend/:path*",
        destination: process.env.NEXT_LEGEND_URL + "/:path*",
      },
      {
        source: "/nft_url/:path*",
        destination: process.env.NEXT_GQL_URL + "/:path*",
      },
      {
        source: "/rpc/:path*",
        destination: process.env.NEXT_RPC + "8545/:path*",
      },
      {
        source: "/rpc",
        destination: process.env.NEXT_RPC + ":8545",
      },
      {
        source: "/game/:path*",
        destination: process.env.NEXT_GAME_API_URL + "/:path*",
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
