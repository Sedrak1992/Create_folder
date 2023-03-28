import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import { ThemeProvider, createTheme } from "@material-ui/core";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#61dafb",
//     },
//     secondary: {
//       main: "#da61bf",
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
