import WalletIcon from "assets/icons/wallet.svg";
import TokenIcon from "components/common/token-icon";
import { DEFAULT_TOKEN } from "config";
import { CenterFlex } from "styles/globals";
import { useBalBNB } from "utils/hooks/useBalBNB";
import { useFtPrice } from "utils/hooks/useFtPrice";
import { formatNumberToCurrency } from "utils/number-format";
import { BalanceWrap } from "./styles";

const Balances = () => {
  const { bal } = useBalBNB();
  const { price } = useFtPrice();

  return (
    <BalanceWrap className="balances">
      <div className="label">
        <WalletIcon /> My Wallet
      </div>
      <div className="total">
        <label>Total Balance</label>
        <div>
          ${" "}
          {bal === null || price === null
            ? "..."
            : formatNumberToCurrency(bal * price)}
        </div>
      </div>
      <CenterFlex className="token-bal">
        <TokenIcon symbol={DEFAULT_TOKEN.symbol} size={30} />
        <span className="symbol">{DEFAULT_TOKEN.symbol}</span>
        <span className="bal">{formatNumberToCurrency(bal)}</span>
      </CenterFlex>
    </BalanceWrap>
  );
};

export default Balances;
