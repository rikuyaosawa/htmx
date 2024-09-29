import BOOKS_DATA from "../data/data.js";
import createBookTemplate from "./book.js";

const createListTemplate = () => /*html*/ `
  <ul>
    Autho: ${BOOKS_DATA.map((book) => createBookTemplate(book)).join("")}
  </ul>
`;

export default createListTemplate;
