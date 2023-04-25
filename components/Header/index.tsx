import Link from "next/link";
import styled from "styled-components";
import { mediaQuery } from "../../utils";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>
        <LinkStyled href="/">아카데미아</LinkStyled>
      </Logo>

      <nav>
        <UlStyled>
          <li>
            <LinkStyled href="/events">이벤트</LinkStyled>
          </li>
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
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

const LinkStyled = styled(Link)`
  color: #333;
  margin-right: 20px;

  &:hover {
    color: #000;
  }

  ${mediaQuery("mobile")`
    margin-right: 0;
  `}
`;

const UlStyled = styled.ul`
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

const Logo = styled.div`
  color: red;
  font-size: 20px;

  ${mediaQuery("mobile")`
    margin: 20px 0;
  `}
`;

export default Header;
