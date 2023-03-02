import styled from "styled-components";
import {
  BetweenFlex,
  CenterFlex,
  color,
  highlight,
  warn,
} from "styles/globals";

export const WalletList = styled.div`
  width: 48rem;
  background: rgba(85, 85, 85, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  margin: 0 auto 1rem auto;
  padding: 0.8rem 1rem;
  button {
    width: 100%;
    height: 5.8rem;
    background: transparent;
    border: none;
    border-radius: 0.8rem;
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 3rem;
    text-align: left;
    color: ${color};
    padding: 0 2rem;
    transition: all 120ms ease-out;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    &:disabled {
      cursor: wait;
    }
    svg {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
      vertical-align: top;
      &.mm {
        padding: 0.2rem;
      }
      &.wc {
        border-radius: 50%;
        background: #fff;
        padding: 0.6rem;
      }
    }
    i {
      font-style: italic;
      font-size: 1.2rem;
      color: #dadada;
    }
  }
  .divider {
    margin: 0.8rem 1.5rem;
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const DownloadWrap = styled(BetweenFlex)`
  width: 48rem;
  height: 13rem;
  margin: 0 auto 2.5rem auto;
  padding: 0 2.5rem 0 3rem;
  background: rgba(85, 85, 85, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  .left {
    font-family: "IBM Plex Sans";
    font-size: 1.4rem;
    label {
      display: block;
      line-height: 1.8rem;
      color: #dadada;
      padding-bottom: 0.6rem;
    }
    button {
      font-weight: 500;
      line-height: 1.4rem;
      color: ${highlight};
      svg {
        width: 1.1rem;
        height: 1.4rem;
        margin-right: 0.6rem;
        vertical-align: top;
      }
      &:hover span {
        text-decoration: underline;
      }
    }
  }
  .right {
    position: relative;
    width: 19.6rem;
    height: 5.6rem;
    svg.line {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .zc {
      position: absolute;
      width: 5rem;
      height: 5rem;
      bottom: 0;
      right: 9.5rem;
      border-radius: 1.1rem;
      box-shadow: 0.2rem 0 0 rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    .img-box {
      position: absolute;
      bottom: 0;
      right: 5.2rem;
    }
  }
`;

export const StatusWrap = styled(CenterFlex)<{ isWaiting: boolean }>`
  flex-direction: column;
  width: ${(props) => (props.isWaiting ? 48 : 55)}rem;
  height: 24rem;
  background: rgba(85, 85, 85, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  margin: 0 auto 3rem auto;
  padding: 4.5rem 0 4rem 0;
  .icon {
    width: 9rem;
    height: 9rem;
    min-height: 9rem;
    border-radius: 50%;
    background: #373737;
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
    svg.spinner {
      width: 4rem;
      height: 4rem;
      color: ${highlight};
    }
    svg.failed {
      width: 5rem;
      height: 5rem;
      color: ${warn};
    }
  }
  .main {
    font-family: "IBM Plex Sans";
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${(props) => (props.isWaiting ? highlight : warn)};
    margin-bottom: 0.5rem;
  }
  .sub {
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #fff;
    text-align: center;
    padding: 0 2rem;
  }
`;

export const RegsiterForm = styled.div`
  width: 55rem;
  margin: 0 auto;
  .card {
    background: rgba(85, 85, 85, 0.5);
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-radius: 0.8rem;
    padding: 3rem;
    margin-bottom: 1.5rem;
    .img-box {
      margin-right: 2rem;
    }
    .text {
      font-family: "IBM Plex Sans";
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: #f1f1f1;
      .main {
        margin-bottom: 1.4rem;
      }
      .sub {
        font-weight: 700;
        color: #f69800;
      }
    }
  }
`;

export const Input = styled.div`
  background: rgba(85, 85, 85, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  padding: 0 1.5rem;
  .title {
    height: 4rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
    .label {
      font-family: "Lexend";
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: #fff;
    }
    svg {
      width: 2rem;
      height: 2rem;
      color: #fff;
      opacity: 0.5;
    }
  }
  .input {
    height: 5rem;
    margin-top: 1.5rem;
    font-size: 1.6rem;
    input {
      font-size: 1.6rem;
    }
  }
  .msg {
    padding: 1.2rem 0;
    svg {
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.5rem;
      vertical-align: top;
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
`;

export const Btn = styled(CenterFlex)`
  height: 9.4rem;
  button {
    padding: 0 1.7rem;
    height: 3.5rem;
    border-radius: 1.8rem;
    font-weight: 700;
    font-size: 1.6rem;
    &:disabled {
      color: #616161;
      border-color: #616161;
      background: none;
    }
  }
`;

export const Info = styled.div`
  width: 55rem;
  background: rgba(85, 85, 85, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  margin: 0 auto 1.5rem auto;
  padding: 0 1.5rem;
  .header {
    height: 4rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
    font-family: "Lexend";
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #fff;
    svg {
      width: 1.7rem;
      height: 2rem;
      opacity: 0.5;
    }
  }
  .info {
    padding: 0 0.5rem;
    height: 7rem;
    border-bottom: 0.1rem dashed rgba(255, 255, 255, 0.1);
    .label {
      font-family: "IBM Plex Sans";
      font-size: 1.4rem;
      color: #f1f1f1;
    }
    .value {
      font-family: "IBM Plex Sans";
      font-weight: 700;
      font-size: 1.6rem;
      color: #fff;
      &.name {
        color: #2ad4d9;
      }
      &.price {
        color: #fff;
        .token-icon {
          margin-right: 0.7rem;
        }
      }
      &.discount {
        color: #f69800;
      }
    }
    &:last-child {
      border: none;
    }
  }
`;

export const FreeText = styled(CenterFlex)`
  width: 55rem;
  background: rgba(85, 85, 85, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  margin: 0 auto 1.5rem auto;
  padding: 2rem;
  font-family: "IBM Plex Sans";
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #b2b2b2;
  svg {
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #2ad4d9;
    color: #2b2b2b;
    margin-right: 1.2rem;
    padding: 0.7rem;
  }
  b {
    font-weight: 700;
    color: #fff;
  }
`;

export const Total = styled(BetweenFlex)`
  width: 55rem;
  background: rgba(85, 85, 85, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  margin: 0 auto;
  padding: 3rem 3rem 3rem 2.5rem;
  font-family: "IBM Plex Sans";
  .label {
    font-size: 1.4rem;
    color: #f1f1f1;
  }
  .main {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: #fff;
    text-align: right;
  }
  .sub {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #b2b2b2;
    text-align: right;
  }
  .token-icon {
    margin-left: 1rem;
  }
`;

export const ResultWrap = styled.div`
  width: 55rem;
  margin: 0 auto;
  .result {
    width: 55rem !important;
    margin: 0;
  }
`;

export const SuffixWrap = styled(CenterFlex)`
  width: 100%;
  font-family: "IBM Plex Sans";
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #dadada;
  background: rgba(47, 47, 47, 0.298295);
  border: 0.1rem solid rgba(255, 255, 255, 0.4);
  border-radius: 0.7rem;
  transition: border 120ms ease-out;
  padding: 0 1rem;
  span {
    cursor: text;
  }
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
  }
  &.focused {
    border-color: ${highlight};
  }
  input.input-with-prefix {
    flex: 1;
    background: none;
    border: none;
    padding-left: 0;
    font-family: "IBM Plex Sans";
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${color};
    &::placeholder {
      opacity: 0.5rem;
    }
  }
`;
