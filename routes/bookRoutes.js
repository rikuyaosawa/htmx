import { Router } from "express";

import BOOK_DATA from "../data/bookData.js";
import {
    createBookListTemplate,
    createBookReadingTemplate,
} from "../views/components/book.js";

const router = Router();

router.get("/", (req, res) => {
    res.send(createBookListTemplate());
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const book = BOOK_DATA.find((book) => book.id == id);
    const pageNo = 1;
    console.debug(`Debug: GET /book/${id}`);
    res.send(createBookReadingTemplate(book, pageNo));
});

router.get("/:id/:pageNo", (req, res) => {
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

    res.send(createBookReadingTemplate(book, pageNo));
});

export default router;
