import classNames from "classnames";
import { ReactNode } from "react";
import { Wrap } from "./styles";
import Icon from "assets/icons/desktop.svg";
import { BetweenFlex, CenterFlex } from "styles/globals";

const Card = (props: {
  label: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  link?: { href: string; label: string };
}) => {
  return (
    <Wrap className={classNames("card", props.className)}>
      <BetweenFlex className="header">
        <CenterFlex>
          {props.icon || <Icon />} {props.label}
        </CenterFlex>
        {props.link ? (
          <a href={props.link.href} target="_blank" rel="noreferrer">
            {props.link.label}
          </a>
        ) : (
          <div></div>
        )}
      </BetweenFlex>
      {props.children}
    </Wrap>
  );
};

export default Card;
