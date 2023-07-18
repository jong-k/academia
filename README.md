<br />
<div style="display: flex; justify-content: center">
	<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbUOKrx%2Fbtsij87unuN%2FerKdHnlntuhAuH2ki3BYuK%2Fimg.png" alt="아카데미아">
</div>

# academia
> 스터디 그룹을 쉽게 만들고 참여할 수 있는 웹 서비스

현재는 배포를 중단했습니다

## 기술 스택
### 핵심 기술
- Next.js
- TypeScript
- Styled-components
### 기타
- ESLint
- Prettier
### 패키지 매니저
- Yarn 3.5.0 (Yarn Berry)
### 백엔드
- Node.js
- Strapi CMS

[백엔드 레포](https://github.com/jong-k/academia-server)

## 커밋 컨벤션
<details>
	<summary>Udacity Git Commit Message Style Guide</summary>

- feat: A new feature
- fix: A bug fix
- docs: Changes to documentation
- style: Formatting, missing semi colons, etc; no code change
- refactor: Refactoring production code
- test: Adding tests, refactoring test; no production code change
- chore: Updating build tasks, package manager configs, etc; no production code change

</details>

## 폴더 구조
<details>
	<summary>상세 보기</summary>

<pre>
./
├─components
│  ├─ Banner : 랜딩페이지 상단 배너
│  ├─ Footer : 푸터
│  ├─ ForumDashboard : 마이페이지 컴포넌트
│  ├─ ForumItem : 게시판의 카드 컴포넌트
│  ├─ ForumMap : 포럼 주소
│  ├─ Header : GNB
│  ├─ ImgUpload : 이미지 업로드 컴포넌트
│  ├─ Layout : 전체 레이아웃 컴포넌트
│  ├─ LoadingSpinner : 로딩 스피너 컴포넌트
│  ├─ Modal : 모달 컴포넌트
│  ├─ Pagination : 페이지네이션 컴포넌트
│  └─ SearchBar : 검색창 컴포넌트
│
├─config : 환경 변수를 간소화하고 설정 변수를 보관
├─context : useContext 훅으로 사용할 컨텍스트 보관
│  └─ AuthContext.ts : 로그인, 회원가입, 로그인 유지를 위한 컨텍스트
├─enum : 문자열 상수화
├─hooks
│  ├─ useLogin.ts : 로그인 훅
│  └─ useSignup.ts : 회원가입 훅
│
├─pages
│  ├─ 404.tsx : 커스텀 에러 페이지
│  ├─ about.tsx : 소개 페이지
│  ├─ index.tsx : 랜딩 페이지
│  ├─ _app.tsx
│  ├─ _document.tsx
│  │  
│  ├─account
│  ├─ login.tsx : 로그인 페이지
│  ├─ mypage.tsx : 마이페이지
│  ├─ signup.tsx : 회원가입 페이지
│  │      
│  ├─api : 내장 API
│  ├─ cors.ts : CORS 에러 대응을 위한 미들웨어
│  ├─ login.ts : 로그인 후 cookie에 jwt token을 전달하는 API
│  ├─ logout.ts : 로그아웃 후 cookie를 비우는 API
│  ├─ signup.ts : 회원가입 후 cookie에 jwt token을 전달하는 API
│  ├─ user.ts : 로그인 유지를 위한 API
│  │      
│  └─forums : 포럼(스터디) 게시판 페이지
│      ├─ add.tsx : 게시글 작성 페이지
│      ├─ index.tsx : 게시판 페이지
│      ├─ search.tsx : 검색결과 페이지
│      ├─ [forumId].tsx : 게시글 상세 페이지
│      │  
│      └─edit
│         └─ [forumId].tsx : 게시글 수정 페이지
│          
├─styles : 스타일 보관
│  ├─ breakPoints.ts : 반응형 지원을 위한 break point
│  ├─ fonts.module.css : 기본 글꼴 제공
│  ├─ global.ts : 전역 스타일
│  ├─ theme.ts : styled-component 의 동적 스타일링을 위한 전역 스타일 
│  │  
│  ├─common : 전역 style 컴포넌트
│  │  ├─ AuthForm.styled.ts
│  │  ├─ Button.styled.ts
│  │  └─ ForumForm.styled.ts
│  │      
│  └─pages : 페이지 style 컴포넌트
│    ├─ ForumIdPage.styled.ts
│    ├─ HomePage.styled.ts
│    └─ Mypage.styled.ts
│          
├─types
│    └─ index.ts
│      
└─utils
    └─ index.ts

</pre>

</details>
