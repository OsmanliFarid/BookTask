"use client";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
const URL = "http://localhost:8080/api/v1";

const Home = () => {
  const [Authors, SetAuthors] = useState([]);
  const [Genres, SetGenres] = useState([]);
  const [Books, SetBooks] = useState([]);

  useEffect(() => {
    axios.get(URL + "/authors").then((res) => SetAuthors(res.data));
    axios.get(URL + "/genres").then((res) => SetGenres(res.data));
    axios.get(URL + "/books").then((res) => SetBooks(res.data));
  }, []);
  const DeleteClick = (id) => {
    axios.delete(URL + "/books/" + id).then((data) => {
      SetBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    });
  };
  return (
    <div className="p-4 grid grid-cols-2  gap-6">
      {Books.map((book) => {
        console.log(book);
        console.log(book);

        const authorNames = book.author.map((authorId) => {
          const author = Authors.find((a) => a._id === authorId);
          return author
            ? `${author.name} ${author.surname}`
            : "Naməlum müəllif";
        });

        const genreNames = book.genre.map((genreId) => {
          const genre = Genres.find((g) => g._id === genreId);
          return genre ? genre.name : "Naməlum janr";
        });

        return (
          <div
            key={book._id}
            className="border rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            <h2 className="text-lg font-semibold mb-2">{book.name}</h2>

            <p className="text-gray-600 text-[16px] mb-1">
              <span className="font-semibold">Müəllif:</span> {authorNames}
            </p>

            <p className="text-gray-600 text-[16px] mb-1">
              <span className="font-semibold">Janr:</span> {genreNames}
            </p>

            <p className="text-blue-600 font-semibold mt-auto">
              {book.price} {book.currency}
            </p>
            <div className="flex justify-end text-2xl cursor-pointer">
              <MdDelete onClick={() => DeleteClick(book._id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
