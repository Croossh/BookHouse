# 책 검색 서비스, 북하우스
<img src="readme/메인.jpg" width="80%" height="auto"/>

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
1. 추후 확장성과 관리를 위해 front와 server의 디렉토리를 분리하였습니다. 
2. 자주 쓰일것 같은 함수는 usefulFunction 에 따로 분리하여 재사용성을 높였습니다.
3. 전역 관리가 필요한 컴포넌트는 feature 디렉토리에 따로 관리하였습니다.

## 서비스 영상

### 1. 시연 영상
<img src="readme/전체영상.gif" width="80%" height="auto"/>

### 2. 반응형 웹
<img src="readme/반응형.gif" width="80%" height="auto"/>
- 반응형 웹으로 구현하여 모바일 및 태블릿에도 대응하였습니다.

### 3. 툴팁
<img src="readme/툴팁.jpg" width="50%" height="auto"/>
- 모든 도서가 설명이 있었다면 많은 정보들로 인해 UX를 해칠 것이라 생각했습니다. 마우스 호버시 툴팁을 통해 원하는 도서의 설명만 볼 수 있게 구현했습니다.

## 구현 기능
- Axios를 통한 Naver 도서 OPEN API 호출 및 화면 구현
- Express.js를 통한 서버 생성 및 CORS에러 해결
- Redux를 통한 전역 상태관리
- 페이지네이션 구현
- 낮은 가격순 높은 가격순 정렬, 재고 없음 제외 등 편의 기능 구현
- 반응형 웹 및 모바일 대응
- 프로젝트 구조 및 환경변수 설계

## 개발중인 추가 기능
1. Kakao 지도 OPEN API 적용 예정
3. AWS-EC2를 통한 배포 예정

