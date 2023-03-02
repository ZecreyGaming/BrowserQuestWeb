import { MediaWrap } from "./styles";
import Twitter from "assets/icons/twitter.svg";
import Discord from "assets/icons/discord.svg";
import Telegram from "assets/icons/telegram.svg";
import { useMemo } from "react";

const MediaButton = (props: {
  type: "twitter" | "discord" | "telegram";
  href?: string;
  size?: number;
  color?: string;
}) => {
  const href = useMemo(() => {
    if (!props.href) return "";
    if (props.type === "twitter") {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        props.href
      )}`;
    } else if (props.type === "telegram") {
      return `https://t.me/share?url=${encodeURIComponent(props.href)}`;
    }
  }, [props.type, props.href]);
  return (
    <MediaWrap
      className="media-link"
      size={props.size || 30}
      color={props.color || "#00ACF4"}
    >
      <a className="link" href={href || ""} target="_blank" rel="noreferrer">
        <>
          {props.type === "twitter" && <Twitter className={props.type} />}
          {props.type === "telegram" && <Telegram className={props.type} />}
          {props.type === "discord" && <Discord className={props.type} />}
        </>
      </a>
    </MediaWrap>
  );
};

export default MediaButton;
