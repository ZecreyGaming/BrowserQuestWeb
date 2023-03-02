import { DownloadWrap, WalletList } from "./styles";
import Zecrey from "assets/icons/zecrey-alt.svg";
import MM from "assets/icons/metamask.svg";
import WC from "assets/icons/wallet-connect.svg";
import Download from "assets/icons/download.svg";
import Line from "assets/icons/linear-line.svg";
import Spinner from "assets/icons/spinner.svg";
import { FlatBtn } from "styles/globals";
import ImgBox from "components/common/img";
import { WalletType } from "global";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Wallets = (props: { onClick: (val: WalletType) => void }) => {
  const { wasm } = useSelector((state: RootState) => state.status);
  return (
    <>
      <WalletList className="wallet-list">
        <button onClick={() => props.onClick("Zecrey")}>
          <Zecrey className="zc" />
          <span>
            Zecrey Wallet <i>(Extension)</i>
          </span>
        </button>
        <div className="divider" />
        <button onClick={() => props.onClick("MetaMask")} disabled={!wasm}>
          <MM className="mm" />
          {!wasm ? <Spinner className="spin" /> : <span>Metamask</span>}
        </button>
        <div className="divider" />
        <button>
          <WC className="wc" />
          {!wasm ? <Spinner className="spin" /> : <span>Wallet Connect</span>}
        </button>
      </WalletList>
      <DownloadZecrey></DownloadZecrey>
    </>
  );
};

export default Wallets;

const DownloadZecrey = () => (
  <DownloadWrap>
    <div className="left">
      <label>Haven&#39;t got a crypto wallet yet?</label>
      <FlatBtn
        onClick={() =>
          window.open(
            "https://chrome.google.com/webstore/detail/zecrey/ojbpcbinjmochkhelkflddfnmcceomdi"
          )
        }
      >
        <Download /> <span>Download Zecrey Wallet</span>
      </FlatBtn>
    </div>
    <div className="right">
      <Line className="line" />
      <ImgBox
        src="/static/brand/chrome-store.png"
        alt="chrome-store"
        width={65}
        height={56}
      />
      <div className="zc">
        <Zecrey />
      </div>
    </div>
  </DownloadWrap>
);
