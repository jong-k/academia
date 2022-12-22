import React, { ReactNode } from 'react';

interface ListProps<T> {
  items: T[],
  render: (item: T) => ReactNode
}

// T 뒤에 , 있으면 제네릭임을 알려줌 (그래야 에러 표시 없어짐)
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;