import React from "react";
import ReactDOM from "react-dom";
import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
import extend from "fela-plugin-extend";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const renderer = createRenderer({ plugins: [extend()] });

const theme = {
  textColor: "#755018",
  whiteSpaceColor: "#dad2c2",
};

ReactDOM.render(
  <React.StrictMode>
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RendererProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
