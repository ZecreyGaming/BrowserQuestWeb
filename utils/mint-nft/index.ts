import { ASSET_DATA_MAP } from "config";
import { Client } from "@zecrey/zecrey-legend-js-sdk";

const creator_name = "amber1.zec";
const creator_index = 4;
export const collection_id = 51527;
const nft_collection_id = 24;
const creator_treasury_rate = "100";
// const gas_fee_asset_id = 0;
const properties = "[]";
const levels = "[]";
const stats = "[]";

const client = new Client(
  creator_name,
  "ee823a72698fd05c70fbdf36ba2ea467d33cf628c94ef030383efcb39581e43f"
);
client.initialize();

/**
 * Use admin account mint NFT for game players.
 * @param to_name - L2 account name of the player.
 * @param to_index - L2 account index of the player.
 * @param box_id - Box ID of the game item.
 * @returns
 */
export const mintNFT = async (
  to_name: string, // account name
  to_index: number, // account index
  box_id: number
): Promise<number> => {
  try {
    return await client.mintNft(
      collection_id,
      "",
      ASSET_DATA_MAP[box_id].name,
      "",
      "", // ASSET_DATA_MAP[box_id].media,
      properties,
      levels,
      stats,
      { name: to_name, index: to_index }
    );
  } catch (err) {
    console.log(err);
    throw new Error("Fail to mint NFT. " + err);
  }
};
