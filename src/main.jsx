import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExamsPage from "./pages/ExamsPage"; // créer ce composant

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exams/:tech" element={<ExamsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
