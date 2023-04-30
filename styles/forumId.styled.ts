import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  padding-top: 40px;
`;

export const Controls = styled.div`
  position: absolute;
  right: 30px;
  top: 0;
`;

export const DeleteBtn = styled(Link)`
  margin-left: 20px;
  color: red;
`;

export const ImageStyled = styled(Image)`
  margin-bottom: 20px;
`;

export const BackBtn = styled(Link)`
  display: block;
  margin-top: 40px;
`;
