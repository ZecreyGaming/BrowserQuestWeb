export const BASE_URL = "/nft_url";

export const LEGEND_URL = "/legend";

export const DEFAULT_SUFFIX = ".zec";

export const RPC_URL = "/rpc";

export const CHAIN_ID = "0x30";

export const GQL_API = "https://legend-marketplace.hasura.app/v1/graphql";

export const CONTENT_TO_SIGN = (address: string) => `Welcome to Zecrey!

Sign this message to generate your Zecrey Privacy Key. This key lets the application decrypt your balance and generate proofs on Zecrey.

Your authentication status will become invalid when you close the page or refresh the page.

This request will not trigger a blockchain transaction or cost any gas fees.

Wallet address:
${address}`;

export const CHAINS = ["0x61"];

export const DEFAULT_TOKEN = { symbol: "BNB", decimal: 18, asset_id: 0 };

export const DEFAULT_AVATAR = [
  "collection/ar4mk2drgjinqts0fg0f",
  "collection/mchcvmr7edtafsrfvmhl",
];

export const GAS_ACCOUNT_INDEX = 1;

export const GAS_FEE_ASSET_AMOUNT = "100000000000000";

export const EXPIRATION = 5 * 24 * 60 * 60 * 1000;

export const DOMAIN = "https://nft-marketplace-frontend-delta.vercel.app";

export const ASSET_DATA_MAP = [
  {
    name: "Sword",
    url: "https://res.cloudinary.com/zecrey/image/upload/v1674967000/collection/ousdkrlka28nxghui7b4.png",
    file: "/static/image/game-item-1.png",
  },
  {
    name: "Sword of Valour-Defender Ⅰ",
    url: "https://res.cloudinary.com/zecrey/image/upload/v1674967000/collection/ousdkrlka28nxghui7b4.png",
    file: "/static/image/game-item-1.png",
  },
  {
    name: "Sword of Valour-Defender Ⅱ",
    url: "https://res.cloudinary.com/zecrey/image/upload/v1674967000/collection/ousdkrlka28nxghui7b4.png",
    file: "/static/image/game-item-1.png",
  },
  {
    name: "Sword of Valour-Fury Ⅰ",
    url: "https://res.cloudinary.com/zecrey/image/upload/v1664421677/collection/lolmlxvvehxg7endj3za.png",
    file: "/static/image/game-item-2.png",
  },
  {
    name: "Sword of Valour-Fury Ⅱ",
    url: "https://res.cloudinary.com/zecrey/image/upload/v1664421677/collection/lolmlxvvehxg7endj3za.png",
    file: "/static/image/game-item-2.png",
  },
];
