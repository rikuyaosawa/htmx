const createBookTemplate = (book) => /*html*/ `
    <div>
        <ul>
            <li>Title: ${book.title}</li>
            <li>Autho: ${book.author}</li>
        </ul>
    </div>
`;

export default createBookTemplate;
