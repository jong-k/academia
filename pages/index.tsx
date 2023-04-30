import Link from "next/link";
import { Wrapper } from "@/styles/homePage.styled";
import { Button } from "@/components/common/Button.styled";
import Layout from "@/components/Layout";
import ForumItem from "@/components/ForumItem";
import { API_URL } from "@/config/index";

const HomePage = ({ forums }) => {
  return (
    <Layout>
      <h1>포럼 정보</h1>
      {forums.length === 0 && <h3>등록된 포럼이 없습니다</h3>}
      {forums.map((forum) => (
        <ForumItem key={forum.id} forum={forum} />
      ))}
      {forums.length > 0 && (
        <Link href="/forums">
          <Button secondary>전체 포럼 보기</Button>
        </Link>
      )}
    </Layout>
  );
};

// 빌드 타임에 서버사이드에서 호출되는 함수 => SSG 기능
export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/forums`);
  const forums = await res.json();

  return {
    props: { forums: forums.slice(0, 3) }, // 랜딩 페이지에서는 3개만
    revalidate: 1, // 1초마다 페이지 재생성
  };
};

export default HomePage;
