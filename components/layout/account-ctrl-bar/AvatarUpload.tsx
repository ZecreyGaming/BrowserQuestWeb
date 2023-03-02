import { ChangeEvent, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { HighLightBtn } from "styles/globals";
import { AvatarWrap } from "./styles";

const AvatarUpload = (props: {
  value: File | null;
  setValue: (val: File) => void;
  err?: string;
}) => {
  const dom = useRef<HTMLInputElement>(null);
  const { user } = useSelector((state: RootState) => state.wallet);

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
    <AvatarWrap className="avatar-upload">
      <button
        className="img"
        style={{
          backgroundImage: `url(${props.value ? url : user?.avatar})`,
        }}
        onClick={() => dom.current?.click()}
      />
      <div className="tips">
        Allowed png, gif, jpg.
        <br />
        160x160px recommended.
      </div>
      <HighLightBtn className="upload" onClick={() => dom.current?.click()}>
        Upload
      </HighLightBtn>
      <input
        ref={dom}
        type="file"
        value=""
        onChange={getFile}
        accept={".png, .gif, .jpg"}
        style={{ display: "none", userSelect: "none" }}
      />
    </AvatarWrap>
  );
};

export default AvatarUpload;
