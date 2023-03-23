import styled from "styled-components";

function Home() {
  return (
    <GreetingContainer>
      <Greeting>읽고 싶은 책을 검색해주세요. 🥰</Greeting>
    </GreetingContainer>
  );
}

export default Home;

export const GreetingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Greeting = styled.div`
  margin: 50px;
  font-size: 20px;
  font-weight: bold;
`;
