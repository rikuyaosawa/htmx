import { Router } from "express";
import createQuoteListTemplate from "../views/components/quote-list.js";

const router = Router();

router.get("/", (req, res) => {
    res.send(createQuoteListTemplate());
});

export default router;
