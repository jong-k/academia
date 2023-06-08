import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";
import { MainStyled } from "./styled";
import Header from "../Header";
import Index from "../Footer";
import { VIDEO_URL } from "@/config/index";
import VideoPlayer from "@/components/VideoPlayer";

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
        <VideoPlayer
          videoSrc={VIDEO_URL}
          title="함께 가면 더 멀리갈 수 있습니다"
        />
      )}
      <MainStyled>{children}</MainStyled>
      <Index />
    </ThemeProvider>
  );
};

export default Layout;
