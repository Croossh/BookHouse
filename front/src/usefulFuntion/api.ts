import axios from "axios";
import { ItemProps } from "../types/interface";

export const getBookList = async (params?: string): Promise<ItemProps[]> => {
  const res = await axios.get(`http://localhost:8080/${params}`);
  return res.data.items;
};
