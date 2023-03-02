import MediaButton from "components/common/media-button";
import LoadingWrap from "components/common/modal/LoadingWrap";
import { DOMAIN } from "config";
import dynamic from "next/dynamic";
import { BetweenFlex, CenterFlex, PrimaryBtn } from "styles/globals";
import { CreatedWrap, Img } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { updateModalAc } from "redux/feature/modal";

const Modal = dynamic(() => import("components/common/modal"));

const ResultModal = () => {
  const { ac, done, id, url, name, err } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch();

  if (!ac) return null;

  return (
    <Modal
      label="Creating NFT"
      close={() => dispatch(updateModalAc(false))}
      width={done ? 580 : 660}
    >
      {!done && (
        <LoadingWrap
          success={false}
          failed={done === false}
          label={done === false ? "NFT creation failed." : "NFT Creating..."}
          subLabel={
            done === false ? err : "Please wait. It won't take long time."
          }
        />
      )}
      {done && (
        <CreatedWrap className="result">
          <div className="wrap">
            <CenterFlex>
              <NFTImage url={url} />
              <BetweenFlex className="info">
                <div className="text">
                  <label>{name}</label>
                  <span>Created Successfully!</span>
                </div>
                <div className="link">
                  <label>Share to:</label>
                  <CenterFlex>
                    <MediaButton href={`${DOMAIN}/nft/${id}`} type="twitter" />
                    {/* <MediaButton
                      href={`${DOMAIN}/nft/${props.id}`}
                      type="discord"
                      color="#5B60FB"
                    /> */}
                    <MediaButton
                      href={`${DOMAIN}/nft/${id}`}
                      type="telegram"
                      color="#00AEE5"
                    />
                  </CenterFlex>
                </div>
              </BetweenFlex>
            </CenterFlex>
          </div>
          <PrimaryBtn
            className="close"
            onClick={() => {
              window.open(`${DOMAIN}/nft/${id}`, "_blank");
              dispatch(updateModalAc(false));
            }}
          >
            Check
          </PrimaryBtn>
        </CreatedWrap>
      )}
    </Modal>
  );
};

export default ResultModal;

const NFTImage = (props: { url: string }) => (
  <Img className="nft-img" url={props.url} />
);
