import { client } from "apollo";
import { getNFTs } from "apollo/queries/items";
import { updateNFTs } from "redux/feature/nfts";
import store from "redux/store";
import { collection_id } from "utils/mint-nft";

export const getAssetsByAccountIndex = async (
  account_index: number,
  expired: number | null
): Promise<number[]> => {
  if (!account_index || account_index < 2)
    throw new Error("Fail to fetch assets. Invalid account.");
  try {
    const res = await client.query({
      query: getNFTs(collection_id, expired),
      variables: { account_index },
      fetchPolicy: "no-cache",
    });
    const NFTs = res.data.asset || [];
    const IDs: number[] = [];
    const arr: any[] = [];
    Array(4)
      .fill("")
      .forEach((i, index) => {
        let val = NFTs.find((el: any) =>
          el.description.includes('"box_id":' + (index + 1))
        );
        if (val) {
          IDs.push(JSON.parse(val.description).box_id);
          arr.push({ id: val.id, url: val.media_detail.url });
        }
      });
    store.dispatch(updateNFTs(arr));
    return Array.from(IDs);
  } catch (err) {
    throw new Error("Fail to fetch assets. " + err);
  }
};
