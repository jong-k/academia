import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 500px;
  height: 600px;
  background: ${(p) => p.theme.colors.white};
  border-radius: 15px;
  padding: 20px;
  z-index: 100;
`;

export const Header = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: flex-end;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding-top: 10px;
`;
