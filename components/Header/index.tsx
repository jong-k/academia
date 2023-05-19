import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { HeaderStyled, Logo, LinkStyled, UlStyled } from "./styled";
import SearchBar from "@/components/SearchBar";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <HeaderStyled>
      <Logo>
        <LinkStyled href="/">아카데미아</LinkStyled>
      </Logo>
      <SearchBar />
      <nav>
        <UlStyled>
          <li>
            <LinkStyled href="/forums">포럼</LinkStyled>
          </li>
          {user ? (
            <>
              <li>
                <LinkStyled href="/forums/add">새 포럼 등록</LinkStyled>
              </li>
              <li>
                <LinkStyled href="/account/mypage">마이페이지</LinkStyled>
              </li>
              <li>
                <button onClick={logout}>로그아웃</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <LinkStyled href="/account/login">로그인</LinkStyled>
              </li>
            </>
          )}
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
