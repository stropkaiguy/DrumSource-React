import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/features/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
