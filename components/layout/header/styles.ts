import styled from "styled-components";
import { BetweenFlex, CenterFlex, color, highlight } from "styles/globals";

export const BrandWrap = styled(CenterFlex)`
  cursor: pointer;
  user-select: none;
  span.brand-nft {
    margin-left: 0.6rem;
    color: ${highlight};
    border: 0.2rem solid ${highlight};
    border-radius: 0.6rem;
    font-family: "Lexend";
    font-weight: 800;
    font-size: 2.1rem;
    line-height: 2.4rem;
    padding: 0 0.8rem;
  }
`;

export const NavBtns = styled(CenterFlex)`
  width: auto;
`;

export const NavWrap = styled.div`
  position: relative;
  height: 7.8rem;
  margin-right: 4rem;
  font-family: "Lexend";
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 7.8rem;
  color: rgba(255, 255, 255, 0.85);
  transition: all 120ms ease-out;
  &:hover {
    color: #fff;
  }
  &.ac {
    color: ${highlight};
    font-weight: 800;
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 0.6rem;
      left: 0;
      bottom: 0;
      background: ${highlight};
      pointer-events: none;
    }
  }
  a {
    display: block;
    height: 100%;
  }
`;

export const HeaderWrap = styled(BetweenFlex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7.8rem;
  background: rgba(56, 56, 56, 0.3);
  backdrop-filter: blur(13.5rem);
  border-bottom: 0.05rem solid rgba(255, 255, 255, 0.1);
  padding: 0 2.6rem 0 3.6rem;
  z-index: 100;
  .net-select {
    margin-left: 2rem;
  }
`;

export const UserCtrlsWrap = styled.div`
  margin-left: 1.5rem;
`;

export const ConnectBtnWrap = styled.button`
  height: 4.2rem;
  background: rgba(255, 255, 255, 0.08);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-radius: 2.1rem;
  padding: 0 1.5rem 0 0.6rem;
  font-family: "IBM Plex Sans";
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 3rem;
  color: ${color};
  transition: all 120ms ease-out;
  white-space: nowrap;
  svg {
    width: 3rem;
    height: 3rem;
    background: rgba(0, 0, 0, 0.1);
    border: 0.1rem solid rgba(80, 80, 80, 0.05);
    border-radius: 50%;
    margin-right: 0.6rem;
    padding: 0.5rem;
    vertical-align: top;
    &.spin {
      margin: 0 0 0 0.9rem;
    }
  }
  &:hover {
    border-color: ${highlight};
    box-shadow: 0 0 2rem rgba(42, 212, 217, 0.4) inset;
  }
  &:disabled {
    cursor: wait;
  }
`;

export const CtrlBtn = styled.button<{ backgroundImage?: string }>`
  position: relative;
  min-width: 4.2rem;
  height: 4.2rem;
  border-radius: 2.1rem;
  border: 0.2rem solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0;
  white-space: nowrap;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 0.3rem #313131 inset;
  vertical-align: top;
  transition: all 120ms ease-out;
  &.avatar {
    position: relative;
    margin-left: 1rem;
    .img-box {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:hover {
      border-color: ${highlight};
      box-shadow: 0 0 2rem rgba(42, 212, 217, 0.8),
        0 0 2rem rgba(42, 212, 217, 0.4) inset;
    }
  }
  &.alert {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    svg {
      width: 1.4rem;
      height: 1.6rem;
      color: ${color};
    }
    &.longer {
      padding: 0 2rem;
      font-family: "IBM Plex Sans";
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${highlight};
      svg {
        margin-right: 1rem;
        color: ${highlight};
      }
    }
    &:hover {
      border-color: ${highlight};
      box-shadow: 0 0 2rem rgba(42, 212, 217, 0.4) inset,
        0 0 0 0.3rem #313131 inset;
    }
  }
`;
