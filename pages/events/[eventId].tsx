import { useRouter } from "next/router";

const Event = () => {
  const router = useRouter();
  const { eventId } = router.query;

  return <p>event: {eventId}</p>;
};

export default Event;
