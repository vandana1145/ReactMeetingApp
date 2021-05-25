import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoriteContextProvider } from './store/favourite-context';

ReactDOM.render(
  <FavoriteContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  </FavoriteContextProvider>,
  document.getElementById("root")
);
