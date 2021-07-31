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
        --darken-accent: #07080A;
        --accent: #43AA8B;
        --additional: #FFC800;
        
        --error: #D63230;
        --disabled: #E8E9EB;

        --radius: 5px;
    }
`;
