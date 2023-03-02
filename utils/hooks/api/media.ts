import { client } from "apollo";
import { getMediaUrl, getMultMediaUrl } from "apollo/queries/media-url";
import { isPubId } from "components/common/avatar";

export const getUrlByPub = async (public_id: string): Promise<string> => {
  try {
    let res = await client.query({
      query: getMediaUrl(),
      variables: { public_id },
    });
    return res.data.upload[0]?.url || "";
  } catch (err) {
    console.log("Fail to get media url. ", err);
    throw err;
  }
};

export const getUrls = async (
  public_ids: string[]
): Promise<{ public_id: string; url: string }[]> => {
  public_ids = public_ids.filter((i) => isPubId(i));
  try {
    let res = await client.query({
      query: getMultMediaUrl(JSON.stringify(public_ids)),
    });
    return res.data.upload;
  } catch (err) {
    console.log("Fail to get media url. ", err);
    throw err;
  }
};
