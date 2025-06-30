import { model, Schema, Types } from "mongoose";

const GenreSchema = new Schema(
  {
    name: String,
    books: [{ type: Types.ObjectId, ref: "book" }],
  },
  {
    versionKey: false,
  }
);
export const GenreModel = new model("genre", GenreSchema);
