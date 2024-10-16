import { Router } from "express";
import createQuoteListTemplate from "../views/components/quote-list.js";
import QUOTE_DATA from "../data/quoteData.js";

const router = Router();

router.get("/", (req, res) => {
    res.send(createQuoteListTemplate());
});

export default router;
