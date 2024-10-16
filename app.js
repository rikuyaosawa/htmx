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
    const { id } = req.params;
    const book = BOOK_DATA.find((book) => book.id == id);
    const pageNo = 1;
    console.debug(`Debug: GET /book/${id}`);
    res.send(createReadingTemplate(book, pageNo));
});

app.get("/book/:id/:pageNo", (req, res) => {
    const { id } = req.params;
    const { buttonType } = req.query;
    const book = BOOK_DATA.find((book) => book.id == id);

    let pageNo = parseInt(req.params.pageNo);
    if (buttonType === "next") {
        pageNo += 1;
    } else if (buttonType === "back") {
        pageNo -= 1;
    }

    console.debug(`Debug: GET /book/${id}/${pageNo}`);

    if (pageNo > book.content.length) {
        console.debug("No page found.");
        res.send("<h1>No page found.</h1>");
        return;
    }

    res.send(createReadingTemplate(book, pageNo));
});

// listen to port
app.listen(3000, () => {
    console.log("App listening on port 3000");
});
