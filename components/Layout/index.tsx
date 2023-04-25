import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/global";
import theme from "../../styles/theme";
import Header from "../Header";
import Index from "../Footer";

interface LayoutProps {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout = ({
  title = "아카데미아",
  keywords,
  description = "당신의 스터디 메이트를 찾아보세요",
  children,
}: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <MainStyled>{children}</MainStyled>
      <Index />
    </ThemeProvider>
  );
};

const MainStyled = styled.main`
  margin: 60px auto;
  max-width: 960px;
  padding: 0 30px;
`;

export default Layout;
