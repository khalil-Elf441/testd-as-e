import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { exams } from "../data/exams"; // ton fichier existant

export default function ExamsPage() {
  const { tech } = useParams();
  const navigate = useNavigate();

  const techData = exams[tech]; // doit correspondre aux clés de exams.js
  if (!techData) return <p>Technology not found.</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <h1 className="text-3xl font-bold mb-6">{techData.name} Exams</h1>
      <div className="flex flex-col gap-4 mb-6 w-full max-w-3xl">
        {techData.exams.map((exam, idx) => (
          <div
            key={idx}
            className="p-4 bg-white bg-opacity-10 rounded-lg cursor-pointer hover:bg-opacity-20 transition"
            onClick={() => navigate(`/exams/${tech}/${exam.code}`)}
          >
            <h2 className="font-semibold">{exam.title}</h2>
            <p>Code: {exam.code} | Duration: {exam.duration} min | Theme: {exam.theme}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-lg"
      >
        ← Back to Home
      </button>
    </div>
  );
}
