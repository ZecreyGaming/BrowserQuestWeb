import { CenterFlex } from "styles/globals";
import Brand from "./Brand";
// import NavBar from "./NavBar";
import { HeaderWrap } from "./styles";
import UserCtrls from "./UserCtrls";

const Header = () => {
  return (
    <HeaderWrap>
      <Brand />
      <CenterFlex>
        {/* <NavBar /> */}
        <UserCtrls />
      </CenterFlex>
    </HeaderWrap>
  );
};

export default Header;
