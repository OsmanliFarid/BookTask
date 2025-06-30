import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { BookModel } from "./Model/BookSchema.js";
import { AuthorModel } from "./Model/AuthorSchema.js";
import { GenreModel } from "./Model/GenreSchema.js";

import { AuthorRoutes } from "./Routes/AuthorRoutes.js";
import bodyParser from "body-parser";
import { GenreRoutes } from "./Routes/GenreRoutes.js";

dotenv.config();
const app = express();
const port = process.env.DB_PORT;
const url = "/api/v1";
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("ugurla quruldu");
});
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("MongoDb elaqe quruldu");
});
app.use(url + "/authors", AuthorRoutes);
app.use(url + "/genres", GenreRoutes);
