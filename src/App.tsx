import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyle";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
