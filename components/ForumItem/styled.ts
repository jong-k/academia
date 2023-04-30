import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 13px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

  ${mediaQuery("mobile")`
    flex-direction: column;
    text-align: center;
  `}
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin: 10px;
`;

export const InfoContainer = styled.div`
  flex: 2;

  ${mediaQuery("mobile")`
    margin-bottom: 20px;
  `}
`;
