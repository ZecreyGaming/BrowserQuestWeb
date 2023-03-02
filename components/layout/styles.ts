import styled from "styled-components";
import { vw } from "styles/globals";

export const Wrap = styled.div<{ dark: boolean }>`
  min-width: 144rem;
  min-height: 100vh;
  background: ${(props) => (props.dark ? "#2b2b2b" : "#F2F2F2")};
  z-index: 10;
  .content {
    position: relative;
    padding-top: 7.8rem;
  }
  @media (max-width: 780px) {
    min-width: 100vw;
    overflow-x: hidden;
    .content {
      padding-top: ${vw(50)};
    }
  }
`;

export const Container = styled.div`
  padding-top: 7.8rem;
  overflow: hidden;
`;

export const Centered = styled.div`
  width: 128rem;
  margin: 0 auto;
  .img-box.header-img {
    margin: 3rem 0;
  }
`;

export const BGWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding-top: 7.8rem;
  .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 127.7vw;
    height: 58.7vw;
    &.bg_1 {
      background-position: center;
      background-repeat: repeat-x;
    }
  }
`;
