const createNavibarTemplate = () => /*html*/ `
    <a hx-get="/home" hx-target="body">Home</a>
    <a hx-get="/about" hx-target="main">About</a>
`;

export default createNavibarTemplate;
