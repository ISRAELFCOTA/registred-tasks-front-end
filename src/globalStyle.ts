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
    outline: 0;
    
  }
  input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
        -webkit-background-clip: text;
        -webkit-text-fill-color: #ffffff;
        transition: background-color 300ms linear;
        box-shadow: inset 0 0 20px 20px #212121;
    }
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    font-size: 16px;
  }
`;

export default GlobalStyle;
