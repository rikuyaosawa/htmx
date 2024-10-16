import BOOK_DATA from "../../data/bookData.js";

export const createBookListTemplate = () => /*html*/ `
    <h1>Which book do you want to read?</h1>
    <div class="book-cards">
        ${BOOK_DATA.map((book) => createBookTemplate(book)).join("")}
    </div>
`;

const createBookTemplate = (book) => /*html*/ `
    <ul hx-get="/book/${book.id}" hx-target="main">
        <li>Title: ${book.title}</li>
        <li>Author: ${book.author}</li>
    </ul>
`;

export function createBookReadingTemplate(book, pageNo) {
    const index = pageNo - 1;
    const bookTemplate = /*html*/ `
        <h1>${book.title}</h1>
        <p>by ${book.author}</p>
        <h3>${book.content[index].subheading}</h3>
        <p>${book.content[index].text}</p>
        <p>Page ${book.content[index].pageNo}/${book.content.length}</p>`;

    const nextButton = /*html*/ `<button
			hx-get="/book/${book.id}/${pageNo}"
			hx-vals='{"buttonType":"next"}'
			hx-target="main">Next</button>`;
    const backButton = /*html*/ `<button
			hx-get="/book/${book.id}/${pageNo}"
			hx-vals='{"buttonType":"back"}'
			hx-target="main">Back</button>`;

    const isNotFirstOrLastPage = pageNo != 1 && pageNo != book.content.length;
    const isNotLastPage = pageNo !== book.content.length;
    const isLastPageAndNotFirstPage =
        pageNo !== 1 && pageNo === book.content.length;
    const isLastPageAndFirstPage =
        pageNo === 1 && pageNo === book.content.length;
    if (isNotFirstOrLastPage) {
        return /*html*/ `
            ${bookTemplate}
            ${backButton}
            ${nextButton}`;
    } else if (isNotLastPage) {
        return /*html*/ `
            ${bookTemplate}
            ${nextButton}`;
    } else if (isLastPageAndNotFirstPage) {
        return /*html*/ `
            ${bookTemplate}
            ${backButton}`;
    } else if (isLastPageAndFirstPage) {
        return /*html*/ `${bookTemplate}`;
    } else {
        return { error: "Something unexpected happened" };
    }
}
