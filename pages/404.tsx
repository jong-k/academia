import { FaExclamationTriangle } from "react-icons/fa";
import styled from "styled-components";
import Link from "next/link";
import Layout from "@/components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <Wrapper>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h3>페이지를 찾을 수 없습니다</h3>
        <Link href="/">홈으로</Link>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin: 100px 0 200px;

  h1 {
    font-size: 50px;
  }
`;

export default NotFoundPage;
