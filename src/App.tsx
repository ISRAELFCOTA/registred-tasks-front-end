import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyle";
import { theme } from "./theme/theme";
import { Home } from "./screens/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
