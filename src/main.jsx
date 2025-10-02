import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ici tu ajoutes les routes vers Exams, ExamMocks, etc */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
