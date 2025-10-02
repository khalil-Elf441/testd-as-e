import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { examsData } from "../data/exams";

export default function Technology() {
  const { tech } = useParams();
  const navigate = useNavigate();

  const technology = examsData[tech];
  if (!technology) return <p className="p-6">Technology not found</p>;

  const exams = technology.exams || [];
  if (exams.length === 0)
    return <p className="p-6">No exams available for {technology.name}</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">{technology.name} Exams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exams.map((exam) => (
          <div
            key={exam.code}
            className="bg-white shadow rounded p-4 cursor-pointer hover:bg-blue-50"
            onClick={() => navigate(`/tech/${tech}/${exam.code}`)}
          >
            <h2 className="font-bold">{exam.name}</h2>
            <p className="text-sm text-gray-500">{exam.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
