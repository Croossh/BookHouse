import axios from "axios";

export const getMovieList = async (params?: string) => {
  const res = await axios.get(`http://localhost:8080/${params}`);
  console.log(res.data.items);
};
