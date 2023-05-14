import styled from "styled-components";
import { mediaQuery } from "@/styles/breakPoints";

export const Wrapper = styled.div`
  width: 30vw;
  transform: translateX(-30px);

  ${mediaQuery("mobile")`
    width: 85vw;
    transform: translateX(0);
  `}
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  padding: 5px;
  border: 1px #777 solid;
  border-radius: 5px;
`;
