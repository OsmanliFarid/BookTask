import { model, Schema, Types } from "mongoose";

const BookSchema = new Schema(
  {
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
  },
  {
    versionKey: false,
  }
);
export const BookModel = model("book", BookSchema);
