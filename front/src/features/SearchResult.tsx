import { useSelector } from "react-redux";
import styled from "styled-components";

function SearchResult({ props }: any) {
  const state = useSelector<Record<string, string>>((state) => state.searchInputReducer) as string;
  return (
    <ResultContainer>
      <div>"{state}"의 검색결과 입니다.</div>
      <span>총 {props}건의 검색 결과가 있습니다.</span>
    </ResultContainer>
  );
}

export default SearchResult;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  div {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;

    @media (min-width: 320px) and (max-width: 960px) {
      font-size: 20px;
    }
  }

  span {
    @media (min-width: 320px) and (max-width: 960px) {
      font-size: 13px;
    }
  }
`;
