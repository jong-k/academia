import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import { Button } from "@/components/common/Button.styled";
import { API_URL } from "@/config/index";
import {
  Wrapper,
  EditBox,
  DeleteBtn,
  ImageStyled,
  BackBtn,
} from "@/styles/forumIdPage.styled";

export default function Forum({ forum }) {
  const { attributes } = forum;
  const deleteForum = () => {
    console.log("delete!!");
  };

  return (
    <Layout>
      <Wrapper>
        <EditBox>
          <Link href={`/forums/edit/${attributes.id}`}>
            <FaPencilAlt /> 포럼 정보 수정
          </Link>
          <DeleteBtn href="#" onClick={deleteForum}>
            <FaTimes /> 포럼 삭제
          </DeleteBtn>
        </EditBox>

        <span>
          {new Date(attributes.data).toLocaleDateString("ko-KR")}{" "}
          {attributes.time}
        </span>
        <h2>{attributes.name}</h2>
        {attributes.image && (
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
  const res = await fetch(`${API_URL}/api/forums?populate=*`);
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
    `${API_URL}/api/forums?filters[id][$eq]=${forumId}&populate=*`,
  );
  const forumsData = await res.json();
  const forums = await forumsData.data;

  return {
    props: {
      forum: forums[0],
    },
    revalidate: 1,
  };
}
