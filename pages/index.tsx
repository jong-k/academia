import styled from "styled-components";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Wrapper>
        <h2>Home</h2>
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
