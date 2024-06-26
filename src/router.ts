import { Router, Request, Response } from "express";
import { createMovies, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieControllers";

// Validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
   .get("/test", (req: Request, res: Response) => {
      res.status(200).send("API Working!");
   })
   .post("/movie", movieCreateValidation(), validate, createMovies)
   .get("/movie/:id", findMovieById)
   .get("/movies", getAllMovies)
   .delete("/movie/:id", removeMovie)
   .patch("/movie/:id", movieCreateValidation(), validate, updateMovie);