import { HeaderStyled, Logo, LinkStyled, UlStyled } from "./styled";
import SearchBar from "@/components/SearchBar";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>
        <LinkStyled href="/">아카데미아</LinkStyled>
      </Logo>
      <SearchBar />
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
