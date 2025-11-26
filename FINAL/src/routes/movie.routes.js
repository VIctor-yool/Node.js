import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovieById,
  getMovies,
  updateMovie,
} from "../controller/movie.controller.js";
import {
  movieParamsValidator,
  movieBodyValidator,
  movieParamsAndBodyValidator,
} from "../middleware/validate.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", movieParamsValidator, getMovieById);
router.post("/register", movieBodyValidator, authMiddleware, createMovie);
router.delete("/:id", movieParamsValidator, deleteMovie);
router.put("/:id", movieParamsAndBodyValidator, updateMovie);

export default router;
