import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { examsData } from "../data/exams";

export default function ExamMock() {
  const { tech, exam, mock } = useParams();
  const navigate = useNavigate();

  const technology = examsData[tech];
  if (!technology) return <p className="p-6">Technology not found</p>;

  const examData = technology.exams?.find((e) => e.code === exam);
  if (!examData) return <p className="p-6">Exam not found</p>;

  const mockData = examData.mocks?.find((m) => m.id === parseInt(mock));
  if (!mockData) return <p className="p-6">Mock not found</p>;

  const [timeLeft, setTimeLeft] = useState(mockData.duration * 60);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const checkAnswer = (q) => {
    let correct = false;
    if (q.type === "command") {
      correct = answers[q.id]
        ?.toLowerCase()
        .includes(q.solution.split(" ")[0].toLowerCase());
    } else if (q.type === "multiple-choice") {
      correct = answers[q.id] === q.solution;
    }
    setFeedback({ ...feedback, [q.id]: correct ? "✅ Correct" : "❌ Incorrect" });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-2">{mockData.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Theme: {mockData.theme} | Duration: {mockData.duration} min | Time Left:{" "}
        {Math.floor(timeLeft / 60)
          .toString()
          .padStart(2, "0")}
        :
        {(timeLeft % 60).toString().padStart(2, "0")}
      </p>

      <div className="space-y-4">
        {mockData.questions.map((q) => (
          <div key={q.id} className="bg-white p-4 rounded shadow">
            <p className="font-semibold">{q.description}</p>
            {q.type === "command" && (
              <textarea
                className="w-full border p-2 mt-2"
                rows={2}
                value={answers[q.id] || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
            )}
            {q.type === "multiple-choice" && (
              <div className="mt-2 space-y-1">
                {q.options.map((opt) => (
                  <label key={opt} className="block">
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      className="mr-2"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            )}
            <button
              className="mt-2 text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => checkAnswer(q)}
            >
              Check Answer
            </button>
            {feedback[q.id] && <p className="mt-1">{feedback[q.id]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
