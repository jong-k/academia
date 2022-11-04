# 제작노트

## 1. birthday-reminder

## 2. tours

### loading... 창

- 첫 로딩때는 로딩 컴포넌트가 렌더링됨
  - => useEffect에 의존관계배열 빈 배열로 줘서 초기 렌더링시만 loadging 컴포넌트 렌더링되게함

### loading 컴포넌트와 일반 컴포넌트 변환

1. 최초 렌더링시 loading=true
2. useEffect 발생하여 loading=false
3. refresh 버튼 클릭하면 loading=true (false로 바꾸는 동작 없음)

- 3번 단계에서 loading true 줬다가 loading false로 바꿔줘야함
  - => getToursData 함수에서 맨 첨에 걍 loading = true 주고 끝나면 loading = false 줘버리자!

### show more & show less

- useState로 상태를 하나 지정하여 2가지를 보여주기

## 3. reviews

### 구조

- 상태를 App 컴포넌트에서 받아 Question 컴포넌트로 뿌려주는 구조

### 리팩토링

### props 간소화

- 객체 리터럴을 갖고 있는 배열에서 하나의 객체 원소를 가져와서 자식 컴포넌트로 뿌려줄 때 props를 아래처럼 개선할 수 있음

```js
// props 개선
data={question} 대신
{...question} 으로

// 결과물
<SingleQuestion key={question.id} {...question} />
```

- 이러면 자식 컴포넌트에서 매개변수로 받을 때, 편리하다
- 객체 구조분해할당으로 필요한 변수만 취할 수 있음
