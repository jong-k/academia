import { useState } from "react";
import { useRouter } from "next/router";
import { Wrapper, SearchInput } from "./styled";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/forums/search?term=${term}`);
    setTerm("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="찾고 싶은 포럼을 입력하세요"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </Wrapper>
  );
}
