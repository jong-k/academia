import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import { Button } from "@/styles/common/Button.styled";
import { QUERY_URL } from "@/config/index";
import {
  Wrapper,
  EditBox,
  DeleteBtn,
  ImageStyled,
  BackBtn,
} from "@/styles/pages/ForumIdPage.styled";

export default function ForumPage({ forum }) {
  const router = useRouter();
  const { attributes } = forum;

  const deleteForum = async () => {
    if (window.confirm("정말 포럼을 삭제하시겠습니까?")) {
      const res = await fetch(`http://localhost:1337/api/forums/${forum.id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/forums");
      }
    }
  };

  return (
    <Layout>
      <Wrapper>
        <EditBox>
          <Link href={`/forums/edit/${forum.id}`}>
            <FaPencilAlt /> 포럼 정보 수정
          </Link>
          <DeleteBtn href="#" onClick={deleteForum}>
            <FaTimes /> 포럼 삭제
          </DeleteBtn>
        </EditBox>

        <span>
          {new Date(attributes.date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "short",
            day: "numeric",
            weekday: "long",
          })}
          {" | "}
          {attributes.time}
        </span>
        <h2>{attributes.name}</h2>
        <ToastContainer />
        {attributes.image.data && (
          <ImageStyled
            src={attributes.image.data.attributes.formats.medium.url}
            width={960}
            height={600}
            alt="포럼 사진"
            priority
          />
        )}
        <h3>호스트:</h3>
        <p>{attributes.host}</p>
        <h3>상세:</h3>
        <p>{attributes.description}</p>
        <h3>장소: {attributes.place}</h3>
        <p>{attributes.address}</p>
        <Button>
          <BackBtn href="/forums">{"<"} 돌아가기</BackBtn>
        </Button>
      </Wrapper>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${QUERY_URL}/forums?populate=*`);
  const forumsData = await res.json();
  const forums = forumsData.data;

  const paths = forums.map((forum) => ({
    params: { forumId: forum.id + "" },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { forumId } }) {
  const res = await fetch(
    `${QUERY_URL}/forums?filters[id][$eq]=${forumId}&populate=*`,
  );
  const forumsData = await res.json();
  const forum = await forumsData.data[0];

  return {
    props: {
      forum,
    },
    revalidate: 1,
  };
}
