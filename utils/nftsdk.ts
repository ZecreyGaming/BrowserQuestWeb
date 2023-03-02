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
import { Client, SDK } from "@zecrey/zecrey-legend-js-sdk";
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

const creator_name = "amber1.zec";
export const collection_id = 51527;
// const properties = "[]";
const levels = "[]";
const stats = "[]";

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
const client = new Client(
  creator_name,
  "ee823a72698fd05c70fbdf36ba2ea467d33cf628c94ef030383efcb39581e43f"
);
client.initialize();

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
      let res = await client.mintNft(
        collection_id,
        "",
        ASSET_DATA_MAP[data.id].name + `#${Date.now()}`,
        "",
        media.public_id,
        JSON.stringify([{ name: "box_id", value: data.id.toString() }]),
        levels,
        stats,
        user
      );
      store.dispatch(addNFT({ id: res, url: ASSET_DATA_MAP[data.id].url }));
      if (data && data.cb) data.cb(data.id);
      store.dispatch(updateModalStatus(true));
      store.dispatch(
        updateModalNFT({
          id: res,
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
      const NFTs = res.data.asset
        .map((i: any) => ({
          id: i.id,
          properties: i.asset_properties[0]
            ? [
                {
                  name: i.asset_properties[0].key,
                  value: i.asset_properties[0].value,
                },
              ]
            : [],
          created_at: i.created_at,
          name: i.name,
        }))
        .sort((a: any, b: any) => b.created_at - a.created_at)
        .filter(
          (el: any) =>
            el.name.startsWith("Sword of Valour-") &&
            el.properties[0]?.name === "box_id"
        )
        .slice(0, 4);
      const IDs: number[] = [];
      const arr: any[] = [];
      NFTs.forEach((i: any) => {
        const box_id = Number(i.properties[0]?.value || 0);
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
  box_id: number
) => {
  const res = await axios.get("/legend/api/v1/asset/mintNft", {
    params: {
      raw_message,
      signed_message,
      account_name,
      media_id,
      box_id,
    },
  });
  return res;
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
