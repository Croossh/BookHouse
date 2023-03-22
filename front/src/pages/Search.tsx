import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieList } from "../api";
import { ItemProps } from "../types/interface";
import styled from "styled-components";

function Search() {
  const { search } = useParams();

  const [data, setData] = useState<Promise<ItemProps[] | undefined>>();
  const [bookList, setBookList] = useState<ItemProps[]>();

  const toComma = (price: string): string => {
    const newPrice = Number(price).toLocaleString();

    return newPrice;
  };

  useEffect(() => {
    const listResponse = getMovieList(search);
    setData(listResponse);
  }, [search]);

  useEffect(() => {
    if (data) {
      data.then((res) => setBookList(res));
    }
  }, [data]);

  return (
    <div>
      <BookUl>
        {bookList ? (
          bookList.map((item) => {
            return (
              <BookLi key={item.link}>
                <BookA href={item.link}>
                  <BookItem>
                    <BookImage
                      src={
                        item.image !== ""
                          ? item.image
                          : process.env.PUBLIC_URL + "/image/noImage.jpg"
                      }
                      alt={item.title}
                    />
                    <ScriptArea>
                      <BookScript>
                        <BookTitle dangerouslySetInnerHTML={{ __html: item.title }}></BookTitle>
                        <div>저자: {item.author} / 10.00</div>
                        <div>출판일: {item.pubdate}</div>
                      </BookScript>
                      <BookPrice>
                        <span>가격:</span>
                        <div>{item.discount !== "0" ? toComma(item.discount) : "재고 없음"}</div>
                        <span>원</span>
                      </BookPrice>
                    </ScriptArea>
                  </BookItem>
                </BookA>
              </BookLi>
            );
          })
        ) : (
          <div>검색된 영화가 없어요. 😥</div>
        )}
      </BookUl>
    </div>
  );
}

export default Search;

const BookUl = styled.ul`
  margin: auto;
  padding: 0;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const BookLi = styled.li`
  width: 45%;

  margin: 10px;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 1px 1px 5px grey;
`;

const BookA = styled.a`
  text-decoration: none;
`;

const BookItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const BookImage = styled.img`
  width: 30%;
  max-width: 110px;
  height: 180px;
  object-fit: fill;
  border-radius: 7px;
  box-shadow: 1px 1px 5px grey;
`;

const ScriptArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BookScript = styled.div`
  width: 90%;
  height: 100%;
  margin: 0px 20px;
  div {
    color: black;
  }
`;

const BookTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0px;
`;

const BookPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  color: black;

  div {
    font-size: 20px;
    font-weight: bold;
  }
`;
