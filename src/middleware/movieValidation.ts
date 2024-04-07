import { body } from "express-validator";


export function movieCreateValidation() {
   return [
      body("title").isString().withMessage("O campo 'title' deve ser uma string!").isLength({ min: 4 }).withMessage("O campo 'title' deve ter pelo menos 4 caracteres!"),
      body("rating").isNumeric().withMessage("O campo 'rating' deve ser um number!").custom(value => { if (value < 0 || value > 10) { throw new Error("O campo 'rating' deve estar entre 0 e 10!") } return true }),
      body("description").isString().withMessage("O campo 'description' é obrigatório!"),
      body("director").isString().withMessage("O campo 'director' é obrigatório!"),
      body("poster").isURL().withMessage("A imagem deve ser uma URL!")
   ]
}