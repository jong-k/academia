import styled from "styled-components";
import { mediaQuery } from "styles/breakPoints";

export const Wrapper = styled.div`
  overflow-x: hidden;
  position: relative;
`;

export const VideoStyled = styled.video`
  width: 100vw;
`;

export const Title = styled.h2`
  font-size: 3rem;
  position: absolute;
  top: 12%;
  left: 2rem;
  margin: auto;

  ${mediaQuery("mobile")`
    font-size: 1.35rem;
  `}
`;
