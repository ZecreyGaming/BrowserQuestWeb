import { gql } from "@apollo/client";

export const getMediaUrl = () => gql`
  query Media($public_id: String!) {
    upload(where: { public_id: { _eq: $public_id } }) {
      url
    }
  }
`;

export const getMultMediaUrl = (public_ids: string) => gql`
  query Media {
    upload(where: { public_id: { _in: ${public_ids} } }) {
      url
      public_id
    }
  }
`;
