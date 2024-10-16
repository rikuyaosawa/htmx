const createReadingTemplate = (book, index) => /*html*/ `
    <h1>${book.title}</h1>
    <p>by ${book.author}</p>
    <h3>${book.content[index].subheading}</h3>
    <p>${book.content[index].text}</p>
    <p>Page ${book.content[index].pageNo}</p>
    <button
        hx-get="/book/${book.id}/${index}"
        hx-target="main">Next Page</button>
    <div class="page-no-list">
    </div>
`;

export default createReadingTemplate;
