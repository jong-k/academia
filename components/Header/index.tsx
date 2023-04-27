import { HeaderStyled, Logo, LinkStyled, UlStyled } from "./styled";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>
        <LinkStyled href="/">아카데미아</LinkStyled>
      </Logo>
      <nav>
        <UlStyled>
          <li>
            <LinkStyled href="/events">포럼</LinkStyled>
          </li>
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
