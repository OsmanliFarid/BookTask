import { Router } from "express";
import { AuthorAll } from "../Controller/AuthorController.js";
import { AuthorId } from "../Controller/AuthorController.js";
import { AuthorCreate } from "../Controller/AuthorController.js";

export const AuthorRoutes = new Router();

AuthorRoutes.get("/", AuthorAll);
AuthorRoutes.get("/:id", AuthorId);
AuthorRoutes.post("/", AuthorCreate);
