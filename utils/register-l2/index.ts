import { SDK } from "@zecrey/zecrey-legend-js-sdk";
import { ethers } from "ethers";
import { nftsdk } from "utils/nftsdk";
import LEGEND_ABI from "./legend.json";
import OracleABI from "./StablePriceOracle.json";
import { getLegendBasicInfo } from "utils/legend-api";

/**
 * Get user's ethereum address.
 * @param name_hash -- Generate from legend account name with wasm(method: getAccountNameHash).
 * @param provider -- Web3 provider or RPC provider.
 * @param address -- Legend contract's address.
 * @returns
 */
export const getUserAddress = async (
  name_hash: string,
  provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider,
  address: string
): Promise<string> => {
  if (!name_hash.startsWith("0x")) name_hash = "0x" + name_hash;
  const legend = new ethers.Contract(address, LEGEND_ABI, provider);
  try {
    return await legend.getAddressByAccountNameHash(name_hash);
  } catch (err) {
    throw err;
  }
};

/**
 * Register fee.
 * @param name -- Legend account name without suffix.
 * @param provider -- Web3 provider or RPC provider.
 * @param address -- Oracle contract's address.
 * @returns
 */
export const getLegendRegisterPrice = async (
  name: string,
  provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider,
  address: string
): Promise<string> => {
  if (name.length < 3) throw new Error("Name too short.");
  if (name.length > 32) throw new Error("Name too long.");
  if (!address) throw new Error("Price oracle contract not found.");
  try {
    const Oracle = new ethers.Contract(address, OracleABI, provider);
    return (await Oracle.price(name)).toHexString();
  } catch (err) {
    throw err;
  }
};

/**
 * Register L2 account with discount.
 * @param account_name -- Legend account name without suffix.
 * @param pk -- Public key of legend keypair.
 * @param addr -- Ethereum address.
 * @param walletType -- MetaMask or Zecrey.
 */
// export const registerWithDiscount = async (
//   account_name: string,
//   pk: string,
//   addr: string,
//   walletType: string
// ) => {
//   let data = new FormData();
//   data.append("account_name", account_name);
//   data.append("l2_pk", pk);
//   data.append("owner_addr", addr);
//   const val = await nftsdk.signForFreeResigter(
//     JSON.stringify({
//       AccountName: account_name,
//       L2Pk: pk,
//       OwnerAddr: addr,
//       SignMsg: "",
//     }),
//     walletType
//   );
//   data.append("sign_msg", val);
//   try {
//     await axios({
//       method: "post",
//       url:
//         store.getState().config.legend_url +
//         "/api/v1/register/applyRegisterHost",
//       headers: { "Content-Type": "multipart/form-data" },
//       data,
//     });
//   } catch (err) {
//     throw err;
//   }
// };

export const registerWithDiscount = async (
  account_name: string,
  pk: string,
  addr: string,
  walletType: string
) => {
  try {
    const sdk = new SDK();
    await sdk.initial();
    const info = await getLegendBasicInfo();
    const fee = await sdk.getRegisterFee(account_name);
    if (!info.contract_addresses[0])
      throw new Error("Legend contract not found.");
    const ctt = new ethers.Contract(
      info.contract_addresses[0],
      LEGEND_ABI,
      new ethers.providers.JsonRpcProvider("/rpc")
    );
    const getPointsOfPK = (pk: string) => {
      if (pk.length !== 128) throw new Error("Invalid public key length.");
      let x = "0x" + pk.slice(0, 64);
      let y = "0x" + pk.slice(64, 128);
      return { x, y };
    };
    let { x, y } = getPointsOfPK(pk);
    const data = (
      await ctt.populateTransaction.registerZNS(
        account_name.replace(".zec", ""),
        addr,
        x,
        y,
        {
          value: fee,
        }
      )
    ).data;
    // const transactionParameters = {
    //   gasPrice: parseUnits("10", "gwei"),
    //   gas: "300029",
    //   to: info.contract_addresses[0],
    //   from: addr,
    //   value: fee,
    //   data,
    //   chainId: "0x61",
    // };
    // const { ethereum, zecrey } = window as any;
    // if (walletType === "Zecrey" && zecrey) {
    //   const tx = await zecrey.request({
    //     method: "eth_sendTransaction",
    //     params: transactionParameters,
    //   });
    //   console.log(tx, "tx");
    //   await tx.wait();
    // } else if (walletType === "MetaMask" && ethereum) {
    //   const tx = await ethereum.request({
    //     method: "eth_sendTransaction",
    //     params: [transactionParameters],
    //   });
    //   console.log(tx, "tx");
    //   await tx.wait();
    // } else {
    //   throw new Error("Wallet not found.");
    // }
    // let data = new FormData();
    // data.append("account_name", account_name);
    // data.append("l2_pk", pk);
    // data.append("owner_addr", addr);
    await nftsdk.signForFreeResigter(
      info.contract_addresses[0],
      addr,
      fee,
      data || "0x",
      walletType
    );
    // data.append("sign_msg", val);
    // try {
    //   await axios({
    //     method: "post",
    //     url:
    //       store.getState().config.legend_url +
    //       "/api/v1/register/applyRegisterHost",
    //     headers: { "Content-Type": "multipart/form-data" },
    //     data,
    //   });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
