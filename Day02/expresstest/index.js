const express = require("express");
const app = express();
const fs = require("fs");
const text = fs.readFileSync("bake.txt", "utf-8");

app.get("/bake", (req, res) => {
  text.split("\n").forEach((v) => {
    const obj = {};
    v.split(",").forEach((pair) => {
      const [key, value] = pair.split(":");
      arr.push({ [key]: value });
      obj[key] = value;
    });
    arr.push(obj);
  });
  res.json(arr);
});
// // "/happy"
// app.get("/happy", (req, res) => {
//   res.send("Hello, Express!");
// });

// // "/ping"
// app.get("/ping", (req, res) => {
//   res.send("Pong, Express!");
// });

// app.get("/arombake", (req, res) => {
//   res.json({ name: "아롬베이크", type: "빵집", rate: 4.7 });
// });

// app.listen(3000, () => {
//   console.log("실행!");
// });

// "/bake" bake.txt에 있는 빵 리스트를 배열 형태로 돌려주기
// 반대로 메모장에 있는 내용 가져와야함
// 그 문자열을 배열로 만들어서
// res.json에 넣으면 됨
