import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  padding-top: 40px;

  h3 {
    font-size: 25px;
  }
  p {
    margin: 10px 0;
  }
`;

export const EditBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 30px;
  top: 0;
`;

export const EditBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PStyled = styled.p`
  transform: translateY(-10%);
`;

export const DeleteBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: red;
  gap: 0.5rem;

  svg {
    transform: scale(1.3);
  }
`;

export const ImageStyled = styled(Image)`
  margin-bottom: 20px;
`;

export const BackBtn = styled(Link)`
  margin-top: 40px;
  color: white;
`;