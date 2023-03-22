import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieList } from "../api";
import { SearchInput } from "../features/SearchInput";
import { ItemProps } from "../types/interface";

function Search() {
  const { search } = useParams();

  const [data, setData] = useState<Promise<ItemProps[] | undefined>>();
  const [movieList, setMovieList] = useState<ItemProps[]>();

  useEffect(() => {
    const listResponse = getMovieList(search);
    setData(listResponse);
  }, [search]);

  useEffect(() => {
    if (data) {
      data.then((res) => setMovieList(res));
    }
  }, [data]);

  console.log("data", data);
  console.log("moiveList", movieList);

  return (
    <div>
      <SearchInput />
      {movieList ? (
        movieList.map((item) => {
          return (
            <div key={item.link}>
              <div>
                <div>{item.image}</div>
              </div>
              <div>
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
                <div>{item.userRating}</div>
                <div>{item.pubDate}</div>
                <div>{item.director}</div>
                <div>{item.actor}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div>검색된 영화가 없어요. 😥</div>
      )}
    </div>
  );
}

export default Search;
