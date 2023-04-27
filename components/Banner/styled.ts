import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #333 url("/images/banner-image.jpg") no-repeat center center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h1,
  h2 {
    color: #fff;
    z-index: 20;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 0;
`;
