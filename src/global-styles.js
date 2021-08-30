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
        display: flex;
        flex-direction: column;

        --main-dark: #1E212B;
        --main-light: #FFFFFF;
        --darken-dark: #07080A;
        --accent: #43AA8B;
        --darken-accent: #2e7560;
        --additional: #FFC800;
        
        --error: #D63230;
        --disabled: #E8E9EB;

        --radius: 5px;

        --transition: 0.2s ease-in-out;
    }
`;
