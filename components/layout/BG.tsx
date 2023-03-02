import ImgBox from "components/common/img";
import { BGWrap } from "./styles";

const BG = () => {
  return (
    <BGWrap className="bg-wrap">
      <ImgBox className="bg bg_2" src="/static/image/bg_2.png" alt="bg_2" />
      <div
        className="bg bg_1"
        style={{ backgroundImage: `url(${"/static/image/bg_1.png"})` }}
      />
    </BGWrap>
  );
};

export default BG;
