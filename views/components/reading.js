function createReadingTemplate(book, pageNo) {
    let backButton = "",
        nextButton = "";
    const index = pageNo - 1;

    if (pageNo != 1 && pageNo != book.content.length) {
        nextButton = /*html*/ `<button
			hx-get="/book/${book.id}/${pageNo}"
			hx-vals='{"buttonType":"next"}'
			hx-target="main">Next</button>`;
        backButton = /*html*/ `<button
			hx-get="/book/${book.id}/${pageNo}"
			hx-vals='{"buttonType":"back"}'
			hx-target="main">Back</button>`;
    } else if (pageNo !== book.content.length) {
        nextButton = /*html*/ `<button
			hx-get="/book/${book.id}/${pageNo}"
			hx-vals='{"buttonType":"next"}'
			hx-target="main">Next</button>`;
    } else if (pageNo !== 1 && pageNo === book.content.length) {
        backButton = /*html*/ `<button
			hx-get="/book/${book.id}/${pageNo}"
			hx-vals='{"buttonType":"back"}'
			hx-target="main">Back</button>`;
    }

    return /*html*/ `
        <h1>${book.title}</h1>
        <p>by ${book.author}</p>
        <h3>${book.content[index].subheading}</h3>
        <p>${book.content[index].text}</p>
        <p>Page ${book.content[index].pageNo}/${book.content.length}</p>
		${backButton}
		${nextButton}`;
}

export default createReadingTemplate;
