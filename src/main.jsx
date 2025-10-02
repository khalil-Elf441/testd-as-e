import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Mettre basename pour GitHub Pages
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/testd-as-e/">
    <App />
  </BrowserRouter>
);
