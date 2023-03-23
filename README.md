# 책 검색 서비스, 북하우스
<img src="readme/search 화면.jpg" width="70%" height="auto"/>

## 1. 서비스 소개

### 웹 서비스 개요
- Naver 도서 OPEN API 를 활용한 도서 검색 서비스 입니다. 툴팁을 통해 원하는 책의 설명을 확인할 수 있고, 클릭시 네이버 도서 쇼핑으로 이동 할 수 있는 서비스 입니다.

### 기술 스택
- TypeScript 기반 React, Redux, Express, Styled-Components, MUI

### 프로젝트 구조

```
bookapp
 ┣ 📁front
 │   ┣ 📁public
 │   └ 📁src
 │      ┣ 📁app
 │      │  ┣ hooks.ts
 │      │  └ store.ts
 │      ┣ 📁feature
 │      │  ┣ 📁searchInput
 │      │  ┣ Header.tsx
 │      │  └ SearchResult.tsx
 │      ┣ 📁pages
 │      │  ┣ Home.tsx
 │      │  └ Search.tsx
 │      ┣ 📁types
 │      │  └ interface.ts
 │      ┣ 📁usefulFuntion
 │      │  ┣ api.ts
 │      │  └ toComma.ts
 │      └ App.tsx
 │ 
 └ 📁server
    └ server.js
```
1. front와 server의 디렉토리를 분리하여 관리하였습니다.
2. 자주 쓰일것 같은 함수는 usefulFunction 에 따로 분리하여 재사용성을 높였습니다.
3. 전역 관리가 필요한 컴포넌트는 feature 디렉토리에 따로 관리하였습니다.

### 개발중인 추가 기능
1. 페이지네이션에 따라 알맞게 화면 구현 예정
2. Kakao 지도 OPEN API 적용 예정
3. AWS-EC2를 통한 배포 예정
