import Card from "components/common/card-wrap";
import Info from "assets/icons/info.svg";
import { Wrap } from "./styles";

const Detail = () => {
  return (
    <Card className="detail" label="Detail" icon={<Info />}>
      <Wrap>
        Players can freely search for treasures in the open world, and after
        finding the treasure box, they open the treasure box to get random
        rewards, and mint the item as NFT. Powered by Zecrey Legend SDK.
      </Wrap>
    </Card>
  );
};

export default Detail;
