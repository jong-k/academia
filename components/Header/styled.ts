import Link from "next/link";
import styled from "styled-components";
import { mediaQuery } from "styles/breakPoints";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #333;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  ${mediaQuery("mobile")`
    flex-direction: column;
    height: auto;
  `}
`;

export const LinkStyled = styled(Link)`
  color: #333;
  margin-right: 20px;

  &:hover {
    color: #000;
  }

  ${mediaQuery("mobile")`
    margin-right: 0;
  `}
`;

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  ${mediaQuery("mobile")`
    margin: 20px 0;
    flex-direction: column;
    text-align: center;
  `}
`;

export const Logo = styled.div`
  color: red;
  font-size: 20px;
  user-select: none;

  ${mediaQuery("mobile")`
    margin: 20px 0;
  `}
`;
