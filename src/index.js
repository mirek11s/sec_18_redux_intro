import React from "react";
import ReactDOM from "react-dom";

//imported to the top of the react tree - index.js
import { Provider } from "react-redux";
import store from "./store/index";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
