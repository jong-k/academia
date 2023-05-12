import Link from "next/link";
import { Button } from "@/styles/common/Button.styled";
import Layout from "@/components/Layout";
import ForumItem from "@/components/ForumItem";
import { QUERY_URL } from "@/config/index";

export default function HomePage({ forums }) {
  return (
    <Layout>
      <h1>포럼 정보</h1>
      {!forums && <h3>등록된 포럼이 없습니다</h3>}
      {forums &&
        forums.map((forum) => <ForumItem key={forum.id} forum={forum} />)}
      {forums && forums.length > 0 && (
        <Link href="/forums">
          <Button secondary>전체 포럼 보기</Button>
        </Link>
      )}
    </Layout>
  );
}

// 빌드 타임에 서버사이드에서 호출되는 함수 => SSG 기능
export async function getStaticProps() {
  const res = await fetch(
    `${QUERY_URL}/forums?populate=*&sort=date&pagination[limit]=3`,
  );
  const { data: forums } = await res.json();

  return {
    props: { forums },
    revalidate: 1, // 데이터가 바뀌는지 1 초마다 확인하여 바뀌면 페이지 재생성
  };
}
