import { Wrapper, ImageContainer, Title } from "./styled";
import { BANNER_TEXT } from "../../enum";

const Banner = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <Title>{BANNER_TEXT.TITLE}</Title>
        <h2>{BANNER_TEXT.SUB_TITLE}</h2>
      </ImageContainer>
    </Wrapper>
  );
};

export default Banner;
