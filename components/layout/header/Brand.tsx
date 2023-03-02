import ImgBox from "components/common/img";
import { useRouter } from "next/router";
import { BrandWrap } from "./styles";

const Brand = () => {
  const router = useRouter();

  return (
    <BrandWrap onClick={() => router.push("/")}>
      <ImgBox
        src="/static/brand/zecrey-logo-dark.png"
        alt="logo"
        width={131}
        height={47}
      />
      <span className="brand-nft">NFT</span>
    </BrandWrap>
  );
};

export default Brand;
