import { GenreModel } from "../Model/GenreSchema.js";

export const GenreAll = (req, res) => {
  GenreModel.find().then((data) => {
    res.send(data);
  });
};
export const GenreId = (req, res) => {
  const id = req.params.id;
  GenreModel.findById(id).then((data) => {
    res.send(data);
  });
};
export const GenreCreate = (req, res) => {
  const data = req.body;
  GenreModel.create(data).then((data) => {
    res.send(data);
  });
};
export const GenreDelete = (req, res) => {
  const id = req.params.id;
  GenreModel.findByIdAndDelete(id)
    .then((data) => {
      res.send({
        message: "Genre has been successfully deleted.",
      });
    })
    .catch(() => {
      res.status(500).send({
        message: "error",
      });
    });
};
export const GenreUpdate = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  GenreModel.findByIdAndUpdate(id, data).then((data) => {
    res.send({
      message: "Genre updated",
    });
  });
};
