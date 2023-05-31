import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import { Button } from "@/styles/common/Button.styled";
import { SERVER_URL } from "@/config/index";
import {
  Wrapper,
  EditBox,
  EditBtn,
  PStyled,
  DeleteBtn,
  ImageStyled,
  BackBtn,
  Description,
} from "@/styles/pages/ForumIdPage.styled";
import ForumMap from "@/components/ForumMap";

export default function ForumPage({ forum }) {
  const router = useRouter();
  const { attributes } = forum;
  console.log(forum);

  return (
    <Layout>
      <Wrapper>
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
        <Description readOnly>{attributes.description}</Description>
        <h3>장소: {attributes.place}</h3>
        <p>{attributes.address}</p>
        <ForumMap address={attributes.address} place={attributes.place} />
        <Button>
          <BackBtn href="/forums">{"<"} 돌아가기</BackBtn>
        </Button>
      </Wrapper>
    </Layout>
  );
}

export async function getServerSideProps({ params: { forumId } }) {
  const res = await fetch(
    `${SERVER_URL}/forums?filters[id][$eq]=${forumId}&populate=*`,
  );
  const forumsData = await res.json();
  const forum = await forumsData.data[0];

  return {
    props: {
      forum,
    },
  };
}
