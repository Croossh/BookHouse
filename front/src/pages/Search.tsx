import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookList } from "../usefulFuntion/api";
import { ItemProps } from "../types/interface";
import { Tooltip } from "@mui/material";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import SearchResult from "../features/SearchResult";
import { toCommaPrice, toCommaPudDate } from "../usefulFuntion/toComma";
import { GreetingContainer, Greeting } from "./Home";
import "./Search.css";

function Search() {
  const { search } = useParams();

  const [data, setData] = useState<Promise<ItemProps[] | undefined>>();
  const [bookList, setBookList] = useState<ItemProps[]>();
  const [page, setPage] = useState<number>(1);
  const [pageList, setPageList] = useState<ItemProps[]>();
  const [showNoPrice, setShowNoPrice] = useState<boolean>(false);

  const handelShowNoPrice = (): React.MouseEventHandler<HTMLButtonElement> | undefined => {
    setShowNoPrice(true);
    return;
  };

  const filterNoPrice = (
    bookList: ItemProps[]
  ): React.MouseEventHandler<HTMLDivElement> | undefined => {
    const filteredList = bookList.filter((item) => item.discount !== "0");
    setBookList(filteredList);
    return;
  };

  const orderToCheap = (
    bookList: ItemProps[]
  ): React.MouseEventHandler<HTMLDivElement> | undefined => {
    const order = [...bookList].sort((a, b) => Number(a.discount) - Number(b.discount));
    setBookList(order);
    return;
  };

  const orderToExpensive = (
    bookList: ItemProps[]
  ): React.MouseEventHandler<HTMLDivElement> | undefined => {
    const order = [...bookList].sort((a, b) => Number(b.discount) - Number(a.discount));
    setBookList(order);
    return;
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const sliceBookList = () => {
    setPageList(bookList?.slice(8 * (page - 1), 8 * page));
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

  useEffect(() => {
    sliceBookList();
  }, [bookList, page, showNoPrice]);

  return (
    <Container>
      <SearchResult props={bookList?.length} />
      <hr />
      {bookList ? (
        <NavContainer>
          {showNoPrice ? (
            <OnNoPriceButton>재고없음 제외</OnNoPriceButton>
          ) : (
            <OffNoPriceButton
              onClick={() => {
                handelShowNoPrice();
                filterNoPrice(bookList);
              }}
            >
              재고없음 제외
            </OffNoPriceButton>
          )}
          <OrderContainer>
            <div onClick={() => orderToCheap(bookList)}>낮은 가격순</div>
            <span> | </span>
            <div onClick={() => orderToExpensive(bookList)}>높은 가격순</div>
          </OrderContainer>
        </NavContainer>
      ) : null}

      <BookUl>
        {pageList ? (
          pageList.length !== 0 ? (
            pageList.map((item) => {
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
                            <div>
                              저자: {item.author !== "" ? item.author.replaceAll("^", ",") : "미상"}
                            </div>
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
      {bookList ? (
        <Pagination
          activePage={page}
          itemsCountPerPage={8}
          totalItemsCount={bookList.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      ) : null}
    </Container>
  );
}

export default Search;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OnNoPriceButton = styled.button`
  background-color: #906290;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  color: white;
  font-weight: bold;
  font-size: 15px;

  margin: 0px 20px;
  width: 130px;
  height: 30px;
`;

const OffNoPriceButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  color: black;
  font-weight: bold;
  font-size: 15px;

  margin: 0px 20px;
  width: 130px;
  height: 30px;
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

  @media (min-width: 320px) and (max-width: 960px) {
    width: 100%;
  }
`;

const BookLi = styled.li`
  width: 46%;

  margin: 10px;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 1px 1px 5px grey;

  @media (min-width: 320px) and (max-width: 960px) {
    width: 100%;
  }
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
