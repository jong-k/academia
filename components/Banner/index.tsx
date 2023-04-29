import { Wrapper, ImageContainer, Title } from "./styled";

interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Title>{title}</Title>
        <h2>{subtitle}</h2>
      </ImageContainer>
    </Wrapper>
  );
};

export default Banner;
