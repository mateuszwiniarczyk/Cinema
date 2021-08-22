import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        background-color: #1C1D27;
    }

    ul, ol {
        list-style: none;
    }

    input, textarea, select {
        font-family: 'Inter', sans-serif; 
    }
`;
