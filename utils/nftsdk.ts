import { ASSET_DATA_MAP } from "config";
import { User } from "global";
import { updateExpiredNFTTimestamp } from "redux/feature/config";
import {
  updateModalAc,
  updateModalErr,
  updateModalNFT,
  updateModalStatus,
} from "redux/feature/modal";
import store from "redux/store";
import { SDK } from "@zecrey/zecrey-legend-js-sdk";
import { addNFT, updateNFTs } from "redux/feature/nfts";
import {
  generateLegendSeedFromSig,
  getCurrentWeb3Provider,
  signMsg,
} from "./connect-wallet";
import { client as gqlClient } from "apollo";
import { getNFTs } from "apollo/queries/items";
import { parseUnits } from "ethers/lib/utils";
import axios from "axios";
import { unionBy, uniqBy } from "lodash";

export const collection_id = 8;

const getAccount = (): User => {
  let error = "";
  if (!store) {
    error = "Fail to create NFT. Store not found.";
    throw new Error(error);
  } else {
    const { user } = store.getState().wallet;
    if (!user) {
      error = "Fail to create NFT. Please connect wallet.";
      throw new Error(error);
    } else if (!user.index) {
      error = "Fail to create NFT. Please register on Legend L2.";
      throw new Error(error);
    } else {
      return user;
    }
  }
};

const sdk = new SDK();
sdk.initial();

class NFTsdk {
  handleAccountChange: ((data: any) => void) | undefined = undefined;

  createNTFFromGame = async (data: {
    id: number;
    cb: (id: number) => void;
  }) => {
    try {
      store.dispatch(updateModalAc(true));
      const user = getAccount();
      const file = await fetch(ASSET_DATA_MAP[data.id].file);
      const blob = await file.blob();
      const img = new File([blob], "media");
      const media = await sdk.uploadImg(img);
      const raw_message = "eth";
      const signed_message = await signMessage(user.name, raw_message);
      let res = await mintNFT(
        raw_message,
        signed_message,
        user.name,
        media.public_id,
        data.id,
        ASSET_DATA_MAP[data.id].name
      );
      // let res = await client.mintNft(
      //   collection_id,
      //   "",
      //   ASSET_DATA_MAP[data.id].name + `#${Date.now()}`,
      //   "",
      //   media.public_id,
      //   JSON.stringify([{ name: "box_id", value: data.id.toString() }]),
      //   levels,
      //   stats,
      //   user
      // );
      store.dispatch(addNFT({ id: res.id, url: ASSET_DATA_MAP[data.id].url }));
      if (data && data.cb) data.cb(data.id);
      store.dispatch(updateModalStatus(true));
      store.dispatch(
        updateModalNFT({
          id: res.id,
          url: ASSET_DATA_MAP[data.id].url,
          name: ASSET_DATA_MAP[data.id].name,
        })
      );
    } catch (err: any) {
      console.log("Fail to create NFT. " + err);
      if (data && data.cb) data.cb(-1);
      store.dispatch(updateModalStatus(false));
      store.dispatch(updateModalErr(err?.responce?.data || err.message));
    } finally {
      // this.getUserData((assets) => console.log("Update assets: ", assets));
    }
  };

  gameInit = () => {};

  gameLoadProgress = () => {};

  gameInitComplete = () => {
    setTimeout(() => {
      if (nftsdk.handleAccountChange)
        nftsdk.handleAccountChange({ assets: [] });
    }, 200);
  };

  getUserData = async (cb: (data: { assets: number[] }) => void) => {
    try {
      const user = getAccount();
      const res = await gqlClient.query({
        query: getNFTs(collection_id, null),
        variables: { account_index: user.index },
      });
      const NFTs = uniqBy(
        res.data.asset
          .map((i: any) => ({
            id: i.id,
            levels: i.asset_levels[0]
              ? [
                  {
                    name: i.asset_levels[0].key,
                    value: i.asset_levels[0].value,
                  },
                ]
              : [],
            created_at: i.created_at,
            name: i.name,
            boxId: i.asset_levels[0] ? i.asset_levels[0].value : undefined,
          }))
          .sort((a: any, b: any) => b.created_at - a.created_at)
          .filter(
            (el: any) =>
              el.name.startsWith("treasureHunt") &&
              el.levels[0]?.name === "boxId" &&
              el.boxId !== undefined
          ),
        "boxId"
      ).slice(0, 4);
      const IDs: number[] = [];
      const arr: any[] = [];
      NFTs.forEach((i: any) => {
        const box_id = Number(i.levels[0]?.value || 0);
        IDs.push(box_id);
        arr.push({ id: i.id, url: ASSET_DATA_MAP[box_id].url });
      });
      store.dispatch(updateNFTs(arr));
      if (this.handleAccountChange) {
        this.handleAccountChange({ assets: IDs });
      } else {
        throw new Error("handleAccountChange not found.");
      }
      if (cb) cb({ assets: IDs });
    } catch (err) {
      console.log("Fail to get user assets. " + err);
    }
  };

