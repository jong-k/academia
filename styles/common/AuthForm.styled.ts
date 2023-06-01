import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 30px;
  box-shadow: 0 10px 20px 0 rgba(50, 50, 50, 0.52);
`;

export const AuthBox = styled.div`
  margin-bottom: 20px;
`;

export const AuthLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const AuthInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 5px;
  font-size: 18px;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;
  font-size: 17px;
  padding: 0.75rem 0;
  color: #eee;
  border-radius: 5px;
  font-weight: 600;
  border: none;
  background: ${(p) => p.theme.colors.accent200};
  cursor: pointer;
`;

export const SpinnerWrapper = styled.div`
  max-width: 500px;
  height: 600px;
  padding: 30px;
  margin: auto;
`;
