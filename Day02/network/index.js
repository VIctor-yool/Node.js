// http vs https[보안 우수한 http]

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end("서버 연결 완성✔");
});

server.listen(3000, () => {
  console.log("실행 중~🐱‍🐉");
});
