import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { BrowserRouter, Route } from "react-router-dom";

let store = createStore(reducer);

ReactDOM.render(
  <>
    <Provider>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
