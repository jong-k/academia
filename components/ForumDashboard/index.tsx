import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { Wrapper, ForumTitle } from "./styled";

export default function ForumDashboard({ forum, onDelete }) {
  return (
    <Wrapper>
      <ForumTitle>
        <Link href={`/forums/${forum.id}`}>{forum.name}</Link>
      </ForumTitle>
      <div>
        <Link href={`forums/edit/${forum.id}`}>
          <FaPencilAlt />
          <span>포럼 수정</span>
        </Link>
        <Link href="#">
          <FaTimes />
          <span>포럼 삭제</span>
        </Link>
      </div>
    </Wrapper>
  );
}
