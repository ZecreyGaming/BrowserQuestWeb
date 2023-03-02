import Card from "components/common/card-wrap";
import ImgBox from "components/common/img";
import { DOMAIN } from "config";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { NoItem, Wrap } from "./styles";

const NFTs = () => {
  const { nfts, wallet } = useSelector((state: RootState) => state);

  return (
    <Card
      className="NFTs"
      label="Item Box - Generated NFT"
      link={{
        label: "Check more >",
        href: DOMAIN,
      }}
    >
      <Wrap>
        {nfts.length ? (
          nfts.map((i, index) => (
            <a
              key={index}
              href={`${DOMAIN}/nft/${i?.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <ImgBox src={i?.url} alt="NFT" width={60} height={60} />
            </a>
          ))
        ) : (
          <NoItem>
            {wallet.user
              ? "No NFT have been generated yet"
              : "Please connect wallet"}
          </NoItem>
        )}
      </Wrap>
    </Card>
  );
};

export default NFTs;
