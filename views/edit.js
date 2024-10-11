const createEditFormTemplate = (book) => /*html*/ `
  <form>
    <input
      type="text"
      value="${book.title}"
      name="title"
      required
    />
    <input
      type="text"
      value="${book.author}"
      name="author"
      required
    />
    <button
      hx-put="/books/${book.id}"
      hx-target="closest li"
      hx-swap="outerHTML"
      hx-on:click="console.log('Confirm clicked')"
    >Confirm</button>
  </form>
`;

export default createEditFormTemplate;
