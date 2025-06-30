import { model, Schema, Types } from "mongoose";

const BookSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
  image: String,
  author: [{ type: Types.ObjectId, ref: "author" }],
  genre: [
    {
      type: Types.ObjectId,
      ref: "genre",
    },
  ],
});
export const BookModel = new model("book", BookSchema);
