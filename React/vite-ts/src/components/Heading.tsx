import { ReactElement } from "react";

type HeadingProps = { title: string }

// 함수형 컴포넌트의 리턴값은 타입 추론으로 생략할 수 있음
const Heading = ({ title }: HeadingProps): ReactElement => {
  return (
    <h1>{title}</h1>
  );
};

export default Heading; // JSX.Element 타입