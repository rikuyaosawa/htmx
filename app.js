import express from "express";
import createMainTemplate from "./views/main.js";
import createAboutpageTemplate from "./views/components/about.js";
import createBookTemplate from "./views/components/book.js";
import createQuoteTemplate from "./views/components/quote.js";

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
  res.send(createBookTemplate());
});

app.get("/quote", (req, res) => {
  res.send(createQuoteTemplate());
});

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
