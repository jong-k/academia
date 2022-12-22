import { ReactNode } from 'react';

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode
}

const Counter = ({  setCount, children }: CounterProps) => {

  // 여기서 상태를 사용하지 않으므로 setCount 내부에 콜백함수를 사용
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </>
  );
};

export default Counter;