import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import movieRoutes from "./src/routes/movie.routes.js";
import reviewRoutes from "./src/routes/review.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import { responseMiddleware } from "./src/middleware/response.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

// 미들웨어
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(express.json());
app.use(responseMiddleware);

// 라우터
app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);
app.use("/reviews", reviewRoutes);

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

app.delete("/movies/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`API 엔드포인트: http://localhost:${PORT}`);
});
