import styled from "styled-components";

export const MediaWrap = styled.div<{ size: number; color: string }>`
  position: relative;
  width: ${(props) => props.size / 10}rem;
  height: ${(props) => props.size / 10}rem;
  background: ${(props) => props.color};
  box-shadow: 0 0 0 0.15rem rgba(0, 0, 0, 0.15) inset;
  border-radius: 0.8rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  svg {
    color: #fff;
    &.twitter {
      width: 51.4%;
      height: 40%;
    }
    &.discord {
      width: 48.6%;
    }
    &.telegram {
      width: 57.1%;
    }
  }
`;
