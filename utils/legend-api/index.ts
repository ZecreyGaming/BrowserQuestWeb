import axios from "axios";
import store from "redux/store";
import { SDK } from "@zecrey/zecrey-legend-js-sdk";

const sdk = new SDK();
sdk.initial();

/**
 * Get Legend basic information, including contracts' addresses.
 * @returns
 */
export const getLegendBasicInfo = () => {
  const { legend_url } = store.getState().config;
  return new Promise<{
    block_committed: number;
    block_verified: number;
    total_transactions: number;
    transactions_count_yesterday: number;
    transactions_count_today: number;
    dau_yesterday: number;
    dau_today: number;
    contract_addresses: string[];
    nft_offer_treasury_rate: number;
  }>((resolve, reject) => {
    axios
      .get(legend_url + "/api/v1/info/getLayer2BasicInfo")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

/**
 * Get legend account by public key.
 * @param account_pk
 * @param url
 * @returns
 */
export const getLegendAccountInfoByPK = (account_pk: string) => {
  return new Promise<{
    account_index: number;
    account_name: string;
    account_status: number;
    assets: {
      asset_id: number;
      balance: string;
      lp_amount: string;
      offer_canceled_or_finalized: string;
    }[];
  }>((resolve, reject) => {
    const { legend_url } = store.getState().config;
    axios
      .get(legend_url + "/api/v1/account/getAccountInfoByPubKey", {
        params: { account_pk },
      })
      .then((res) => {
        if (res.status === 200) {
          let { account_status, account_index, account_name, assets } =
            res.data;
          resolve({
            account_index,
            account_name,
            account_status,
            assets,
          });
        } else {
          reject(res.statusText || res.status);
        }
      })
      .catch((err) => reject(err));
  });
};