  // for testing only
  reset = () => {
    store.dispatch(updateExpiredNFTTimestamp(Date.now()));
    setTimeout(() => {
      this.getUserData(({ assets }) => console.log("assets: ", assets));
    }, 100);
  };

  setUpdateUserDataCallback = (cb: (data: any) => void) => {
    this.handleAccountChange = (data: any) => cb(data);
  };

  isTaken(name: string) {
    return sdk.ifAccountRegistered(name);
  }

  getPrice(name: string) {
    return sdk.getRegisterFee(name);
  }

  async signForFreeResigter(
    to: string,
    from: string,
    fee: string,
    data: string,
    walletType: string
  ) {
    const transactionParameters = {
      gasPrice: parseUnits("10", "gwei").toHexString(),
      gas: "300029",
      to,
      from,
      value: fee,
      data,
      chainId: "0x61",
    };
    const { ethereum, zecrey } = window as any;
    if (walletType === "Zecrey" && zecrey) {
      const tx = await zecrey.request({
        method: "eth_sendTransaction",
        params: transactionParameters,
      });
      console.log(tx, "tx-hash");
    } else if (walletType === "MetaMask" && ethereum) {
      const tx = await ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      console.log(tx, "tx-hash");
    } else {
      throw new Error("Wallet not found.");
    }
    // if (walletType === "Zecrey") {
    //   return await (window as any).zecrey.request({
    //     method: "legend_eddsaSign",
    //     msg,
    //   });
    // } else if (walletType === "MetaMask") {
    //   const sig = await signMsg((window as any).ethereum);
    //   const seed = generateLegendSeedFromSig(sig);
    //   return await sdk.signMessage(seed, msg);
    // } else {
    //   return "";
    // }
  }
}

export const nftsdk = new NFTsdk();

const mintNFT = async (
  raw_message: string,
  signed_message: string,
  account_name: string,
  media_id: string,
  box_id: number,
  box_name: string
): Promise<{ id: number }> => {
  try {
    let data = new FormData();
    data.append("raw_message", raw_message);
    data.append("signed_message", signed_message);
    data.append("account_name", account_name);
    data.append("media_id", media_id);
    data.append("box_id", box_id.toString());
    data.append("box_name", box_name);
    const res = await axios({
      method: "post",
      url: "/game/api/v1/asset/mintNft",
      headers: { "Content-Type": "multipart/form-data" },
      data,
    });
    return res.data;
  } catch (err: any) {
    console.log("Error: ", err?.response?.data || err?.data);
    throw err;
  }
};

const signMessage = async (username: string, msg: string): Promise<string> => {
  try {
    const { type } = store.getState().wallet;
    if (type === "Zecrey") {
      return await (window as any).zecrey.request({
        method: "legend_eddsaSign",
        params: {
          from: username,
          msg,
        },
      });
    } else {
      let provider = getCurrentWeb3Provider(type);
      if (!provider) throw new Error("No wallet found.");
      let sig = await signMsg(provider);
      let seed = generateLegendSeedFromSig(sig);
      return (global as any).eddsaSign(seed, msg);
    }
  } catch (err) {
    console.log(err);
    return "";
  }
};

// const getGameData = async (
//   account_name: string
// ): Promise<{ nft_id: number; box_id: number; box_name: string }[]> => {
//   try {
//     const res = await axios.get("/game/api/v1/asset/getGameInfo", {
//       params: { account_name },
//     });
//     return JSON.parse(res.data.game_data || "[]");
//   } catch (err: any) {
//     console.log("Error: ", err?.response?.data || err?.data);
//     throw err;
//   }
// };
