import { Router } from "express";
import {
  BookAll,
  BookById,
  CreateBook,
  DeleteBook,
} from "../Controller/BookRoutes.js";

export const BookRouter = Router();

BookRouter.get("/", BookAll);
BookRouter.get("/:id", BookById);
BookRouter.post("/", CreateBook);
BookRouter.delete("/:id", DeleteBook);
