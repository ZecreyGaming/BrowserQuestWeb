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
        destination:
          "http://tf-dex-preview-validator-nlb-6fd109ac8b9d390a.elb.ap-northeast-1.amazonaws.com:8545/:path*",
      },
      {
        source: "/rpc",
        destination:
          "http://tf-dex-preview-validator-nlb-6fd109ac8b9d390a.elb.ap-northeast-1.amazonaws.com:8545",
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
  env: {
    NEXT_PUBLIC_GQL_KEY: process.env.NEXT_PUBLIC_GQL_KEY,
    NEXT_PUBLIC_SEED: process.env.NEXT_PUBLIC_SEED,
  },
};

module.exports = nextConfig;
