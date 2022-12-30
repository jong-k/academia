# Infinite SWAPI
> 무한 스크롤 w/ Star Wars API

## 1. Intro

## 2. 여기서 구현할 것
### 2.1. Infinite scroll
- 유저가 스크롤을 내릴 때 필요한 데이터만 fetch 실행 (JIT 방식)
- 모든 데이터를 한번에 fetch하는 것보다 더 효율적
- 유저가 버튼을 누르거나, 페이지 끝까지 스크롤하면 fetch 실행

## 3. 사용 기술
### 3.1. useInfiniteQuery
- Pagination과는 다른 API 포맷이 필요
- Pagination에서는...
  - 컴포넌트 상태에서 current page를 추적
  - page number가 바뀌면 새로 쿼리 실행
- jsonplaceholder API 와 Star Wars API는 반환하는 데이터 포맷이 다름
  - jsonplaceholder : 배열 안에 한 포스트에 대한 정보가 객체형태 원소로 존재
  - star wars : 연결 리스트 방식으로 next, prev 프로퍼티에 url을 보유