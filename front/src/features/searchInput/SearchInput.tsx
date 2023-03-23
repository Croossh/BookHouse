import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inputChange } from "./SearchInputSlice";
import styled from "styled-components";

export function SearchInput() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>("");

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(inputChange(inputValue));
    navigate(`/${inputValue}`);
  };

  return (
    <SearchContainer>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        <InputContainer>
          <Input value={inputValue} onChange={(e) => handleValue(e)} />
        </InputContainer>
        <Botton type="submit">검 색</Botton>
      </FormContainer>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: 80%;
  margin: 30px auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: inline-block;
  border-bottom: 1px solid black;
`;

const Input = styled.input`
  width: 500px;
  height: 30px;
  margin: 5px;

  outline: none;
  border: none;
`;

const Botton = styled.button`
  background-color: #906290;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  color: white;
  font-weight: bold;
  font-size: 15px;

  margin: 0px 20px;
  width: 70px;
  height: 40px;
`;
