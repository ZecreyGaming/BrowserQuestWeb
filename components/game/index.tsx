import Collection from "components/collection";
import Detail from "components/detail";
import NFTs from "components/nfts";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNFTs } from "redux/feature/nfts";
import { RootState } from "redux/store";
import { nftsdk } from "utils/nftsdk";
import { Wrap } from "./styles";

const div_id = "GameDiv";

const Game = () => {
  const dom = useRef<HTMLIFrameElement>(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.wallet);

  useEffect(() => {
    if (user?.name && nftsdk.getUserData)
      nftsdk.getUserData((data: { assets: number[] }) => {
        // if (nftsdk.handleAccountChange) nftsdk.handleAccountChange(data);
      });
    if (!user?.name) {
      dispatch(updateNFTs([]));
      if (nftsdk.handleAccountChange)
        nftsdk.handleAccountChange({ assets: [] });
    }
  }, [user?.name, dispatch]);

  useEffect(() => {
    if (dom.current)
      dom.current?.addEventListener("load", () => {
        const doc = dom.current?.contentDocument;
        if (!doc) return;
        (dom.current?.contentWindow as any).nftsdk = nftsdk;

        if (doc.body) (doc.body as HTMLElement).style.overflow = "hidden";
        // if (doc.querySelector("h1.header"))
        //   (doc.querySelector("h1.header") as HTMLDivElement).style.display =
        //     "none";
        // if (doc.querySelector("p.footer"))
        //   (doc.querySelector("p.footer") as HTMLDivElement).style.display =
        //     "none";
        if (doc.getElementById(div_id)) {
          (doc.getElementById(div_id) as HTMLDivElement).style.width = "100%";
          (doc.getElementById(div_id) as HTMLDivElement).style.height =
            "56.25%";
          (doc.getElementById(div_id) as HTMLDivElement).style.transform =
            "translateY(-9%)";
          (doc.getElementById(div_id) as HTMLDivElement).style.border = "none";
          (doc.getElementById(div_id) as HTMLDivElement).style.boxShadow =
            "none";
          // (doc.getElementById(div_id) as HTMLDivElement).style.margin =
          //   "0 -0.1rem 0 -0.1rem";
        }
      });
  }, []);

  return (
    <Wrap className="game">
      <div className="iframe-wrap">
        <iframe ref={dom} src="/web-desktop/index.html" />
      </div>
      <NFTs />
      <Collection />
      <Detail />
    </Wrap>
  );
};

export default Game;
