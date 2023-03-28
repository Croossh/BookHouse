import React from "react";
import Header from "./features/Header";
import Routes from "./Routes";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  top: 0;
  left: 0;
  margin: auto;
  width: 1000px;

  @media (min-width: 320px) and (max-width: 960px) {
    margin: auto;
    width: 100%;
  }
`;
