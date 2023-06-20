import { useRouter } from "next/router";
import Layout from "components/Layout";
import ForumDashboard from "components/ForumDashboard";
import { parseCookies } from "utils";
import { Wrapper } from "styles/pages/Mypage.styled";
import { SERVER_URL } from "config/index";

export default function MypagePage({ forums, token }) {
  const router = useRouter();

  const deleteForum = async (forumId: number) => {
    const url = `${SERVER_URL}/forums/${forumId}`;
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        console.log(res);
      } else {
        await router.reload();
      }
    }
  };

  return (
    <Layout title="마이페이지">
      <Wrapper>
        <h2>대시보드</h2>
        <h3>내 포럼 정보</h3>
        {forums &&
          forums.map((forum) => (
            <ForumDashboard
              key={forum.id}
              id={forum.id}
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

  const res = await fetch(`${SERVER_URL}/forums/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const forums = await res.json();

  if (res.ok) {
    return {
      props: {
        forums: forums.data,
        token,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
