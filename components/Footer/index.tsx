import Link from "next/link";
import { FooterStyled } from "./styled";

export default function Footer() {
  return (
    <FooterStyled>
      <p>Copyright &copy; 아카데미아</p>
      <p>
        <Link href="/about">프로젝트 소개</Link>
      </p>
    </FooterStyled>
  );
}
