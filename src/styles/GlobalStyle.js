import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button { cursor: pointer; border: none; background: none; font-family: inherit; }
  input  { font-family: inherit; }
`

export default GlobalStyle