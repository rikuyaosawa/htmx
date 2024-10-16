import QUOTE_DATA from "../../data/quoteData.js";

const createQuoteListTemplate = () => /*html*/ `
    <h1>Which quote do you want to read?</h1>
    <div>
        ${QUOTE_DATA.map((quote) => createQuoteTemplate(quote)).join("")}
    </div>
`;

const createQuoteTemplate = (quote) => /*html*/ `
    <ul hx-get="/quote/${quote.id}" hx-target="main">
        <li>${quote.person}</li>
        <li>${quote.source}</li>
        <li>${quote.content}</li>
    </ul>
`;

export default createQuoteListTemplate;
