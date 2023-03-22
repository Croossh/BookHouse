import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderDiv>
      <MainImg src={process.env.PUBLIC_URL + "/image/main.png"} />
      <MainMenu>
        <Link to="/">홈으로</Link>
      </MainMenu>
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: #a385a3;
  margin-bottom: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainImg = styled.img`
  width: 80px;
  height: 80px;
  margin: auto 40px;
  border-radius: 10px;
`;

const MainMenu = styled.div`
  display: flex;
  margin: auto 30px;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 15px;
    margin: auto 30px;
  }
`;
