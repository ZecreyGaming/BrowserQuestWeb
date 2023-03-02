/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/legend/:path*",
        destination: "https://test-legend-app.zecrey.com/:path*",
      },
      {
        source: "/nft_url/:path*",
        destination: "http://test-legend-nft.zecrey.com/:path*",
      },
      {
        source: "/rpc/:path*",
        destination: "https://data-seed-prebsc-1-s3.binance.org:8545/:path*",
      },
      {
        source: "/rpc",
        destination: "https://data-seed-prebsc-1-s3.binance.org:8545",
      },
      {
        source: "/game/:path*",
        destination: "https://test-legend-app.zecrey.com/:path*",
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
