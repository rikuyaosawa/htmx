import express from "express";
import createMainTemplate from "./views/main.js";
import createAboutTemplate from "./views/components/about.js";
import bookRoutes from "./routes/bookRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.send(createMainTemplate());
});

app.get("/about", (req, res) => {
    res.send(createAboutTemplate());
});

app.use("/book", bookRoutes);
app.use("/quote", quoteRoutes);

app.listen(3000, () => {
    console.log("App listening on port 3000");
});
