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

export async function findMovieById(req: Request, res: Response) {
   try {
      const id = req.params.id;
      const movie = await Movie.findById(id);

      if (!movie) {
         return res.status(404).send("Filme não encontrado");
      }

      res.status(200).json(movie);
   } catch (error: any) {
      Logger.error(`Erro ao buscar filmes: ${error.message}`);
      res.status(500).json({ error: "Por favor, tente mais tarde!" });
   }
}

export async function getAllMovies(req: Request, res: Response) {
   try {
      const movies = await Movie.find();

      if (!movies) {
         return res.status(404).send("Filmes não encontrados");
      }

      res.status(200).json(movies);
   } catch (error: any) {
      Logger.error(`Erro ao buscar filmes: ${error.message}`);
      res.status(500).json({ error: "Por favor, tente mais tarde!" });
   }
}

export async function removeMovie(req: Request, res: Response) {
   try {
      const id = req.params.id;
      const movie = await Movie.findById(id);

      if (!movie) {
         return res.status(404).send("Filme não encontrado");
      }

      await movie.deleteOne();
      res.status(200).json("Filme removido com sucesso!");

   } catch (error: any) {
      Logger.error(`Erro ao remover filmes: ${error.message}`);
      res.status(500).json({ error: "Por favor, tente mais tarde!" });
   }
}

export async function updateMovie(req: Request, res: Response) {
   try {
      const id = req.params.id;
      const data = req.body;

      const movie = await Movie.findById(id);

      if (!movie) {
         return res.status(404).send("Filme não encontrado");
      }

      await Movie.updateOne({ _id: id }, data);

      res.status(200).json(data);

   } catch (error: any) {
      Logger.error(`Erro ao atualizar filmes: ${error.message}`);
      res.status(500).json({ error: "Por favor, tente mais tarde!" });
   }
}