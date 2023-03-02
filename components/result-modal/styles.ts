import styled from "styled-components";
import { CenterFlex, highlight } from "styles/globals";

export const CreatedWrap = styled.div`
  .wrap {
    width: 53rem;
    margin: 0 auto;
    padding: 3.5rem;
    background: rgba(85, 85, 85, 0.5);
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-radius: 0.8rem;
    .nft-img {
      margin-right: 4rem;
    }
    .info {
      height: 16rem;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      .text {
        font-family: "IBM Plex Sans";
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.1rem;
        label {
          display: block;
          color: ${highlight};
          padding-bottom: 0.3rem;
        }
        span {
          color: #fff;
        }
      }
      .link {
        label {
          display: block;
          font-family: "IBM Plex Sans";
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 1.6rem;
          color: #fff;
          padding-bottom: 0.9rem;
        }
        ${CenterFlex} {
          justify-content: flex-start;
          .media-link {
            margin-right: 1.5rem;
          }
        }
      }
    }
  }
  button.close {
    display: block;
    width: 11rem;
    height: 3.4rem;
    border-radius: 1.8rem;
    margin: 3rem auto;
    font-weight: 700;
    font-size: 1.6rem;
  }
`;

export const Img = styled.div<{ url: string }>`
  width: 16rem;
  height: 16rem;
  border-radius: 1rem;
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
`;
