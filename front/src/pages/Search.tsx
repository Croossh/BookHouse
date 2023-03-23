import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookList } from "../usefulFuntion/api";
import { ItemProps } from "../types/interface";
import { Tooltip } from "@mui/material";
import styled from "styled-components";
import SearchResult from "../features/SearchResult";
import { toCommaPrice, toCommaPudDate } from "../usefulFuntion/toComma";
import { GreetingContainer, Greeting } from "./Home";

function Search() {
  const { search } = useParams();

  const [data, setData] = useState<Promise<ItemProps[] | undefined>>();
  const [bookList, setBookList] = useState<ItemProps[]>();

  const orderToCheap = (
    bookList: ItemProps[]
  ): React.MouseEventHandler<HTMLDivElement> | undefined => {
    const order = [...bookList].sort((a, b) => Number(a.discount) - Number(b.discount));
    console.log("cheap", order);
    setBookList(order);
    return;
  };

  const orderToExpensive = (
    bookList: ItemProps[]
  ): React.MouseEventHandler<HTMLDivElement> | undefined => {
    const order = [...bookList].sort((a, b) => Number(b.discount) - Number(a.discount));
    console.log("expen", order);
    setBookList(order);
    return;
  };

  useEffect(() => {
    const listResponse = getBookList(search);
    setData(listResponse);
  }, [search]);

  useEffect(() => {
    if (data) {
      data.then((res) => setBookList(res));
    }
  }, [data]);

  return (
    <Container>
      <SearchResult />
      <hr />
      {bookList ? (
        <OrderContainer>
          <div onClick={() => orderToCheap(bookList)}>낮은 가격순</div>
          <span> | </span>
          <div onClick={() => orderToExpensive(bookList)}>높은 가격순</div>
        </OrderContainer>
      ) : null}

      <BookUl>
        {bookList ? (
          bookList.length !== 0 ? (
            bookList.map((item) => {
              return (
                <BookLi key={item.link}>
                  <Tooltip title={item.description} arrow>
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
                            <div>저자: {item.author !== "" ? item.author : "미상"}</div>
                            <div>출판일: {toCommaPudDate(item.pubdate)}</div>
                          </BookScript>
                          <BookPrice>
                            <span>가격:</span>
                            <div>
                              {item.discount !== "0"
                                ? toCommaPrice(item.discount) + "￦"
                                : "재고 없음"}
                            </div>
                          </BookPrice>
                        </ScriptArea>
                      </BookItem>
                    </BookA>
                  </Tooltip>
                </BookLi>
              );
            })
          ) : (
            <GreetingContainer>
              <Greeting>도서가 없어요. 😥</Greeting>
            </GreetingContainer>
          )
        ) : (
          <GreetingContainer>
            <Greeting>도서를 찾고 있어요..! 😁</Greeting>
          </GreetingContainer>
        )}
      </BookUl>
    </Container>
  );
}

export default Search;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const OrderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 5px;

  span {
    margin: 0px 5px;
  }

  div {
    cursor: pointer;
  }
`;

const BookUl = styled.ul`
  margin: auto;
  padding: 0;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const BookLi = styled.li`
  width: 46%;

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

  span {
    margin-right: 5px;
  }
`;
