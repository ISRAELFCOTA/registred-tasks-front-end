import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.background};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    font-size: 16px;
  }
`;

export default GlobalStyle;
