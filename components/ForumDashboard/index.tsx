import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { Wrapper, ForumTitle, OptionsBox, DeleteBtn } from "./styled";

export default function ForumDashboard({ id, forum, onDelete }) {
  console.log(forum);
  return (
    <Wrapper>
      <ForumTitle>
        <Link href={`/forums/${id}`}>{forum.name}</Link>
      </ForumTitle>
      <OptionsBox>
        <Link href={`/forums/edit/${id}`}>
          <FaPencilAlt />
          <span>포럼 수정</span>
        </Link>
        <DeleteBtn onClick={() => onDelete(id)}>
          <FaTimes />
          <span>포럼 삭제</span>
        </DeleteBtn>
      </OptionsBox>
    </Wrapper>
  );
}
