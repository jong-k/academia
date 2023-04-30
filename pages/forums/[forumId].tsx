import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import { Button } from "@/components/common/Button.styled";
import { API_URL } from "@/config/index";
import {
  Wrapper,
  Controls,
  DeleteBtn,
  ImageStyled,
  BackBtn,
} from "@/styles/forumId.styled";

const Forum = ({ forum }) => {
  const deleteForum = (e) => {
    console.log("delete!!");
  };

  return (
    <Layout>
      <Wrapper>
        <Controls>
          <Link href={`/forums/edit/${forum.id}`}>
            <FaPencilAlt /> 포럼 정보 수정
          </Link>
          <DeleteBtn href="#" onClick={deleteForum}>
            <FaTimes /> 포럼 삭제
          </DeleteBtn>
        </Controls>

        <span>
          {forum.data} {forum.time}
        </span>
        <h2>{forum.name}</h2>
        {forum.image && (
          <ImageStyled
            src={forum.image}
            width={960}
            height={600}
            alt="포럼 사진"
          />
        )}

        <h3>호스트:</h3>
        <p>{forum.host}</p>
        <h3>상세:</h3>
        <p>{forum.description}</p>
        <h3>장소: {forum.place}</h3>
        <p>{forum.address}</p>

        <Button>
          <BackBtn href="/forums">{"<"} 돌아가기</BackBtn>
        </Button>
      </Wrapper>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/forums`);
  const forums = await res.json();

  const paths = forums.map((forum) => ({
    params: { forumId: forum.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { forumId } }) => {
  const res = await fetch(`${API_URL}/api/forums/${forumId}`);
  const forums = await res.json();

  return {
    props: {
      forum: forums[0],
    },
    revalidate: 1,
  };
};

export default Forum;
