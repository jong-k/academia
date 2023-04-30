import Link from "next/link";
import Image from "next/image";
import { Wrapper, ImageContainer, InfoContainer } from "./styled";
import { Button } from "../common/Button.styled";

const ForumItem = ({ forum }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={forum.image || "/images/forum-sample3.jpg"}
          width={170}
          height={100}
          alt="포럼 이미지"
        />
      </ImageContainer>

      <InfoContainer>
        <span>
          {forum.date} {forum.time}
        </span>
        <h3>{forum.name}</h3>
      </InfoContainer>

      <div>
        <Link href={`/forums/${forum.id}`}>
          <Button>상세</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default ForumItem;
