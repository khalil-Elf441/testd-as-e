import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- HashRouter pour GitHub Pages
import Home from "./pages/Home";
import ExamsPage from "./pages/ExamsPage";         // à créer
import ExamMockPage from "./pages/ExamMockPage";   // à créer

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exams/:tech" element={<ExamsPage />} />
        <Route path="/exams/:tech/:examCode" element={<ExamMockPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
