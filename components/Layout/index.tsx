import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";
import { MainStyled } from "./styled";
import Header from "../Header";
import Index from "../Footer";
import Banner from "../Banner";
import { BANNER_TEXT } from "../../enum";

interface LayoutProps {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout = ({
  title = "아카데미아",
  keywords,
  description = "가까운 포럼과 스터디 메이트를 찾아보세요",
  children,
}: LayoutProps) => {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && (
        <Banner title={BANNER_TEXT.TITLE} subtitle={BANNER_TEXT.SUB_TITLE} />
      )}
      <MainStyled>{children}</MainStyled>
      <Index />
    </ThemeProvider>
  );
};

export default Layout;
