import { AuthorModel } from "../Model/AuthorSchema.js";
import { BookModel } from "../Model/BookSchema.js";
import { GenreModel } from "../Model/GenreSchema.js";

export const BookAll = (req, res) => {
  BookModel.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(500).json({ error: "Xəta baş verdi", details: err });
    });
};

export const BookById = (req, res) => {
  BookModel.findById(req.params.id)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: "Kitab tapılmadı" });
      }
      res.json(book);
    })
    .catch((err) => {
      res.status(500).json({ error: "Xəta baş verdi", details: err });
    });
};

export const CreateBook = async (req, res) => {
  try {
    const { author, genre, ...rest } = req.body;

    const existingAuthors = await AuthorModel.find({}, "_id");
    const existingAuthorIds = existingAuthors.map((a) => a._id.toString());
    const allAuthorsExist = author.every((id) =>
      existingAuthorIds.includes(id)
    );
    if (!allAuthorsExist) {
      return res.status(400).send({ message: "Müəlliflər tapılmadı" });
    }

    const existingGenres = await GenreModel.find({}, "_id");
    const existingGenreIds = existingGenres.map((g) => g._id.toString());
    const allGenresExist = genre.every((id) => existingGenreIds.includes(id));
    if (!allGenresExist) {
      return res.status(400).send({ message: "Janrlar tapılmadı" });
    }

    res.send({
      message: "Bütün müəllif və janrlar mövcuddur, kitab yaradıla bilər",
    });
    if (author.length > 0 && genre.length > 0) {
      const newBook = await BookModel.create({ genre, author, ...rest });
      const BookId = newBook._id;
      await AuthorModel.updateMany(
        { _id: { $in: author } },
        { $addToSet: { books: BookId } }
      );
      await GenreModel.updateMany(
        { _id: { $in: genre } },
        { $addToSet: { books: BookId } }
      );
      res.status(201).send(newBook);
    } else {
      return res.status(400).send({ message: "xanaları doldur" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server xətası", error });
  }
};

export const DeleteBook = (req, res) => {
  BookModel.findByIdAndDelete(req.params.id)
    .then((deletedBook) => {
      if (!deletedBook) {
        return res.status(404).json({ error: "Kitab tapılmadı" });
      }
      res.json({ message: "Kitab silindi", book: deletedBook });
    })
    .catch((err) => {
      res.status(500).json({ error: "Xəta baş verdi", details: err });
    });
};
