import express from "express";
import createMainTemplate from "./views/main.js";
import createAboutTemplate from "./views/components/about.js";
import createBookListTemplate from "./views/components/book-list.js";
import createQuoteListTemplate from "./views/components/quote-list.js";
import BOOK_DATA from "./data/data.js";
import createReadingTemplate from "./views/components/reading.js";

// create app
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static assets
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send(createMainTemplate());
});

app.get("/about", (req, res) => {
  res.send(createAboutTemplate());
});

app.get("/book", (req, res) => {
  res.send(createBookListTemplate());
});

app.get("/quote", (req, res) => {
  res.send(createQuoteListTemplate());
});

app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const index = 0;

  // TODO: debug (delete later)
  console.log(id);
  const book = BOOK_DATA.find((book) => book.id == id);

  // TODO: debug (delete later)
  console.log(book);
  res.send(createReadingTemplate(book, index));
});

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
