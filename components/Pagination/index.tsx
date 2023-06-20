import Link from "next/link";
import { PER_PAGE } from "config";
import { Button } from "styles/common/Button.styled";

interface PaginationProps {
  page: number;
  total: number;
}

export default function Pagination({ page, total }: PaginationProps) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <>
      {page < lastPage && (
        <Button style={{ float: "right" }}>
          <Link href={`/forums?page=${page + 1}`}>다음</Link>
        </Button>
      )}
      {page > 1 && (
        <Button>
          <Link href={`/forums?page=${page - 1}`}>이전</Link>
        </Button>
      )}
    </>
  );
}
