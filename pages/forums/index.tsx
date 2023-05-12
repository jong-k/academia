import Layout from "@/components/Layout";
import ForumItem from "@/components/ForumItem";
import { QUERY_URL } from "@/config/index";

export default function ForumPage({ forums }) {
  return (
    <Layout>
      <h1>My Forums</h1>
      {forums.length === 0 && <h3>등록된 포럼이 없습니다</h3>}
      {forums.map((forum) => (
        <ForumItem key={forum.id} forum={forum} />
      ))}
    </Layout>
  );
}

// 빌드 타임에 서버사이드에서 호출되는 함수 => SSG 기능
export async function getStaticProps() {
  const res = await fetch(`${QUERY_URL}/forums?populate=*&_sort=date:ASC`);
  const forumsData = await res.json();
  const forums = forumsData.data;

  return {
    props: { forums },
    revalidate: 1, // 1초마다 페이지 재생성
  };
}
