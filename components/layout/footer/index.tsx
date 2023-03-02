import classNames from "classnames";
import ImgBox from "components/common/img";
import { BetweenFlex, CenterFlex } from "styles/globals";
import { CONTACT, COPYRIGHT, FOOTER_LINKS, PRIVACY } from "./config";
import { DesktopWrap } from "./styles";
import NFT from "assets/icons/NFT.svg";

const Footer = () => {
  return (
    <DesktopWrap dark>
      <div className="wrap">
        <BetweenFlex className="sub-wrap-1">
          <CenterFlex className="brand-wrap">
            <ImgBox
              src="/static/brand/zecrey-logo-dark.png"
              alt="zecrey"
              className="brand"
              width={209}
              height={75}
            />
            <NFT className="nft" />
          </CenterFlex>
          <div className="link-wrap">
            {FOOTER_LINKS.map((i, index) => (
              <div key={index} className="links">
                <label>{i.label}</label>
                {i.link_items.map((el, idx) => (
                  <a
                    key={idx}
                    className={classNames("link", { disabled: !el.url })}
                    href={el.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {el.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </BetweenFlex>
        <BetweenFlex className="sub-wrap-2">
          <div>Zecrey Protocol</div>
          <CenterFlex>
            <a className="privacy" href={PRIVACY.url}>
              {PRIVACY.label}
            </a>
            <div className="divider" />
            <div className="contact">
              Contact: <span>{CONTACT}</span>
            </div>
            <div className="divider" />
            <div className="copyright">Copyright @ {COPYRIGHT}</div>
          </CenterFlex>
        </BetweenFlex>
      </div>
    </DesktopWrap>
  );
};

export default Footer;
