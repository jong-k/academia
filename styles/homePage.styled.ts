import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${(p) => p.theme.colors.primary},
    ${(p) => p.theme.colors.secondary}
  );
`;
