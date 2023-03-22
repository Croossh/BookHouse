import axios from "axios";
import { useState } from "react";
// import { getMovieList } from "../api";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState<string>("");

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate(`/${inputValue}`);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={inputValue} onChange={(e) => handleValue(e)} />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

export default Home;
