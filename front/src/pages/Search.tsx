import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieList } from "../api";
import { SearchInput } from "../features/SearchInput";
import { ItemProps } from "../types/interface";
import styled from "styled-components";

function Search() {
  const { search } = useParams();

  const [data, setData] = useState<Promise<ItemProps[] | undefined>>();
  const [movieList, setMovieList] = useState<ItemProps[]>();

  const sliceScript = (str: string, num: number): string => {
    const newScript = str.split("|");
    newScript.pop();

    if (newScript.length > num) {
      return newScript.splice(0, num).join(" | ");
    }
    return newScript.join(" | ");
  };

  useEffect(() => {
    const listResponse = getMovieList(search);
    setData(listResponse);
  }, [search]);

  useEffect(() => {
    if (data) {
      data.then((res) => setMovieList(res));
    }
  }, [data]);

  return (
    <div>
      <SearchInput />
      <MovieUl>
        {movieList ? (
          movieList.map((item) => {
            return (
              <MovieLi key={item.link}>
                <MovieA href={item.link}>
                  <MovieItem>
                    <MovieImage
                      src={
                        item.image !== ""
                          ? item.image
                          : process.env.PUBLIC_URL + "/image/noImage.jpg"
                      }
                      alt={item.title}
                    />

                    <MovieScript>
                      <MovieTitle dangerouslySetInnerHTML={{ __html: item.title }}></MovieTitle>
                      <div>평점: {item.userRating} / 10.00</div>
                      <div>개봉일: {item.pubDate}</div>
                      <div>감독: {sliceScript(item.director, 2)}</div>
                      <div>출연배우: {sliceScript(item.actor, 5)}</div>
                    </MovieScript>
                  </MovieItem>
                </MovieA>
              </MovieLi>
            );
          })
        ) : (
          <div>검색된 영화가 없어요. 😥</div>
        )}
      </MovieUl>
    </div>
  );
}

export default Search;

const MovieUl = styled.ul`
  margin: auto;
  padding: 0;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MovieLi = styled.li`
  width: 45%;

  margin: 10px;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 1px 1px 5px grey;
`;

const MovieA = styled.a`
  text-decoration: none;
`;

const MovieItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const MovieImage = styled.img`
  width: 30%;
  max-width: 110px;
  height: 180px;
  margin: auto;
  object-fit: fill;
  border-radius: 7px;
  box-shadow: 1px 1px 5px grey;
`;

const MovieScript = styled.div`
  width: 70%;
  margin: 0px 20px;
  div {
    color: black;
  }
`;

const MovieTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0px;
`;
