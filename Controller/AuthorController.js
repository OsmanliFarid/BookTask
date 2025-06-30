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
