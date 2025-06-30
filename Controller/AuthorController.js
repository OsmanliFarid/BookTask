import { AuthorModel } from "../Model/AuthorSchema.js";

export const AuthorAll = (req, res) => {
  AuthorModel.find().then((data) => {
    res.send(data);
  });
};
export const AuthorId = (req, res) => {
  const id = req.params.id;
  AuthorModel.findById(id).then((data) => {
    res.send(data);
  });
};
export const AuthorCreate = (req, res) => {
  const data = req.body;
  AuthorModel.create(data).then((data) => {
    res.send(data);
  });
};
export const AuthorDelete = (req, res) => {
  const id = req.params.id;
  AuthorModel.findByIdAndDelete(id)
    .then((data) => {
      res.send({
        message: "Author has been successfully deleted.",
      });
    })
    .catch(() => {
      res.status(500).send({
        message: "error",
      });
    });
};
export const AuthorUpdate = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  AuthorModel.findByIdAndUpdate(id, data).then((data) => {
    res.send({
      message: "Auther updated",
    });
  });
};
