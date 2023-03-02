import { BetweenFlex } from "styles/globals";
import { NicknameWrap } from "./styles";
import Warn from "assets/icons/warn-alt.svg";
import Spinner from "assets/icons/spinner.svg";
import Check from "assets/icons/check.svg";

const Nickname = (props: {
  name: string;
  setName: (val: string) => void;
  err?: string;
  loading?: string;
  success?: string;
}) => {
  return (
    <NicknameWrap className="nickname">
      <BetweenFlex>
        <label>Username</label>
        {props.success && (
          <div className="msg success">
            <Check /> {props.success}
          </div>
        )}
        {props.err && (
          <div className="msg err">
            <Warn className="warn" /> {props.err}
          </div>
        )}
        {props.loading && (
          <div className="msg loading">
            <Spinner className="spinner spin" /> {props.loading}
          </div>
        )}
      </BetweenFlex>
      <input
        type="text"
        placeholder="Enter Username"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
    </NicknameWrap>
  );
};

export default Nickname;
