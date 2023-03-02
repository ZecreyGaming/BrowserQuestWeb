import { HeaderWrap, MenuWrap, ScrollWrap, Wrap } from "./styles";
import ReactDom from "react-dom";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import Avatar from "components/common/avatar";
import { CenteredFlatBtn } from "styles/globals";
import Dart from "assets/icons/dart.svg";
import LogoutIcon from "assets/icons/logout.svg";
import { disconnected } from "redux/feature/wallet";
import Balances from "./Balances";

const AccountCtrlBar = (props: { close: () => void }) => {
  const [fade, setFade] = useState<"in" | "out" | null>(null);
  const { user } = useSelector((state: RootState) => state.wallet);

  useEffect(() => setFade("in"), []);

  const close = () => {
    setFade("out");
    setTimeout(() => props.close(), 300);
  };

  const item = user ? (
    <Wrap
      className={classNames("account-ctrl-bar", {
        "fade-in": fade === "in",
        "fade-out": fade === "out",
      })}
    >
      <div className="modal-bg" onClick={close} />
      <div className="bar">
        <div className="bar-wrap">
          <HeaderWrap className="header">
            <Avatar url={user.avatar} name={user.name} size={60} />
            <div className="info">
              <div className="nickname">{user.nickname || "Username"}</div>
              <div className="name">{user.name}</div>
            </div>
            <CenteredFlatBtn onClick={close}>
              <Dart />
            </CenteredFlatBtn>
          </HeaderWrap>
          <ScrollWrap className="bar-scroll-wrap">
            {/* <Menu close={close} /> */}
            <Balances />
            <Logout />
          </ScrollWrap>
        </div>
      </div>
    </Wrap>
  ) : null;

  if (!global.window) return item;
  return ReactDom.createPortal(
    item,
    document.getElementById("account-ctrl-renderer") as Element
  );
};

export default AccountCtrlBar;

const Logout = () => {
  const disptch = useDispatch();
  const disconnect = () => disptch(disconnected());

  return (
    <MenuWrap onClick={disconnect}>
      <CenteredFlatBtn>
        <LogoutIcon /> Disconnect
      </CenteredFlatBtn>
    </MenuWrap>
  );
};
