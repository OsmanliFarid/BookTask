import { Router } from "express";
import {
  AuthorAll,
  AuthorDelete,
  AuthorUpdate,
} from "../Controller/AuthorController.js";
import { AuthorId } from "../Controller/AuthorController.js";
import { AuthorCreate } from "../Controller/AuthorController.js";

export const AuthorRoutes = new Router();

AuthorRoutes.get("/", AuthorAll);
AuthorRoutes.get("/:id", AuthorId);
AuthorRoutes.post("/", AuthorCreate);
AuthorRoutes.delete("/:id", AuthorDelete);
AuthorRoutes.put("/:id", AuthorUpdate);
