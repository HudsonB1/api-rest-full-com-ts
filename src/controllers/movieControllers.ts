import { Request, Response } from "express";

// Models
import Movie from "../models/Movie";

// Logger 
import Logger from "../../config/logger";

export async function createMovies(req: Request, res: Response) {
   try {
      const data = req.body;
      const movie = await Movie.create(data);
      res.status(201).json(movie);
   } catch (error: any) {
      Logger.error(`Erro ao criar filme: ${error.message}`); 
      res.status(400).send(error);
   }
}

export async function getMovies(req: Request, res: Response) {
   try {
      res.status(200).send("API Getting Movies Working!");
   } catch (error: any) {
      Logger.error(`Erro ao buscar filmes: ${error.message}`); 
      res.status(400).send(error);
   }
}