import ConnectPopups from "components/connect-popups";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Icon from "assets/icons/connect.svg";
import Alert from "assets/icons/alert.svg";
import { ConnectBtnWrap, CtrlBtn, UserCtrlsWrap } from "./styles";
import classNames from "classnames";
import { useRouter } from "next/router";
import AccountCtrlBar from "../account-ctrl-bar";
import Avatar from "components/common/avatar";

const PROTECTED_PATH = [
  "/create",
  "/new-collection",
  "/current/[[...tab]]",
  "/transfer-nft/[id]",
  "/withdraw-nft/[id]",
  "/list-nft/[id]",
];

const UserCtrls = () => {
  const [ac, setAc] = useState(false);
  const [bar, setBar] = useState(false);
  const [alerts, setAlerts] = useState(Array(0).fill(""));
  const [disabled, setDisabled] = useState(false);
  const { user, trigger } = useSelector((state: RootState) => state.wallet);
  const router = useRouter();

  useEffect(() => {
    let path = router.pathname;
    if (!ac && !user && PROTECTED_PATH.includes(path)) {
      setAc(true); // always open the modal for protected pathes
      setDisabled(true); // unable to close the modal for protected pathes
    }
    if (user) {
      setTimeout(() => {
        setAc(false); // close modal when logged in
        setDisabled(false);
      }, 1000);
    } else {
      setBar(false); // close profile bar when logged out
    }
  }, [ac, router, user]);

  useEffect(() => {
    if (trigger && !user) setAc(true);
  }, [trigger, user]);

  return (
    <UserCtrlsWrap className="user-ctrls">
      {user ? (
        <>
          <CtrlBtn
            className={classNames("alert", { longer: alerts.length > 0 })}
          >
            <span>
              <Alert />
              {alerts.length > 0 ? alerts.length : null}
            </span>
          </CtrlBtn>
          <CtrlBtn
            backgroundImage={user.avatar}
            className="avatar"
            onClick={() => setBar(true)}
          >
            <Avatar url={user.avatar} size={34} />
          </CtrlBtn>
        </>
      ) : (
        <ConnectBtn onClick={() => setAc(true)} />
      )}
      {ac && (
        <ConnectPopups close={() => setAc(false)} disableToClose={disabled} />
      )}
      {bar && <AccountCtrlBar close={() => setBar(false)} />}
    </UserCtrlsWrap>
  );
};

export default UserCtrls;

const ConnectBtn = (props: { onClick: () => void }) => {
  return (
    <ConnectBtnWrap className="connect-button" onClick={props.onClick}>
      <Icon className="connect" />
      <span>Connect Wallet</span>
    </ConnectBtnWrap>
  );
};
