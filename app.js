import express from "express";
import createMainTemplate from "./views/main.js";
import createAboutpageTemplate from "./views/components/about.js";
import createBookListTemplate from "./views/components/book-list.js";
import createQuoteListTemplate from "./views/components/quote-list.js";
import BOOK_DATA from "./data/data.js";

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
  res.send(createAboutpageTemplate());
});

app.get("/book", (req, res) => {
  res.send(createBookListTemplate());
});

app.get("/quote", (req, res) => {
  res.send(createQuoteListTemplate());
});

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
