import styled from "styled-components";

export const Wrap = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  margin-top: 2rem;
  padding: 0 2rem 2rem 2rem;
  .header {
    display: flex;
    align-items: center;
    height: 5rem;
    font-family: "IBM Plex Sans";
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: #fff;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
    svg {
      width: 2rem;
      height: 1.7rem;
      opacity: 0.5rem;
      margin-right: 1rem;
      vertical-align: top;
      opacity: 0.5;
    }
    a {
      font-family: "IBM Plex Sans";
      font-weight: 400;
      font-style: italic;
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: #fff;
      opacity: 0.4;
      transition: all 120ms ease-out;
      &:hover {
        opacity: 0.8;
        text-decoration: underline;
      }
    }
  }
`;
