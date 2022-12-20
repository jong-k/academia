# React + TS Tutorial w/ Vite
빠른 Vite로 React + TS 시작하기
## 1. 과정
### 1.1. Vite 시작하기
```
npm create Vite@latest
```
이후 CLI에서 질문에 응답하며 프로젝트 생성
- 프로젝트 이름을 . 으로 하면 현재 폴더에 프로젝트 생성
- React와 TypeScript를 선택해준다
- 프로젝트 생성이 완료되면 `npm install`
- 개발 서버 시작 시 `npm run dev`
### 1.2. tsx 파일 만들기
- TS로 React를 사용하면, 확장자는 jsx 대신 tsx 파일을 사용한다
- 기본 함수형 컴포넌트의 타입은 `JSX.Element`
```tsx
// src/App.tsx
import Heading from "./components/Heading";

function App() {
  return (
    <Heading title={"Hello"} />
  )
}

export default App; // JSX.Element 타입
```
- 함수형 컴포넌트에 별도의 타입을 지정하려면 ReactElement 타입을 부여하면 된다
  - import 작업 필요
- props를 사용하는 경우 그에 맞는 타입을 상단에 지정해주면 된다
```tsx
// src/components/Heading.tsx
import { ReactElement } from "react";

type HeadingProps = { title: string }

// 함수형 컴포넌트의 리턴값은 타입 추론으로 생략할 수 있음
const Heading = ({ title }: HeadingProps): ReactElement => {
  return (
    <h1>{title}</h1>
  );
};

export default Heading; // ReactElement 타입
```
