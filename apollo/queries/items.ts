import { gql } from "@apollo/client";

export const getNFTs = (collection_id: number, expired: number | null) => {
  return gql`
    query NFT($account_index: bigint) @cached(refresh: true) {
      asset(
        where: {
          account: { account_index: { _eq: $account_index } }
          collection_id: { _eq: ${collection_id} }
          asset_levels: {key: {_eq: "boxId"}}
          #description: {
          #  _iregex: "{\\"from\\":\\"Legend game demo\\",\\"box_id\\":"
          #}
          created_at: { _gte: "${new Date(expired || 0).toJSON()}" }
        }
        distinct_on: 
        order_by: { created_at: desc_nulls_last } 
      ) {
        id
        name
        status
        media_detail {
          url
        }
        asset_levels {
          key
          value
        }
        created_at
      }
    }
  `;
};
