import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { examsData } from "../data/exams";

export default function ExamList() {
  const { tech, exam } = useParams();
  const navigate = useNavigate();

  const technology = examsData[tech];
  if (!technology) return <p>Technology not found</p>;

  const examData = technology.exams.find((e) => e.code === exam);
  if (!examData) return <p>Exam not found</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">{examData.name} - Mocks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {examData.mocks.map((mock) => (
          <div
            key={mock.id}
            className="bg-white shadow rounded p-4 cursor-pointer hover:bg-green-50"
            onClick={() => navigate(`/tech/${tech}/${exam}/${mock.id}`)}
          >
            <h2 className="font-bold">{mock.title}</h2>
            <p className="text-sm text-gray-500">
              Duration: {mock.duration} min | Theme: {mock.theme}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
