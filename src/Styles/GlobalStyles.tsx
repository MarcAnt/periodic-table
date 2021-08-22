import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html {
        font-size: 16px;
        font-family: 'Inconsolata', sans-serif;
    }

    html, * {
        padding: 0; 
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #0c1222;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    @media (max-width: 280px) {
        body {
            overflow-x: auto;
        }
    }

`;
