const createBookTemplate = (book) => /*html*/ `
    <div hx-get="/book/${book.id}" hx-target="main">
        <ul>
            <li>Title: ${book.title}</li>
            <li>Author: ${book.author}</li>
        </ul>
    </div>
`;

export default createBookTemplate;
