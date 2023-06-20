import Link from "next/link";
import Image from "next/image";
import { Wrapper, ImageContainer, InfoContainer } from "./styled";
import { Button } from "styles/common/Button.styled";

export default function ForumItem({ forum }) {
  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={
            forum.attributes.image.data
              ? forum.attributes.image.data.attributes.formats.thumbnail.url
              : "/images/forum-default.jpg"
          }
          width={170}
          height={100}
          alt="포럼 이미지"
          priority
        />
      </ImageContainer>

      <InfoContainer>
        <span>
          {new Date(forum.attributes.date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "short",
            day: "numeric",
            weekday: "long",
          })}{" "}
          | {forum.attributes.time}
        </span>
        <h3>{forum.attributes.name}</h3>
      </InfoContainer>

      <div>
        <Link href={`/forums/${forum.id}`}>
          <Button>상세</Button>
        </Link>
      </div>
    </Wrapper>
  );
}
