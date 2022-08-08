import { createGlobalStyle } from "styled-components";
import Fundo from "../img/fundo.jpg";

const GlobalCss = createGlobalStyle`
    body {
        overflow-x: hidden;
        background: url(${Fundo});
        background-size: cover;
        margin: 0;
        max-width: 100vw;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }

    a{
        border: 1px solid transparent;
        padding: 5px;
        text-decoration: none;
        color: white;
    }

    a:hover{
        border: 1px solid white;
        border-radius: 5px;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    ul {
        padding: 0;
    }

    h2 {
        border-bottom: 1px solid gray;
    }
`;

export default GlobalCss;