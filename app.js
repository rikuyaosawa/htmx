import express from "express";
import createHomepageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import BOOKS_DATA from "./data/data.js";
import createBookTemplate from "./views/book.js";
import createEditFormTemplate from "./views/edit.js";

// create app
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static assets
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.send(createHomepageTemplate());
});

app.get("/books", (req, res) => {
  res.send(createListTemplate());
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const id = (BOOKS_DATA.length + 1).toString();
  BOOKS_DATA.push({
    id: id,
    title: title,
    author: author,
  });
  res.redirect(`/books/${id}`);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find((b) => b.id === id);

  // DEBUG
  console.log("DEBUG:", book);

  res.send(createBookTemplate(book));
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const index = BOOKS_DATA.findIndex((b) => b.id === id);
  console.log("DEBUG: before deletion", BOOKS_DATA);
  BOOKS_DATA.splice(index, 1);
  console.log("DEBUG: after deletion", BOOKS_DATA);
  res.send();
});

app.get("/book/edit/:id", (req, res) => {
  const id = req.params.id;
  const book = BOOKS_DATA.find((b) => b.id === id);

  res.send(createEditFormTemplate(book));
});

app.put("/book/:id", (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;
  const index = BOOKS_DATA.findIndex((b) => b.id === id);
  const updatedBook = { title, author, id };
  BOOKS_DATA[index] = updatedBook;
  console.log(updatedBook);

  res.send(createBookTemplate(updatedBook));
});

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
