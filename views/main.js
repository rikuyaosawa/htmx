import createHomepageTemplate from "./components/home.js";
import createNavibarTemplate from "./components/navbar.js";

const createMainTemplate = () => /*html*/ `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Reading App</title>
            <script src="https://unpkg.com/htmx.org@1.9.12"></script>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <nav>
                ${createNavibarTemplate()}
            </nav>
            <main>
                ${createHomepageTemplate()}
            </main>
        </body>
    </html>
`;

export default createMainTemplate;
