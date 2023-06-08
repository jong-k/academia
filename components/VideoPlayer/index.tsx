import { Wrapper, VideoStyled, TitleWrapper, Title } from "./styled";

interface VideoPLayerProps {
  videoSrc: string;
  title: string;
}

export default function VideoPlayer({ videoSrc, title }: VideoPLayerProps) {
  return (
    <Wrapper>
      <VideoStyled autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
      </VideoStyled>
      <Title>{title}</Title>
    </Wrapper>
  );
}
