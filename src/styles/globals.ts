import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: calc(100vw / 1440 * 10);
        @media (max-width: 600px) {
            font-size: calc(100vw / 600 * 10);
        }
    }


    li {
        list-style: none;
    }

    button {
        background: none;
        cursor: pointer;
        border: none;
    }

    button:disabled:hover {
        cursor: not-allowed;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    a {
        text-decoration: none;
        color: inherit;
        outline: 0;
        cursor: pointer;
    }

    body {
        height: 100%;
        width: 100%;
        font-family: 'Nunito', sans-serif;
        -webkit-font-smoothing: antialiased !important;
        background-color: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
    }
`
