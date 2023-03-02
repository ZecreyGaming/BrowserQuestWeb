import styled from "styled-components";

export const Wrap = styled.div`
  background: rgba(47, 47, 47, 0.3);
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  border-radius: 0.8rem;
  margin: 2rem 0 1rem 0;
  padding: 1.5rem 0.5rem 1.5rem 1.5rem;
  a {
    display: inline-block;
    width: 6rem;
    height: 6rem;
    margin-right: 1rem;
    .img-box {
      border: 0.1rem solid rgba(255, 255, 255, 0.15);
      border-radius: 1rem;
    }
  }
`;

export const NoItem = styled.div`
  font-family: "IBM Plex Sans";
  font-style: italic;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 6rem;
  letter-spacing: 0.02rem;
  color: #999;
  text-align: center;
`;
