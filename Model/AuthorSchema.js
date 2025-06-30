import { model, Schema, Types } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: String,
    surname: String,
    age: String,
    books: [{ type: Types.ObjectId, ref: "book" }],
  },
  {
    versionKey: false,
  }
);
export const AuthorModel = new model("author", AuthorSchema);
