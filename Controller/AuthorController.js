export const AuthorAll = (req, res) => {
  BookModel.find().then((data) => {
    res.send(data);
  });
};
