import BOOK_DATA from "../../data/data.js";
import createBookTemplate from "./book.js";

const createBookListTemplate = () => /*html*/ `
    <h1>Which book do you want to read?</h1>
    <div class="book-cards">
        ${BOOK_DATA.map((book) => createBookTemplate(book)).join("")}
    </div>
`;

export default createBookListTemplate;
