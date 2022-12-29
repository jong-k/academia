import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { PostDetail } from "./PostDetail";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const maxPostPage: number = 10;

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 2000,
  });
  if (isLoading) return <h2>Loading...</h2>;
  if (isError && error instanceof Error) {
    return (
      <>
        <h2>Oops, something went wrong</h2>
        <p>{error.toString()}</p>
      </>
    );
  }

  return (
    <>
      <ul>
        {data.map((post: PostType) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
