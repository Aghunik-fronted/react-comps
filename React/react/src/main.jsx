import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ОБЯЗАТЕЛЬНО
import App from "./App";
import "./index.css";
import { FavoritesProviver } from "./context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProviver>
        <App />
      </FavoritesProviver>
    </BrowserRouter>
  </React.StrictMode>,
);
