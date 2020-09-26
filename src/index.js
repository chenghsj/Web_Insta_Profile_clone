import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./Profile/contexts/Auth.context";
import { reducer, initialState } from "./reducer";
import { ThemeProvider } from "./Profile/contexts/Theme.context";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <AuthProvider initialState={initialState} reducer={reducer}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
