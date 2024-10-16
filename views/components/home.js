const createHomepageTemplate = () => /*html*/ `
    <h1>What do you want to read?</h1>
    <ul>
        <li hx-get="/book" hx-target="main">Book</li>
        <li hx-get="/quote" hx-target="main">Quote</li>
    </ul>
`;

export default createHomepageTemplate;
