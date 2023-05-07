import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import qs from "qs";
import { API_URL } from "@/config/index";
import ForumItem from "@/components/ForumItem";

export default function SearchPage({ forums }) {
  const router = useRouter();
  return (
    <Layout title="검색 결과">
      <Link href="/forums">뒤로 가기</Link>
      <h2>{router.query.term} 검색 결과</h2>
      {forums.length === 0 && <h3>포럼 정보가 없습니다</h3>}
      {forums.length &&
        forums.map((forum) => <ForumItem key={forum.id} forum={forum} />)}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { host_contains: term },
        { description_contains: term },
        { place_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/forums?${query}`);
  const forums = await res.json();

  return {
    props: { forums },
  };
}
