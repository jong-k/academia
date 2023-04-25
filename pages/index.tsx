import styled from "styled-components";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Wrapper>
        <h2>Welcome to Next.js!</h2>
        <p>글꼴이 적용 왜 안되니!</p>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${(p) => p.theme.colors.primary},
    ${(p) => p.theme.colors.secondary}
  );
`;

export default HomePage;
