import styled from "styled-components";
import { mediaQuery } from "@/styles/breakPoints";

export const LabelStyled = styled.label`
  display: block;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  margin-bottom: 1rem;
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 5px;
`;

export const ButtonStyled = styled.button`
  width: 100%;
  margin: 20px 0 30px;
  padding: 1rem 0;
  border-radius: 5px;
  background: ${(p) => p.theme.colors.accent200};
  border: none;
  cursor: pointer;
  color: ${(p) => p.theme.colors.bg100};

  :hover {
    opacity: 0.8;
  }
`;

export const GridBox = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 20px;

  ${mediaQuery("mobile")`
    grid-template-columns: 1fr;
  `}
`;
