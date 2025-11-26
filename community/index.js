import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import boom from "express-boom";
import { responseMiddleware } from "./src/middleware/response.middleware";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(cookieParser());
app.use(express.json());
app.use(boom());
app.use(responseMiddleware);

// 라우터

// app.use("/");
app.get("/test", (req, res) => {
  res.boom.badRequest("내 머리 검은색");
});

app.get("/", (req, res) => {
  res.json({
    message: "Express + Prisma + Mysql 기반 커스텀 총정리 서버",
    endpoints: {
      movies: {
        register: "POST /movies/register",
        list: "GET /movies",
        search: "GET /movies?name=제목",
        detail: "GET /movies/:id",
      },
      reviews: {
        list: "GET /reviews/movie/:movieID",
        create: "POST /reviews",
        update: "PUT /reviews/:id",
        delete: "DELETE /reviews/:id",
      },
    },
  });
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`API 엔드포인트: http://localhost:${PORT}`);
});
