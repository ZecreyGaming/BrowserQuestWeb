import { useMemo } from "react";
import { StatusWrap } from "./styles";
import Spinner from "assets/icons/spinner.svg";
import Failed from "assets/icons/sad-face.svg";
import { CenterFlex } from "styles/globals";

const Status = (props: { status: "waiting" | "failed"; msg?: string }) => {
  const isWaiting = useMemo(() => props.status === "waiting", [props.status]);

  return (
    <StatusWrap className="status-wrap" isWaiting={isWaiting}>
      <CenterFlex className="icon">
        {isWaiting ? (
          <Spinner className="spinner spin" />
        ) : (
          <Failed className="failed" />
        )}
      </CenterFlex>
      <div className="main">
        {isWaiting ? "Connecting wallet…" : "Fail to connect wallet."}
      </div>
      <div className="sub">
        {props.msg ||
          (isWaiting
            ? "This step will be done in your wallet."
            : "please try again.")}
      </div>
    </StatusWrap>
  );
};

export default Status;
