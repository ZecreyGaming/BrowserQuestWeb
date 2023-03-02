import { BannerWrap } from "./styles";
import Dashed from "./dashed.svg";
import Img from "assets/icons/image.svg";
import Edit from "assets/icons/edit.svg";
import { ChangeEvent, useMemo, useRef } from "react";
import classNames from "classnames";
import { CenteredFlatBtn } from "styles/globals";

const Banner = (props: {
  initial?: string;
  value: File | null;
  setValue: (val: File) => void;
  err?: string;
}) => {
  const dom = useRef<HTMLInputElement>(null);

  const getFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    let file = e.target.files[0];
    if (!file) return;
    props.setValue(file);
  };
  const url = useMemo(() => {
    if (props.value) return URL.createObjectURL(props.value);
    return null;
  }, [props.value]);

  return (
    <BannerWrap className="banner">
      <label>Banner image</label>
      <CenteredFlatBtn
        className={classNames({
          ac: props.value || props.initial ? true : false,
        })}
        onClick={() => dom.current?.click()}
        style={{
          backgroundImage: props.value
            ? `url(${url})`
            : `url(${props.initial})`,
        }}
      >
        {props.value || props.initial ? (
          <>
            <span className="mask">
              <Edit className="edit" />
            </span>
          </>
        ) : (
          <>
            <Dashed className="dashed" />
            <Img className="img" />
            <span className="tips">(File types supported: JPG, PNG)</span>
          </>
        )}
      </CenteredFlatBtn>
      <input
        ref={dom}
        type="file"
        value=""
        onChange={getFile}
        accept={".png, .gif, .jpg"}
        style={{ display: "none", userSelect: "none" }}
      />
    </BannerWrap>
  );
};

export default Banner;
