import Card from "components/common/card-wrap";
import ImgBox from "components/common/img";
import { DOMAIN } from "config";
import { useEffect, useState } from "react";
import { sdk } from "utils/nftsdk";
import { Wrap } from "./styles";

const Collection = () => {
  const [coll, setColl] = useState<null | { name: string; short_name: string }>(
    null
  );

  useEffect(() => {
    if (
      !process.env.NEXT_COLLECTION_ID ||
      isNaN(Number(process.env.NEXT_COLLECTION_ID))
    )
      return;
    sdk
      .getCollectionById(Number(process.env.NEXT_COLLECTION_ID))
      .then((res) => {
        setColl(res.collection);
      });
  }, []);
  if (!coll) return null;

  return (
    <Card
      className="collection"
      label={`About ${coll.name}`}
      link={{
        label: "Check Collection >",
        href: `${DOMAIN}/collection/${encodeURIComponent(coll.short_name)}`,
      }}
    >
      <Wrap>
        <ImgBox
          className="logo"
          src="/static/image/game-item-1.png"
          alt=""
          width={75}
          height={75}
        />
        <div className="name">{coll.name}</div>
      </Wrap>
    </Card>
  );
};

export default Collection;
