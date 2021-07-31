import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #root {
        height: 100%;
        font-size: 1rem;

        --main-dark: #1E212B;
        --main-light: #FFFFFF;
        --accent: #FF8427;
        --darken-accent: #ED7A24;
        --additional-accent: #43AA8B;
        --error: #D63230;
        --disabled: #E8E9EB;

        --additional: #FFC800;

        --radius: 5px;
    }
`;
