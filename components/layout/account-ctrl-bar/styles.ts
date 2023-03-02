import { ModalWrap } from "components/common/modal/styles";
import styled from "styled-components";
import { CenterFlex, color, highlight, warn } from "styles/globals";

export const Wrap = styled(ModalWrap)`
  .bar {
    float: right;
    width: 32rem;
    height: 100vh;
    background: rgba(49, 49, 49, 0.8);
    border: 0.05rem solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5.4rem);
    border-radius: 1.5rem 0 0 1.5rem;
    transform: translateX(32.2rem);
    transition: transform 120ms ease-out;
    .bar-wrap {
      opacity: 0;
      transition: opacity 120ms 250ms ease-out;
    }
  }
  .modal-bg {
    opacity: 0;
    transition: opacity 220ms ease-out;
  }
  &.fade-in {
    .modal-bg {
      opacity: 1;
    }
    .bar {
      transform: translateX(0);
      .bar-wrap {
        opacity: 1;
      }
    }
  }
  &.fade-out {
    .modal-bg {
      opacity: 0;
    }
    .bar {
      transform: translateX(32.2rem);
      transition-delay: 250ms;
      .bar-wrap {
        opacity: 0;
        transition-delay: 0ms;
      }
    }
  }
`;

export const HeaderWrap = styled(CenterFlex)`
  height: 10rem;
  min-height: 10rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0 2rem;
  .avatar {
    border-color: #212121;
  }
  .info {
    flex: 1;
    padding: 0 1.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .nickname {
      font-family: "Lexend";
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.2rem;
      color: ${highlight};
      padding: 0 0.4rem;
    }
    .name {
      display: inline-block;
      font-family: "IBM Plex Sans";
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 2rem;
      padding: 0 0.4rem;
      margin-top: 0.1rem;
      color: ${color};
      border-radius: 0.5rem;
      transition: background 120ms ease-out;
      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }
  button {
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    background: rgba(255, 255, 255, 0.1);
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: #fff;
    transition: all 120ms ease-out;
    svg {
      width: 1.3rem;
      height: 1.3rem;
      transform: rotate(180deg);
    }
    &:hover {
      color: ${highlight};
      border-color: ${highlight};
    }
  }
`;

export const ScrollWrap = styled.div`
  width: calc(100% - 0.5rem);
  height: calc(100vh - 10rem);
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem 0 0 1.5rem;
  &::-webkit-scrollbar {
    width: 0.5rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const MenuWrap = styled.div`
  width: 29rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  padding: 0.5rem;
  button {
    justify-content: flex-start;
    width: 100%;
    height: 3.5rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #fff;
    transition: background 120ms ease-out;
    svg {
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.9rem;
      opacity: 0.5;
      transition: opacity 120ms ease-out;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      svg {
        opacity: 1;
      }
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  .divider {
    width: 26rem;
    height: 0.1rem;
    margin: 0.2rem auto;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const BalanceWrap = styled.div`
  width: 29rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  padding: 0 1.5rem 2rem 1.5rem;
  .label {
    display: flex;
    align-items: center;
    height: 4rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.4rem;
    color: ${color};
    margin-bottom: 1.5rem;
    svg {
      width: 2rem;
      hegiht: 1.7rem;
      color: #fff;
      opacity: 0.5;
      margin-right: 0.9rem;
    }
  }
  .total {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    padding: 1.5rem;
    font-family: "IBM Plex Sans";
    font-weight: 700;
    label {
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: ${color};
    }
    div {
      font-size: 2.4rem;
      line-height: 3.1rem;
      padding-top: 0.5rem;
      color: ${highlight};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .token-bal {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    padding: 1.8rem 1.5rem;
    margin-top: 1rem;
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 1.6rem;
    color: ${color};
    .symbol {
      padding: 0 0.6rem;
    }
    .bal {
      flex: 1;
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const Form = styled.div`
  .form-wrap {
    width: 48rem;
    height: 46rem;
    background: rgba(47, 47, 47, 0.8);
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-radius: 0.8rem;
    margin: 0 auto;
    .scroll-wrap {
      width: calc(100% - 0.5rem);
      height: 100%;
      padding-left: 2.5rem;
      overflow-x: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 0.5rem;
        background: none;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 0.25rem;
        background: rgba(255, 255, 255, 0.15);
      }
      label {
        font-family: "IBM Plex Sans";
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${color};
      }
    }
    .name {
      height: 5.8rem;
      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
      span {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${highlight};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .submit-btn {
    height: 9.4rem;
    button {
      width: 9.4rem;
      height: 3.5rem;
      border-radius: 1.8rem;
      font-weight: 700;
      font-size: 1.6rem;
    }
  }
`;

export const AvatarWrap = styled(CenterFlex)`
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  padding: 2rem 1rem 2rem 0;
  button.img {
    width: 8rem;
    min-width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .tips {
    flex: 1;
    padding: 0 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #dadada;
  }
  button.upload {
    height: 3.6rem;
    padding: 0 1.9rem;
    font-size: 1.4rem;
  }
`;

export const NicknameWrap = styled.div`
  padding: 2rem 0;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  .msg {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      font-family: "IBM Plex Sans";
      font-weight: 500;
      font-size: 1.2rem;
    }
    &.err {
      color: ${warn};
    }
    &.loading {
      color: ${highlight};
    }
    &.success {
      color: #3aba25;
      svg {
        background: #3aba25;
        color: #2b2b2b;
        padding: 0.5rem 0.4rem;
        border-radius: 50%;
      }
    }
  }
  input {
    width: 100%;
    height: 4rem;
    background: #282828;
    border: 0.1rem solid rgba(255, 255, 255, 0.4);
    border-radius: 0.7rem;
    margin-top: 1rem;
    padding: 0 1rem;
    font-family: "IBM Plex Sans";
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${color};
    transition: border 120ms ease-out;
    &:focus {
      border-color: ${highlight};
    }
  }
`;

export const BannerWrap = styled.div`
  padding: 2rem 0;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  button {
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 9rem;
    background: rgba(255, 255, 255, 0.06);
    border: none;
    border-radius: 0.7rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0;
    margin-top: 1.5rem;
    overflow: hidden;
    transition: box-shadow 120ms ease-out;
    svg.dashed {
      position: absolute;
      top: 0;
      left: 0;
      color: rgba(255, 255, 255, 0.3);
    }
    svg.img {
      width: 3.4rem;
      height: 3rem;
      color: rgba(255, 255, 255, 0.3);
    }
    span.tips {
      font-family: "IBM Plex Sans";
      font-size: 12px;
      line-height: 16px;
      color: ${color};
      opacity: 0.5;
      padding-top: 0.5rem;
    }
    span.mask {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.7);
      .edit {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        padding: 1.2rem;
        color: rgba(255, 255, 255, 0.7);
        border: 0.1rem solid rgba(255, 255, 255, 0.7);
        transition: all 120ms ease-out;
      }
    }
    &.ac {
      box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0.3);
    }
    &:hover {
      box-shadow: 0 0 0 0.1rem ${highlight};
      svg.edit {
        color: #fff;
        border-color: #fff;
      }
    }
  }
`;

export const LinksWrap = styled.div`
  padding: 2rem 0;
  label {
    display: block;
    padding-bottom: 1.5rem;
  }
`;
