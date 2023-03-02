import { DEFAULT_TOKEN } from "config";
import ImgBox from "../img";

const TokenIcon = (props: { symbol?: string; size?: number }) => {
  return (
    <ImgBox
      className="token-icon"
      src={`/static/currency/${(
        props.symbol || DEFAULT_TOKEN.symbol
      ).toUpperCase()}.png`}
      alt={props.symbol || DEFAULT_TOKEN.symbol}
      width={props.size}
      height={props.size}
    />
  );
};

export default TokenIcon;
