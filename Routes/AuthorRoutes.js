import { Router } from "express";
import { AuthorAll } from "../Controller/AuthorController.js";

export const AuthorRoutes = new Router();

AuthorRoutes.get("/", AuthorAll);
