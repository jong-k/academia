import { useState } from 'react';

const Counter = () => {
  // const [count, setCount] = useState<number | null>(); // 초기값에 아무것도 넣지 않으면 null을 넣어줌
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default Counter;