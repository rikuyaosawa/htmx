import express from "express";
import createHomepageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import BOOKS_DATA from "./data/data.js";

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
  const {title, author} = req.body;
  BOOKS_DATA.push({
    id: (BOOKS_DATA.length + 1).toString(),
    title: title,
    author: author
  })
  console.log(BOOKS_DATA)
  console.log(title)
  res.send(`<li>${title}, ${author}</li>`);
});

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
