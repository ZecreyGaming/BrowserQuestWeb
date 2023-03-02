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
          src="https://res.cloudinary.com/zecrey/image/upload/v1664346399/collection/tolx6gq3gur4sfweme7x.png"
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
