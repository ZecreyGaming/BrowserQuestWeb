import Modal from "components/common/modal";
import { WalletType } from "global";
import { useState } from "react";
import { connectWallet } from "utils/connect-wallet";
import RegisterL2 from "./RegisterL2";
import Status from "./Status";
import Wallets from "./Wallets";

export const ConnectPopups = (props: {
  close: () => void;
  disableToClose: boolean;
}) => {
  const [page, setPage] = useState(0); // 0: wallet selector; 1: waiting; 2: failed.
  const [err, setErr] = useState("");

  const connect = (val: WalletType) => {
    setPage(1);
    connectWallet(val)
      // .then((res) => console.log(res))
      .catch((err) => {
        if (err.message === "Account not found. Please contact our staff.") {
          setPage(3);
        } else {
          setErr(err.message);
          setPage(2);
        }
      });
  };

  return (
    <>
      {page === 0 && (
        <Modal
          label="Select wallet to connect"
          close={props.close}
          width={530}
          disabled={props.disableToClose}
        >
          <Wallets onClick={connect} />
        </Modal>
      )}
      {page === 1 && (
        <Modal label="Connect Wallet" close={props.close} width={530}>
          <Status status="waiting" />
        </Modal>
      )}
      {page === 2 && (
        <Modal label="Connect Wallet" close={props.close} width={600}>
          <Status status="failed" msg={err} />
        </Modal>
      )}
      {page === 3 && <RegisterL2 close={props.close} />}
    </>
  );
};

export default ConnectPopups;
