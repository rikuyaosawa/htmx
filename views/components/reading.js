const createReadingTemplate = (book, index) => /*html*/ `
    <h1>${book.title}</h1>
    <p>${book.author}</p>
    <h3>${book.content[index].subheading}</h3>
    <p>${book.content[index].text}</p>
    <p>${book.content[index].pageNo}</p>
`;

export default createReadingTemplate;
