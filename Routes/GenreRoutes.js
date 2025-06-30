import { Router } from "express";
import {
  GenreAll,
  GenreCreate,
  GenreDelete,
  GenreId,
  GenreUpdate,
} from "../Controller/GenreRoutes.js";

export const GenreRoutes = new Router();

GenreRoutes.get("/", GenreAll);
GenreRoutes.get("/:id", GenreId);
GenreRoutes.post("/", GenreCreate);
GenreRoutes.delete("/:id", GenreDelete);
GenreRoutes.put("/:id", GenreUpdate);
