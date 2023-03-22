const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  axios
    .get("https://openapi.naver.com/v1/search/movie.json", {
      params: {
        query: "iron",
        display: 20,
      },
      headers: {
        "X-Naver-Client-Id": process.env.ID_KEY,
        "X-Naver-Client-Secret": process.env.PW_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      const data = response.data;
      res.send(data);
    });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} 서버 연결 완료.`);
});
