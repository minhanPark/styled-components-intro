import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

const Dark = {
  bgColor: "black",
  fontColor: "white",
};

const normal = {
  bgColor: "white",
  fontColor: "black",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Dark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
