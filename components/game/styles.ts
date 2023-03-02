import styled from "styled-components";

export const Wrap = styled.div`
  background: rgba(56, 56, 56, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.3rem);
  border-radius: 1rem;
  padding: 3rem;
  .iframe-wrap {
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(1.3rem);
    border-radius: 1rem;
    height: 71.6rem;
    overflow: hidden;
    iframe {
      display: block;
      width: 100%;
      height: 71.6rem;
      min-height: 71.6rem;
      border-radius: 1rem;
      border: none;
      overflow: hidden;
    }
  }
`;
