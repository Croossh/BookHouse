import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieList } from "../api";

function Search() {
  const { search } = useParams();

  useEffect(() => {
    getMovieList(search);
  }, []);

  console.log(search);
  return <div>Search Page</div>;
}

export default Search;
