import Card from "components/common/card-wrap";
import ImgBox from "components/common/img";
import { DOMAIN } from "config";
import { Wrap } from "./styles";

const Collection = () => {
  return (
    <Card
      className="collection"
      label="About Legends of Valour"
      link={{
        label: "Check Collection >",
        href: `${DOMAIN}/collection/legends-of-valour`,
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
        <div className="name">Zecrey Legend Sword</div>
      </Wrap>
    </Card>
  );
};

export default Collection;
