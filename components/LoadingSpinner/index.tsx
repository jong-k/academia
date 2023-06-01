import {
  Spinner,
  SpinnerBlade,
  Wrapper,
} from "@/components/LoadingSpinner/styled";

export default function LoadingSpinner({
  bladeNum = 12,
}: {
  bladeNum?: number;
}) {
  const bladeNumArr = Array.from({ length: bladeNum }, (_, i) => i);

  return (
    <Wrapper>
      <Spinner>
        {bladeNumArr.map((_, i) => (
          <SpinnerBlade key={i} idx={i} total={bladeNum} />
        ))}
      </Spinner>
    </Wrapper>
  );
}
