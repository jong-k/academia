import { useRouter } from "next/router";

const Forum = () => {
  const router = useRouter();
  const { forumId } = router.query;

  return <p>forum: {forumId}</p>;
};

export default Forum;
