import { useState } from "react";

import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  // const [count, setCount] = useState<number | null>(); // 초기값에 아무것도 넣지 않으면 null을 넣어줌
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"No default Title"}>This is My Section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["🍟 Fries", "🍺 Beer", "🍎 Apple"]} render={(item: string) => <span>{item}</span>} />
    </>

  )
}

export default App; // JSX.Element 타입
