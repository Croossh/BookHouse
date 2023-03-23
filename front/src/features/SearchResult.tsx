import { useSelector } from "react-redux";
import styled from "styled-components";

function SearchResult() {
  const state = useSelector<Record<string, string>>((state) => state.searchInputReducer) as string;
  return (
    <ResultContainer>
      <div>"{state}"의 검색결과 입니다.</div>
    </ResultContainer>
  );
}

export default SearchResult;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  div {
    font-size: 20px;
    font-weight: bold;
  }
`;
