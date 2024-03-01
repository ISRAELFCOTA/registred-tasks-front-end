import "./App.css";
import GlobalStyle from "./globalStyle";
import { theme } from "./theme/theme";
import { Home } from "./screens/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeProvider } from "styled-components";

// can add other routes if needed
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
