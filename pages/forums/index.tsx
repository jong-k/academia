import Layout from "components/Layout";
import ForumItem from "components/ForumItem";
import { SERVER_URL, PER_PAGE } from "config";
import Pagination from "components/Pagination";

export default function ForumPage({ forums, page, total }) {
  return (
    <Layout>
      <h1>전체 포럼</h1>
      {forums.length === 0 && <h3>등록된 포럼이 없습니다</h3>}
      {forums.map((forum) => (
        <ForumItem key={forum.id} forum={forum} />
      ))}
      <Pagination page={page} total={total} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  const res = await fetch(
    `${SERVER_URL}/forums?populate=*&_sort=date:ASC&pagination[start]=${start}&pagination[limit]=${PER_PAGE}`,
  );
  const forumsData = await res.json();
  const forums = forumsData.data;

  return {
    props: { forums, page: +page, total: forumsData.meta.pagination.total },
  };
}
