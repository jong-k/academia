import Layout from "@/components/Layout";
import ForumDashboard from "@/components/ForumDashboard";
import { parseCookies } from "../../utils";
import { QUERY_URL } from "@/config/index";
import { Wrapper } from "@/styles/pages/Mypage.styled";

export default function MypagePage({ forums }) {
  console.log("여기인강", forums);
  const deleteForum = () => {
    console.log("delete!");
  };

  return (
    <Layout title="마이페이지">
      <Wrapper>
        <h2>대시보드</h2>
        <h3>내 포럼 정보</h3>
        {forums.data.length &&
          forums.data.map((forum) => (
            <ForumDashboard
              key={forum.id}
              forum={forum.attributes}
              onDelete={deleteForum}
            />
          ))}
      </Wrapper>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${QUERY_URL}/forums/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const forums = await res.json();

  if (res.ok) {
    return {
      props: {
        forums,
      },
    };
  } else {
    console.log(forums);
    return {
      notFound: true,
    };
  }
}
