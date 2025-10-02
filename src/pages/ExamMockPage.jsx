import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { exams } from "../data/exams";

export default function ExamMockPage() {
  const { tech, examCode } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const examData = exams[tech]?.exams.find(e => e.code === examCode);
  const mock = examData?.mocks?.[0]; // prends le premier mock par défaut

  useEffect(() => {
    if (!examData) return;
    setTimeLeft(examData.duration * 60); // durée en secondes
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [examData]);

  if (!examData) return <p>Exam not found</p>;
  if (!mock) return <p>No mock available yet for this exam.</p>;

  const question = mock.questions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <h1 className="text-3xl font-bold mb-4">{examData.title} - {mock.title}</h1>
      <p className="mb-4">Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2,'0')}</p>

      <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-4 w-full max-w-2xl">
        <h2 className="font-semibold mb-2">Q{currentQuestion + 1}: {question.q}</h2>
        <ul>
          {question.options.map((opt, idx) => (
            <li key={idx} className="p-1">{opt}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setCurrentQuestion(q => Math.max(q-1,0))}
          className="px-4 py-2 bg-white text-indigo-700 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentQuestion(q => Math.min(q+1, mock.questions.length-1))}
          className="px-4 py-2 bg-white text-indigo-700 rounded-lg"
        >
          Next
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-white text-indigo-700 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}
