// console.log("ㅎㅇ");
// const http = require("http");
// http.createServer("");
// 구문법에서 굳이 바꾸지 않음(신문법 = IMPORT SOMETHING)

// 웹 브라우저(주인님)
// Request <-> Response [HTTPS 방식]
// 웹서버는 CRUD[생성(POST), 조회(GET), 수정(PUT), 삭제(DELETE)]

const express = require("express");
const app = express();

app.get("/caffein", (req, res) => {
  res.json(["Americano", "Latte", "Mocha"]);
});

app.get("/breads", (req, res) => {
  res.json(["빵", "썸띵빵", "Mocha빵"]);
});

app.listen(3000, () => {
  console.log("start server!!!");
});
